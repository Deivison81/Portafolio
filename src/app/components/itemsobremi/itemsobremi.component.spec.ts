import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsobremiComponent } from './itemsobremi.component';

describe('ItemsobremiComponent', () => {
  let component: ItemsobremiComponent;
  let fixture: ComponentFixture<ItemsobremiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsobremiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemsobremiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
