import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AddressFormComponent } from './address-form/address-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    DragDropModule,
    ScrollingModule,
    AddressFormComponent,
    DashboardComponent,
    DragDropComponent,
    TableComponent,
    TreeComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project-ang-mat';

  // Items for virtual scrolling
  items = Array.from({ length: 100 }).map((_, i) => `Item #${i + 1}`);

  // Handle drop event for drag-and-drop
  onDrop(event: any) {
    console.log('Item dropped:', event);
  }
}