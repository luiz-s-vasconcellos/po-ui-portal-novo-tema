import{m as P,p as M}from"./main-MOTCU2CE.js";import{$t as fb,Ar as I,At as Zte,E as G4,F as Joe,Ir as Kb,It as bae,J as On,Ln as uie,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Qr as OZ,Rt as bie,Ti as U_,Ui as YO,Va as p,Vi as Xm,W as Mze,Wi as Yb,Wr as MZ,Xt as eI,Zi as ar,Zr as No,_n as ni,an as ia,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,gi as Rb,go as z0,ha as i1,hn as mie,io as vu,ji as Vk,jt as _ie,k as Goe,li as Qc,mn as mb,na as de,nn as hie,oo as wg,qi as ZL,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,ua as ge,vi as Sk,wr as GV,xi as Tk,xn as p5,xr as FO,yr as Du}from"./chunk-DtUf9FxZ.js";import{n as s,t as r}from"./chunk-zystk1pz.js";var Te={name:`po-theme`,type:{light:{color:{brand:{"01":{lightest:`#f2eaf6`,lighter:`#d9c2e5`,light:`#bd94d1`,base:`#753399`,dark:`#5b1c7d`,darker:`#400e58`,darkest:`#260538`},"02":{base:`#b92f72`},"03":{base:`#ffd464`}},action:s(r({},uie),{disabled:`var(--color-neutral-mid-40)`}),feedback:s(r({},mie),{info:s(r({},mie.info),{base:`#0079b8`})}),neutral:r({},hie)},onRoot:s(r({},mb.onRoot),{"--color-page-background-color-page":`var(--color-neutral-light-05)`}),perComponent:r({},mb.perComponent)},dark:{color:{brand:{"01":{darkest:`#f2eaf6`,darker:`#d9c2e5`,dark:`#bd94d1`,base:`#753399`,light:`#5b1c7d`,lighter:`#400e58`,lightest:`#260538`},"02":{base:`#b92f72`},"03":{base:`#ffd464`}},action:s(r({},_ie),{disabled:`var(--color-neutral-mid-40)`}),feedback:s(r({},bie),{info:s(r({},bie.info),{base:`#0079b8`})}),neutral:{light:{"00":`#1c1c1c`,"05":`#202020`,10:`#2b2b2b`,20:`#3b3b3b`,30:`#5a5a5a`},mid:{40:`#7c7c7c`,60:`#a1a1a1`},dark:{70:`#c1c1c1`,80:`#d9d9d9`,90:`#eeeeee`,95:`#fbfbfb`}}},onRoot:s(r({},fb.onRoot),{"--color-page-background-color-page":`var(--color-neutral-light-05)`}),perComponent:r({},fb.perComponent)}},active:{type:On.light,a11y:ni.AAA}};var ke=[`reactiveFormData`];var ye=(()=>{class a{reactiveFormModal;formBuilder=p(OZ);poTheme=p(eI);themeType=On.light;a11yLevel=ni.AAA;densityMode=`medium`;reactiveForm=this.createReactiveForm();themeTypeOptions=[{label:`Light`,value:On.light},{label:`Dark`,value:On.dark}];a11yLevelOptions=[{label:`AAA`,value:ni.AAA},{label:`AA`,value:ni.AA}];densityModeOptions=[{label:`Medium`,value:`medium`},{label:`Small`,value:`small`}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:`Close`};ngOnInit(){let r=this.poTheme.getThemeActive()?.active;typeof r==`object`&&(this.themeType=r.type??On.light,this.a11yLevel=r.a11y??ni.AAA),this.densityMode=this.poTheme.getDensityMode(),this.poTheme.setTheme(Te,this.themeType,this.a11yLevel),this.applyA11yDefaultSize(),this.poTheme.setDensityMode(this.densityMode)}onThemeTypeChange(r){this.poTheme.setCurrentThemeType(r)}onA11yLevelChange(r){this.poTheme.setCurrentThemeA11y(r),this.applyA11yDefaultSize()}onDensityModeChange(r){this.poTheme.setDensityMode(r)}saveForm(){this.reactiveFormModal.open()}applyA11yDefaultSize(){this.poTheme.setA11yDefaultSizeSmall(this.a11yLevel===ni.AA)}createReactiveForm(){return this.formBuilder.group({name:[``,Xm.compose([Xm.required,Xm.minLength(5),Xm.maxLength(30)])],address:[``,Xm.compose([Xm.required,Xm.minLength(5),Xm.maxLength(50)])],number:[``,Xm.compose([Xm.required,Xm.min(1),Xm.max(99999)])],email:[``,Xm.required],website:[``,Xm.required]})}static ɵfac=function(m){return new(m||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-theme-labs`]],viewQuery:function(m,o){if(m&1&&Du(ke,7),m&2){let b;No(b=xo())&&(o.reactiveFormModal=b.first)}},standalone:!1,decls:26,vars:14,consts:[[`reactiveFormData`,``],[`p-title`,`Theme settings`],[1,`po-row`],[`name`,`themeType`,`p-label`,`Theme type`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`a11yLevel`,`p-label`,`Accessibility level`,`p-helper`,`AA allows the small size as default for components.`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`densityMode`,`p-label`,`Density`,`p-helper`,`Spacing of grouping components, such as pages, containers and modals.`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-title`,`Example`,1,`po-mt-3`],[3,`formGroup`],[`formControlName`,`name`,`p-clean`,``,`p-icon`,`an an-user`,`p-label`,`Customer name`,1,`po-lg-6`],[`formControlName`,`email`,`p-label`,`Email`,`p-clean`,``,1,`po-lg-6`],[`formControlName`,`address`,`p-clean`,``,`p-icon`,`an an-map-pin`,`p-label`,`Address`,1,`po-lg-4`,`po-md-8`],[`formControlName`,`number`,`p-label`,`Number`,`p-clean`,``,1,`po-lg-2`,`po-md-4`],[`formControlName`,`website`,`p-label`,`Website`,`p-clean`,``,1,`po-lg-6`],[`p-label`,`Save`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Save successful`,3,`p-primary-action`],[`p-label`,`Name`,1,`po-md-12`,3,`p-value`],[`p-label`,`Address`,1,`po-md-6`,3,`p-value`],[`p-label`,`Number`,1,`po-md-6`,3,`p-value`],[`p-label`,`Email`,1,`po-md-6`,3,`p-value`],[`p-label`,`Website`,1,`po-md-6`,3,`p-value`]],template:function(m,o){if(m&1){let b=YO();Qc(0,`po-widget`,1)(1,`div`,2)(2,`po-radio-group`,3),z0(),Kb(`ngModelChange`,function(p){return B_(b),Tk(o.themeType,p)||(o.themeType=p),U_(p)}),vt(`p-change`,function(p){return o.onThemeTypeChange(p)}),Kg(),Qc(3,`po-radio-group`,4),z0(),Kb(`ngModelChange`,function(p){return B_(b),Tk(o.a11yLevel,p)||(o.a11yLevel=p),U_(p)}),vt(`p-change`,function(p){return o.onA11yLevelChange(p)}),Kg(),Qc(4,`po-radio-group`,5),z0(),Kb(`ngModelChange`,function(p){return B_(b),Tk(o.densityMode,p)||(o.densityMode=p),U_(p)}),vt(`p-change`,function(p){return o.onDensityModeChange(p)}),Kg()()(),Qc(5,`po-widget`,6)(6,`form`,7)(7,`div`,2)(8,`po-input`,8),z0(),Kg(),Qc(9,`po-email`,9),z0(),Kg()(),Qc(10,`div`,2)(11,`po-input`,10),z0(),Kg(),Qc(12,`po-number`,11),z0(),Kg(),Qc(13,`po-url`,12),z0(),Kg()(),Qc(14,`div`,2)(15,`po-button`,13),vt(`p-click`,function(){return o.saveForm()}),Kg()()()(),Qc(16,`po-modal`,14,0)(18,`div`,2),vu(19,`po-info`,15),Kg(),Qc(20,`div`,2),vu(21,`po-info`,16)(22,`po-info`,17),Kg(),Qc(23,`div`,2),vu(24,`po-info`,18)(25,`po-info`,19),Kg()()}m&2&&(wg(2),Yb(`ngModel`,o.themeType),Rb(`p-options`,o.themeTypeOptions),W0(),wg(),Yb(`ngModel`,o.a11yLevel),Rb(`p-options`,o.a11yLevelOptions),W0(),wg(),Yb(`ngModel`,o.densityMode),Rb(`p-options`,o.densityModeOptions),W0(),wg(2),Rb(`formGroup`,o.reactiveForm),wg(2),W0(),wg(),W0(),wg(2),W0(),wg(),W0(),wg(),W0(),wg(2),Rb(`p-disabled`,o.reactiveForm.invalid),wg(),Rb(`p-primary-action`,o.modalPrimaryAction),wg(3),Rb(`p-value`,o.reactiveForm.controls.name.value),wg(2),Rb(`p-value`,o.reactiveForm.controls.address.value),wg(),Rb(`p-value`,o.reactiveForm.controls.number.value),wg(2),Rb(`p-value`,o.reactiveForm.controls.email.value),wg(),Rb(`p-value`,o.reactiveForm.controls.website.value))},dependencies:[AZ,MZ,TZ,QL,ZL,i1,oi,p5,j4,Goe,Zte,G4,Joe,ia,bae],encapsulation:2,changeDetection:1})}return a})();var Me=a=>({"docs-sample-code-tabs":a});var Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(m){return new(m||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-theme-labs-view`]],standalone:!1,decls:31,vars:6,consts:[[`id`,`sample-po-theme-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-theme-labs/sample-po-theme-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-theme-labs/sample-po-theme-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-theme-labs/sample-po-theme-labs.constant.ts`,1,`docs-code-block`],[1,`docs-sample-container`]],template:function(m,o){m&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Theme Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-theme-labs/sample-po-theme-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-widget p-title="Theme settings">
  <div class="po-row">
    <po-radio-group
      class="po-md-4"
      name="themeType"
      p-label="Theme type"
      [(ngModel)]="themeType"
      [p-options]="themeTypeOptions"
      (p-change)="onThemeTypeChange($event)"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-4"
      name="a11yLevel"
      p-label="Accessibility level"
      p-helper="AA allows the small size as default for components."
      [(ngModel)]="a11yLevel"
      [p-options]="a11yLevelOptions"
      (p-change)="onA11yLevelChange($event)"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-4"
      name="densityMode"
      p-label="Density"
      p-helper="Spacing of grouping components, such as pages, containers and modals."
      [(ngModel)]="densityMode"
      [p-options]="densityModeOptions"
      (p-change)="onDensityModeChange($event)"
    >
    </po-radio-group>
  </div>
</po-widget>

<po-widget class="po-mt-3" p-title="Example">
  <form [formGroup]="reactiveForm">
    <div class="po-row">
      <po-input class="po-lg-6" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name"> </po-input>

      <po-email class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>
    </div>

    <div class="po-row">
      <po-input class="po-lg-4 po-md-8" formControlName="address" p-clean p-icon="an an-map-pin" p-label="Address">
      </po-input>

      <po-number class="po-lg-2 po-md-4" formControlName="number" p-label="Number" p-clean> </po-number>

      <po-url class="po-lg-6" formControlName="website" p-label="Website" p-clean> </po-url>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Save"
        p-kind="primary"
        [p-disabled]="reactiveForm.invalid"
        (p-click)="saveForm()"
      >
      </po-button>
    </div>
  </form>
</po-widget>

<po-modal #reactiveFormData p-title="Save successful" [p-primary-action]="modalPrimaryAction">
  <div class="po-row">
    <po-info class="po-md-12" p-label="Name" [p-value]="reactiveForm.controls.name.value"> </po-info>
  </div>

  <div class="po-row">
    <po-info class="po-md-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

    <po-info class="po-md-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
  </div>

  <div class="po-row">
    <po-info class="po-md-6" p-label="Email" [p-value]="reactiveForm.controls.email.value"> </po-info>

    <po-info class="po-md-6" p-label="Website" [p-value]="reactiveForm.controls.website.value"> </po-info>
  </div>
</po-modal>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-theme-labs/sample-po-theme-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { ChangeDetectionStrategy, Component, inject, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import {
  PoModalAction,
  PoModalComponent,
  PoRadioGroupOption,
  PoThemeA11yEnum,
  PoThemeService,
  PoThemeTypeEnum
} from '@po-ui/ng-components';

import { poThemeSample } from './sample-po-theme-labs.constant';

@Component({
  selector: 'sample-po-theme-labs',
  templateUrl: './sample-po-theme-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoThemeLabsComponent implements OnInit {
  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal: PoModalComponent;

  private readonly formBuilder = inject(UntypedFormBuilder);
  private readonly poTheme = inject(PoThemeService);

  themeType: PoThemeTypeEnum = PoThemeTypeEnum.light;
  a11yLevel: PoThemeA11yEnum = PoThemeA11yEnum.AAA;
  densityMode: string = 'medium';

  reactiveForm: UntypedFormGroup = this.createReactiveForm();

  readonly themeTypeOptions: Array<PoRadioGroupOption> = [
    { label: 'Light', value: PoThemeTypeEnum.light },
    { label: 'Dark', value: PoThemeTypeEnum.dark }
  ];

  readonly a11yLevelOptions: Array<PoRadioGroupOption> = [
    { label: 'AAA', value: PoThemeA11yEnum.AAA },
    { label: 'AA', value: PoThemeA11yEnum.AA }
  ];

  readonly densityModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Medium', value: 'medium' },
    { label: 'Small', value: 'small' }
  ];

  readonly modalPrimaryAction: PoModalAction = {
    action: () => this.reactiveFormModal.close(),
    label: 'Close'
  };

  ngOnInit(): void {
    // Reaproveita a prefer\xEAncia salva pelo servi\xE7o (chave \`totvs-theme\`), quando existir.
    const active = this.poTheme.getThemeActive()?.active;

    if (typeof active === 'object') {
      this.themeType = active.type ?? PoThemeTypeEnum.light;
      this.a11yLevel = active.a11y ?? PoThemeA11yEnum.AAA;
    }
    this.densityMode = this.poTheme.getDensityMode();

    this.poTheme.setTheme(poThemeSample, this.themeType, this.a11yLevel);
    this.applyA11yDefaultSize();
    this.poTheme.setDensityMode(this.densityMode);
  }

  onThemeTypeChange(type: PoThemeTypeEnum): void {
    this.poTheme.setCurrentThemeType(type);
  }

  onA11yLevelChange(a11yLevel: PoThemeA11yEnum): void {
    this.poTheme.setCurrentThemeA11y(a11yLevel);
    this.applyA11yDefaultSize();
  }

  onDensityModeChange(mode: string): void {
    this.poTheme.setDensityMode(mode);
  }

  saveForm(): void {
    this.reactiveFormModal.open();
  }

  // O tamanho \`small\` s\xF3 se aplica no n\xEDvel AA e deve ser definido depois do n\xEDvel de acessibilidade.
  private applyA11yDefaultSize(): void {
    this.poTheme.setA11yDefaultSizeSmall(this.a11yLevel === PoThemeA11yEnum.AA);
  }

  private createReactiveForm(): UntypedFormGroup {
    return this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      number: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(99999)])],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }
}
`),Kg()(),Qc(23,`label`,6),Sk(24,`sample-po-theme-labs/sample-po-theme-labs.constant.ts`),Kg(),Qc(25,`div`,12)(26,`pre`,11),Sk(27,`import {
  PoTheme,
  PoThemeA11yEnum,
  PoThemeTypeEnum,
  poThemeDefaultActions,
  poThemeDefaultActionsDark,
  poThemeDefaultDarkValues,
  poThemeDefaultFeedback,
  poThemeDefaultFeedbackDark,
  poThemeDefaultLightValues,
  poThemeDefaultNeutrals
} from '@po-ui/ng-components';

/**
 * Tema customizado: parte dos tokens do tema padr\xE3o e sobrescreve apenas as cores desejadas.
 */
export const poThemeSample: PoTheme = {
  name: 'po-theme',
  type: {
    light: {
      color: {
        brand: {
          '01': {
            lightest: '#f2eaf6',
            lighter: '#d9c2e5',
            light: '#bd94d1',
            base: '#753399',
            dark: '#5b1c7d',
            darker: '#400e58',
            darkest: '#260538'
          },
          '02': {
            base: '#b92f72'
          },
          '03': {
            base: '#ffd464'
          }
        },
        action: {
          ...poThemeDefaultActions,
          disabled: 'var(--color-neutral-mid-40)'
        },
        feedback: {
          ...poThemeDefaultFeedback,
          info: {
            ...poThemeDefaultFeedback.info,
            base: '#0079b8'
          }
        },
        neutral: {
          ...poThemeDefaultNeutrals
        }
      },
      onRoot: {
        ...poThemeDefaultLightValues.onRoot,
        '--color-page-background-color-page': 'var(--color-neutral-light-05)'
      },
      perComponent: {
        ...poThemeDefaultLightValues.perComponent
      }
    },
    dark: {
      color: {
        brand: {
          '01': {
            darkest: '#f2eaf6',
            darker: '#d9c2e5',
            dark: '#bd94d1',
            base: '#753399',
            light: '#5b1c7d',
            lighter: '#400e58',
            lightest: '#260538'
          },
          '02': {
            base: '#b92f72'
          },
          '03': {
            base: '#ffd464'
          }
        },
        action: {
          ...poThemeDefaultActionsDark,
          disabled: 'var(--color-neutral-mid-40)'
        },
        feedback: {
          ...poThemeDefaultFeedbackDark,
          info: {
            ...poThemeDefaultFeedbackDark.info,
            base: '#0079b8'
          }
        },
        neutral: {
          light: {
            '00': '#1c1c1c',
            '05': '#202020',
            '10': '#2b2b2b',
            '20': '#3b3b3b',
            '30': '#5a5a5a'
          },
          mid: {
            '40': '#7c7c7c',
            '60': '#a1a1a1'
          },
          dark: {
            '70': '#c1c1c1',
            '80': '#d9d9d9',
            '90': '#eeeeee',
            '95': '#fbfbfb'
          }
        }
      },
      onRoot: {
        ...poThemeDefaultDarkValues.onRoot,
        '--color-page-background-color-page': 'var(--color-neutral-light-05)'
      },
      perComponent: {
        ...poThemeDefaultDarkValues.perComponent
      }
    }
  },
  active: { type: PoThemeTypeEnum.light, a11y: PoThemeA11yEnum.AAA }
};
`),Kg()()()()()(),Qc(28,`div`,13),vu(29,`sample-po-theme-labs`),Kg(),vu(30,`hr`)),m&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Me,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ye],encapsulation:2,changeDetection:1})}return a})();var Ce=(()=>{class a{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(m){return new(m||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-theme-doc`]],standalone:!1,decls:1218,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-theme-service`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/theme-service`],[1,`docs-api-h5`,`docs-api-method-header`],[`id`,`method-setTheme`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[`id`,`method-getA11yLevel`,1,`docs-api-method-table`],[`id`,`method-setA11yDefaultSizeSmall`,1,`docs-api-method-table`],[1,`language-typescript`],[`id`,`method-getDensityMode`,1,`docs-api-method-table`],[`id`,`method-setDensityMode`,1,`docs-api-method-table`],[`pan`,``,1,`docs-api-property-type`,`'small'`],[`pan`,``,1,`docs-api-property-type`,`'medium'`],[`id`,`method-persistThemeActive`,1,`docs-api-method-table`],[`id`,`method-changeCurrentThemeType`,1,`docs-api-method-table`],[`id`,`method-cleanThemeActive`,1,`docs-api-method-table`],[`id`,`method-getThemeActive`,1,`docs-api-method-table`],[`id`,`method-setDefaultTheme`,1,`docs-api-method-table`],[`id`,`method-setThemeType`,1,`docs-api-method-table`],[`id`,`method-setCurrentThemeType`,1,`docs-api-method-table`],[`id`,`method-setThemeA11y`,1,`docs-api-method-table`],[`id`,`method-setCurrentThemeA11y`,1,`docs-api-method-table`],[`id`,`interface-po-theme-color`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-theme-color-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorAction`],[1,`language-javascript`],[`id`,`interface-po-theme-color-brand`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`poThemeColorBrand`],[`id`,`interface-po-theme-color-categorical`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorCategorical`],[`id`,`interface-po-theme-color-categorical-overlay`,1,`docs-api-properties-row`],[`id`,`interface-po-theme-color-neutral`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorNeutral`],[`id`,`interface-po-theme-color-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-theme-color-action-default`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`interface-po-theme-color-action-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-theme-color-action-focus`,1,`docs-api-properties-row`],[`id`,`interface-po-theme-color-action-hover`,1,`docs-api-properties-row`],[`id`,`interface-po-theme-color-action-pressed`,1,`docs-api-properties-row`],[`id`,`interface-po-theme-color-neutral`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-theme-color-neutral-dark`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`'70'?:`,`string;`,`'80'?:`,`string;`,`'90'?:`,`string;`,`'95'?:`,`string;`,`}`],[`id`,`interface-po-theme-color-neutral-light`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`'00'?:`,`string;`,`'05'?:`,`string;`,`'10'?:`,`string;`,`'20'?:`,`string;`,`'30'?:`,`string;`,`}`],[`id`,`interface-po-theme-color-neutral-mid`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`'40'?:`,`string;`,`'60'?:`,`string;`,`}`],[`id`,`interface-po-theme-tokens`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-theme-token`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-theme-token-color`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColor`],[`id`,`interface-po-theme-token-on-root`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`DynamicProperties`],[`id`,`interface-po-theme-token-per-component`,1,`docs-api-properties-row`],[`id`,`interface-po-theme`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-theme-active`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoThemeTypeEnum`],[`pan`,``,1,`docs-api-property-type`,`PoThemeActive`],[`id`,`interface-po-theme-inherit-default-style`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`interface-po-theme-name`,1,`docs-api-properties-row`],[`id`,`interface-po-theme-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoThemeType`],[`pan`,``,1,`docs-api-property-type`,`Array<PoThemeType>`],[`id`,`enum-po-theme-a11y-enum`,1,`docs-api-class-name`],[`id`,`enum-po-theme-a11y-enum-aa`,1,`docs-api-properties-row`],[`id`,`enum-po-theme-a11y-enum-aaa`,1,`docs-api-properties-row`],[`id`,`enum-po-theme-type-enum`,1,`docs-api-class-name`],[`id`,`enum-po-theme-type-enum-light`,1,`docs-api-properties-row`],[`id`,`enum-po-theme-type-enum-dark`,1,`docs-api-properties-row`]],template:function(m,o){m&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoThemeModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do serviço PoThemeService.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Services`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoThemeService`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`O serviço `),Qc(15,`code`),Sk(16,`PoThemeService`),Kg(),Sk(17,` permite customizar as cores do tema padrão do `),Qc(18,`code`),Sk(19,`PO-UI`),Kg(),Sk(20,` e definir o n\xEDvel de acessibilidade
mais adequado ao projeto.`),Kg(),Qc(21,`p`),Sk(22,`O nível `),Qc(23,`strong`),Sk(24,`AAA`),Kg(),Sk(25,` (padr\xE3o) garante maior contraste, \xE1reas clic\xE1veis amplas e espa\xE7amentos maiores entre os elementos,
enquanto o n\xEDvel `),Qc(26,`strong`),Sk(27,`AA`),Kg(),Sk(28,` mant\xE9m a conformidade com as diretrizes de acessibilidade, mas com propor\xE7\xF5es mais equilibradas
e contornos mais sutis.`),Kg(),Qc(29,`p`),Sk(30,`O serviço também possibilita configurar a `),Qc(31,`strong`),Sk(32,`densidade de espaçamentos`),Kg(),Sk(33,`, permitindo ajustar o espa\xE7o entre e dentro dos
componentes. Essa configura\xE7\xE3o pode ser utilizada com qualquer n\xEDvel de acessibilidade.`),Kg(),Qc(34,`blockquote`)(35,`p`),Sk(36,`Observação: a customização das cores de `),Qc(37,`code`),Sk(38,`feedback`),Kg(),Sk(39,` não é recomendada por motivos de acessibilidade e usabilidade.`),Kg()(),Qc(40,`blockquote`)(41,`p`),Sk(42,`Para saber mais sobre como customizar o tema padr\xE3o, consulte o item
`),Qc(43,`a`,6),Sk(44,`Customização de Temas usando o serviço PO-UI`),Kg(),Sk(45,` na aba `),Qc(46,`code`),Sk(47,`Guias`),Kg(),Sk(48,`.`),Kg()()(),Qc(49,`h3`,7),Sk(50,`Métodos`),Kg(),Qc(51,`table`,8)(52,`tr`,9)(53,`th`,10)(54,`div`,11)(55,`h4`)(56,`span`,12),Sk(57,` setTheme `),Kg()()()()(),Qc(58,`tr`,13)(59,`td`,13)(60,`p`),Sk(61,`Aplica um tema ao componente de acordo com o tipo de tema e o nível de acessibilidade especificados.`),Kg(),Qc(62,`p`),Sk(63,`Este método configura o tema do componente com base no objeto `),Qc(64,`code`),Sk(65,`themeConfig`),Kg(),Sk(66,` fornecido, no `),Qc(67,`code`),Sk(68,`themeType`),Kg(),Sk(69,` e no `),Qc(70,`code`),Sk(71,`a11yLevel`),Kg(),Sk(72,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),Kg()()()(),Qc(73,`h5`)(74,`b`),Sk(75,`Parâmetros`),Kg()(),Qc(76,`table`,14)(77,`tr`,15)(78,`th`,16),Sk(79,`Nome`),Kg(),Qc(80,`th`,16),Sk(81,`Tipo`),Kg(),Qc(82,`th`,16),Sk(83,`Descrição`),Kg()(),Qc(84,`tr`,9)(85,`td`,17),Sk(86,` themeConfig`),Kg(),Qc(87,`td`,18)(88,`code`,19),Sk(89,` PoTheme `),Kg()(),Qc(90,`td`,13)(91,`p`),Sk(92,`Configuração de tema a ser aplicada ao componente.`),Kg()()(),Qc(93,`tr`,9)(94,`td`,17),Sk(95,` themeType`),Kg(),Qc(96,`td`,18)(97,`code`,19),Sk(98,` PoThemeTypeEnum `),Kg()(),Qc(99,`td`,13)(100,`p`),Sk(101,`(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro é o padrão.`),Kg()()(),Qc(102,`tr`,9)(103,`td`,17),Sk(104,` a11yLevel`),Kg(),Qc(105,`td`,18)(106,`code`,19),Sk(107,` PoThemeA11yEnum `),Kg()(),Qc(108,`td`,13)(109,`p`),Sk(110,`(Opcional) Nível de acessibilidade dos componentes, podendo ser AA ou AAA. Padrão é AAA.`),Kg()()(),Qc(111,`tr`,9)(112,`td`,17),Sk(113,` persistPreference`),Kg(),Qc(114,`td`,18)(115,`code`,19),Sk(116,` boolean `),Kg()(),Qc(117,`td`,13)(118,`p`),Sk(119,`(Opcional) Define se a prefer\xEAncia de tema deve ser salva no
localStorage para persist\xEAncia. Por padr\xE3o \xE9 `),Qc(120,`code`),Sk(121,`true`),Kg(),Sk(122,`, ou seja, a preferência será salva automaticamente.`),Kg()()()(),vu(123,`br`),Qc(124,`table`,20)(125,`tr`,9)(126,`th`,10)(127,`div`,11)(128,`h4`)(129,`span`,12),Sk(130,` getA11yLevel `),Kg()()()()(),Qc(131,`tr`,13)(132,`td`,13)(133,`p`),Sk(134,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),Qc(135,`code`),Sk(136,`AAA`),Kg(),Sk(137,` como padrão.`),Kg()()()(),Qc(138,`h5`)(139,`b`),Sk(140,`Retorno`),Kg()(),Qc(141,`table`,14)(142,`tr`,15)(143,`th`,16),Sk(144,`Tipo`),Kg(),Qc(145,`th`,16),Sk(146,`Descrição`),Kg()(),Qc(147,`tr`,9)(148,`td`,18)(149,`code`,19),Sk(150,`PoThemeA11yEnum`),Kg()(),Qc(151,`td`,13)(152,`p`),Sk(153,`O nível de acessibilidade, que pode ser `),Qc(154,`code`),Sk(155,`AA`),Kg(),Sk(156,` ou `),Qc(157,`code`),Sk(158,`AAA`),Kg(),Sk(159,`.`),Kg()()()(),vu(160,`br`),Qc(161,`table`,21)(162,`tr`,9)(163,`th`,10)(164,`div`,11)(165,`h4`)(166,`span`,12),Sk(167,` setA11yDefaultSizeSmall `),Kg()()()()(),Qc(168,`tr`,13)(169,`td`,13)(170,`p`),Sk(171,`Define o tamanho `),Qc(172,`code`),Sk(173,`small`),Kg(),Sk(174,` como padr\xE3o para componentes que n\xE3o possuem um tamanho definido. Essa configura\xE7\xE3o \xE9
aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),Qc(175,`code`),Sk(176,`AA`),Kg(),Sk(177,`. O valor definido \xE9 salvo no
`),Qc(178,`code`),Sk(179,`localStorage`),Kg(),Sk(180,` sob a chave `),Qc(181,`code`),Sk(182,`po-default-size`),Kg(),Sk(183,` e o atributo `),Qc(184,`code`),Sk(185,`data-default-size`),Kg(),Sk(186,` \xE9 adicionado ao elemento HTML
para que os componentes possam aplicar o tamanho`),Kg(),Qc(187,`p`),Sk(188,`Exemplo de uso:`),Kg(),Qc(189,`pre`)(190,`code`,22),Sk(191,`import { poThemeDefault, PoThemeService, PoThemeTypeEnum, PoThemeA11yEnum } from '@po-ui/ng-components';

private themeService = inject(PoThemeService);

constructor() {
 this.themeService.setA11yDefaultSizeSmall(true);
 this.themeService.setTheme(poThemeDefault, PoThemeTypeEnum.light, PoThemeA11yEnum.AA);
}
`),Kg()(),Qc(192,`blockquote`)(193,`p`),Sk(194,`Para garantir que o tamanho `),Qc(195,`code`),Sk(196,`small`),Kg(),Sk(197,` seja aplicado corretamente a todos os componentes, recomendamos
definir esta configura\xE7\xE3o `),Qc(198,`strong`),Sk(199,`junto com o nível de acessibilidade `),Qc(200,`code`),Sk(201,`AA`),Kg(),Sk(202,` na inicialização da aplicação`),Kg(),Sk(203,`.
Para ajustar a densidade visual dos componentes agrupadores (como pages, container, etc.), utilize tamb\xE9m
o m\xE9todo `),Qc(204,`code`),Sk(205,`setDensityMode`),Kg(),Sk(206,` conforme necessário.`),Kg()()()()(),Qc(207,`h5`)(208,`b`),Sk(209,`Parâmetros`),Kg()(),Qc(210,`table`,14)(211,`tr`,15)(212,`th`,16),Sk(213,`Nome`),Kg(),Qc(214,`th`,16),Sk(215,`Tipo`),Kg(),Qc(216,`th`,16),Sk(217,`Descrição`),Kg()(),Qc(218,`tr`,9)(219,`td`,17),Sk(220,` enable`),Kg(),Qc(221,`td`,18)(222,`code`,19),Sk(223,` boolean `),Kg()(),Qc(224,`td`,13)(225,`p`),Sk(226,`Habilita ou desabilita o tamanho `),Qc(227,`code`),Sk(228,`small`),Kg(),Sk(229,` globalmente.`),Kg()()()(),vu(230,`br`),Qc(231,`table`,23)(232,`tr`,9)(233,`th`,10)(234,`div`,11)(235,`h4`)(236,`span`,12),Sk(237,` getDensityMode `),Kg()()()()(),Qc(238,`tr`,13)(239,`td`,13)(240,`p`),Sk(241,`Retorna o modo de adensamento dos componentes agrupadores.
Se n\xE3o estiver configurado, retorna `),Qc(242,`code`),Sk(243,`medium`),Kg(),Sk(244,` como padrão.`),Kg()()()(),Qc(245,`h5`)(246,`b`),Sk(247,`Retorno`),Kg()(),Qc(248,`table`,14)(249,`tr`,15)(250,`th`,16),Sk(251,`Tipo`),Kg(),Qc(252,`th`,16),Sk(253,`Descrição`),Kg()(),Qc(254,`tr`,9)(255,`td`,18)(256,`code`,19),Sk(257,`PoDensityMode`),Kg()(),Qc(258,`td`,13)(259,`p`),Sk(260,`O modo de adensamento, que pode ser `),Qc(261,`code`),Sk(262,`small`),Kg(),Sk(263,` ou `),Qc(264,`code`),Sk(265,`medium`),Kg(),Sk(266,`.`),Kg()()()(),vu(267,`br`),Qc(268,`table`,24)(269,`tr`,9)(270,`th`,10)(271,`div`,11)(272,`h4`)(273,`span`,12),Sk(274,` setDensityMode `),Kg()()()()(),Qc(275,`tr`,13)(276,`td`,13)(277,`p`),Sk(278,`Aplica o modo de adensamento compacto (`),Qc(279,`code`),Sk(280,`small`),Kg(),Sk(281,`) ou espaçoso (`),Qc(282,`code`),Sk(283,`medium`),Kg(),Sk(284,`) para os componentes agrupadores,
independentemente do n\xEDvel de acessibilidade. O valor definido \xE9 salvo no `),Qc(285,`code`),Sk(286,`localStorage`),Kg(),Sk(287,` sob a chave
`),Qc(288,`code`),Sk(289,`po-density-mode`),Kg(),Sk(290,`.`),Kg()()()(),Qc(291,`h5`)(292,`b`),Sk(293,`Parâmetros`),Kg()(),Qc(294,`table`,14)(295,`tr`,15)(296,`th`,16),Sk(297,`Nome`),Kg(),Qc(298,`th`,16),Sk(299,`Tipo`),Kg(),Qc(300,`th`,16),Sk(301,`Descrição`),Kg()(),Qc(302,`tr`,9)(303,`td`,17),Sk(304,` mode`),Kg(),Qc(305,`td`,18)(306,`code`,25),Sk(307,` 'small' `),Kg(),Qc(308,`code`,26),Sk(309,` 'medium' `),Kg()(),Qc(310,`td`,13)(311,`p`),Sk(312,`Define o modo de densidade: `),Qc(313,`code`),Sk(314,`small`),Kg(),Sk(315,` para compacto, `),Qc(316,`code`),Sk(317,`medium`),Kg(),Sk(318,` para espa\xE7oso.
O valor padr\xE3o \xE9 `),Qc(319,`code`),Sk(320,`medium`),Kg(),Sk(321,`.`),Kg()()()(),vu(322,`br`),Qc(323,`table`,27)(324,`tr`,9)(325,`th`,10)(326,`div`,11)(327,`h4`)(328,`span`,12),Sk(329,` persistThemeActive `),Kg()()()()(),Qc(330,`tr`,13)(331,`td`,13)(332,`p`),Sk(333,`Restaura e aplica as prefer\xEAncias visuais do usu\xE1rio para o tema da aplica\xE7\xE3o, garantindo que essas prefer\xEAncias
sejam persistidas no `),Qc(334,`code`),Sk(335,`localStorage`),Kg(),Sk(336,` para uso em recarregamentos futuros.`),Kg()()()(),Qc(337,`h5`)(338,`b`),Sk(339,`Retorno`),Kg()(),Qc(340,`table`,14)(341,`tr`,15)(342,`th`,16),Sk(343,`Tipo`),Kg(),Qc(344,`th`,16),Sk(345,`Descrição`),Kg()(),Qc(346,`tr`,9)(347,`td`,18)(348,`code`,19),Sk(349,`PoTheme`),Kg()(),Qc(350,`td`,13)(351,`p`),Sk(352,`O tema atualmente aplicado.`),Kg()()()(),vu(353,`br`),Qc(354,`table`,28)(355,`tr`,9)(356,`th`,10)(357,`div`,11)(358,`h4`)(359,`span`,12),Sk(360,` changeCurrentThemeType `),Kg()()()()(),Qc(361,`tr`,13)(362,`td`,13)(363,`p`),Sk(364,`Altera o tipo do tema armazenado e aplica os novos estilos ao documento.`),Kg(),Qc(365,`p`),Sk(366,`Este método altera o tipo do tema armazenado ativo (light/dark)`),Kg()()()(),Qc(367,`h5`)(368,`b`),Sk(369,`Parâmetros`),Kg()(),Qc(370,`table`,14)(371,`tr`,15)(372,`th`,16),Sk(373,`Nome`),Kg(),Qc(374,`th`,16),Sk(375,`Tipo`),Kg(),Qc(376,`th`,16),Sk(377,`Descrição`),Kg()(),Qc(378,`tr`,9)(379,`td`,17),Sk(380,` themeType`),Kg(),Qc(381,`td`,18)(382,`code`,19),Sk(383,` PoThemeTypeEnum `),Kg()(),Qc(384,`td`,13)(385,`p`),Sk(386,`O tipo de tema a ser aplicado, light ou dark.`),Kg()()()(),vu(387,`br`),Qc(388,`table`,29)(389,`tr`,9)(390,`th`,10)(391,`div`,11)(392,`h4`)(393,`span`,12),Sk(394,` cleanThemeActive `),Kg()()()()(),Qc(395,`tr`,13)(396,`td`,13)(397,`p`),Sk(398,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),Kg()()()(),Qc(399,`h5`)(400,`b`),Sk(401,`Parâmetros`),Kg()(),Qc(402,`table`,14)(403,`tr`,15)(404,`th`,16),Sk(405,`Nome`),Kg(),Qc(406,`th`,16),Sk(407,`Tipo`),Kg(),Qc(408,`th`,16),Sk(409,`Descrição`),Kg()(),Qc(410,`tr`,9)(411,`td`,17),Sk(412,` persistPreference`),Kg(),Qc(413,`td`,18)(414,`code`,19),Sk(415,` boolean `),Kg()(),Qc(416,`td`,13)(417,`p`),Sk(418,`(Opcional) Define se a preferência de tema não deve ser mantida no localStorage para persistência. `),Qc(419,`code`),Sk(420,`true`),Kg(),Sk(421,` para remover, `),Qc(422,`code`),Sk(423,`false`),Kg(),Sk(424,` para manter.`),Kg()()()(),vu(425,`br`),Qc(426,`table`,30)(427,`tr`,9)(428,`th`,10)(429,`div`,11)(430,`h4`)(431,`span`,12),Sk(432,` getThemeActive `),Kg()()()()(),Qc(433,`tr`,13)(434,`td`,13)(435,`p`),Sk(436,`Retorna o tema ativo como um observable. Este método funcionará apenas se o tema estiver armazenado no `),Qc(437,`code`),Sk(438,`localStorage`),Kg(),Sk(439,`.`),Kg()()()(),Qc(440,`h5`)(441,`b`),Sk(442,`Retorno`),Kg()(),Qc(443,`table`,14)(444,`tr`,15)(445,`th`,16),Sk(446,`Tipo`),Kg(),Qc(447,`th`,16),Sk(448,`Descrição`),Kg()(),Qc(449,`tr`,9)(450,`td`,18)(451,`code`,19),Sk(452,`PoTheme`),Kg()(),Qc(453,`td`,13)(454,`p`),Sk(455,`Tema ativo.`),Kg()()()(),vu(456,`br`),Qc(457,`table`,31)(458,`tr`,9)(459,`th`,10)(460,`div`,11)(461,`h4`)(462,`span`,12),Sk(463,` setDefaultTheme `),Kg()()()()(),Qc(464,`tr`,13)(465,`td`,13)(466,`p`),Sk(467,`Define o tema atual como o tema "PoUI Padrão".`),Kg()()()(),Qc(468,`h5`)(469,`b`),Sk(470,`Parâmetros`),Kg()(),Qc(471,`table`,14)(472,`tr`,15)(473,`th`,16),Sk(474,`Nome`),Kg(),Qc(475,`th`,16),Sk(476,`Tipo`),Kg(),Qc(477,`th`,16),Sk(478,`Descrição`),Kg()(),Qc(479,`tr`,9)(480,`td`,17),Sk(481,` type`),Kg(),Qc(482,`td`,18)(483,`code`,19),Sk(484,` PoThemeTypeEnum `),Kg()(),Qc(485,`td`,13)(486,`p`),Sk(487,`O tipo de Tema a ser aplicado, light / dark.`),Kg()()()(),vu(488,`br`),Qc(489,`table`,32)(490,`tr`,9)(491,`th`,10)(492,`div`,11)(493,`h4`)(494,`span`,12),Sk(495,` setThemeType `),Kg()()()()(),Qc(496,`tr`,13)(497,`td`,13)(498,`p`),Sk(499,`Define o tipo (light/dark) quando um tema está sendo aplicado.`),Kg()()()(),Qc(500,`h5`)(501,`b`),Sk(502,`Parâmetros`),Kg()(),Qc(503,`table`,14)(504,`tr`,15)(505,`th`,16),Sk(506,`Nome`),Kg(),Qc(507,`th`,16),Sk(508,`Tipo`),Kg(),Qc(509,`th`,16),Sk(510,`Descrição`),Kg()(),Qc(511,`tr`,9)(512,`td`,17),Sk(513,` theme`),Kg(),Qc(514,`td`,18)(515,`code`,19),Sk(516,` PoTheme `),Kg()(),Qc(517,`td`,13)(518,`p`),Sk(519,`Objeto contendo as definições de tema a serem aplicadas no componente.`),Kg()()(),Qc(520,`tr`,9)(521,`td`,17),Sk(522,` themeType`),Kg(),Qc(523,`td`,18)(524,`code`,19),Sk(525,` PoThemeTypeEnum `),Kg()(),Qc(526,`td`,13)(527,`p`),Sk(528,`(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padrão, o tema claro é aplicado.`),Kg()()()(),vu(529,`br`),Qc(530,`table`,33)(531,`tr`,9)(532,`th`,10)(533,`div`,11)(534,`h4`)(535,`span`,12),Sk(536,` setCurrentThemeType `),Kg()()()()(),Qc(537,`tr`,13)(538,`td`,13)(539,`p`),Sk(540,`Define o tipo (light/dark) para um tema já ativo.`),Kg()()()(),Qc(541,`h5`)(542,`b`),Sk(543,`Parâmetros`),Kg()(),Qc(544,`table`,14)(545,`tr`,15)(546,`th`,16),Sk(547,`Nome`),Kg(),Qc(548,`th`,16),Sk(549,`Tipo`),Kg(),Qc(550,`th`,16),Sk(551,`Descrição`),Kg()(),Qc(552,`tr`,9)(553,`td`,17),Sk(554,` themeType`),Kg(),Qc(555,`td`,18)(556,`code`,19),Sk(557,` PoThemeTypeEnum `),Kg()(),Qc(558,`td`,13)(559,`p`),Sk(560,`(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padrão, o tema claro é aplicado.`),Kg()()()(),vu(561,`br`),Qc(562,`table`,34)(563,`tr`,9)(564,`th`,10)(565,`div`,11)(566,`h4`)(567,`span`,12),Sk(568,` setThemeA11y `),Kg()()()()(),Qc(569,`tr`,13)(570,`td`,13)(571,`p`),Sk(572,`Define o nível de acessibilidade quando um tema está sendo aplicado.`),Kg()()()(),Qc(573,`h5`)(574,`b`),Sk(575,`Parâmetros`),Kg()(),Qc(576,`table`,14)(577,`tr`,15)(578,`th`,16),Sk(579,`Nome`),Kg(),Qc(580,`th`,16),Sk(581,`Tipo`),Kg(),Qc(582,`th`,16),Sk(583,`Descrição`),Kg()(),Qc(584,`tr`,9)(585,`td`,17),Sk(586,` theme`),Kg(),Qc(587,`td`,18)(588,`code`,19),Sk(589,` PoTheme `),Kg()(),Qc(590,`td`,13)(591,`p`),Sk(592,`Objeto contendo as definições de tema a serem aplicadas no componente.`),Kg()()(),Qc(593,`tr`,9)(594,`td`,17),Sk(595,` a11y`),Kg(),Qc(596,`td`,18)(597,`code`,19),Sk(598,` PoThemeA11yEnum `),Kg()(),Qc(599,`td`,13)(600,`p`),Sk(601,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),Kg()()()(),vu(602,`br`),Qc(603,`table`,35)(604,`tr`,9)(605,`th`,10)(606,`div`,11)(607,`h4`)(608,`span`,12),Sk(609,` setCurrentThemeA11y `),Kg()()()()(),Qc(610,`tr`,13)(611,`td`,13)(612,`p`),Sk(613,`Define o nível de acessibilidade para um tema já ativo.`),Kg()()()(),Qc(614,`h5`)(615,`b`),Sk(616,`Parâmetros`),Kg()(),Qc(617,`table`,14)(618,`tr`,15)(619,`th`,16),Sk(620,`Nome`),Kg(),Qc(621,`th`,16),Sk(622,`Tipo`),Kg(),Qc(623,`th`,16),Sk(624,`Descrição`),Kg()(),Qc(625,`tr`,9)(626,`td`,17),Sk(627,` a11y`),Kg(),Qc(628,`td`,18)(629,`code`,19),Sk(630,` PoThemeA11yEnum `),Kg()(),Qc(631,`td`,13)(632,`p`),Sk(633,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),Kg()()()(),vu(634,`br`),Qc(635,`h3`),Sk(636,`Interfaces`),Kg(),Qc(637,`h4`,36)(638,`code`,5),Sk(639,`PoThemeColor`),Kg()(),Qc(640,`div`,2)(641,`p`),Sk(642,`Interface para representar as cores do tema.`),Kg()(),Qc(643,`h4`,7),Sk(644,`Propriedades`),Kg(),Qc(645,`table`,14)(646,`tr`,15)(647,`th`,16),Sk(648,`Nome`),Kg(),Qc(649,`th`,16),Sk(650,`Tipo`),Kg(),Qc(651,`th`,16),Sk(652,`Descrição`),Kg()(),Qc(653,`tr`,37)(654,`td`,17)(655,`div`,11)(656,`span`,12),Sk(657,` action`),vu(658,`br`),Kg()()(),Qc(659,`td`,18)(660,`code`,38),Sk(661,`PoThemeColorAction`),Kg()(),Qc(662,`td`,13)(663,`em`)(664,`strong`),Sk(665,`(opcional)`),Kg()(),Qc(666,`p`),Sk(667,`Cores da Action a serem aplicadas.`),Kg(),Qc(668,`p`),Sk(669,`Exemplo de uso:`),Kg(),Qc(670,`pre`)(671,`code`,39),Sk(672,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),Kg()()()(),Qc(673,`tr`,40)(674,`td`,17)(675,`div`,11)(676,`span`,12),Sk(677,` brand`),vu(678,`br`),Kg()()(),Qc(679,`td`,18)(680,`code`,41),Sk(681,`poThemeColorBrand`),Kg()(),Qc(682,`td`,13)(683,`em`)(684,`strong`),Sk(685,`(opcional)`),Kg()(),Qc(686,`p`),Sk(687,`Cores da Brand a serem aplicadas.`),Kg(),Qc(688,`p`),Sk(689,`Exemplo de uso:`),Kg(),Qc(690,`pre`)(691,`code`,22),Sk(692,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),Kg()()()(),Qc(693,`tr`,42)(694,`td`,17)(695,`div`,11)(696,`span`,12),Sk(697,` categorical`),vu(698,`br`),Kg()()(),Qc(699,`td`,18)(700,`code`,43),Sk(701,`PoThemeColorCategorical`),Kg()(),Qc(702,`td`,13)(703,`em`)(704,`strong`),Sk(705,`(opcional)`),Kg()(),Qc(706,`p`),Sk(707,`Cores da Categorical a serem aplicadas.`),Kg(),Qc(708,`p`),Sk(709,`Exemplo de uso:`),Kg(),Qc(710,`pre`)(711,`code`,22),Sk(712,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),Kg()()()(),Qc(713,`tr`,44)(714,`td`,17)(715,`div`,11)(716,`span`,12),Sk(717,` categorical-overlay`),vu(718,`br`),Kg()()(),Qc(719,`td`,18)(720,`code`,43),Sk(721,`PoThemeColorCategorical`),Kg()(),Qc(722,`td`,13)(723,`em`)(724,`strong`),Sk(725,`(opcional)`),Kg()(),Qc(726,`p`),Sk(727,`Cores da Categorical a serem aplicadas.`),Kg(),Qc(728,`p`),Sk(729,`Exemplo de uso:`),Kg(),Qc(730,`pre`)(731,`code`,22),Sk(732,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),Kg()()()(),Qc(733,`tr`,45)(734,`td`,17)(735,`div`,11)(736,`span`,12),Sk(737,` neutral`),vu(738,`br`),Kg()()(),Qc(739,`td`,18)(740,`code`,46),Sk(741,`PoThemeColorNeutral`),Kg()(),Qc(742,`td`,13)(743,`em`)(744,`strong`),Sk(745,`(opcional)`),Kg()(),Qc(746,`p`),Sk(747,`Cores Neutrals a serem aplicadas.`),Kg(),Qc(748,`p`),Sk(749,`Exemplo de uso:`),Kg(),Qc(750,`pre`)(751,`code`,22),Sk(752,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),Kg()()()()(),Qc(753,`h4`,47)(754,`code`,5),Sk(755,`PoThemeColorAction`),Kg()(),Qc(756,`div`,2)(757,`p`),Sk(758,`Interface para as cores de ação do tema.`),Kg()(),Qc(759,`h4`,7),Sk(760,`Propriedades`),Kg(),Qc(761,`table`,14)(762,`tr`,15)(763,`th`,16),Sk(764,`Nome`),Kg(),Qc(765,`th`,16),Sk(766,`Tipo`),Kg(),Qc(767,`th`,16),Sk(768,`Descrição`),Kg()(),Qc(769,`tr`,48)(770,`td`,17)(771,`div`,11)(772,`span`,12),Sk(773,` default`),vu(774,`br`),Kg()()(),Qc(775,`td`,18)(776,`code`,49),Sk(777,`string`),Kg()(),Qc(778,`td`,13)(779,`em`)(780,`strong`),Sk(781,`(opcional)`),Kg()(),Qc(782,`p`),Sk(783,`Cores da Action 'Default'.`),Kg(),Qc(784,`p`),Sk(785,`Exemplo de uso:`),Kg(),Qc(786,`pre`)(787,`code`,22),Sk(788,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),Kg()()()(),Qc(789,`tr`,50)(790,`td`,17)(791,`div`,11)(792,`span`,12),Sk(793,` disabled`),vu(794,`br`),Kg()()(),Qc(795,`td`,18)(796,`code`,49),Sk(797,`string`),Kg()(),Qc(798,`td`,13)(799,`em`)(800,`strong`),Sk(801,`(opcional)`),Kg()(),Qc(802,`p`),Sk(803,`Cores da Action de 'disabled'.`),Kg(),Qc(804,`p`),Sk(805,`Exemplo de uso:`),Kg(),Qc(806,`pre`)(807,`code`,22),Sk(808,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),Kg()()()(),Qc(809,`tr`,51)(810,`td`,17)(811,`div`,11)(812,`span`,12),Sk(813,` focus`),vu(814,`br`),Kg()()(),Qc(815,`td`,18)(816,`code`,49),Sk(817,`string`),Kg()(),Qc(818,`td`,13)(819,`em`)(820,`strong`),Sk(821,`(opcional)`),Kg()(),Qc(822,`p`),Sk(823,`Cores da Action para 'focus'.`),Kg(),Qc(824,`p`),Sk(825,`Exemplo de uso:`),Kg(),Qc(826,`pre`)(827,`code`,22),Sk(828,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),Kg()()()(),Qc(829,`tr`,52)(830,`td`,17)(831,`div`,11)(832,`span`,12),Sk(833,` hover`),vu(834,`br`),Kg()()(),Qc(835,`td`,18)(836,`code`,49),Sk(837,`string`),Kg()(),Qc(838,`td`,13)(839,`em`)(840,`strong`),Sk(841,`(opcional)`),Kg()(),Qc(842,`p`),Sk(843,`Cores da Action para 'hover'.`),Kg(),Qc(844,`p`),Sk(845,`Exemplo de uso:`),Kg(),Qc(846,`pre`)(847,`code`,22),Sk(848,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),Kg()()()(),Qc(849,`tr`,53)(850,`td`,17)(851,`div`,11)(852,`span`,12),Sk(853,` pressed`),vu(854,`br`),Kg()()(),Qc(855,`td`,18)(856,`code`,49),Sk(857,`string`),Kg()(),Qc(858,`td`,13)(859,`em`)(860,`strong`),Sk(861,`(opcional)`),Kg()(),Qc(862,`p`),Sk(863,`Cores da Action para 'pressed'.`),Kg(),Qc(864,`p`),Sk(865,`Exemplo de uso:`),Kg(),Qc(866,`pre`)(867,`code`,22),Sk(868,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),Kg()()()()(),Qc(869,`h4`,54)(870,`code`,5),Sk(871,`PoThemeColorNeutral`),Kg()(),Qc(872,`div`,2)(873,`p`),Sk(874,`Interface para as cores neutras do tema.`),Kg()(),Qc(875,`h4`,7),Sk(876,`Propriedades`),Kg(),Qc(877,`table`,14)(878,`tr`,15)(879,`th`,16),Sk(880,`Nome`),Kg(),Qc(881,`th`,16),Sk(882,`Tipo`),Kg(),Qc(883,`th`,16),Sk(884,`Descrição`),Kg()(),Qc(885,`tr`,55)(886,`td`,17)(887,`div`,11)(888,`span`,12),Sk(889,` dark`),vu(890,`br`),Kg()()(),Qc(891,`td`,18)(892,`code`,56),Sk(893,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),Kg()(),Qc(894,`td`,13)(895,`em`)(896,`strong`),Sk(897,`(opcional)`),Kg()(),Qc(898,`p`),Sk(899,`Cores Neutrals do tipo 'dark'.`),Kg(),Qc(900,`p`),Sk(901,`Exemplo de uso:`),Kg(),Qc(902,`pre`)(903,`code`,22),Sk(904,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),Kg()()()(),Qc(905,`tr`,57)(906,`td`,17)(907,`div`,11)(908,`span`,12),Sk(909,` light`),vu(910,`br`),Kg()()(),Qc(911,`td`,18)(912,`code`,58),Sk(913,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),Kg()(),Qc(914,`td`,13)(915,`em`)(916,`strong`),Sk(917,`(opcional)`),Kg()(),Qc(918,`p`),Sk(919,`Cores Neutrals do tipo 'light'.`),Kg(),Qc(920,`p`),Sk(921,`Exemplo de uso:`),Kg(),Qc(922,`pre`)(923,`code`,22),Sk(924,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),Kg()()()(),Qc(925,`tr`,59)(926,`td`,17)(927,`div`,11)(928,`span`,12),Sk(929,` mid`),vu(930,`br`),Kg()()(),Qc(931,`td`,18)(932,`code`,60),Sk(933,`{ '40'?: string; '60'?: string;
}`),Kg()(),Qc(934,`td`,13)(935,`em`)(936,`strong`),Sk(937,`(opcional)`),Kg()(),Qc(938,`p`),Sk(939,`Cores Neutrals do tipo 'mid'.`),Kg(),Qc(940,`p`),Sk(941,`Exemplo de uso:`),Kg(),Qc(942,`pre`)(943,`code`,22),Sk(944,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),Kg()()()()(),Qc(945,`h4`,61)(946,`code`,5),Sk(947,`PoThemeTokens`),Kg()(),Qc(948,`div`,2)(949,`p`),Sk(950,`Interface para o tema da aplicação.`),Kg()(),Qc(951,`h4`,62)(952,`code`,5),Sk(953,`PoThemeToken`),Kg()(),Qc(954,`div`,2)(955,`p`),Sk(956,`Interface para os tokens do Tema.`),Kg()(),Qc(957,`h4`,7),Sk(958,`Propriedades`),Kg(),Qc(959,`table`,14)(960,`tr`,15)(961,`th`,16),Sk(962,`Nome`),Kg(),Qc(963,`th`,16),Sk(964,`Tipo`),Kg(),Qc(965,`th`,16),Sk(966,`Descrição`),Kg()(),Qc(967,`tr`,63)(968,`td`,17)(969,`div`,11)(970,`span`,12),Sk(971,` color`),vu(972,`br`),Kg()()(),Qc(973,`td`,18)(974,`code`,64),Sk(975,`PoThemeColor`),Kg()(),Qc(976,`td`,13)(977,`em`)(978,`strong`),Sk(979,`(opcional)`),Kg()(),Qc(980,`p`),Sk(981,`Tokens do tipo 'color'`),Kg()()(),Qc(982,`tr`,65)(983,`td`,17)(984,`div`,11)(985,`span`,12),Sk(986,` onRoot`),vu(987,`br`),Kg()()(),Qc(988,`td`,18)(989,`code`,66),Sk(990,`DynamicProperties`),Kg()(),Qc(991,`td`,13)(992,`em`)(993,`strong`),Sk(994,`(opcional)`),Kg()(),Qc(995,`p`),Sk(996,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),Qc(997,`code`),Sk(998,`:root`),Kg()(),Qc(999,`p`),Sk(1e3,`Exemplo de uso:`),Kg(),Qc(1001,`pre`)(1002,`code`,22),Sk(1003,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),Kg()()()(),Qc(1004,`tr`,67)(1005,`td`,17)(1006,`div`,11)(1007,`span`,12),Sk(1008,` perComponent`),vu(1009,`br`),Kg()()(),Qc(1010,`td`,18)(1011,`code`,66),Sk(1012,`DynamicProperties`),Kg()(),Qc(1013,`td`,13)(1014,`em`)(1015,`strong`),Sk(1016,`(opcional)`),Kg()(),Qc(1017,`p`),Sk(1018,`Tokens do tipo 'perComponent'`),Kg(),Qc(1019,`p`),Sk(1020,`Exemplo de uso:`),Kg(),Qc(1021,`pre`)(1022,`code`,22),Sk(1023,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),Kg()()()()(),Qc(1024,`h4`,68)(1025,`code`,5),Sk(1026,`PoTheme`),Kg()(),Qc(1027,`div`,2)(1028,`p`),Sk(1029,`Interface para o método `),Qc(1030,`code`),Sk(1031,`setTheme()`),Kg(),Sk(1032,`.`),Kg()(),Qc(1033,`h4`,7),Sk(1034,`Propriedades`),Kg(),Qc(1035,`table`,14)(1036,`tr`,15)(1037,`th`,16),Sk(1038,`Nome`),Kg(),Qc(1039,`th`,16),Sk(1040,`Tipo`),Kg(),Qc(1041,`th`,16),Sk(1042,`Descrição`),Kg()(),Qc(1043,`tr`,69)(1044,`td`,17)(1045,`div`,11)(1046,`span`,12),Sk(1047,` active`),vu(1048,`br`),Kg()()(),Qc(1049,`td`,18)(1050,`code`,70),Sk(1051,`PoThemeTypeEnum `),Kg(),Qc(1052,`code`,71),Sk(1053,` PoThemeActive`),Kg()(),Qc(1054,`td`,13)(1055,`em`)(1056,`strong`),Sk(1057,`(opcional)`),Kg()(),Qc(1058,`p`),Sk(1059,`Tipo e nível de acessibilidade de tema ativo`),Kg()()(),Qc(1060,`tr`,72)(1061,`td`,17)(1062,`div`,11)(1063,`span`,12),Sk(1064,` inheritDefaultStyle`),vu(1065,`br`),Kg()()(),Qc(1066,`td`,18)(1067,`code`,73),Sk(1068,`boolean`),Kg()(),Qc(1069,`td`,13)(1070,`em`)(1071,`strong`),Sk(1072,`(opcional)`),Kg()(),Qc(1073,`p`),Sk(1074,`Define se o tema herda a identidade visual do tema padrão do PO UI.`),Kg(),Qc(1075,`p`),Sk(1076,`A identidade visual corresponde aos arredondamentos dos componentes e \xE0 cor de fundo da p\xE1gina definidos
pelo tema padr\xE3o. Os estilos estruturais (ex.: espessura de outline, adensamento e ajustes de light/dark)
s\xE3o aplicados em qualquer caso.`),Kg(),Qc(1077,`p`),Sk(1078,`As fam\xEDlias de fonte do tema padr\xE3o n\xE3o s\xE3o controladas por esta propriedade: elas s\xE3o definidas pelo CSS
do `),Qc(1079,`code`),Sk(1080,`@po-ui/style`),Kg(),Sk(1081,`. Um tema com fontes próprias deve declará-las nos seus tokens.`),Kg(),Qc(1082,`p`),Sk(1083,`Utilize `),Qc(1084,`code`),Sk(1085,`false`),Kg(),Sk(1086,` quando o tema define a própria identidade visual e não deve receber a do tema padrão.`),Kg()()(),Qc(1087,`tr`,74)(1088,`td`,17)(1089,`div`,11)(1090,`span`,12),Sk(1091,` name`),vu(1092,`br`),Kg()()(),Qc(1093,`td`,18)(1094,`code`,49),Sk(1095,`string`),Kg()(),Qc(1096,`td`,13)(1097,`p`),Sk(1098,`Nome para o tema:
Ex.: default, totvs, sunset...`),Kg()()(),Qc(1099,`tr`,75)(1100,`td`,17)(1101,`div`,11)(1102,`span`,12),Sk(1103,` type`),vu(1104,`br`),Kg()()(),Qc(1105,`td`,18)(1106,`code`,76),Sk(1107,`PoThemeType `),Kg(),Qc(1108,`code`,77),Sk(1109,` Array<PoThemeType>`),Kg()(),Qc(1110,`td`,13)(1111,`p`),Sk(1112,`Tipo de tema:`),Kg(),Qc(1113,`ul`)(1114,`li`),Sk(1115,`light`),Kg(),Qc(1116,`li`),Sk(1117,`dark`),Kg()()()()(),Qc(1118,`h3`),Sk(1119,`Enums`),Kg(),Qc(1120,`h4`,78)(1121,`code`,5),Sk(1122,`PoThemeA11yEnum`),Kg()(),Qc(1123,`div`,2)(1124,`p`),Sk(1125,`Enum para configurar o nível de acessibilidade dos componentes através do serviço de tema.`),Kg(),Qc(1126,`pre`)(1127,`code`),Sk(1128,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),Kg()()(),Qc(1129,`h4`,7),Sk(1130,`Propriedades`),Kg(),Qc(1131,`table`,14)(1132,`tr`,15)(1133,`th`,16),Sk(1134,`Nome`),Kg(),Qc(1135,`th`,16),Sk(1136,`Descrição`),Kg()(),Qc(1137,`tr`,79)(1138,`td`,17)(1139,`div`,11)(1140,`span`,12),Sk(1141,` AA`),vu(1142,`br`),Kg()()(),Qc(1143,`td`,13)(1144,`p`),Sk(1145,`Nível de acessibilidade AA.`),Kg(),Qc(1146,`ul`)(1147,`li`),Sk(1148,`Define a espessura do `),Qc(1149,`code`),Sk(1150,`outline`),Kg(),Sk(1151,` para `),Qc(1152,`strong`),Sk(1153,`2px`),Kg(),Sk(1154,`.`),Kg(),Qc(1155,`li`),Sk(1156,`Disponibiliza o tamanho `),Qc(1157,`code`),Sk(1158,`small`),Kg(),Sk(1159,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),Kg()()()(),Qc(1160,`tr`,80)(1161,`td`,17)(1162,`div`,11)(1163,`span`,12),Sk(1164,` AAA`),vu(1165,`br`),Kg()()(),Qc(1166,`td`,13)(1167,`p`),Sk(1168,`Nível de acessibilidade AAA.`),Kg(),Qc(1169,`ul`)(1170,`li`),Sk(1171,`Define a espessura do `),Qc(1172,`code`),Sk(1173,`outline`),Kg(),Sk(1174,` para `),Qc(1175,`strong`),Sk(1176,`4px`),Kg(),Sk(1177,`.`),Kg(),Qc(1178,`li`),Sk(1179,`Não disponibiliza o tamanho `),Qc(1180,`code`),Sk(1181,`small`),Kg(),Sk(1182,` para componentes de formulário.`),Kg()()()()(),Qc(1183,`h4`,81)(1184,`code`,5),Sk(1185,`PoThemeTypeEnum`),Kg()(),Qc(1186,`div`,2)(1187,`p`),Sk(1188,`Enum utilizado para configurar o tipo de tema suportado, é possível alternar entre os tipos definidos.`),Kg(),Qc(1189,`pre`)(1190,`code`),Sk(1191,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),Kg()()(),Qc(1192,`h4`,7),Sk(1193,`Propriedades`),Kg(),Qc(1194,`table`,14)(1195,`tr`,15)(1196,`th`,16),Sk(1197,`Nome`),Kg(),Qc(1198,`th`,16),Sk(1199,`Descrição`),Kg()(),Qc(1200,`tr`,82)(1201,`td`,17)(1202,`div`,11)(1203,`span`,12),Sk(1204,` light`),vu(1205,`br`),Kg()()(),Qc(1206,`td`,13)(1207,`p`),Sk(1208,`Define o tema como claro.`),Kg()()(),Qc(1209,`tr`,83)(1210,`td`,17)(1211,`div`,11)(1212,`span`,12),Sk(1213,` dark`),vu(1214,`br`),Kg()()(),Qc(1215,`td`,13)(1216,`p`),Sk(1217,`Define o tema como escuro.`),Kg()()()()())},encapsulation:2,changeDetection:1})}return a})();function Fe(a,Oe){if(a&1){let r=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(r);let o=ek();return U_(o.changeTab(`web`))}),vu(1,`sample-po-theme-labs-view`),Kg()}if(a&2){let r=ek();Rb(`p-active`,r.activeTab===`web`)}}var Ne=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,m){this.route=r,this.router=m}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let m=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:m||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(m){return new(m||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Theme`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(m,o){m&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Fe,2,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),vu(4,`sample-po-theme-doc`),Kg()()()),m&2&&(Rb(`p-actions`,o.actions),wg(2),VO(o.hidePoWebSample?-1:2),wg(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Mze,tre,are,Ae,Ce],encapsulation:2,changeDetection:1})}return a})()}];var De=(()=>{class a{static ɵfac=function(m){return new(m||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[GV.forChild(Ne),GV]})}return a})();var ht=(()=>{class a{static ɵfac=function(m){return new(m||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,De]})}return a})();export{ht as DocPoThemeModule};