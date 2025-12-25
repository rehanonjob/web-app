import { Component, inject, OnInit } from '@angular/core';
import { Attendence } from '../../services/attendence';
import { IAttendenceList } from '../../types/IattendenceList';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attendence-list',
  imports: [CommonModule],
  templateUrl: './attendence-list.html',
  styleUrl: './attendence-list.css',
})
export class AttendenceList implements OnInit {
  attendenceService = inject(Attendence);

  AtaData: IAttendenceList[] = [];

  ngOnInit(): void {
    this.attendenceService.GETALL().subscribe({
      next: (resp) => {
        this.AtaData = resp;
      },
      error: (er) => {
        console.log(er);
      },
    });
  }
}
