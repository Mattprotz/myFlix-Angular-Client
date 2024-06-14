import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    console.log('Starting AppComponent test...');
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
    console.log('AppComponent test module configured.');
  });

  it('should create the app', () => {
    console.log('Creating AppComponent fixture...');
    const fixture = TestBed.createComponent(AppComponent);
    console.log('AppComponent fixture created.');
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
    console.log('AppComponent instance created successfully.');
  });

  it(`should have the 'myFlix-Angular-client' title`, () => {
    console.log('Creating AppComponent fixture...');
    const fixture = TestBed.createComponent(AppComponent);
    console.log('AppComponent fixture created.');
    const app = fixture.componentInstance;
    expect(app.title).toEqual('myFlix-Angular-client');
    console.log('AppComponent title is correct.');
  });

  it('should render title', () => {
    console.log('Creating AppComponent fixture...');
    const fixture = TestBed.createComponent(AppComponent);
    console.log('AppComponent fixture created.');
    fixture.detectChanges();
    console.log('Detecting changes in AppComponent fixture...');
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, myFlix-Angular-client');
    console.log('Title rendered successfully.');
  });
});
