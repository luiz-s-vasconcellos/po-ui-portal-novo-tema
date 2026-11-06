import{n as s,t as r}from"./chunk-zystk1pz.js";import{$n as Ak,A as Hoe,Ai as XL,Ar as Ig,Cn as oi,Ct as Yoe,E as H4,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,Hi as ar,Ja as vt,Li as ZO,Mr as Jc,Ni as Y0,Pr as Jm,Qt as fie,Ri as Zg,Rr as Kb,T as Gte,Ti as W0,Tn as pie,Vi as _u,Xr as No,Xt as ere,Yi as eF,Yt as ea,Z as On,Zt as fae,an as hie,ba as o1,bn as o5,di as RZ,dr as Cu,ea as ge,eo as xo,er as An,fa as kZ,fi as Rb,gi as Tk,hi as TZ,ht as U4,jn as sie,jr as JL,kr as I,mn as lie,mt as Tze,no as yk,nr as BO,or as Bk,pn as lb,qi as de,qr as NZ,rt as Qae,va as nk,wa as p,wn as pb,xi as VO,ya as nm,yi as U_,yn as ni,z as KP}from"./chunk-BQaN6dko.js";import{n as P,t as M}from"./main-SRPMFWZC.js";var Te={name:`po-theme`,type:{light:{color:{brand:{"01":{lightest:`#f2eaf6`,lighter:`#d9c2e5`,light:`#bd94d1`,base:`#753399`,dark:`#5b1c7d`,darker:`#400e58`,darkest:`#260538`},"02":{base:`#b92f72`},"03":{base:`#ffd464`}},action:s(r({},sie),{disabled:`var(--color-neutral-mid-40)`}),feedback:s(r({},pie),{info:s(r({},pie.info),{base:`#0079b8`})}),neutral:r({},lie)},onRoot:s(r({},lb.onRoot),{"--color-page-background-color-page":`var(--color-neutral-light-05)`}),perComponent:r({},lb.perComponent)},dark:{color:{brand:{"01":{darkest:`#f2eaf6`,darker:`#d9c2e5`,dark:`#bd94d1`,base:`#753399`,light:`#5b1c7d`,lighter:`#400e58`,lightest:`#260538`},"02":{base:`#b92f72`},"03":{base:`#ffd464`}},action:s(r({},hie),{disabled:`var(--color-neutral-mid-40)`}),feedback:s(r({},fie),{info:s(r({},fie.info),{base:`#0079b8`})}),neutral:{light:{"00":`#1c1c1c`,"05":`#202020`,10:`#2b2b2b`,20:`#3b3b3b`,30:`#5a5a5a`},mid:{40:`#7c7c7c`,60:`#a1a1a1`},dark:{70:`#c1c1c1`,80:`#d9d9d9`,90:`#eeeeee`,95:`#fbfbfb`}}},onRoot:s(r({},pb.onRoot),{"--color-page-background-color-page":`var(--color-neutral-light-05)`}),perComponent:r({},pb.perComponent)}},active:{type:On.light,a11y:ni.AAA}};var ke=[`reactiveFormData`];var ye=(()=>{class a{reactiveFormModal;formBuilder=p(kZ);poTheme=p(KP);themeType=On.light;a11yLevel=ni.AAA;densityMode=`medium`;reactiveForm=this.createReactiveForm();themeTypeOptions=[{label:`Light`,value:On.light},{label:`Dark`,value:On.dark}];a11yLevelOptions=[{label:`AAA`,value:ni.AAA},{label:`AA`,value:ni.AA}];densityModeOptions=[{label:`Medium`,value:`medium`},{label:`Small`,value:`small`}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:`Close`};ngOnInit(){let l=this.poTheme.getThemeActive()?.active;typeof l==`object`&&(this.themeType=l.type??On.light,this.a11yLevel=l.a11y??ni.AAA),this.densityMode=this.poTheme.getDensityMode(),this.poTheme.setTheme(Te,this.themeType,this.a11yLevel),this.applyA11yDefaultSize(),this.poTheme.setDensityMode(this.densityMode)}onThemeTypeChange(l){this.poTheme.setCurrentThemeType(l)}onA11yLevelChange(l){this.poTheme.setCurrentThemeA11y(l),this.applyA11yDefaultSize()}onDensityModeChange(l){this.poTheme.setDensityMode(l)}saveForm(){this.reactiveFormModal.open()}applyA11yDefaultSize(){this.poTheme.setA11yDefaultSizeSmall(this.a11yLevel===ni.AA)}createReactiveForm(){return this.formBuilder.group({name:[``,Jm.compose([Jm.required,Jm.minLength(5),Jm.maxLength(30)])],address:[``,Jm.compose([Jm.required,Jm.minLength(5),Jm.maxLength(50)])],number:[``,Jm.compose([Jm.required,Jm.min(1),Jm.max(99999)])],email:[``,Jm.required],website:[``,Jm.required]})}static ɵfac=function(m){return new(m||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-theme-labs`]],viewQuery:function(m,o){if(m&1&&Cu(ke,7),m&2){let x;No(x=xo())&&(o.reactiveFormModal=x.first)}},standalone:!1,decls:26,vars:14,consts:[[`reactiveFormData`,``],[`p-title`,`Theme settings`],[1,`po-row`],[`name`,`themeType`,`p-label`,`Theme type`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`a11yLevel`,`p-label`,`Accessibility level`,`p-helper`,`AA allows the small size as default for components.`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`densityMode`,`p-label`,`Density`,`p-helper`,`Spacing of grouping components, such as pages, containers and modals.`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-title`,`Example`,1,`po-mt-3`],[3,`formGroup`],[`formControlName`,`name`,`p-clean`,``,`p-icon`,`an an-user`,`p-label`,`Customer name`,1,`po-lg-6`],[`formControlName`,`email`,`p-label`,`Email`,`p-clean`,``,1,`po-lg-6`],[`formControlName`,`address`,`p-clean`,``,`p-icon`,`an an-map-pin`,`p-label`,`Address`,1,`po-lg-4`,`po-md-8`],[`formControlName`,`number`,`p-label`,`Number`,`p-clean`,``,1,`po-lg-2`,`po-md-4`],[`formControlName`,`website`,`p-label`,`Website`,`p-clean`,``,1,`po-lg-6`],[`p-label`,`Save`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Save successful`,3,`p-primary-action`],[`p-label`,`Name`,1,`po-md-12`,3,`p-value`],[`p-label`,`Address`,1,`po-md-6`,3,`p-value`],[`p-label`,`Number`,1,`po-md-6`,3,`p-value`],[`p-label`,`Email`,1,`po-md-6`,3,`p-value`],[`p-label`,`Website`,1,`po-md-6`,3,`p-value`]],template:function(m,o){if(m&1){let x=ZO();Jc(0,`po-widget`,1)(1,`div`,2)(2,`po-radio-group`,3),W0(),Kb(`ngModelChange`,function(p){return U_(x),Ak(o.themeType,p)||(o.themeType=p),H_(p)}),vt(`p-change`,function(p){return o.onThemeTypeChange(p)}),Zg(),Jc(3,`po-radio-group`,4),W0(),Kb(`ngModelChange`,function(p){return U_(x),Ak(o.a11yLevel,p)||(o.a11yLevel=p),H_(p)}),vt(`p-change`,function(p){return o.onA11yLevelChange(p)}),Zg(),Jc(4,`po-radio-group`,5),W0(),Kb(`ngModelChange`,function(p){return U_(x),Ak(o.densityMode,p)||(o.densityMode=p),H_(p)}),vt(`p-change`,function(p){return o.onDensityModeChange(p)}),Zg()()(),Jc(5,`po-widget`,6)(6,`form`,7)(7,`div`,2)(8,`po-input`,8),W0(),Zg(),Jc(9,`po-email`,9),W0(),Zg()(),Jc(10,`div`,2)(11,`po-input`,10),W0(),Zg(),Jc(12,`po-number`,11),W0(),Zg(),Jc(13,`po-url`,12),W0(),Zg()(),Jc(14,`div`,2)(15,`po-button`,13),vt(`p-click`,function(){return o.saveForm()}),Zg()()()(),Jc(16,`po-modal`,14,0)(18,`div`,2),_u(19,`po-info`,15),Zg(),Jc(20,`div`,2),_u(21,`po-info`,16)(22,`po-info`,17),Zg(),Jc(23,`div`,2),_u(24,`po-info`,18)(25,`po-info`,19),Zg()()}m&2&&(Ig(2),Yb(`ngModel`,o.themeType),Rb(`p-options`,o.themeTypeOptions),Y0(),Ig(),Yb(`ngModel`,o.a11yLevel),Rb(`p-options`,o.a11yLevelOptions),Y0(),Ig(),Yb(`ngModel`,o.densityMode),Rb(`p-options`,o.densityModeOptions),Y0(),Ig(2),Rb(`formGroup`,o.reactiveForm),Ig(2),Y0(),Ig(),Y0(),Ig(2),Y0(),Ig(),Y0(),Ig(),Y0(),Ig(2),Rb(`p-disabled`,o.reactiveForm.invalid),Ig(),Rb(`p-primary-action`,o.modalPrimaryAction),Ig(3),Rb(`p-value`,o.reactiveForm.controls.name.value),Ig(2),Rb(`p-value`,o.reactiveForm.controls.address.value),Ig(),Rb(`p-value`,o.reactiveForm.controls.number.value),Ig(2),Rb(`p-value`,o.reactiveForm.controls.email.value),Ig(),Rb(`p-value`,o.reactiveForm.controls.website.value))},dependencies:[NZ,TZ,RZ,JL,XL,o1,oi,o5,U4,Hoe,Gte,H4,Yoe,ea,fae],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(m){return new(m||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-theme-labs-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(m,o){m&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Theme Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-theme-labs/sample-po-theme-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-widget p-title="Theme settings">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-theme-labs/sample-po-theme-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { ChangeDetectionStrategy, Component, inject, OnInit, ViewChild } from '@angular/core';
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
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-theme-labs/sample-po-theme-labs.constant.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import {
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
`),Zg()()()()(),Jc(25,`div`,10),_u(26,`sample-po-theme-labs`),Zg(),_u(27,`hr`)),m&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,_e,o.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ye],encapsulation:2,changeDetection:1})}return a})();var Ae=(()=>{class a{static ɵfac=function(m){return new(m||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-theme-doc`]],standalone:!1,decls:1218,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/theme-service`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`'small'`],[`pan`,``,1,`docs-api-property-type`,`'medium'`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorAction`],[1,`language-javascript`],[`pan`,``,1,`docs-api-property-type`,`poThemeColorBrand`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorCategorical`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorNeutral`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`{`,`'70'?:`,`string;`,`'80'?:`,`string;`,`'90'?:`,`string;`,`'95'?:`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'00'?:`,`string;`,`'05'?:`,`string;`,`'10'?:`,`string;`,`'20'?:`,`string;`,`'30'?:`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'40'?:`,`string;`,`'60'?:`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColor`],[`pan`,``,1,`docs-api-property-type`,`DynamicProperties`],[`pan`,``,1,`docs-api-property-type`,`PoThemeTypeEnum`],[`pan`,``,1,`docs-api-property-type`,`PoThemeActive`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoThemeType`],[`pan`,``,1,`docs-api-property-type`,`Array<PoThemeType>`]],template:function(m,o){m&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoThemeModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do serviço PoThemeService.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Services`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoThemeService`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O serviço `),Jc(15,`code`),Tk(16,`PoThemeService`),Zg(),Tk(17,` permite customizar as cores do tema padrão do `),Jc(18,`code`),Tk(19,`PO-UI`),Zg(),Tk(20,` e definir o n\xEDvel de acessibilidade
mais adequado ao projeto.`),Zg(),Jc(21,`p`),Tk(22,`O nível `),Jc(23,`strong`),Tk(24,`AAA`),Zg(),Tk(25,` (padr\xE3o) garante maior contraste, \xE1reas clic\xE1veis amplas e espa\xE7amentos maiores entre os elementos,
enquanto o n\xEDvel `),Jc(26,`strong`),Tk(27,`AA`),Zg(),Tk(28,` mant\xE9m a conformidade com as diretrizes de acessibilidade, mas com propor\xE7\xF5es mais equilibradas
e contornos mais sutis.`),Zg(),Jc(29,`p`),Tk(30,`O serviço também possibilita configurar a `),Jc(31,`strong`),Tk(32,`densidade de espaçamentos`),Zg(),Tk(33,`, permitindo ajustar o espa\xE7o entre e dentro dos
componentes. Essa configura\xE7\xE3o pode ser utilizada com qualquer n\xEDvel de acessibilidade.`),Zg(),Jc(34,`blockquote`)(35,`p`),Tk(36,`Observação: a customização das cores de `),Jc(37,`code`),Tk(38,`feedback`),Zg(),Tk(39,` não é recomendada por motivos de acessibilidade e usabilidade.`),Zg()(),Jc(40,`blockquote`)(41,`p`),Tk(42,`Para saber mais sobre como customizar o tema padr\xE3o, consulte o item
`),Jc(43,`a`,6),Tk(44,`Customização de Temas usando o serviço PO-UI`),Zg(),Tk(45,` na aba `),Jc(46,`code`),Tk(47,`Guias`),Zg(),Tk(48,`.`),Zg()()(),Jc(49,`h3`,7),Tk(50,`Métodos`),Zg(),Jc(51,`table`,8)(52,`tr`,9)(53,`th`,10)(54,`div`,11)(55,`h4`)(56,`span`,12),Tk(57,` setTheme `),Zg()()()()(),Jc(58,`tr`,13)(59,`td`,13)(60,`p`),Tk(61,`Aplica um tema ao componente de acordo com o tipo de tema e o nível de acessibilidade especificados.`),Zg(),Jc(62,`p`),Tk(63,`Este método configura o tema do componente com base no objeto `),Jc(64,`code`),Tk(65,`themeConfig`),Zg(),Tk(66,` fornecido, no `),Jc(67,`code`),Tk(68,`themeType`),Zg(),Tk(69,` e no `),Jc(70,`code`),Tk(71,`a11yLevel`),Zg(),Tk(72,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),Zg()()()(),Jc(73,`h5`)(74,`b`),Tk(75,`Parâmetros`),Zg()(),Jc(76,`table`,14)(77,`tr`,15)(78,`th`,16),Tk(79,`Nome`),Zg(),Jc(80,`th`,16),Tk(81,`Tipo`),Zg(),Jc(82,`th`,16),Tk(83,`Descrição`),Zg()(),Jc(84,`tr`,9)(85,`td`,17),Tk(86,` themeConfig`),Zg(),Jc(87,`td`,18)(88,`code`,19),Tk(89,` PoTheme `),Zg()(),Jc(90,`td`,13)(91,`p`),Tk(92,`Configuração de tema a ser aplicada ao componente.`),Zg()()(),Jc(93,`tr`,9)(94,`td`,17),Tk(95,` themeType`),Zg(),Jc(96,`td`,18)(97,`code`,19),Tk(98,` PoThemeTypeEnum `),Zg()(),Jc(99,`td`,13)(100,`p`),Tk(101,`(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro é o padrão.`),Zg()()(),Jc(102,`tr`,9)(103,`td`,17),Tk(104,` a11yLevel`),Zg(),Jc(105,`td`,18)(106,`code`,19),Tk(107,` PoThemeA11yEnum `),Zg()(),Jc(108,`td`,13)(109,`p`),Tk(110,`(Opcional) Nível de acessibilidade dos componentes, podendo ser AA ou AAA. Padrão é AAA.`),Zg()()(),Jc(111,`tr`,9)(112,`td`,17),Tk(113,` persistPreference`),Zg(),Jc(114,`td`,18)(115,`code`,19),Tk(116,` boolean `),Zg()(),Jc(117,`td`,13)(118,`p`),Tk(119,`(Opcional) Define se a prefer\xEAncia de tema deve ser salva no
localStorage para persist\xEAncia. Por padr\xE3o \xE9 `),Jc(120,`code`),Tk(121,`true`),Zg(),Tk(122,`, ou seja, a preferência será salva automaticamente.`),Zg()()()(),_u(123,`br`),Jc(124,`table`,8)(125,`tr`,9)(126,`th`,10)(127,`div`,11)(128,`h4`)(129,`span`,12),Tk(130,` getA11yLevel `),Zg()()()()(),Jc(131,`tr`,13)(132,`td`,13)(133,`p`),Tk(134,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),Jc(135,`code`),Tk(136,`AAA`),Zg(),Tk(137,` como padrão.`),Zg()()()(),Jc(138,`h5`)(139,`b`),Tk(140,`Retorno`),Zg()(),Jc(141,`table`,14)(142,`tr`,15)(143,`th`,16),Tk(144,`Tipo`),Zg(),Jc(145,`th`,16),Tk(146,`Descrição`),Zg()(),Jc(147,`tr`,9)(148,`td`,18)(149,`code`,19),Tk(150,`PoThemeA11yEnum`),Zg()(),Jc(151,`td`,13)(152,`p`),Tk(153,`O nível de acessibilidade, que pode ser `),Jc(154,`code`),Tk(155,`AA`),Zg(),Tk(156,` ou `),Jc(157,`code`),Tk(158,`AAA`),Zg(),Tk(159,`.`),Zg()()()(),_u(160,`br`),Jc(161,`table`,8)(162,`tr`,9)(163,`th`,10)(164,`div`,11)(165,`h4`)(166,`span`,12),Tk(167,` setA11yDefaultSizeSmall `),Zg()()()()(),Jc(168,`tr`,13)(169,`td`,13)(170,`p`),Tk(171,`Define o tamanho `),Jc(172,`code`),Tk(173,`small`),Zg(),Tk(174,` como padr\xE3o para componentes que n\xE3o possuem um tamanho definido. Essa configura\xE7\xE3o \xE9
aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),Jc(175,`code`),Tk(176,`AA`),Zg(),Tk(177,`. O valor definido \xE9 salvo no
`),Jc(178,`code`),Tk(179,`localStorage`),Zg(),Tk(180,` sob a chave `),Jc(181,`code`),Tk(182,`po-default-size`),Zg(),Tk(183,` e o atributo `),Jc(184,`code`),Tk(185,`data-default-size`),Zg(),Tk(186,` \xE9 adicionado ao elemento HTML
para que os componentes possam aplicar o tamanho`),Zg(),Jc(187,`p`),Tk(188,`Exemplo de uso:`),Zg(),Jc(189,`pre`)(190,`code`,20),Tk(191,`import { poThemeDefault, PoThemeService, PoThemeTypeEnum, PoThemeA11yEnum } from '@po-ui/ng-components';

private themeService = inject(PoThemeService);

constructor() {
 this.themeService.setA11yDefaultSizeSmall(true);
 this.themeService.setTheme(poThemeDefault, PoThemeTypeEnum.light, PoThemeA11yEnum.AA);
}
`),Zg()(),Jc(192,`blockquote`)(193,`p`),Tk(194,`Para garantir que o tamanho `),Jc(195,`code`),Tk(196,`small`),Zg(),Tk(197,` seja aplicado corretamente a todos os componentes, recomendamos
definir esta configura\xE7\xE3o `),Jc(198,`strong`),Tk(199,`junto com o nível de acessibilidade `),Jc(200,`code`),Tk(201,`AA`),Zg(),Tk(202,` na inicialização da aplicação`),Zg(),Tk(203,`.
Para ajustar a densidade visual dos componentes agrupadores (como pages, container, etc.), utilize tamb\xE9m
o m\xE9todo `),Jc(204,`code`),Tk(205,`setDensityMode`),Zg(),Tk(206,` conforme necessário.`),Zg()()()()(),Jc(207,`h5`)(208,`b`),Tk(209,`Parâmetros`),Zg()(),Jc(210,`table`,14)(211,`tr`,15)(212,`th`,16),Tk(213,`Nome`),Zg(),Jc(214,`th`,16),Tk(215,`Tipo`),Zg(),Jc(216,`th`,16),Tk(217,`Descrição`),Zg()(),Jc(218,`tr`,9)(219,`td`,17),Tk(220,` enable`),Zg(),Jc(221,`td`,18)(222,`code`,19),Tk(223,` boolean `),Zg()(),Jc(224,`td`,13)(225,`p`),Tk(226,`Habilita ou desabilita o tamanho `),Jc(227,`code`),Tk(228,`small`),Zg(),Tk(229,` globalmente.`),Zg()()()(),_u(230,`br`),Jc(231,`table`,8)(232,`tr`,9)(233,`th`,10)(234,`div`,11)(235,`h4`)(236,`span`,12),Tk(237,` getDensityMode `),Zg()()()()(),Jc(238,`tr`,13)(239,`td`,13)(240,`p`),Tk(241,`Retorna o modo de adensamento dos componentes agrupadores.
Se n\xE3o estiver configurado, retorna `),Jc(242,`code`),Tk(243,`medium`),Zg(),Tk(244,` como padrão.`),Zg()()()(),Jc(245,`h5`)(246,`b`),Tk(247,`Retorno`),Zg()(),Jc(248,`table`,14)(249,`tr`,15)(250,`th`,16),Tk(251,`Tipo`),Zg(),Jc(252,`th`,16),Tk(253,`Descrição`),Zg()(),Jc(254,`tr`,9)(255,`td`,18)(256,`code`,19),Tk(257,`PoDensityMode`),Zg()(),Jc(258,`td`,13)(259,`p`),Tk(260,`O modo de adensamento, que pode ser `),Jc(261,`code`),Tk(262,`small`),Zg(),Tk(263,` ou `),Jc(264,`code`),Tk(265,`medium`),Zg(),Tk(266,`.`),Zg()()()(),_u(267,`br`),Jc(268,`table`,8)(269,`tr`,9)(270,`th`,10)(271,`div`,11)(272,`h4`)(273,`span`,12),Tk(274,` setDensityMode `),Zg()()()()(),Jc(275,`tr`,13)(276,`td`,13)(277,`p`),Tk(278,`Aplica o modo de adensamento compacto (`),Jc(279,`code`),Tk(280,`small`),Zg(),Tk(281,`) ou espaçoso (`),Jc(282,`code`),Tk(283,`medium`),Zg(),Tk(284,`) para os componentes agrupadores,
independentemente do n\xEDvel de acessibilidade. O valor definido \xE9 salvo no `),Jc(285,`code`),Tk(286,`localStorage`),Zg(),Tk(287,` sob a chave
`),Jc(288,`code`),Tk(289,`po-density-mode`),Zg(),Tk(290,`.`),Zg()()()(),Jc(291,`h5`)(292,`b`),Tk(293,`Parâmetros`),Zg()(),Jc(294,`table`,14)(295,`tr`,15)(296,`th`,16),Tk(297,`Nome`),Zg(),Jc(298,`th`,16),Tk(299,`Tipo`),Zg(),Jc(300,`th`,16),Tk(301,`Descrição`),Zg()(),Jc(302,`tr`,9)(303,`td`,17),Tk(304,` mode`),Zg(),Jc(305,`td`,18)(306,`code`,21),Tk(307,` 'small' `),Zg(),Jc(308,`code`,22),Tk(309,` 'medium' `),Zg()(),Jc(310,`td`,13)(311,`p`),Tk(312,`Define o modo de densidade: `),Jc(313,`code`),Tk(314,`small`),Zg(),Tk(315,` para compacto, `),Jc(316,`code`),Tk(317,`medium`),Zg(),Tk(318,` para espa\xE7oso.
O valor padr\xE3o \xE9 `),Jc(319,`code`),Tk(320,`medium`),Zg(),Tk(321,`.`),Zg()()()(),_u(322,`br`),Jc(323,`table`,8)(324,`tr`,9)(325,`th`,10)(326,`div`,11)(327,`h4`)(328,`span`,12),Tk(329,` persistThemeActive `),Zg()()()()(),Jc(330,`tr`,13)(331,`td`,13)(332,`p`),Tk(333,`Restaura e aplica as prefer\xEAncias visuais do usu\xE1rio para o tema da aplica\xE7\xE3o, garantindo que essas prefer\xEAncias
sejam persistidas no `),Jc(334,`code`),Tk(335,`localStorage`),Zg(),Tk(336,` para uso em recarregamentos futuros.`),Zg()()()(),Jc(337,`h5`)(338,`b`),Tk(339,`Retorno`),Zg()(),Jc(340,`table`,14)(341,`tr`,15)(342,`th`,16),Tk(343,`Tipo`),Zg(),Jc(344,`th`,16),Tk(345,`Descrição`),Zg()(),Jc(346,`tr`,9)(347,`td`,18)(348,`code`,19),Tk(349,`PoTheme`),Zg()(),Jc(350,`td`,13)(351,`p`),Tk(352,`O tema atualmente aplicado.`),Zg()()()(),_u(353,`br`),Jc(354,`table`,8)(355,`tr`,9)(356,`th`,10)(357,`div`,11)(358,`h4`)(359,`span`,12),Tk(360,` changeCurrentThemeType `),Zg()()()()(),Jc(361,`tr`,13)(362,`td`,13)(363,`p`),Tk(364,`Altera o tipo do tema armazenado e aplica os novos estilos ao documento.`),Zg(),Jc(365,`p`),Tk(366,`Este método altera o tipo do tema armazenado ativo (light/dark)`),Zg()()()(),Jc(367,`h5`)(368,`b`),Tk(369,`Parâmetros`),Zg()(),Jc(370,`table`,14)(371,`tr`,15)(372,`th`,16),Tk(373,`Nome`),Zg(),Jc(374,`th`,16),Tk(375,`Tipo`),Zg(),Jc(376,`th`,16),Tk(377,`Descrição`),Zg()(),Jc(378,`tr`,9)(379,`td`,17),Tk(380,` themeType`),Zg(),Jc(381,`td`,18)(382,`code`,19),Tk(383,` PoThemeTypeEnum `),Zg()(),Jc(384,`td`,13)(385,`p`),Tk(386,`O tipo de tema a ser aplicado, light ou dark.`),Zg()()()(),_u(387,`br`),Jc(388,`table`,8)(389,`tr`,9)(390,`th`,10)(391,`div`,11)(392,`h4`)(393,`span`,12),Tk(394,` cleanThemeActive `),Zg()()()()(),Jc(395,`tr`,13)(396,`td`,13)(397,`p`),Tk(398,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),Zg()()()(),Jc(399,`h5`)(400,`b`),Tk(401,`Parâmetros`),Zg()(),Jc(402,`table`,14)(403,`tr`,15)(404,`th`,16),Tk(405,`Nome`),Zg(),Jc(406,`th`,16),Tk(407,`Tipo`),Zg(),Jc(408,`th`,16),Tk(409,`Descrição`),Zg()(),Jc(410,`tr`,9)(411,`td`,17),Tk(412,` persistPreference`),Zg(),Jc(413,`td`,18)(414,`code`,19),Tk(415,` boolean `),Zg()(),Jc(416,`td`,13)(417,`p`),Tk(418,`(Opcional) Define se a preferência de tema não deve ser mantida no localStorage para persistência. `),Jc(419,`code`),Tk(420,`true`),Zg(),Tk(421,` para remover, `),Jc(422,`code`),Tk(423,`false`),Zg(),Tk(424,` para manter.`),Zg()()()(),_u(425,`br`),Jc(426,`table`,8)(427,`tr`,9)(428,`th`,10)(429,`div`,11)(430,`h4`)(431,`span`,12),Tk(432,` getThemeActive `),Zg()()()()(),Jc(433,`tr`,13)(434,`td`,13)(435,`p`),Tk(436,`Retorna o tema ativo como um observable. Este método funcionará apenas se o tema estiver armazenado no `),Jc(437,`code`),Tk(438,`localStorage`),Zg(),Tk(439,`.`),Zg()()()(),Jc(440,`h5`)(441,`b`),Tk(442,`Retorno`),Zg()(),Jc(443,`table`,14)(444,`tr`,15)(445,`th`,16),Tk(446,`Tipo`),Zg(),Jc(447,`th`,16),Tk(448,`Descrição`),Zg()(),Jc(449,`tr`,9)(450,`td`,18)(451,`code`,19),Tk(452,`PoTheme`),Zg()(),Jc(453,`td`,13)(454,`p`),Tk(455,`Tema ativo.`),Zg()()()(),_u(456,`br`),Jc(457,`table`,8)(458,`tr`,9)(459,`th`,10)(460,`div`,11)(461,`h4`)(462,`span`,12),Tk(463,` setDefaultTheme `),Zg()()()()(),Jc(464,`tr`,13)(465,`td`,13)(466,`p`),Tk(467,`Define o tema atual como o tema "PoUI Padrão".`),Zg()()()(),Jc(468,`h5`)(469,`b`),Tk(470,`Parâmetros`),Zg()(),Jc(471,`table`,14)(472,`tr`,15)(473,`th`,16),Tk(474,`Nome`),Zg(),Jc(475,`th`,16),Tk(476,`Tipo`),Zg(),Jc(477,`th`,16),Tk(478,`Descrição`),Zg()(),Jc(479,`tr`,9)(480,`td`,17),Tk(481,` type`),Zg(),Jc(482,`td`,18)(483,`code`,19),Tk(484,` PoThemeTypeEnum `),Zg()(),Jc(485,`td`,13)(486,`p`),Tk(487,`O tipo de Tema a ser aplicado, light / dark.`),Zg()()()(),_u(488,`br`),Jc(489,`table`,8)(490,`tr`,9)(491,`th`,10)(492,`div`,11)(493,`h4`)(494,`span`,12),Tk(495,` setThemeType `),Zg()()()()(),Jc(496,`tr`,13)(497,`td`,13)(498,`p`),Tk(499,`Define o tipo (light/dark) quando um tema está sendo aplicado.`),Zg()()()(),Jc(500,`h5`)(501,`b`),Tk(502,`Parâmetros`),Zg()(),Jc(503,`table`,14)(504,`tr`,15)(505,`th`,16),Tk(506,`Nome`),Zg(),Jc(507,`th`,16),Tk(508,`Tipo`),Zg(),Jc(509,`th`,16),Tk(510,`Descrição`),Zg()(),Jc(511,`tr`,9)(512,`td`,17),Tk(513,` theme`),Zg(),Jc(514,`td`,18)(515,`code`,19),Tk(516,` PoTheme `),Zg()(),Jc(517,`td`,13)(518,`p`),Tk(519,`Objeto contendo as definições de tema a serem aplicadas no componente.`),Zg()()(),Jc(520,`tr`,9)(521,`td`,17),Tk(522,` themeType`),Zg(),Jc(523,`td`,18)(524,`code`,19),Tk(525,` PoThemeTypeEnum `),Zg()(),Jc(526,`td`,13)(527,`p`),Tk(528,`(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padrão, o tema claro é aplicado.`),Zg()()()(),_u(529,`br`),Jc(530,`table`,8)(531,`tr`,9)(532,`th`,10)(533,`div`,11)(534,`h4`)(535,`span`,12),Tk(536,` setCurrentThemeType `),Zg()()()()(),Jc(537,`tr`,13)(538,`td`,13)(539,`p`),Tk(540,`Define o tipo (light/dark) para um tema já ativo.`),Zg()()()(),Jc(541,`h5`)(542,`b`),Tk(543,`Parâmetros`),Zg()(),Jc(544,`table`,14)(545,`tr`,15)(546,`th`,16),Tk(547,`Nome`),Zg(),Jc(548,`th`,16),Tk(549,`Tipo`),Zg(),Jc(550,`th`,16),Tk(551,`Descrição`),Zg()(),Jc(552,`tr`,9)(553,`td`,17),Tk(554,` themeType`),Zg(),Jc(555,`td`,18)(556,`code`,19),Tk(557,` PoThemeTypeEnum `),Zg()(),Jc(558,`td`,13)(559,`p`),Tk(560,`(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padrão, o tema claro é aplicado.`),Zg()()()(),_u(561,`br`),Jc(562,`table`,8)(563,`tr`,9)(564,`th`,10)(565,`div`,11)(566,`h4`)(567,`span`,12),Tk(568,` setThemeA11y `),Zg()()()()(),Jc(569,`tr`,13)(570,`td`,13)(571,`p`),Tk(572,`Define o nível de acessibilidade quando um tema está sendo aplicado.`),Zg()()()(),Jc(573,`h5`)(574,`b`),Tk(575,`Parâmetros`),Zg()(),Jc(576,`table`,14)(577,`tr`,15)(578,`th`,16),Tk(579,`Nome`),Zg(),Jc(580,`th`,16),Tk(581,`Tipo`),Zg(),Jc(582,`th`,16),Tk(583,`Descrição`),Zg()(),Jc(584,`tr`,9)(585,`td`,17),Tk(586,` theme`),Zg(),Jc(587,`td`,18)(588,`code`,19),Tk(589,` PoTheme `),Zg()(),Jc(590,`td`,13)(591,`p`),Tk(592,`Objeto contendo as definições de tema a serem aplicadas no componente.`),Zg()()(),Jc(593,`tr`,9)(594,`td`,17),Tk(595,` a11y`),Zg(),Jc(596,`td`,18)(597,`code`,19),Tk(598,` PoThemeA11yEnum `),Zg()(),Jc(599,`td`,13)(600,`p`),Tk(601,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),Zg()()()(),_u(602,`br`),Jc(603,`table`,8)(604,`tr`,9)(605,`th`,10)(606,`div`,11)(607,`h4`)(608,`span`,12),Tk(609,` setCurrentThemeA11y `),Zg()()()()(),Jc(610,`tr`,13)(611,`td`,13)(612,`p`),Tk(613,`Define o nível de acessibilidade para um tema já ativo.`),Zg()()()(),Jc(614,`h5`)(615,`b`),Tk(616,`Parâmetros`),Zg()(),Jc(617,`table`,14)(618,`tr`,15)(619,`th`,16),Tk(620,`Nome`),Zg(),Jc(621,`th`,16),Tk(622,`Tipo`),Zg(),Jc(623,`th`,16),Tk(624,`Descrição`),Zg()(),Jc(625,`tr`,9)(626,`td`,17),Tk(627,` a11y`),Zg(),Jc(628,`td`,18)(629,`code`,19),Tk(630,` PoThemeA11yEnum `),Zg()(),Jc(631,`td`,13)(632,`p`),Tk(633,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),Zg()()()(),_u(634,`br`),Jc(635,`h3`),Tk(636,`Interfaces`),Zg(),Jc(637,`h4`,23)(638,`code`,5),Tk(639,`PoThemeColor`),Zg()(),Jc(640,`div`,2)(641,`p`),Tk(642,`Interface para representar as cores do tema.`),Zg()(),Jc(643,`h4`,7),Tk(644,`Propriedades`),Zg(),Jc(645,`table`,14)(646,`tr`,15)(647,`th`,16),Tk(648,`Nome`),Zg(),Jc(649,`th`,16),Tk(650,`Tipo`),Zg(),Jc(651,`th`,16),Tk(652,`Descrição`),Zg()(),Jc(653,`tr`,9)(654,`td`,17)(655,`div`,11)(656,`span`,12),Tk(657,` action`),_u(658,`br`),Zg()()(),Jc(659,`td`,18)(660,`code`,24),Tk(661,`PoThemeColorAction`),Zg()(),Jc(662,`td`,13)(663,`em`)(664,`strong`),Tk(665,`(opcional)`),Zg()(),Jc(666,`p`),Tk(667,`Cores da Action a serem aplicadas.`),Zg(),Jc(668,`p`),Tk(669,`Exemplo de uso:`),Zg(),Jc(670,`pre`)(671,`code`,25),Tk(672,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),Zg()()()(),Jc(673,`tr`,9)(674,`td`,17)(675,`div`,11)(676,`span`,12),Tk(677,` brand`),_u(678,`br`),Zg()()(),Jc(679,`td`,18)(680,`code`,26),Tk(681,`poThemeColorBrand`),Zg()(),Jc(682,`td`,13)(683,`em`)(684,`strong`),Tk(685,`(opcional)`),Zg()(),Jc(686,`p`),Tk(687,`Cores da Brand a serem aplicadas.`),Zg(),Jc(688,`p`),Tk(689,`Exemplo de uso:`),Zg(),Jc(690,`pre`)(691,`code`,20),Tk(692,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),Zg()()()(),Jc(693,`tr`,9)(694,`td`,17)(695,`div`,11)(696,`span`,12),Tk(697,` categorical`),_u(698,`br`),Zg()()(),Jc(699,`td`,18)(700,`code`,27),Tk(701,`PoThemeColorCategorical`),Zg()(),Jc(702,`td`,13)(703,`em`)(704,`strong`),Tk(705,`(opcional)`),Zg()(),Jc(706,`p`),Tk(707,`Cores da Categorical a serem aplicadas.`),Zg(),Jc(708,`p`),Tk(709,`Exemplo de uso:`),Zg(),Jc(710,`pre`)(711,`code`,20),Tk(712,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),Zg()()()(),Jc(713,`tr`,9)(714,`td`,17)(715,`div`,11)(716,`span`,12),Tk(717,` categorical-overlay`),_u(718,`br`),Zg()()(),Jc(719,`td`,18)(720,`code`,27),Tk(721,`PoThemeColorCategorical`),Zg()(),Jc(722,`td`,13)(723,`em`)(724,`strong`),Tk(725,`(opcional)`),Zg()(),Jc(726,`p`),Tk(727,`Cores da Categorical a serem aplicadas.`),Zg(),Jc(728,`p`),Tk(729,`Exemplo de uso:`),Zg(),Jc(730,`pre`)(731,`code`,20),Tk(732,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),Zg()()()(),Jc(733,`tr`,9)(734,`td`,17)(735,`div`,11)(736,`span`,12),Tk(737,` neutral`),_u(738,`br`),Zg()()(),Jc(739,`td`,18)(740,`code`,28),Tk(741,`PoThemeColorNeutral`),Zg()(),Jc(742,`td`,13)(743,`em`)(744,`strong`),Tk(745,`(opcional)`),Zg()(),Jc(746,`p`),Tk(747,`Cores Neutrals a serem aplicadas.`),Zg(),Jc(748,`p`),Tk(749,`Exemplo de uso:`),Zg(),Jc(750,`pre`)(751,`code`,20),Tk(752,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),Zg()()()()(),Jc(753,`h4`,23)(754,`code`,5),Tk(755,`PoThemeColorAction`),Zg()(),Jc(756,`div`,2)(757,`p`),Tk(758,`Interface para as cores de ação do tema.`),Zg()(),Jc(759,`h4`,7),Tk(760,`Propriedades`),Zg(),Jc(761,`table`,14)(762,`tr`,15)(763,`th`,16),Tk(764,`Nome`),Zg(),Jc(765,`th`,16),Tk(766,`Tipo`),Zg(),Jc(767,`th`,16),Tk(768,`Descrição`),Zg()(),Jc(769,`tr`,9)(770,`td`,17)(771,`div`,11)(772,`span`,12),Tk(773,` default`),_u(774,`br`),Zg()()(),Jc(775,`td`,18)(776,`code`,29),Tk(777,`string`),Zg()(),Jc(778,`td`,13)(779,`em`)(780,`strong`),Tk(781,`(opcional)`),Zg()(),Jc(782,`p`),Tk(783,`Cores da Action 'Default'.`),Zg(),Jc(784,`p`),Tk(785,`Exemplo de uso:`),Zg(),Jc(786,`pre`)(787,`code`,20),Tk(788,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),Zg()()()(),Jc(789,`tr`,9)(790,`td`,17)(791,`div`,11)(792,`span`,12),Tk(793,` disabled`),_u(794,`br`),Zg()()(),Jc(795,`td`,18)(796,`code`,29),Tk(797,`string`),Zg()(),Jc(798,`td`,13)(799,`em`)(800,`strong`),Tk(801,`(opcional)`),Zg()(),Jc(802,`p`),Tk(803,`Cores da Action de 'disabled'.`),Zg(),Jc(804,`p`),Tk(805,`Exemplo de uso:`),Zg(),Jc(806,`pre`)(807,`code`,20),Tk(808,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),Zg()()()(),Jc(809,`tr`,9)(810,`td`,17)(811,`div`,11)(812,`span`,12),Tk(813,` focus`),_u(814,`br`),Zg()()(),Jc(815,`td`,18)(816,`code`,29),Tk(817,`string`),Zg()(),Jc(818,`td`,13)(819,`em`)(820,`strong`),Tk(821,`(opcional)`),Zg()(),Jc(822,`p`),Tk(823,`Cores da Action para 'focus'.`),Zg(),Jc(824,`p`),Tk(825,`Exemplo de uso:`),Zg(),Jc(826,`pre`)(827,`code`,20),Tk(828,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),Zg()()()(),Jc(829,`tr`,9)(830,`td`,17)(831,`div`,11)(832,`span`,12),Tk(833,` hover`),_u(834,`br`),Zg()()(),Jc(835,`td`,18)(836,`code`,29),Tk(837,`string`),Zg()(),Jc(838,`td`,13)(839,`em`)(840,`strong`),Tk(841,`(opcional)`),Zg()(),Jc(842,`p`),Tk(843,`Cores da Action para 'hover'.`),Zg(),Jc(844,`p`),Tk(845,`Exemplo de uso:`),Zg(),Jc(846,`pre`)(847,`code`,20),Tk(848,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),Zg()()()(),Jc(849,`tr`,9)(850,`td`,17)(851,`div`,11)(852,`span`,12),Tk(853,` pressed`),_u(854,`br`),Zg()()(),Jc(855,`td`,18)(856,`code`,29),Tk(857,`string`),Zg()(),Jc(858,`td`,13)(859,`em`)(860,`strong`),Tk(861,`(opcional)`),Zg()(),Jc(862,`p`),Tk(863,`Cores da Action para 'pressed'.`),Zg(),Jc(864,`p`),Tk(865,`Exemplo de uso:`),Zg(),Jc(866,`pre`)(867,`code`,20),Tk(868,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),Zg()()()()(),Jc(869,`h4`,23)(870,`code`,5),Tk(871,`PoThemeColorNeutral`),Zg()(),Jc(872,`div`,2)(873,`p`),Tk(874,`Interface para as cores neutras do tema.`),Zg()(),Jc(875,`h4`,7),Tk(876,`Propriedades`),Zg(),Jc(877,`table`,14)(878,`tr`,15)(879,`th`,16),Tk(880,`Nome`),Zg(),Jc(881,`th`,16),Tk(882,`Tipo`),Zg(),Jc(883,`th`,16),Tk(884,`Descrição`),Zg()(),Jc(885,`tr`,9)(886,`td`,17)(887,`div`,11)(888,`span`,12),Tk(889,` dark`),_u(890,`br`),Zg()()(),Jc(891,`td`,18)(892,`code`,30),Tk(893,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),Zg()(),Jc(894,`td`,13)(895,`em`)(896,`strong`),Tk(897,`(opcional)`),Zg()(),Jc(898,`p`),Tk(899,`Cores Neutrals do tipo 'dark'.`),Zg(),Jc(900,`p`),Tk(901,`Exemplo de uso:`),Zg(),Jc(902,`pre`)(903,`code`,20),Tk(904,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),Zg()()()(),Jc(905,`tr`,9)(906,`td`,17)(907,`div`,11)(908,`span`,12),Tk(909,` light`),_u(910,`br`),Zg()()(),Jc(911,`td`,18)(912,`code`,31),Tk(913,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),Zg()(),Jc(914,`td`,13)(915,`em`)(916,`strong`),Tk(917,`(opcional)`),Zg()(),Jc(918,`p`),Tk(919,`Cores Neutrals do tipo 'light'.`),Zg(),Jc(920,`p`),Tk(921,`Exemplo de uso:`),Zg(),Jc(922,`pre`)(923,`code`,20),Tk(924,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),Zg()()()(),Jc(925,`tr`,9)(926,`td`,17)(927,`div`,11)(928,`span`,12),Tk(929,` mid`),_u(930,`br`),Zg()()(),Jc(931,`td`,18)(932,`code`,32),Tk(933,`{ '40'?: string; '60'?: string;
}`),Zg()(),Jc(934,`td`,13)(935,`em`)(936,`strong`),Tk(937,`(opcional)`),Zg()(),Jc(938,`p`),Tk(939,`Cores Neutrals do tipo 'mid'.`),Zg(),Jc(940,`p`),Tk(941,`Exemplo de uso:`),Zg(),Jc(942,`pre`)(943,`code`,20),Tk(944,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),Zg()()()()(),Jc(945,`h4`,23)(946,`code`,5),Tk(947,`PoThemeTokens`),Zg()(),Jc(948,`div`,2)(949,`p`),Tk(950,`Interface para o tema da aplicação.`),Zg()(),Jc(951,`h4`,23)(952,`code`,5),Tk(953,`PoThemeToken`),Zg()(),Jc(954,`div`,2)(955,`p`),Tk(956,`Interface para os tokens do Tema.`),Zg()(),Jc(957,`h4`,7),Tk(958,`Propriedades`),Zg(),Jc(959,`table`,14)(960,`tr`,15)(961,`th`,16),Tk(962,`Nome`),Zg(),Jc(963,`th`,16),Tk(964,`Tipo`),Zg(),Jc(965,`th`,16),Tk(966,`Descrição`),Zg()(),Jc(967,`tr`,9)(968,`td`,17)(969,`div`,11)(970,`span`,12),Tk(971,` color`),_u(972,`br`),Zg()()(),Jc(973,`td`,18)(974,`code`,33),Tk(975,`PoThemeColor`),Zg()(),Jc(976,`td`,13)(977,`em`)(978,`strong`),Tk(979,`(opcional)`),Zg()(),Jc(980,`p`),Tk(981,`Tokens do tipo 'color'`),Zg()()(),Jc(982,`tr`,9)(983,`td`,17)(984,`div`,11)(985,`span`,12),Tk(986,` onRoot`),_u(987,`br`),Zg()()(),Jc(988,`td`,18)(989,`code`,34),Tk(990,`DynamicProperties`),Zg()(),Jc(991,`td`,13)(992,`em`)(993,`strong`),Tk(994,`(opcional)`),Zg()(),Jc(995,`p`),Tk(996,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),Jc(997,`code`),Tk(998,`:root`),Zg()(),Jc(999,`p`),Tk(1e3,`Exemplo de uso:`),Zg(),Jc(1001,`pre`)(1002,`code`,20),Tk(1003,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),Zg()()()(),Jc(1004,`tr`,9)(1005,`td`,17)(1006,`div`,11)(1007,`span`,12),Tk(1008,` perComponent`),_u(1009,`br`),Zg()()(),Jc(1010,`td`,18)(1011,`code`,34),Tk(1012,`DynamicProperties`),Zg()(),Jc(1013,`td`,13)(1014,`em`)(1015,`strong`),Tk(1016,`(opcional)`),Zg()(),Jc(1017,`p`),Tk(1018,`Tokens do tipo 'perComponent'`),Zg(),Jc(1019,`p`),Tk(1020,`Exemplo de uso:`),Zg(),Jc(1021,`pre`)(1022,`code`,20),Tk(1023,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),Zg()()()()(),Jc(1024,`h4`,23)(1025,`code`,5),Tk(1026,`PoTheme`),Zg()(),Jc(1027,`div`,2)(1028,`p`),Tk(1029,`Interface para o método `),Jc(1030,`code`),Tk(1031,`setTheme()`),Zg(),Tk(1032,`.`),Zg()(),Jc(1033,`h4`,7),Tk(1034,`Propriedades`),Zg(),Jc(1035,`table`,14)(1036,`tr`,15)(1037,`th`,16),Tk(1038,`Nome`),Zg(),Jc(1039,`th`,16),Tk(1040,`Tipo`),Zg(),Jc(1041,`th`,16),Tk(1042,`Descrição`),Zg()(),Jc(1043,`tr`,9)(1044,`td`,17)(1045,`div`,11)(1046,`span`,12),Tk(1047,` active`),_u(1048,`br`),Zg()()(),Jc(1049,`td`,18)(1050,`code`,35),Tk(1051,`PoThemeTypeEnum `),Zg(),Jc(1052,`code`,36),Tk(1053,` PoThemeActive`),Zg()(),Jc(1054,`td`,13)(1055,`em`)(1056,`strong`),Tk(1057,`(opcional)`),Zg()(),Jc(1058,`p`),Tk(1059,`Tipo e nível de acessibilidade de tema ativo`),Zg()()(),Jc(1060,`tr`,9)(1061,`td`,17)(1062,`div`,11)(1063,`span`,12),Tk(1064,` inheritDefaultStyle`),_u(1065,`br`),Zg()()(),Jc(1066,`td`,18)(1067,`code`,37),Tk(1068,`boolean`),Zg()(),Jc(1069,`td`,13)(1070,`em`)(1071,`strong`),Tk(1072,`(opcional)`),Zg()(),Jc(1073,`p`),Tk(1074,`Define se o tema herda a identidade visual do tema padrão do PO UI.`),Zg(),Jc(1075,`p`),Tk(1076,`A identidade visual corresponde aos arredondamentos dos componentes e \xE0 cor de fundo da p\xE1gina definidos
pelo tema padr\xE3o. Os estilos estruturais (ex.: espessura de outline, adensamento e ajustes de light/dark)
s\xE3o aplicados em qualquer caso.`),Zg(),Jc(1077,`p`),Tk(1078,`As fam\xEDlias de fonte do tema padr\xE3o n\xE3o s\xE3o controladas por esta propriedade: elas s\xE3o definidas pelo CSS
do `),Jc(1079,`code`),Tk(1080,`@po-ui/style`),Zg(),Tk(1081,`. Um tema com fontes próprias deve declará-las nos seus tokens.`),Zg(),Jc(1082,`p`),Tk(1083,`Utilize `),Jc(1084,`code`),Tk(1085,`false`),Zg(),Tk(1086,` quando o tema define a própria identidade visual e não deve receber a do tema padrão.`),Zg()()(),Jc(1087,`tr`,9)(1088,`td`,17)(1089,`div`,11)(1090,`span`,12),Tk(1091,` name`),_u(1092,`br`),Zg()()(),Jc(1093,`td`,18)(1094,`code`,29),Tk(1095,`string`),Zg()(),Jc(1096,`td`,13)(1097,`p`),Tk(1098,`Nome para o tema:
Ex.: default, totvs, sunset...`),Zg()()(),Jc(1099,`tr`,9)(1100,`td`,17)(1101,`div`,11)(1102,`span`,12),Tk(1103,` type`),_u(1104,`br`),Zg()()(),Jc(1105,`td`,18)(1106,`code`,38),Tk(1107,`PoThemeType `),Zg(),Jc(1108,`code`,39),Tk(1109,` Array<PoThemeType>`),Zg()(),Jc(1110,`td`,13)(1111,`p`),Tk(1112,`Tipo de tema:`),Zg(),Jc(1113,`ul`)(1114,`li`),Tk(1115,`light`),Zg(),Jc(1116,`li`),Tk(1117,`dark`),Zg()()()()(),Jc(1118,`h3`),Tk(1119,`Enums`),Zg(),Jc(1120,`h4`,4)(1121,`code`,5),Tk(1122,`PoThemeA11yEnum`),Zg()(),Jc(1123,`div`,2)(1124,`p`),Tk(1125,`Enum para configurar o nível de acessibilidade dos componentes através do serviço de tema.`),Zg(),Jc(1126,`pre`)(1127,`code`),Tk(1128,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),Zg()()(),Jc(1129,`h4`,7),Tk(1130,`Propriedades`),Zg(),Jc(1131,`table`,14)(1132,`tr`,15)(1133,`th`,16),Tk(1134,`Nome`),Zg(),Jc(1135,`th`,16),Tk(1136,`Descrição`),Zg()(),Jc(1137,`tr`,9)(1138,`td`,17)(1139,`div`,11)(1140,`span`,12),Tk(1141,` AA`),_u(1142,`br`),Zg()()(),Jc(1143,`td`,13)(1144,`p`),Tk(1145,`Nível de acessibilidade AA.`),Zg(),Jc(1146,`ul`)(1147,`li`),Tk(1148,`Define a espessura do `),Jc(1149,`code`),Tk(1150,`outline`),Zg(),Tk(1151,` para `),Jc(1152,`strong`),Tk(1153,`2px`),Zg(),Tk(1154,`.`),Zg(),Jc(1155,`li`),Tk(1156,`Disponibiliza o tamanho `),Jc(1157,`code`),Tk(1158,`small`),Zg(),Tk(1159,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),Zg()()()(),Jc(1160,`tr`,9)(1161,`td`,17)(1162,`div`,11)(1163,`span`,12),Tk(1164,` AAA`),_u(1165,`br`),Zg()()(),Jc(1166,`td`,13)(1167,`p`),Tk(1168,`Nível de acessibilidade AAA.`),Zg(),Jc(1169,`ul`)(1170,`li`),Tk(1171,`Define a espessura do `),Jc(1172,`code`),Tk(1173,`outline`),Zg(),Tk(1174,` para `),Jc(1175,`strong`),Tk(1176,`4px`),Zg(),Tk(1177,`.`),Zg(),Jc(1178,`li`),Tk(1179,`Não disponibiliza o tamanho `),Jc(1180,`code`),Tk(1181,`small`),Zg(),Tk(1182,` para componentes de formulário.`),Zg()()()()(),Jc(1183,`h4`,4)(1184,`code`,5),Tk(1185,`PoThemeTypeEnum`),Zg()(),Jc(1186,`div`,2)(1187,`p`),Tk(1188,`Enum utilizado para configurar o tipo de tema suportado, é possível alternar entre os tipos definidos.`),Zg(),Jc(1189,`pre`)(1190,`code`),Tk(1191,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),Zg()()(),Jc(1192,`h4`,7),Tk(1193,`Propriedades`),Zg(),Jc(1194,`table`,14)(1195,`tr`,15)(1196,`th`,16),Tk(1197,`Nome`),Zg(),Jc(1198,`th`,16),Tk(1199,`Descrição`),Zg()(),Jc(1200,`tr`,9)(1201,`td`,17)(1202,`div`,11)(1203,`span`,12),Tk(1204,` light`),_u(1205,`br`),Zg()()(),Jc(1206,`td`,13)(1207,`p`),Tk(1208,`Define o tema como claro.`),Zg()()(),Jc(1209,`tr`,9)(1210,`td`,17)(1211,`div`,11)(1212,`span`,12),Tk(1213,` dark`),_u(1214,`br`),Zg()()(),Jc(1215,`td`,13)(1216,`p`),Tk(1217,`Define o tema como escuro.`),Zg()()()()())},encapsulation:2,changeDetection:1})}return a})();function Fe(a,Oe){if(a&1){let l=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(l);let o=nk();return H_(o.changeTab(`web`))}),_u(1,`sample-po-theme-labs-view`),Zg()}if(a&2){let l=nk();Rb(`p-active`,l.activeTab===`web`)}}var Ne=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,m){this.route=l,this.router=m}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let m=l.view;this.activeTab=m||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(m){return new(m||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Theme`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(m,o){m&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Fe,2,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),_u(4,`sample-po-theme-doc`),Zg()()()),m&2&&(Rb(`p-actions`,o.actions),Ig(2),BO(o.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Tze,Qae,ere,Ce,Ae],encapsulation:2,changeDetection:1})}return a})()}];var De=(()=>{class a{static ɵfac=function(m){return new(m||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[WV.forChild(Ne),WV]})}return a})();var pt=(()=>{class a{static ɵfac=function(m){return new(m||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,De]})}return a})();export{pt as DocPoThemeModule};