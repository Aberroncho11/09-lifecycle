import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{

  @Input()
  public price: number = 0;

  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('Componente HIJO: ngOninit')
    this.interval$ = interval(1000).subscribe(value => console.log(`Tick ${value}`))
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes})
    console.log('Componente HIJO: ngOnChanges')
  }
  ngOnDestroy(): void {
    console.log('Componente HIJO: ngOnDestroy')
    this.interval$?.unsubscribe();
  }

}
