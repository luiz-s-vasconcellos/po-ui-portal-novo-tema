import{m as P,p as M}from"./main-6GCKJMTQ.js";import{$t as fb,Ar as G0,At as Zte,Ba as p,Br as Jn,E as G4,Ea as kZ,F as Joe,Fr as H_,Gi as ZL,Hr as KO,It as bae,J as On,Ki as Zb,Ln as uie,Lr as I,Pn as tre,Pt as are,Rt as bie,Si as Rk,Ti as TZ,Ur as Kb,W as Mze,Wa as q0,Wr as Kg,Xr as Mk,Xt as eI,Yi as _u,Zi as ar,_n as ni,_r as Cu,an as ia,ar as Ab,bn as oi,co as wg,da as ge$1,eo as tk,ha as i1,hn as mie,ho as xo,jr as GV,jt as _ie,k as Goe,ki as U_,mn as mb,nn as hie,oo as vt,or as An,pi as QL,qr as LO,ra as de,ri as No,sn as j4,ti as NZ,vi as Qm,xi as RZ,xn as p5,ya as jO,zr as Jc}from"./chunk-t_lpM8Oc.js";import{n as s,t as r}from"./chunk-zystk1pz.js";var xe={name:`po-theme`,type:{light:{color:{brand:{"01":{lightest:`#f2eaf6`,lighter:`#d9c2e5`,light:`#bd94d1`,base:`#753399`,dark:`#5b1c7d`,darker:`#400e58`,darkest:`#260538`},"02":{base:`#b92f72`},"03":{base:`#ffd464`}},action:s(r({},uie),{disabled:`var(--color-neutral-mid-40)`}),feedback:s(r({},mie),{info:s(r({},mie.info),{base:`#0079b8`})}),neutral:r({},hie)},onRoot:s(r({},mb.onRoot),{"--color-page-background-color-page":`var(--color-neutral-light-05)`}),perComponent:r({},mb.perComponent)},dark:{color:{brand:{"01":{darkest:`#f2eaf6`,darker:`#d9c2e5`,dark:`#bd94d1`,base:`#753399`,light:`#5b1c7d`,lighter:`#400e58`,lightest:`#260538`},"02":{base:`#b92f72`},"03":{base:`#ffd464`}},action:s(r({},_ie),{disabled:`var(--color-neutral-mid-40)`}),feedback:s(r({},bie),{info:s(r({},bie.info),{base:`#0079b8`})}),neutral:{light:{"00":`#1c1c1c`,"05":`#202020`,10:`#2b2b2b`,20:`#3b3b3b`,30:`#5a5a5a`},mid:{40:`#7c7c7c`,60:`#a1a1a1`},dark:{70:`#c1c1c1`,80:`#d9d9d9`,90:`#eeeeee`,95:`#fbfbfb`}}},onRoot:s(r({},fb.onRoot),{"--color-page-background-color-page":`var(--color-neutral-light-05)`}),perComponent:r({},fb.perComponent)}},active:{type:On.light,a11y:ni.AAA}};var Ae=[`reactiveFormData`];var ve=(()=>{class a{reactiveFormModal;formBuilder=p(kZ);poTheme=p(eI);themeType=On.light;a11yLevel=ni.AAA;densityMode=`medium`;reactiveForm=this.createReactiveForm();themeTypeOptions=[{label:`Light`,value:On.light},{label:`Dark`,value:On.dark}];a11yLevelOptions=[{label:`AAA`,value:ni.AAA},{label:`AA`,value:ni.AA}];densityModeOptions=[{label:`Medium`,value:`medium`},{label:`Small`,value:`small`}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:`Close`};ngOnInit(){let r=this.poTheme.getThemeActive()?.active;typeof r==`object`&&(this.themeType=r.type??On.light,this.a11yLevel=r.a11y??ni.AAA),this.densityMode=this.poTheme.getDensityMode(),this.poTheme.setTheme(xe,this.themeType,this.a11yLevel),this.applyA11yDefaultSize(),this.poTheme.setDensityMode(this.densityMode)}onThemeTypeChange(r){this.poTheme.setCurrentThemeType(r)}onA11yLevelChange(r){this.poTheme.setCurrentThemeA11y(r),this.applyA11yDefaultSize()}onDensityModeChange(r){this.poTheme.setDensityMode(r)}saveForm(){this.reactiveFormModal.open()}applyA11yDefaultSize(){this.poTheme.setA11yDefaultSizeSmall(this.a11yLevel===ni.AA)}createReactiveForm(){return this.formBuilder.group({name:[``,Qm.compose([Qm.required,Qm.minLength(5),Qm.maxLength(30)])],address:[``,Qm.compose([Qm.required,Qm.minLength(5),Qm.maxLength(50)])],number:[``,Qm.compose([Qm.required,Qm.min(1),Qm.max(99999)])],email:[``,Qm.required],website:[``,Qm.required]})}static ɵfac=function(m){return new(m||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-theme-labs`]],viewQuery:function(m,o){if(m&1&&Cu(Ae,7),m&2){let v;No(v=xo())&&(o.reactiveFormModal=v.first)}},standalone:!1,decls:26,vars:14,consts:[[`reactiveFormData`,``],[`p-title`,`Theme settings`],[1,`po-row`],[`name`,`themeType`,`p-label`,`Theme type`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`a11yLevel`,`p-label`,`Accessibility level`,`p-helper`,`AA allows the small size as default for components.`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`densityMode`,`p-label`,`Density`,`p-helper`,`Spacing of grouping components, such as pages, containers and modals.`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-title`,`Example`,1,`po-mt-3`],[3,`formGroup`],[`formControlName`,`name`,`p-clean`,``,`p-icon`,`an an-user`,`p-label`,`Customer name`,1,`po-lg-6`],[`formControlName`,`email`,`p-label`,`Email`,`p-clean`,``,1,`po-lg-6`],[`formControlName`,`address`,`p-clean`,``,`p-icon`,`an an-map-pin`,`p-label`,`Address`,1,`po-lg-4`,`po-md-8`],[`formControlName`,`number`,`p-label`,`Number`,`p-clean`,``,1,`po-lg-2`,`po-md-4`],[`formControlName`,`website`,`p-label`,`Website`,`p-clean`,``,1,`po-lg-6`],[`p-label`,`Save`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Save successful`,3,`p-primary-action`],[`p-label`,`Name`,1,`po-md-12`,3,`p-value`],[`p-label`,`Address`,1,`po-md-6`,3,`p-value`],[`p-label`,`Number`,1,`po-md-6`,3,`p-value`],[`p-label`,`Email`,1,`po-md-6`,3,`p-value`],[`p-label`,`Website`,1,`po-md-6`,3,`p-value`]],template:function(m,o){if(m&1){let v=KO();Jc(0,`po-widget`,1)(1,`div`,2)(2,`po-radio-group`,3),G0(),Zb(`ngModelChange`,function(d){return U_(v),Rk(o.themeType,d)||(o.themeType=d),H_(d)}),vt(`p-change`,function(d){return o.onThemeTypeChange(d)}),Kg(),Jc(3,`po-radio-group`,4),G0(),Zb(`ngModelChange`,function(d){return U_(v),Rk(o.a11yLevel,d)||(o.a11yLevel=d),H_(d)}),vt(`p-change`,function(d){return o.onA11yLevelChange(d)}),Kg(),Jc(4,`po-radio-group`,5),G0(),Zb(`ngModelChange`,function(d){return U_(v),Rk(o.densityMode,d)||(o.densityMode=d),H_(d)}),vt(`p-change`,function(d){return o.onDensityModeChange(d)}),Kg()()(),Jc(5,`po-widget`,6)(6,`form`,7)(7,`div`,2)(8,`po-input`,8),G0(),Kg(),Jc(9,`po-email`,9),G0(),Kg()(),Jc(10,`div`,2)(11,`po-input`,10),G0(),Kg(),Jc(12,`po-number`,11),G0(),Kg(),Jc(13,`po-url`,12),G0(),Kg()(),Jc(14,`div`,2)(15,`po-button`,13),vt(`p-click`,function(){return o.saveForm()}),Kg()()()(),Jc(16,`po-modal`,14,0)(18,`div`,2),_u(19,`po-info`,15),Kg(),Jc(20,`div`,2),_u(21,`po-info`,16)(22,`po-info`,17),Kg(),Jc(23,`div`,2),_u(24,`po-info`,18)(25,`po-info`,19),Kg()()}m&2&&(wg(2),Kb(`ngModel`,o.themeType),Ab(`p-options`,o.themeTypeOptions),q0(),wg(),Kb(`ngModel`,o.a11yLevel),Ab(`p-options`,o.a11yLevelOptions),q0(),wg(),Kb(`ngModel`,o.densityMode),Ab(`p-options`,o.densityModeOptions),q0(),wg(2),Ab(`formGroup`,o.reactiveForm),wg(2),q0(),wg(),q0(),wg(2),q0(),wg(),q0(),wg(),q0(),wg(2),Ab(`p-disabled`,o.reactiveForm.invalid),wg(),Ab(`p-primary-action`,o.modalPrimaryAction),wg(3),Ab(`p-value`,o.reactiveForm.controls.name.value),wg(2),Ab(`p-value`,o.reactiveForm.controls.address.value),wg(),Ab(`p-value`,o.reactiveForm.controls.number.value),wg(2),Ab(`p-value`,o.reactiveForm.controls.email.value),wg(),Ab(`p-value`,o.reactiveForm.controls.website.value))},dependencies:[NZ,TZ,RZ,QL,ZL,i1,oi,p5,j4,Goe,Zte,G4,Joe,ia,bae],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{static ɵfac=function(m){return new(m||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-theme-labs-view`]],standalone:!1,decls:29,vars:0,consts:[[`id`,`sample-po-theme-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-theme-labs/sample-po-theme-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-theme-labs/sample-po-theme-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-theme-labs/sample-po-theme-labs.constant.ts`,1,`docs-code-block`]],template:function(m,o){m&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Theme Labs`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-theme-labs`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-theme-labs/sample-po-theme-labs.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-widget p-title="Theme settings">
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
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-theme-labs/sample-po-theme-labs.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { ChangeDetectionStrategy, Component, inject, OnInit, ViewChild } from '@angular/core';
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
`),Kg()(),Jc(23,`label`,6),Mk(24,`sample-po-theme-labs/sample-po-theme-labs.constant.ts`),Kg(),Jc(25,`div`,12)(26,`pre`,11),Mk(27,`import {
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
`),Kg()()()()()(),_u(28,`hr`))},dependencies:[P,tre,are,ve],encapsulation:2,changeDetection:1})}return a})();var fe=(()=>{class a{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(m){return new(m||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-theme-doc`]],standalone:!1,decls:1218,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-theme-service`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/theme-service`],[1,`docs-api-h5`,`docs-api-method-header`],[`id`,`method-setTheme`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[`id`,`method-getA11yLevel`,1,`docs-api-method-table`],[`id`,`method-setA11yDefaultSizeSmall`,1,`docs-api-method-table`],[1,`language-typescript`],[`id`,`method-getDensityMode`,1,`docs-api-method-table`],[`id`,`method-setDensityMode`,1,`docs-api-method-table`],[`pan`,``,1,`docs-api-property-type`,`'small'`],[`pan`,``,1,`docs-api-property-type`,`'medium'`],[`id`,`method-persistThemeActive`,1,`docs-api-method-table`],[`id`,`method-changeCurrentThemeType`,1,`docs-api-method-table`],[`id`,`method-cleanThemeActive`,1,`docs-api-method-table`],[`id`,`method-getThemeActive`,1,`docs-api-method-table`],[`id`,`method-setDefaultTheme`,1,`docs-api-method-table`],[`id`,`method-setThemeType`,1,`docs-api-method-table`],[`id`,`method-setCurrentThemeType`,1,`docs-api-method-table`],[`id`,`method-setThemeA11y`,1,`docs-api-method-table`],[`id`,`method-setCurrentThemeA11y`,1,`docs-api-method-table`],[`id`,`interface-po-theme-color`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-theme-color-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorAction`],[1,`language-javascript`],[`id`,`interface-po-theme-color-brand`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`poThemeColorBrand`],[`id`,`interface-po-theme-color-categorical`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorCategorical`],[`id`,`interface-po-theme-color-categorical-overlay`,1,`docs-api-properties-row`],[`id`,`interface-po-theme-color-neutral`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorNeutral`],[`id`,`interface-po-theme-color-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-theme-color-action-default`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`interface-po-theme-color-action-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-theme-color-action-focus`,1,`docs-api-properties-row`],[`id`,`interface-po-theme-color-action-hover`,1,`docs-api-properties-row`],[`id`,`interface-po-theme-color-action-pressed`,1,`docs-api-properties-row`],[`id`,`interface-po-theme-color-neutral`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-theme-color-neutral-dark`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`'70'?:`,`string;`,`'80'?:`,`string;`,`'90'?:`,`string;`,`'95'?:`,`string;`,`}`],[`id`,`interface-po-theme-color-neutral-light`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`'00'?:`,`string;`,`'05'?:`,`string;`,`'10'?:`,`string;`,`'20'?:`,`string;`,`'30'?:`,`string;`,`}`],[`id`,`interface-po-theme-color-neutral-mid`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`'40'?:`,`string;`,`'60'?:`,`string;`,`}`],[`id`,`interface-po-theme-tokens`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-theme-token`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-theme-token-color`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColor`],[`id`,`interface-po-theme-token-on-root`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`DynamicProperties`],[`id`,`interface-po-theme-token-per-component`,1,`docs-api-properties-row`],[`id`,`interface-po-theme`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-theme-active`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoThemeTypeEnum`],[`pan`,``,1,`docs-api-property-type`,`PoThemeActive`],[`id`,`interface-po-theme-inherit-default-style`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`interface-po-theme-name`,1,`docs-api-properties-row`],[`id`,`interface-po-theme-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoThemeType`],[`pan`,``,1,`docs-api-property-type`,`Array<PoThemeType>`],[`id`,`enum-po-theme-a11y-enum`,1,`docs-api-class-name`],[`id`,`enum-po-theme-a11y-enum-aa`,1,`docs-api-properties-row`],[`id`,`enum-po-theme-a11y-enum-aaa`,1,`docs-api-properties-row`],[`id`,`enum-po-theme-type-enum`,1,`docs-api-class-name`],[`id`,`enum-po-theme-type-enum-light`,1,`docs-api-properties-row`],[`id`,`enum-po-theme-type-enum-dark`,1,`docs-api-properties-row`]],template:function(m,o){m&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoThemeModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do serviço PoThemeService.`),Kg()(),Jc(7,`h3`,3),Mk(8,`Services`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoThemeService`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,`O serviço `),Jc(15,`code`),Mk(16,`PoThemeService`),Kg(),Mk(17,` permite customizar as cores do tema padrão do `),Jc(18,`code`),Mk(19,`PO-UI`),Kg(),Mk(20,` e definir o n\xEDvel de acessibilidade
mais adequado ao projeto.`),Kg(),Jc(21,`p`),Mk(22,`O nível `),Jc(23,`strong`),Mk(24,`AAA`),Kg(),Mk(25,` (padr\xE3o) garante maior contraste, \xE1reas clic\xE1veis amplas e espa\xE7amentos maiores entre os elementos,
enquanto o n\xEDvel `),Jc(26,`strong`),Mk(27,`AA`),Kg(),Mk(28,` mant\xE9m a conformidade com as diretrizes de acessibilidade, mas com propor\xE7\xF5es mais equilibradas
e contornos mais sutis.`),Kg(),Jc(29,`p`),Mk(30,`O serviço também possibilita configurar a `),Jc(31,`strong`),Mk(32,`densidade de espaçamentos`),Kg(),Mk(33,`, permitindo ajustar o espa\xE7o entre e dentro dos
componentes. Essa configura\xE7\xE3o pode ser utilizada com qualquer n\xEDvel de acessibilidade.`),Kg(),Jc(34,`blockquote`)(35,`p`),Mk(36,`Observação: a customização das cores de `),Jc(37,`code`),Mk(38,`feedback`),Kg(),Mk(39,` não é recomendada por motivos de acessibilidade e usabilidade.`),Kg()(),Jc(40,`blockquote`)(41,`p`),Mk(42,`Para saber mais sobre como customizar o tema padr\xE3o, consulte o item
`),Jc(43,`a`,6),Mk(44,`Customização de Temas usando o serviço PO-UI`),Kg(),Mk(45,` na aba `),Jc(46,`code`),Mk(47,`Guias`),Kg(),Mk(48,`.`),Kg()()(),Jc(49,`h3`,7),Mk(50,`Métodos`),Kg(),Jc(51,`table`,8)(52,`tr`,9)(53,`th`,10)(54,`div`,11)(55,`h4`)(56,`span`,12),Mk(57,` setTheme `),Kg()()()()(),Jc(58,`tr`,13)(59,`td`,13)(60,`p`),Mk(61,`Aplica um tema ao componente de acordo com o tipo de tema e o nível de acessibilidade especificados.`),Kg(),Jc(62,`p`),Mk(63,`Este método configura o tema do componente com base no objeto `),Jc(64,`code`),Mk(65,`themeConfig`),Kg(),Mk(66,` fornecido, no `),Jc(67,`code`),Mk(68,`themeType`),Kg(),Mk(69,` e no `),Jc(70,`code`),Mk(71,`a11yLevel`),Kg(),Mk(72,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),Kg()()()(),Jc(73,`h5`)(74,`b`),Mk(75,`Parâmetros`),Kg()(),Jc(76,`table`,14)(77,`tr`,15)(78,`th`,16),Mk(79,`Nome`),Kg(),Jc(80,`th`,16),Mk(81,`Tipo`),Kg(),Jc(82,`th`,16),Mk(83,`Descrição`),Kg()(),Jc(84,`tr`,9)(85,`td`,17),Mk(86,` themeConfig`),Kg(),Jc(87,`td`,18)(88,`code`,19),Mk(89,` PoTheme `),Kg()(),Jc(90,`td`,13)(91,`p`),Mk(92,`Configuração de tema a ser aplicada ao componente.`),Kg()()(),Jc(93,`tr`,9)(94,`td`,17),Mk(95,` themeType`),Kg(),Jc(96,`td`,18)(97,`code`,19),Mk(98,` PoThemeTypeEnum `),Kg()(),Jc(99,`td`,13)(100,`p`),Mk(101,`(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro é o padrão.`),Kg()()(),Jc(102,`tr`,9)(103,`td`,17),Mk(104,` a11yLevel`),Kg(),Jc(105,`td`,18)(106,`code`,19),Mk(107,` PoThemeA11yEnum `),Kg()(),Jc(108,`td`,13)(109,`p`),Mk(110,`(Opcional) Nível de acessibilidade dos componentes, podendo ser AA ou AAA. Padrão é AAA.`),Kg()()(),Jc(111,`tr`,9)(112,`td`,17),Mk(113,` persistPreference`),Kg(),Jc(114,`td`,18)(115,`code`,19),Mk(116,` boolean `),Kg()(),Jc(117,`td`,13)(118,`p`),Mk(119,`(Opcional) Define se a prefer\xEAncia de tema deve ser salva no
localStorage para persist\xEAncia. Por padr\xE3o \xE9 `),Jc(120,`code`),Mk(121,`true`),Kg(),Mk(122,`, ou seja, a preferência será salva automaticamente.`),Kg()()()(),_u(123,`br`),Jc(124,`table`,20)(125,`tr`,9)(126,`th`,10)(127,`div`,11)(128,`h4`)(129,`span`,12),Mk(130,` getA11yLevel `),Kg()()()()(),Jc(131,`tr`,13)(132,`td`,13)(133,`p`),Mk(134,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),Jc(135,`code`),Mk(136,`AAA`),Kg(),Mk(137,` como padrão.`),Kg()()()(),Jc(138,`h5`)(139,`b`),Mk(140,`Retorno`),Kg()(),Jc(141,`table`,14)(142,`tr`,15)(143,`th`,16),Mk(144,`Tipo`),Kg(),Jc(145,`th`,16),Mk(146,`Descrição`),Kg()(),Jc(147,`tr`,9)(148,`td`,18)(149,`code`,19),Mk(150,`PoThemeA11yEnum`),Kg()(),Jc(151,`td`,13)(152,`p`),Mk(153,`O nível de acessibilidade, que pode ser `),Jc(154,`code`),Mk(155,`AA`),Kg(),Mk(156,` ou `),Jc(157,`code`),Mk(158,`AAA`),Kg(),Mk(159,`.`),Kg()()()(),_u(160,`br`),Jc(161,`table`,21)(162,`tr`,9)(163,`th`,10)(164,`div`,11)(165,`h4`)(166,`span`,12),Mk(167,` setA11yDefaultSizeSmall `),Kg()()()()(),Jc(168,`tr`,13)(169,`td`,13)(170,`p`),Mk(171,`Define o tamanho `),Jc(172,`code`),Mk(173,`small`),Kg(),Mk(174,` como padr\xE3o para componentes que n\xE3o possuem um tamanho definido. Essa configura\xE7\xE3o \xE9
aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),Jc(175,`code`),Mk(176,`AA`),Kg(),Mk(177,`. O valor definido \xE9 salvo no
`),Jc(178,`code`),Mk(179,`localStorage`),Kg(),Mk(180,` sob a chave `),Jc(181,`code`),Mk(182,`po-default-size`),Kg(),Mk(183,` e o atributo `),Jc(184,`code`),Mk(185,`data-default-size`),Kg(),Mk(186,` \xE9 adicionado ao elemento HTML
para que os componentes possam aplicar o tamanho`),Kg(),Jc(187,`p`),Mk(188,`Exemplo de uso:`),Kg(),Jc(189,`pre`)(190,`code`,22),Mk(191,`import { poThemeDefault, PoThemeService, PoThemeTypeEnum, PoThemeA11yEnum } from '@po-ui/ng-components';

private themeService = inject(PoThemeService);

constructor() {
 this.themeService.setA11yDefaultSizeSmall(true);
 this.themeService.setTheme(poThemeDefault, PoThemeTypeEnum.light, PoThemeA11yEnum.AA);
}
`),Kg()(),Jc(192,`blockquote`)(193,`p`),Mk(194,`Para garantir que o tamanho `),Jc(195,`code`),Mk(196,`small`),Kg(),Mk(197,` seja aplicado corretamente a todos os componentes, recomendamos
definir esta configura\xE7\xE3o `),Jc(198,`strong`),Mk(199,`junto com o nível de acessibilidade `),Jc(200,`code`),Mk(201,`AA`),Kg(),Mk(202,` na inicialização da aplicação`),Kg(),Mk(203,`.
Para ajustar a densidade visual dos componentes agrupadores (como pages, container, etc.), utilize tamb\xE9m
o m\xE9todo `),Jc(204,`code`),Mk(205,`setDensityMode`),Kg(),Mk(206,` conforme necessário.`),Kg()()()()(),Jc(207,`h5`)(208,`b`),Mk(209,`Parâmetros`),Kg()(),Jc(210,`table`,14)(211,`tr`,15)(212,`th`,16),Mk(213,`Nome`),Kg(),Jc(214,`th`,16),Mk(215,`Tipo`),Kg(),Jc(216,`th`,16),Mk(217,`Descrição`),Kg()(),Jc(218,`tr`,9)(219,`td`,17),Mk(220,` enable`),Kg(),Jc(221,`td`,18)(222,`code`,19),Mk(223,` boolean `),Kg()(),Jc(224,`td`,13)(225,`p`),Mk(226,`Habilita ou desabilita o tamanho `),Jc(227,`code`),Mk(228,`small`),Kg(),Mk(229,` globalmente.`),Kg()()()(),_u(230,`br`),Jc(231,`table`,23)(232,`tr`,9)(233,`th`,10)(234,`div`,11)(235,`h4`)(236,`span`,12),Mk(237,` getDensityMode `),Kg()()()()(),Jc(238,`tr`,13)(239,`td`,13)(240,`p`),Mk(241,`Retorna o modo de adensamento dos componentes agrupadores.
Se n\xE3o estiver configurado, retorna `),Jc(242,`code`),Mk(243,`medium`),Kg(),Mk(244,` como padrão.`),Kg()()()(),Jc(245,`h5`)(246,`b`),Mk(247,`Retorno`),Kg()(),Jc(248,`table`,14)(249,`tr`,15)(250,`th`,16),Mk(251,`Tipo`),Kg(),Jc(252,`th`,16),Mk(253,`Descrição`),Kg()(),Jc(254,`tr`,9)(255,`td`,18)(256,`code`,19),Mk(257,`PoDensityMode`),Kg()(),Jc(258,`td`,13)(259,`p`),Mk(260,`O modo de adensamento, que pode ser `),Jc(261,`code`),Mk(262,`small`),Kg(),Mk(263,` ou `),Jc(264,`code`),Mk(265,`medium`),Kg(),Mk(266,`.`),Kg()()()(),_u(267,`br`),Jc(268,`table`,24)(269,`tr`,9)(270,`th`,10)(271,`div`,11)(272,`h4`)(273,`span`,12),Mk(274,` setDensityMode `),Kg()()()()(),Jc(275,`tr`,13)(276,`td`,13)(277,`p`),Mk(278,`Aplica o modo de adensamento compacto (`),Jc(279,`code`),Mk(280,`small`),Kg(),Mk(281,`) ou espaçoso (`),Jc(282,`code`),Mk(283,`medium`),Kg(),Mk(284,`) para os componentes agrupadores,
independentemente do n\xEDvel de acessibilidade. O valor definido \xE9 salvo no `),Jc(285,`code`),Mk(286,`localStorage`),Kg(),Mk(287,` sob a chave
`),Jc(288,`code`),Mk(289,`po-density-mode`),Kg(),Mk(290,`.`),Kg()()()(),Jc(291,`h5`)(292,`b`),Mk(293,`Parâmetros`),Kg()(),Jc(294,`table`,14)(295,`tr`,15)(296,`th`,16),Mk(297,`Nome`),Kg(),Jc(298,`th`,16),Mk(299,`Tipo`),Kg(),Jc(300,`th`,16),Mk(301,`Descrição`),Kg()(),Jc(302,`tr`,9)(303,`td`,17),Mk(304,` mode`),Kg(),Jc(305,`td`,18)(306,`code`,25),Mk(307,` 'small' `),Kg(),Jc(308,`code`,26),Mk(309,` 'medium' `),Kg()(),Jc(310,`td`,13)(311,`p`),Mk(312,`Define o modo de densidade: `),Jc(313,`code`),Mk(314,`small`),Kg(),Mk(315,` para compacto, `),Jc(316,`code`),Mk(317,`medium`),Kg(),Mk(318,` para espa\xE7oso.
O valor padr\xE3o \xE9 `),Jc(319,`code`),Mk(320,`medium`),Kg(),Mk(321,`.`),Kg()()()(),_u(322,`br`),Jc(323,`table`,27)(324,`tr`,9)(325,`th`,10)(326,`div`,11)(327,`h4`)(328,`span`,12),Mk(329,` persistThemeActive `),Kg()()()()(),Jc(330,`tr`,13)(331,`td`,13)(332,`p`),Mk(333,`Restaura e aplica as prefer\xEAncias visuais do usu\xE1rio para o tema da aplica\xE7\xE3o, garantindo que essas prefer\xEAncias
sejam persistidas no `),Jc(334,`code`),Mk(335,`localStorage`),Kg(),Mk(336,` para uso em recarregamentos futuros.`),Kg()()()(),Jc(337,`h5`)(338,`b`),Mk(339,`Retorno`),Kg()(),Jc(340,`table`,14)(341,`tr`,15)(342,`th`,16),Mk(343,`Tipo`),Kg(),Jc(344,`th`,16),Mk(345,`Descrição`),Kg()(),Jc(346,`tr`,9)(347,`td`,18)(348,`code`,19),Mk(349,`PoTheme`),Kg()(),Jc(350,`td`,13)(351,`p`),Mk(352,`O tema atualmente aplicado.`),Kg()()()(),_u(353,`br`),Jc(354,`table`,28)(355,`tr`,9)(356,`th`,10)(357,`div`,11)(358,`h4`)(359,`span`,12),Mk(360,` changeCurrentThemeType `),Kg()()()()(),Jc(361,`tr`,13)(362,`td`,13)(363,`p`),Mk(364,`Altera o tipo do tema armazenado e aplica os novos estilos ao documento.`),Kg(),Jc(365,`p`),Mk(366,`Este método altera o tipo do tema armazenado ativo (light/dark)`),Kg()()()(),Jc(367,`h5`)(368,`b`),Mk(369,`Parâmetros`),Kg()(),Jc(370,`table`,14)(371,`tr`,15)(372,`th`,16),Mk(373,`Nome`),Kg(),Jc(374,`th`,16),Mk(375,`Tipo`),Kg(),Jc(376,`th`,16),Mk(377,`Descrição`),Kg()(),Jc(378,`tr`,9)(379,`td`,17),Mk(380,` themeType`),Kg(),Jc(381,`td`,18)(382,`code`,19),Mk(383,` PoThemeTypeEnum `),Kg()(),Jc(384,`td`,13)(385,`p`),Mk(386,`O tipo de tema a ser aplicado, light ou dark.`),Kg()()()(),_u(387,`br`),Jc(388,`table`,29)(389,`tr`,9)(390,`th`,10)(391,`div`,11)(392,`h4`)(393,`span`,12),Mk(394,` cleanThemeActive `),Kg()()()()(),Jc(395,`tr`,13)(396,`td`,13)(397,`p`),Mk(398,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),Kg()()()(),Jc(399,`h5`)(400,`b`),Mk(401,`Parâmetros`),Kg()(),Jc(402,`table`,14)(403,`tr`,15)(404,`th`,16),Mk(405,`Nome`),Kg(),Jc(406,`th`,16),Mk(407,`Tipo`),Kg(),Jc(408,`th`,16),Mk(409,`Descrição`),Kg()(),Jc(410,`tr`,9)(411,`td`,17),Mk(412,` persistPreference`),Kg(),Jc(413,`td`,18)(414,`code`,19),Mk(415,` boolean `),Kg()(),Jc(416,`td`,13)(417,`p`),Mk(418,`(Opcional) Define se a preferência de tema não deve ser mantida no localStorage para persistência. `),Jc(419,`code`),Mk(420,`true`),Kg(),Mk(421,` para remover, `),Jc(422,`code`),Mk(423,`false`),Kg(),Mk(424,` para manter.`),Kg()()()(),_u(425,`br`),Jc(426,`table`,30)(427,`tr`,9)(428,`th`,10)(429,`div`,11)(430,`h4`)(431,`span`,12),Mk(432,` getThemeActive `),Kg()()()()(),Jc(433,`tr`,13)(434,`td`,13)(435,`p`),Mk(436,`Retorna o tema ativo como um observable. Este método funcionará apenas se o tema estiver armazenado no `),Jc(437,`code`),Mk(438,`localStorage`),Kg(),Mk(439,`.`),Kg()()()(),Jc(440,`h5`)(441,`b`),Mk(442,`Retorno`),Kg()(),Jc(443,`table`,14)(444,`tr`,15)(445,`th`,16),Mk(446,`Tipo`),Kg(),Jc(447,`th`,16),Mk(448,`Descrição`),Kg()(),Jc(449,`tr`,9)(450,`td`,18)(451,`code`,19),Mk(452,`PoTheme`),Kg()(),Jc(453,`td`,13)(454,`p`),Mk(455,`Tema ativo.`),Kg()()()(),_u(456,`br`),Jc(457,`table`,31)(458,`tr`,9)(459,`th`,10)(460,`div`,11)(461,`h4`)(462,`span`,12),Mk(463,` setDefaultTheme `),Kg()()()()(),Jc(464,`tr`,13)(465,`td`,13)(466,`p`),Mk(467,`Define o tema atual como o tema "PoUI Padrão".`),Kg()()()(),Jc(468,`h5`)(469,`b`),Mk(470,`Parâmetros`),Kg()(),Jc(471,`table`,14)(472,`tr`,15)(473,`th`,16),Mk(474,`Nome`),Kg(),Jc(475,`th`,16),Mk(476,`Tipo`),Kg(),Jc(477,`th`,16),Mk(478,`Descrição`),Kg()(),Jc(479,`tr`,9)(480,`td`,17),Mk(481,` type`),Kg(),Jc(482,`td`,18)(483,`code`,19),Mk(484,` PoThemeTypeEnum `),Kg()(),Jc(485,`td`,13)(486,`p`),Mk(487,`O tipo de Tema a ser aplicado, light / dark.`),Kg()()()(),_u(488,`br`),Jc(489,`table`,32)(490,`tr`,9)(491,`th`,10)(492,`div`,11)(493,`h4`)(494,`span`,12),Mk(495,` setThemeType `),Kg()()()()(),Jc(496,`tr`,13)(497,`td`,13)(498,`p`),Mk(499,`Define o tipo (light/dark) quando um tema está sendo aplicado.`),Kg()()()(),Jc(500,`h5`)(501,`b`),Mk(502,`Parâmetros`),Kg()(),Jc(503,`table`,14)(504,`tr`,15)(505,`th`,16),Mk(506,`Nome`),Kg(),Jc(507,`th`,16),Mk(508,`Tipo`),Kg(),Jc(509,`th`,16),Mk(510,`Descrição`),Kg()(),Jc(511,`tr`,9)(512,`td`,17),Mk(513,` theme`),Kg(),Jc(514,`td`,18)(515,`code`,19),Mk(516,` PoTheme `),Kg()(),Jc(517,`td`,13)(518,`p`),Mk(519,`Objeto contendo as definições de tema a serem aplicadas no componente.`),Kg()()(),Jc(520,`tr`,9)(521,`td`,17),Mk(522,` themeType`),Kg(),Jc(523,`td`,18)(524,`code`,19),Mk(525,` PoThemeTypeEnum `),Kg()(),Jc(526,`td`,13)(527,`p`),Mk(528,`(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padrão, o tema claro é aplicado.`),Kg()()()(),_u(529,`br`),Jc(530,`table`,33)(531,`tr`,9)(532,`th`,10)(533,`div`,11)(534,`h4`)(535,`span`,12),Mk(536,` setCurrentThemeType `),Kg()()()()(),Jc(537,`tr`,13)(538,`td`,13)(539,`p`),Mk(540,`Define o tipo (light/dark) para um tema já ativo.`),Kg()()()(),Jc(541,`h5`)(542,`b`),Mk(543,`Parâmetros`),Kg()(),Jc(544,`table`,14)(545,`tr`,15)(546,`th`,16),Mk(547,`Nome`),Kg(),Jc(548,`th`,16),Mk(549,`Tipo`),Kg(),Jc(550,`th`,16),Mk(551,`Descrição`),Kg()(),Jc(552,`tr`,9)(553,`td`,17),Mk(554,` themeType`),Kg(),Jc(555,`td`,18)(556,`code`,19),Mk(557,` PoThemeTypeEnum `),Kg()(),Jc(558,`td`,13)(559,`p`),Mk(560,`(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padrão, o tema claro é aplicado.`),Kg()()()(),_u(561,`br`),Jc(562,`table`,34)(563,`tr`,9)(564,`th`,10)(565,`div`,11)(566,`h4`)(567,`span`,12),Mk(568,` setThemeA11y `),Kg()()()()(),Jc(569,`tr`,13)(570,`td`,13)(571,`p`),Mk(572,`Define o nível de acessibilidade quando um tema está sendo aplicado.`),Kg()()()(),Jc(573,`h5`)(574,`b`),Mk(575,`Parâmetros`),Kg()(),Jc(576,`table`,14)(577,`tr`,15)(578,`th`,16),Mk(579,`Nome`),Kg(),Jc(580,`th`,16),Mk(581,`Tipo`),Kg(),Jc(582,`th`,16),Mk(583,`Descrição`),Kg()(),Jc(584,`tr`,9)(585,`td`,17),Mk(586,` theme`),Kg(),Jc(587,`td`,18)(588,`code`,19),Mk(589,` PoTheme `),Kg()(),Jc(590,`td`,13)(591,`p`),Mk(592,`Objeto contendo as definições de tema a serem aplicadas no componente.`),Kg()()(),Jc(593,`tr`,9)(594,`td`,17),Mk(595,` a11y`),Kg(),Jc(596,`td`,18)(597,`code`,19),Mk(598,` PoThemeA11yEnum `),Kg()(),Jc(599,`td`,13)(600,`p`),Mk(601,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),Kg()()()(),_u(602,`br`),Jc(603,`table`,35)(604,`tr`,9)(605,`th`,10)(606,`div`,11)(607,`h4`)(608,`span`,12),Mk(609,` setCurrentThemeA11y `),Kg()()()()(),Jc(610,`tr`,13)(611,`td`,13)(612,`p`),Mk(613,`Define o nível de acessibilidade para um tema já ativo.`),Kg()()()(),Jc(614,`h5`)(615,`b`),Mk(616,`Parâmetros`),Kg()(),Jc(617,`table`,14)(618,`tr`,15)(619,`th`,16),Mk(620,`Nome`),Kg(),Jc(621,`th`,16),Mk(622,`Tipo`),Kg(),Jc(623,`th`,16),Mk(624,`Descrição`),Kg()(),Jc(625,`tr`,9)(626,`td`,17),Mk(627,` a11y`),Kg(),Jc(628,`td`,18)(629,`code`,19),Mk(630,` PoThemeA11yEnum `),Kg()(),Jc(631,`td`,13)(632,`p`),Mk(633,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),Kg()()()(),_u(634,`br`),Jc(635,`h3`),Mk(636,`Interfaces`),Kg(),Jc(637,`h4`,36)(638,`code`,5),Mk(639,`PoThemeColor`),Kg()(),Jc(640,`div`,2)(641,`p`),Mk(642,`Interface para representar as cores do tema.`),Kg()(),Jc(643,`h4`,7),Mk(644,`Propriedades`),Kg(),Jc(645,`table`,14)(646,`tr`,15)(647,`th`,16),Mk(648,`Nome`),Kg(),Jc(649,`th`,16),Mk(650,`Tipo`),Kg(),Jc(651,`th`,16),Mk(652,`Descrição`),Kg()(),Jc(653,`tr`,37)(654,`td`,17)(655,`div`,11)(656,`span`,12),Mk(657,` action`),_u(658,`br`),Kg()()(),Jc(659,`td`,18)(660,`code`,38),Mk(661,`PoThemeColorAction`),Kg()(),Jc(662,`td`,13)(663,`em`)(664,`strong`),Mk(665,`(opcional)`),Kg()(),Jc(666,`p`),Mk(667,`Cores da Action a serem aplicadas.`),Kg(),Jc(668,`p`),Mk(669,`Exemplo de uso:`),Kg(),Jc(670,`pre`)(671,`code`,39),Mk(672,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),Kg()()()(),Jc(673,`tr`,40)(674,`td`,17)(675,`div`,11)(676,`span`,12),Mk(677,` brand`),_u(678,`br`),Kg()()(),Jc(679,`td`,18)(680,`code`,41),Mk(681,`poThemeColorBrand`),Kg()(),Jc(682,`td`,13)(683,`em`)(684,`strong`),Mk(685,`(opcional)`),Kg()(),Jc(686,`p`),Mk(687,`Cores da Brand a serem aplicadas.`),Kg(),Jc(688,`p`),Mk(689,`Exemplo de uso:`),Kg(),Jc(690,`pre`)(691,`code`,22),Mk(692,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),Kg()()()(),Jc(693,`tr`,42)(694,`td`,17)(695,`div`,11)(696,`span`,12),Mk(697,` categorical`),_u(698,`br`),Kg()()(),Jc(699,`td`,18)(700,`code`,43),Mk(701,`PoThemeColorCategorical`),Kg()(),Jc(702,`td`,13)(703,`em`)(704,`strong`),Mk(705,`(opcional)`),Kg()(),Jc(706,`p`),Mk(707,`Cores da Categorical a serem aplicadas.`),Kg(),Jc(708,`p`),Mk(709,`Exemplo de uso:`),Kg(),Jc(710,`pre`)(711,`code`,22),Mk(712,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),Kg()()()(),Jc(713,`tr`,44)(714,`td`,17)(715,`div`,11)(716,`span`,12),Mk(717,` categorical-overlay`),_u(718,`br`),Kg()()(),Jc(719,`td`,18)(720,`code`,43),Mk(721,`PoThemeColorCategorical`),Kg()(),Jc(722,`td`,13)(723,`em`)(724,`strong`),Mk(725,`(opcional)`),Kg()(),Jc(726,`p`),Mk(727,`Cores da Categorical a serem aplicadas.`),Kg(),Jc(728,`p`),Mk(729,`Exemplo de uso:`),Kg(),Jc(730,`pre`)(731,`code`,22),Mk(732,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),Kg()()()(),Jc(733,`tr`,45)(734,`td`,17)(735,`div`,11)(736,`span`,12),Mk(737,` neutral`),_u(738,`br`),Kg()()(),Jc(739,`td`,18)(740,`code`,46),Mk(741,`PoThemeColorNeutral`),Kg()(),Jc(742,`td`,13)(743,`em`)(744,`strong`),Mk(745,`(opcional)`),Kg()(),Jc(746,`p`),Mk(747,`Cores Neutrals a serem aplicadas.`),Kg(),Jc(748,`p`),Mk(749,`Exemplo de uso:`),Kg(),Jc(750,`pre`)(751,`code`,22),Mk(752,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),Kg()()()()(),Jc(753,`h4`,47)(754,`code`,5),Mk(755,`PoThemeColorAction`),Kg()(),Jc(756,`div`,2)(757,`p`),Mk(758,`Interface para as cores de ação do tema.`),Kg()(),Jc(759,`h4`,7),Mk(760,`Propriedades`),Kg(),Jc(761,`table`,14)(762,`tr`,15)(763,`th`,16),Mk(764,`Nome`),Kg(),Jc(765,`th`,16),Mk(766,`Tipo`),Kg(),Jc(767,`th`,16),Mk(768,`Descrição`),Kg()(),Jc(769,`tr`,48)(770,`td`,17)(771,`div`,11)(772,`span`,12),Mk(773,` default`),_u(774,`br`),Kg()()(),Jc(775,`td`,18)(776,`code`,49),Mk(777,`string`),Kg()(),Jc(778,`td`,13)(779,`em`)(780,`strong`),Mk(781,`(opcional)`),Kg()(),Jc(782,`p`),Mk(783,`Cores da Action 'Default'.`),Kg(),Jc(784,`p`),Mk(785,`Exemplo de uso:`),Kg(),Jc(786,`pre`)(787,`code`,22),Mk(788,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),Kg()()()(),Jc(789,`tr`,50)(790,`td`,17)(791,`div`,11)(792,`span`,12),Mk(793,` disabled`),_u(794,`br`),Kg()()(),Jc(795,`td`,18)(796,`code`,49),Mk(797,`string`),Kg()(),Jc(798,`td`,13)(799,`em`)(800,`strong`),Mk(801,`(opcional)`),Kg()(),Jc(802,`p`),Mk(803,`Cores da Action de 'disabled'.`),Kg(),Jc(804,`p`),Mk(805,`Exemplo de uso:`),Kg(),Jc(806,`pre`)(807,`code`,22),Mk(808,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),Kg()()()(),Jc(809,`tr`,51)(810,`td`,17)(811,`div`,11)(812,`span`,12),Mk(813,` focus`),_u(814,`br`),Kg()()(),Jc(815,`td`,18)(816,`code`,49),Mk(817,`string`),Kg()(),Jc(818,`td`,13)(819,`em`)(820,`strong`),Mk(821,`(opcional)`),Kg()(),Jc(822,`p`),Mk(823,`Cores da Action para 'focus'.`),Kg(),Jc(824,`p`),Mk(825,`Exemplo de uso:`),Kg(),Jc(826,`pre`)(827,`code`,22),Mk(828,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),Kg()()()(),Jc(829,`tr`,52)(830,`td`,17)(831,`div`,11)(832,`span`,12),Mk(833,` hover`),_u(834,`br`),Kg()()(),Jc(835,`td`,18)(836,`code`,49),Mk(837,`string`),Kg()(),Jc(838,`td`,13)(839,`em`)(840,`strong`),Mk(841,`(opcional)`),Kg()(),Jc(842,`p`),Mk(843,`Cores da Action para 'hover'.`),Kg(),Jc(844,`p`),Mk(845,`Exemplo de uso:`),Kg(),Jc(846,`pre`)(847,`code`,22),Mk(848,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),Kg()()()(),Jc(849,`tr`,53)(850,`td`,17)(851,`div`,11)(852,`span`,12),Mk(853,` pressed`),_u(854,`br`),Kg()()(),Jc(855,`td`,18)(856,`code`,49),Mk(857,`string`),Kg()(),Jc(858,`td`,13)(859,`em`)(860,`strong`),Mk(861,`(opcional)`),Kg()(),Jc(862,`p`),Mk(863,`Cores da Action para 'pressed'.`),Kg(),Jc(864,`p`),Mk(865,`Exemplo de uso:`),Kg(),Jc(866,`pre`)(867,`code`,22),Mk(868,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),Kg()()()()(),Jc(869,`h4`,54)(870,`code`,5),Mk(871,`PoThemeColorNeutral`),Kg()(),Jc(872,`div`,2)(873,`p`),Mk(874,`Interface para as cores neutras do tema.`),Kg()(),Jc(875,`h4`,7),Mk(876,`Propriedades`),Kg(),Jc(877,`table`,14)(878,`tr`,15)(879,`th`,16),Mk(880,`Nome`),Kg(),Jc(881,`th`,16),Mk(882,`Tipo`),Kg(),Jc(883,`th`,16),Mk(884,`Descrição`),Kg()(),Jc(885,`tr`,55)(886,`td`,17)(887,`div`,11)(888,`span`,12),Mk(889,` dark`),_u(890,`br`),Kg()()(),Jc(891,`td`,18)(892,`code`,56),Mk(893,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),Kg()(),Jc(894,`td`,13)(895,`em`)(896,`strong`),Mk(897,`(opcional)`),Kg()(),Jc(898,`p`),Mk(899,`Cores Neutrals do tipo 'dark'.`),Kg(),Jc(900,`p`),Mk(901,`Exemplo de uso:`),Kg(),Jc(902,`pre`)(903,`code`,22),Mk(904,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),Kg()()()(),Jc(905,`tr`,57)(906,`td`,17)(907,`div`,11)(908,`span`,12),Mk(909,` light`),_u(910,`br`),Kg()()(),Jc(911,`td`,18)(912,`code`,58),Mk(913,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),Kg()(),Jc(914,`td`,13)(915,`em`)(916,`strong`),Mk(917,`(opcional)`),Kg()(),Jc(918,`p`),Mk(919,`Cores Neutrals do tipo 'light'.`),Kg(),Jc(920,`p`),Mk(921,`Exemplo de uso:`),Kg(),Jc(922,`pre`)(923,`code`,22),Mk(924,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),Kg()()()(),Jc(925,`tr`,59)(926,`td`,17)(927,`div`,11)(928,`span`,12),Mk(929,` mid`),_u(930,`br`),Kg()()(),Jc(931,`td`,18)(932,`code`,60),Mk(933,`{ '40'?: string; '60'?: string;
}`),Kg()(),Jc(934,`td`,13)(935,`em`)(936,`strong`),Mk(937,`(opcional)`),Kg()(),Jc(938,`p`),Mk(939,`Cores Neutrals do tipo 'mid'.`),Kg(),Jc(940,`p`),Mk(941,`Exemplo de uso:`),Kg(),Jc(942,`pre`)(943,`code`,22),Mk(944,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),Kg()()()()(),Jc(945,`h4`,61)(946,`code`,5),Mk(947,`PoThemeTokens`),Kg()(),Jc(948,`div`,2)(949,`p`),Mk(950,`Interface para o tema da aplicação.`),Kg()(),Jc(951,`h4`,62)(952,`code`,5),Mk(953,`PoThemeToken`),Kg()(),Jc(954,`div`,2)(955,`p`),Mk(956,`Interface para os tokens do Tema.`),Kg()(),Jc(957,`h4`,7),Mk(958,`Propriedades`),Kg(),Jc(959,`table`,14)(960,`tr`,15)(961,`th`,16),Mk(962,`Nome`),Kg(),Jc(963,`th`,16),Mk(964,`Tipo`),Kg(),Jc(965,`th`,16),Mk(966,`Descrição`),Kg()(),Jc(967,`tr`,63)(968,`td`,17)(969,`div`,11)(970,`span`,12),Mk(971,` color`),_u(972,`br`),Kg()()(),Jc(973,`td`,18)(974,`code`,64),Mk(975,`PoThemeColor`),Kg()(),Jc(976,`td`,13)(977,`em`)(978,`strong`),Mk(979,`(opcional)`),Kg()(),Jc(980,`p`),Mk(981,`Tokens do tipo 'color'`),Kg()()(),Jc(982,`tr`,65)(983,`td`,17)(984,`div`,11)(985,`span`,12),Mk(986,` onRoot`),_u(987,`br`),Kg()()(),Jc(988,`td`,18)(989,`code`,66),Mk(990,`DynamicProperties`),Kg()(),Jc(991,`td`,13)(992,`em`)(993,`strong`),Mk(994,`(opcional)`),Kg()(),Jc(995,`p`),Mk(996,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),Jc(997,`code`),Mk(998,`:root`),Kg()(),Jc(999,`p`),Mk(1e3,`Exemplo de uso:`),Kg(),Jc(1001,`pre`)(1002,`code`,22),Mk(1003,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),Kg()()()(),Jc(1004,`tr`,67)(1005,`td`,17)(1006,`div`,11)(1007,`span`,12),Mk(1008,` perComponent`),_u(1009,`br`),Kg()()(),Jc(1010,`td`,18)(1011,`code`,66),Mk(1012,`DynamicProperties`),Kg()(),Jc(1013,`td`,13)(1014,`em`)(1015,`strong`),Mk(1016,`(opcional)`),Kg()(),Jc(1017,`p`),Mk(1018,`Tokens do tipo 'perComponent'`),Kg(),Jc(1019,`p`),Mk(1020,`Exemplo de uso:`),Kg(),Jc(1021,`pre`)(1022,`code`,22),Mk(1023,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),Kg()()()()(),Jc(1024,`h4`,68)(1025,`code`,5),Mk(1026,`PoTheme`),Kg()(),Jc(1027,`div`,2)(1028,`p`),Mk(1029,`Interface para o método `),Jc(1030,`code`),Mk(1031,`setTheme()`),Kg(),Mk(1032,`.`),Kg()(),Jc(1033,`h4`,7),Mk(1034,`Propriedades`),Kg(),Jc(1035,`table`,14)(1036,`tr`,15)(1037,`th`,16),Mk(1038,`Nome`),Kg(),Jc(1039,`th`,16),Mk(1040,`Tipo`),Kg(),Jc(1041,`th`,16),Mk(1042,`Descrição`),Kg()(),Jc(1043,`tr`,69)(1044,`td`,17)(1045,`div`,11)(1046,`span`,12),Mk(1047,` active`),_u(1048,`br`),Kg()()(),Jc(1049,`td`,18)(1050,`code`,70),Mk(1051,`PoThemeTypeEnum `),Kg(),Jc(1052,`code`,71),Mk(1053,` PoThemeActive`),Kg()(),Jc(1054,`td`,13)(1055,`em`)(1056,`strong`),Mk(1057,`(opcional)`),Kg()(),Jc(1058,`p`),Mk(1059,`Tipo e nível de acessibilidade de tema ativo`),Kg()()(),Jc(1060,`tr`,72)(1061,`td`,17)(1062,`div`,11)(1063,`span`,12),Mk(1064,` inheritDefaultStyle`),_u(1065,`br`),Kg()()(),Jc(1066,`td`,18)(1067,`code`,73),Mk(1068,`boolean`),Kg()(),Jc(1069,`td`,13)(1070,`em`)(1071,`strong`),Mk(1072,`(opcional)`),Kg()(),Jc(1073,`p`),Mk(1074,`Define se o tema herda a identidade visual do tema padrão do PO UI.`),Kg(),Jc(1075,`p`),Mk(1076,`A identidade visual corresponde aos arredondamentos dos componentes e \xE0 cor de fundo da p\xE1gina definidos
pelo tema padr\xE3o. Os estilos estruturais (ex.: espessura de outline, adensamento e ajustes de light/dark)
s\xE3o aplicados em qualquer caso.`),Kg(),Jc(1077,`p`),Mk(1078,`As fam\xEDlias de fonte do tema padr\xE3o n\xE3o s\xE3o controladas por esta propriedade: elas s\xE3o definidas pelo CSS
do `),Jc(1079,`code`),Mk(1080,`@po-ui/style`),Kg(),Mk(1081,`. Um tema com fontes próprias deve declará-las nos seus tokens.`),Kg(),Jc(1082,`p`),Mk(1083,`Utilize `),Jc(1084,`code`),Mk(1085,`false`),Kg(),Mk(1086,` quando o tema define a própria identidade visual e não deve receber a do tema padrão.`),Kg()()(),Jc(1087,`tr`,74)(1088,`td`,17)(1089,`div`,11)(1090,`span`,12),Mk(1091,` name`),_u(1092,`br`),Kg()()(),Jc(1093,`td`,18)(1094,`code`,49),Mk(1095,`string`),Kg()(),Jc(1096,`td`,13)(1097,`p`),Mk(1098,`Nome para o tema:
Ex.: default, totvs, sunset...`),Kg()()(),Jc(1099,`tr`,75)(1100,`td`,17)(1101,`div`,11)(1102,`span`,12),Mk(1103,` type`),_u(1104,`br`),Kg()()(),Jc(1105,`td`,18)(1106,`code`,76),Mk(1107,`PoThemeType `),Kg(),Jc(1108,`code`,77),Mk(1109,` Array<PoThemeType>`),Kg()(),Jc(1110,`td`,13)(1111,`p`),Mk(1112,`Tipo de tema:`),Kg(),Jc(1113,`ul`)(1114,`li`),Mk(1115,`light`),Kg(),Jc(1116,`li`),Mk(1117,`dark`),Kg()()()()(),Jc(1118,`h3`),Mk(1119,`Enums`),Kg(),Jc(1120,`h4`,78)(1121,`code`,5),Mk(1122,`PoThemeA11yEnum`),Kg()(),Jc(1123,`div`,2)(1124,`p`),Mk(1125,`Enum para configurar o nível de acessibilidade dos componentes através do serviço de tema.`),Kg(),Jc(1126,`pre`)(1127,`code`),Mk(1128,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),Kg()()(),Jc(1129,`h4`,7),Mk(1130,`Propriedades`),Kg(),Jc(1131,`table`,14)(1132,`tr`,15)(1133,`th`,16),Mk(1134,`Nome`),Kg(),Jc(1135,`th`,16),Mk(1136,`Descrição`),Kg()(),Jc(1137,`tr`,79)(1138,`td`,17)(1139,`div`,11)(1140,`span`,12),Mk(1141,` AA`),_u(1142,`br`),Kg()()(),Jc(1143,`td`,13)(1144,`p`),Mk(1145,`Nível de acessibilidade AA.`),Kg(),Jc(1146,`ul`)(1147,`li`),Mk(1148,`Define a espessura do `),Jc(1149,`code`),Mk(1150,`outline`),Kg(),Mk(1151,` para `),Jc(1152,`strong`),Mk(1153,`2px`),Kg(),Mk(1154,`.`),Kg(),Jc(1155,`li`),Mk(1156,`Disponibiliza o tamanho `),Jc(1157,`code`),Mk(1158,`small`),Kg(),Mk(1159,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),Kg()()()(),Jc(1160,`tr`,80)(1161,`td`,17)(1162,`div`,11)(1163,`span`,12),Mk(1164,` AAA`),_u(1165,`br`),Kg()()(),Jc(1166,`td`,13)(1167,`p`),Mk(1168,`Nível de acessibilidade AAA.`),Kg(),Jc(1169,`ul`)(1170,`li`),Mk(1171,`Define a espessura do `),Jc(1172,`code`),Mk(1173,`outline`),Kg(),Mk(1174,` para `),Jc(1175,`strong`),Mk(1176,`4px`),Kg(),Mk(1177,`.`),Kg(),Jc(1178,`li`),Mk(1179,`Não disponibiliza o tamanho `),Jc(1180,`code`),Mk(1181,`small`),Kg(),Mk(1182,` para componentes de formulário.`),Kg()()()()(),Jc(1183,`h4`,81)(1184,`code`,5),Mk(1185,`PoThemeTypeEnum`),Kg()(),Jc(1186,`div`,2)(1187,`p`),Mk(1188,`Enum utilizado para configurar o tipo de tema suportado, é possível alternar entre os tipos definidos.`),Kg(),Jc(1189,`pre`)(1190,`code`),Mk(1191,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),Kg()()(),Jc(1192,`h4`,7),Mk(1193,`Propriedades`),Kg(),Jc(1194,`table`,14)(1195,`tr`,15)(1196,`th`,16),Mk(1197,`Nome`),Kg(),Jc(1198,`th`,16),Mk(1199,`Descrição`),Kg()(),Jc(1200,`tr`,82)(1201,`td`,17)(1202,`div`,11)(1203,`span`,12),Mk(1204,` light`),_u(1205,`br`),Kg()()(),Jc(1206,`td`,13)(1207,`p`),Mk(1208,`Define o tema como claro.`),Kg()()(),Jc(1209,`tr`,83)(1210,`td`,17)(1211,`div`,11)(1212,`span`,12),Mk(1213,` dark`),_u(1214,`br`),Kg()()(),Jc(1215,`td`,13)(1216,`p`),Mk(1217,`Define o tema como escuro.`),Kg()()()()())},encapsulation:2,changeDetection:1})}return a})();function ke(a,Me){if(a&1&&(Jc(0,`div`,1),_u(1,`sample-po-theme-labs-view`),Kg()),a&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var we=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;title=`Theme`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,m){this.route=r,this.router=m}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let m=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:m||`web`,this.title=`Theme · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(m){return new(m||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(m,o){m&1&&(Jc(0,`po-page-default`,0),LO(1,ke,2,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-theme-doc`),Kg()()),m&2&&(Ab(`p-title`,o.title)(`p-actions`,o.actions),wg(),jO(o.hidePoWebSample?-1:1),wg(),Ab(`hidden`,o.activeTab!==`doc`))},dependencies:[Mze,ge,fe],encapsulation:2,changeDetection:1})}return a})()}];var ye=(()=>{class a{static ɵfac=function(m){return new(m||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[GV.forChild(we),GV]})}return a})();var lt=(()=>{class a{static ɵfac=function(m){return new(m||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[M,ye]})}return a})();export{lt as DocPoThemeModule};