import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CounterComponent} from "./counter.component";
import {By} from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(CounterComponent).toBeDefined();
  });

  it('should render counter property', () => {
    const num = 42;
    component.counter = num;

    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.counter'));
    const el: HTMLElement = de.nativeElement;

    expect(el.textContent).toContain(num.toString());
  });

  it('should add green class, if counter is even', () => {
    component.counter = 6;
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('.counter'));
    const el: HTMLElement = de.nativeElement;

    expect(el.classList.contains('green')).toBeTruthy();
  });

  it('should increment counter if increment button was clicked', () => {
    const btn = fixture.debugElement.query(By.css('#increment'));
    btn.triggerEventHandler('click', null);

    expect(component.counter).toBe(1);
  });
});
