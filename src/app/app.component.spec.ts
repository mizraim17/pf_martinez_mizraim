import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ListaComponent } from './cursos/components/lista/lista.component';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ListaComponent,
        ToolbarComponent,
        NavbarComponent,
      ],
      imports: [MaterialModule, BrowserAnimationsModule, RouterModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title '3pf_martinez_mizraim'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('3pf_martinez_mizraim');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain(
  //     '3pf_martinez_mizraim app is running!'
  //   );
  // });
});
