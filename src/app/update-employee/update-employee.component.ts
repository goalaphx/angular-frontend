import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {
  id?: number;
  employee: Employee = new Employee()
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'] ;
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }

    );
    
      
  }

  onSubmit(): void {
    console.log(this.employee);
  
  }

}
