import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

customerSubject = new Subject<Customer[]>();
  private customers: Customer[]=[
    {id: 1,
      lastName: 'ASSEKE',
      firstName: 'Canis'
    },
    {id: 2,
      lastName: 'BOUSSOU',
      firstName: 'Dominique'
    },
  ]
  constructor() { }

emitCustomerSubject(){
  this.customerSubject.next(this.customers.slice());
}

}
