import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkFlagComponent } from './sprk-flag.component';

describe('SprkFlagComponent', () => {
  let component: SprkFlagComponent;
  let fixture: ComponentFixture<SprkFlagComponent>;
  let flagElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkFlagComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkFlagComponent);
    component = fixture.componentInstance;
    flagElement = fixture.nativeElement.querySelector('div');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should add the correct classes if additionalClasses are supplied', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    expect(component.getClasses()).toEqual(
      'sprk-o-Flag sprk-u-pam sprk-u-man'
    );
  });

  it('should add the correct classes if additionalFigureClasses are supplied', () => {
    component.additionalFigureClasses = 'sprk-u-pam sprk-u-man';
    expect(component.getFigureClasses()).toEqual(
      'sprk-o-Flag__figure sprk-u-pam sprk-u-man'
    );
  });

  it('should add the correct classes if additionalBodyClasses are supplied', () => {
    component.additionalBodyClasses = 'sprk-u-pam sprk-u-man';
    expect(component.getBodyClasses()).toEqual(
      'sprk-o-Flag__body sprk-u-pam sprk-u-man'
    );
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(flagElement.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    expect(flagElement.getAttribute('data-id')).toBeNull();
  });

  it('should add the sprk-o-Flag--rev class when isReversed is true', () => {
    component.isReversed = true;
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-o-Flag sprk-o-Flag--rev'
    );
  });

  it('should add the sprk-o-Flag--stacked class when isStacked is true', () => {
    component.isStacked = true;
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-o-Flag sprk-o-Flag--stacked'
    );
  });

  it('should add the sprk-o-Flag--flush class when spacing="flush" is true', () => {
    component.spacing = 'flush';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-o-Flag sprk-o-Flag--flush'
    );
  });

  it('should add the sprk-o-Flag--tiny class when spacing="tiny" is true', () => {
    component.spacing = 'tiny';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-o-Flag sprk-o-Flag--tiny'
    );
  });

  it('should add the sprk-o-Flag--small class when spacing="small" is true', () => {
    component.spacing = 'small';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-o-Flag sprk-o-Flag--small'
    );
  });

  it('should add the sprk-o-Flag--large class when spacing="large" is true', () => {
    component.spacing = 'large';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-o-Flag sprk-o-Flag--large'
    );
  });

  it('should add the sprk-o-Flag--huge class when spacing="huge" is true', () => {
    component.spacing = 'huge';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-o-Flag sprk-o-Flag--huge'
    );
  });
});
