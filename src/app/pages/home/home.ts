import { Component, inject, OnInit } from '@angular/core';
import { Leave } from '../../services/leave';
import { IAdminLeaves } from '../../types/AdminLeaves';
import { NgFor, NgIf } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  imports: [NgFor, NgIf],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  leaveService = inject(Leave);

  adminleavelist: IAdminLeaves[] = [];

  ngOnInit(): void {
    this.leaveService.GETALLLEAVES().subscribe({
      next: (resp) => {
        this.adminleavelist = resp;
      },
      error: (er) => {
        console.log(er);
      },
    });
  }
tot = inject(ToastrService);
  updateStatus(leaveId: number, statusLeave: string) {
    this.leaveService.UPDATELEAVESTATUS({ id: leaveId, status: statusLeave }).subscribe({
      next: (resp) => {
        const leave = this.adminleavelist.find((l) => l.leaveId === leaveId);

        if (leave) {
          leave.status = statusLeave;
        }

        this.leaveService.GETALLLEAVES().subscribe((resp) => {
          this.adminleavelist = resp;
        });

        this.tot.success("Done for now");
      },
      error: (er) => {
        console.log(er);
      },
    });
  }
}
