import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppDialogComponent } from './app-dialog/app-dialog.component';
import { InventoryComponent } from './app-inventory/app-inventory.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [  CommonModule, AppDialogComponent, InventoryComponent]
})
export class AppComponent {

}
