import{n as s,t as r}from"./chunk-zystk1pz.js";import{$i as h,$n as AF,A as Hoe,Cn as oi,Ct as Yoe,Da as pe,E as H4,Fa as rg,Fi as ab,Ga as vx,Ha as v_,Ia as sb,Ii as b,La as uO,Mr as I1,Na as r0,Qa as xK,Qr as RK,Qt as fie,Ra as ue,Sa as o0,Si as Xx,T as Gte,Tn as pie,Vr as Mm,Wa as vo,Xt as ere,Ya as wg,Yt as ea,Z as On,Za as xF,Zt as fae,aa as iu,ai as Sn,an as hie,bn as o5,dr as DO,gr as Dx,hi as VF,ht as U4,ia as ir,ji as __,jn as sie,ki as Zn,ma as lO,mn as lie,mt as Tze,nr as Ag,pn as lb,qr as Ok,ri as SK,ro as yo,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wn as pb,wr as Fx,xa as nu,yn as ni,z as KP,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-CK5CTZT7.js";var Te={name:`po-theme`,type:{light:{color:{brand:{"01":{lightest:`#f2eaf6`,lighter:`#d9c2e5`,light:`#bd94d1`,base:`#753399`,dark:`#5b1c7d`,darker:`#400e58`,darkest:`#260538`},"02":{base:`#b92f72`},"03":{base:`#ffd464`}},action:s(r({},sie),{disabled:`var(--color-neutral-mid-40)`}),feedback:s(r({},pie),{info:s(r({},pie.info),{base:`#0079b8`})}),neutral:r({},lie)},onRoot:s(r({},lb.onRoot),{"--color-page-background-color-page":`var(--color-neutral-light-05)`}),perComponent:r({},lb.perComponent)},dark:{color:{brand:{"01":{darkest:`#f2eaf6`,darker:`#d9c2e5`,dark:`#bd94d1`,base:`#753399`,light:`#5b1c7d`,lighter:`#400e58`,lightest:`#260538`},"02":{base:`#b92f72`},"03":{base:`#ffd464`}},action:s(r({},hie),{disabled:`var(--color-neutral-mid-40)`}),feedback:s(r({},fie),{info:s(r({},fie.info),{base:`#0079b8`})}),neutral:{light:{"00":`#1c1c1c`,"05":`#202020`,10:`#2b2b2b`,20:`#3b3b3b`,30:`#5a5a5a`},mid:{40:`#7c7c7c`,60:`#a1a1a1`},dark:{70:`#c1c1c1`,80:`#d9d9d9`,90:`#eeeeee`,95:`#fbfbfb`}}},onRoot:s(r({},pb.onRoot),{"--color-page-background-color-page":`var(--color-neutral-light-05)`}),perComponent:r({},pb.perComponent)}},active:{type:On.light,a11y:ni.AAA}};var ke=[`reactiveFormData`];var ye=(()=>{class a{reactiveFormModal;formBuilder=h(xK);poTheme=h(KP);themeType=On.light;a11yLevel=ni.AAA;densityMode=`medium`;reactiveForm=this.createReactiveForm();themeTypeOptions=[{label:`Light`,value:On.light},{label:`Dark`,value:On.dark}];a11yLevelOptions=[{label:`AAA`,value:ni.AAA},{label:`AA`,value:ni.AA}];densityModeOptions=[{label:`Medium`,value:`medium`},{label:`Small`,value:`small`}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:`Close`};ngOnInit(){let l=this.poTheme.getThemeActive()?.active;typeof l==`object`&&(this.themeType=l.type??On.light,this.a11yLevel=l.a11y??ni.AAA),this.densityMode=this.poTheme.getDensityMode(),this.poTheme.setTheme(Te,this.themeType,this.a11yLevel),this.applyA11yDefaultSize(),this.poTheme.setDensityMode(this.densityMode)}onThemeTypeChange(l){this.poTheme.setCurrentThemeType(l)}onA11yLevelChange(l){this.poTheme.setCurrentThemeA11y(l),this.applyA11yDefaultSize()}onDensityModeChange(l){this.poTheme.setDensityMode(l)}saveForm(){this.reactiveFormModal.open()}applyA11yDefaultSize(){this.poTheme.setA11yDefaultSizeSmall(this.a11yLevel===ni.AA)}createReactiveForm(){return this.formBuilder.group({name:[``,Mm.compose([Mm.required,Mm.minLength(5),Mm.maxLength(30)])],address:[``,Mm.compose([Mm.required,Mm.minLength(5),Mm.maxLength(50)])],number:[``,Mm.compose([Mm.required,Mm.min(1),Mm.max(99999)])],email:[``,Mm.required],website:[``,Mm.required]})}static ɵfac=function(m){return new(m||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-theme-labs`]],viewQuery:function(m,o){if(m&1&&iu(ke,7),m&2){let x;yo(x=vo())&&(o.reactiveFormModal=x.first)}},standalone:!1,decls:26,vars:14,consts:[[`reactiveFormData`,``],[`p-title`,`Theme settings`],[1,`po-row`],[`name`,`themeType`,`p-label`,`Theme type`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`a11yLevel`,`p-label`,`Accessibility level`,`p-helper`,`AA allows the small size as default for components.`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`densityMode`,`p-label`,`Density`,`p-helper`,`Spacing of grouping components, such as pages, containers and modals.`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-title`,`Example`,1,`po-mt-3`],[3,`formGroup`],[`formControlName`,`name`,`p-clean`,``,`p-icon`,`an an-user`,`p-label`,`Customer name`,1,`po-lg-6`],[`formControlName`,`email`,`p-label`,`Email`,`p-clean`,``,1,`po-lg-6`],[`formControlName`,`address`,`p-clean`,``,`p-icon`,`an an-map-pin`,`p-label`,`Address`,1,`po-lg-4`,`po-md-8`],[`formControlName`,`number`,`p-label`,`Number`,`p-clean`,``,1,`po-lg-2`,`po-md-4`],[`formControlName`,`website`,`p-label`,`Website`,`p-clean`,``,1,`po-lg-6`],[`p-label`,`Save`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Save successful`,3,`p-primary-action`],[`p-label`,`Name`,1,`po-md-12`,3,`p-value`],[`p-label`,`Address`,1,`po-md-6`,3,`p-value`],[`p-label`,`Number`,1,`po-md-6`,3,`p-value`],[`p-label`,`Email`,1,`po-md-6`,3,`p-value`],[`p-label`,`Website`,1,`po-md-6`,3,`p-value`]],template:function(m,o){if(m&1){let x=Ax();jc(0,`po-widget`,1)(1,`div`,2)(2,`po-radio-group`,3),r0(),ab(`ngModelChange`,function(p){return v_(x),uO(o.themeType,p)||(o.themeType=p),__(p)}),mt(`p-change`,function(p){return o.onThemeTypeChange(p)}),wg(),jc(3,`po-radio-group`,4),r0(),ab(`ngModelChange`,function(p){return v_(x),uO(o.a11yLevel,p)||(o.a11yLevel=p),__(p)}),mt(`p-change`,function(p){return o.onA11yLevelChange(p)}),wg(),jc(4,`po-radio-group`,5),r0(),ab(`ngModelChange`,function(p){return v_(x),uO(o.densityMode,p)||(o.densityMode=p),__(p)}),mt(`p-change`,function(p){return o.onDensityModeChange(p)}),wg()()(),jc(5,`po-widget`,6)(6,`form`,7)(7,`div`,2)(8,`po-input`,8),r0(),wg(),jc(9,`po-email`,9),r0(),wg()(),jc(10,`div`,2)(11,`po-input`,10),r0(),wg(),jc(12,`po-number`,11),r0(),wg(),jc(13,`po-url`,12),r0(),wg()(),jc(14,`div`,2)(15,`po-button`,13),mt(`p-click`,function(){return o.saveForm()}),wg()()()(),jc(16,`po-modal`,14,0)(18,`div`,2),nu(19,`po-info`,15),wg(),jc(20,`div`,2),nu(21,`po-info`,16)(22,`po-info`,17),wg(),jc(23,`div`,2),nu(24,`po-info`,18)(25,`po-info`,19),wg()()}m&2&&(rg(2),sb(`ngModel`,o.themeType),UE(`p-options`,o.themeTypeOptions),o0(),rg(),sb(`ngModel`,o.a11yLevel),UE(`p-options`,o.a11yLevelOptions),o0(),rg(),sb(`ngModel`,o.densityMode),UE(`p-options`,o.densityModeOptions),o0(),rg(2),UE(`formGroup`,o.reactiveForm),rg(2),o0(),rg(),o0(),rg(2),o0(),rg(),o0(),rg(),o0(),rg(2),UE(`p-disabled`,o.reactiveForm.invalid),rg(),UE(`p-primary-action`,o.modalPrimaryAction),rg(3),UE(`p-value`,o.reactiveForm.controls.name.value),rg(2),UE(`p-value`,o.reactiveForm.controls.address.value),rg(),UE(`p-value`,o.reactiveForm.controls.number.value),rg(2),UE(`p-value`,o.reactiveForm.controls.email.value),rg(),UE(`p-value`,o.reactiveForm.controls.website.value))},dependencies:[RK,SK,MK,xF,AF,VF,oi,o5,U4,Hoe,Gte,H4,Yoe,ea,fae],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(m){return new(m||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-theme-labs-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(m,o){m&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Theme Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-theme-labs/sample-po-theme-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-widget p-title="Theme settings">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-theme-labs/sample-po-theme-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { ChangeDetectionStrategy, Component, inject, OnInit, ViewChild } from '@angular/core';
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
`),wg(),jc(21,`label`,6),lO(22,`sample-po-theme-labs/sample-po-theme-labs.constant.ts`),wg(),jc(23,`pre`,9),lO(24,`import {
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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-theme-labs`),wg(),nu(27,`hr`)),m&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,_e,o.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,ye],encapsulation:2,changeDetection:1})}return a})();var Ae=(()=>{class a{static ɵfac=function(m){return new(m||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-theme-doc`]],standalone:!1,decls:1218,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/theme-service`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`'small'`],[`pan`,``,1,`docs-api-property-type`,`'medium'`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorAction`],[1,`language-javascript`],[`pan`,``,1,`docs-api-property-type`,`poThemeColorBrand`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorCategorical`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorNeutral`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`{`,`'70'?:`,`string;`,`'80'?:`,`string;`,`'90'?:`,`string;`,`'95'?:`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'00'?:`,`string;`,`'05'?:`,`string;`,`'10'?:`,`string;`,`'20'?:`,`string;`,`'30'?:`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'40'?:`,`string;`,`'60'?:`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColor`],[`pan`,``,1,`docs-api-property-type`,`DynamicProperties`],[`pan`,``,1,`docs-api-property-type`,`PoThemeTypeEnum`],[`pan`,``,1,`docs-api-property-type`,`PoThemeActive`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoThemeType`],[`pan`,``,1,`docs-api-property-type`,`Array<PoThemeType>`]],template:function(m,o){m&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoThemeModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do serviço PoThemeService.`),wg()(),jc(7,`h3`,3),lO(8,`Services`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoThemeService`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`O serviço `),jc(15,`code`),lO(16,`PoThemeService`),wg(),lO(17,` permite customizar as cores do tema padrão do `),jc(18,`code`),lO(19,`PO-UI`),wg(),lO(20,` e definir o n\xEDvel de acessibilidade
mais adequado ao projeto.`),wg(),jc(21,`p`),lO(22,`O nível `),jc(23,`strong`),lO(24,`AAA`),wg(),lO(25,` (padr\xE3o) garante maior contraste, \xE1reas clic\xE1veis amplas e espa\xE7amentos maiores entre os elementos,
enquanto o n\xEDvel `),jc(26,`strong`),lO(27,`AA`),wg(),lO(28,` mant\xE9m a conformidade com as diretrizes de acessibilidade, mas com propor\xE7\xF5es mais equilibradas
e contornos mais sutis.`),wg(),jc(29,`p`),lO(30,`O serviço também possibilita configurar a `),jc(31,`strong`),lO(32,`densidade de espaçamentos`),wg(),lO(33,`, permitindo ajustar o espa\xE7o entre e dentro dos
componentes. Essa configura\xE7\xE3o pode ser utilizada com qualquer n\xEDvel de acessibilidade.`),wg(),jc(34,`blockquote`)(35,`p`),lO(36,`Observação: a customização das cores de `),jc(37,`code`),lO(38,`feedback`),wg(),lO(39,` não é recomendada por motivos de acessibilidade e usabilidade.`),wg()(),jc(40,`blockquote`)(41,`p`),lO(42,`Para saber mais sobre como customizar o tema padr\xE3o, consulte o item
`),jc(43,`a`,6),lO(44,`Customização de Temas usando o serviço PO-UI`),wg(),lO(45,` na aba `),jc(46,`code`),lO(47,`Guias`),wg(),lO(48,`.`),wg()()(),jc(49,`h3`,7),lO(50,`Métodos`),wg(),jc(51,`table`,8)(52,`tr`,9)(53,`th`,10)(54,`div`,11)(55,`h4`)(56,`span`,12),lO(57,` setTheme `),wg()()()()(),jc(58,`tr`,13)(59,`td`,13)(60,`p`),lO(61,`Aplica um tema ao componente de acordo com o tipo de tema e o nível de acessibilidade especificados.`),wg(),jc(62,`p`),lO(63,`Este método configura o tema do componente com base no objeto `),jc(64,`code`),lO(65,`themeConfig`),wg(),lO(66,` fornecido, no `),jc(67,`code`),lO(68,`themeType`),wg(),lO(69,` e no `),jc(70,`code`),lO(71,`a11yLevel`),wg(),lO(72,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),wg()()()(),jc(73,`h5`)(74,`b`),lO(75,`Parâmetros`),wg()(),jc(76,`table`,14)(77,`tr`,15)(78,`th`,16),lO(79,`Nome`),wg(),jc(80,`th`,16),lO(81,`Tipo`),wg(),jc(82,`th`,16),lO(83,`Descrição`),wg()(),jc(84,`tr`,9)(85,`td`,17),lO(86,` themeConfig`),wg(),jc(87,`td`,18)(88,`code`,19),lO(89,` PoTheme `),wg()(),jc(90,`td`,13)(91,`p`),lO(92,`Configuração de tema a ser aplicada ao componente.`),wg()()(),jc(93,`tr`,9)(94,`td`,17),lO(95,` themeType`),wg(),jc(96,`td`,18)(97,`code`,19),lO(98,` PoThemeTypeEnum `),wg()(),jc(99,`td`,13)(100,`p`),lO(101,`(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro é o padrão.`),wg()()(),jc(102,`tr`,9)(103,`td`,17),lO(104,` a11yLevel`),wg(),jc(105,`td`,18)(106,`code`,19),lO(107,` PoThemeA11yEnum `),wg()(),jc(108,`td`,13)(109,`p`),lO(110,`(Opcional) Nível de acessibilidade dos componentes, podendo ser AA ou AAA. Padrão é AAA.`),wg()()(),jc(111,`tr`,9)(112,`td`,17),lO(113,` persistPreference`),wg(),jc(114,`td`,18)(115,`code`,19),lO(116,` boolean `),wg()(),jc(117,`td`,13)(118,`p`),lO(119,`(Opcional) Define se a prefer\xEAncia de tema deve ser salva no
localStorage para persist\xEAncia. Por padr\xE3o \xE9 `),jc(120,`code`),lO(121,`true`),wg(),lO(122,`, ou seja, a preferência será salva automaticamente.`),wg()()()(),nu(123,`br`),jc(124,`table`,8)(125,`tr`,9)(126,`th`,10)(127,`div`,11)(128,`h4`)(129,`span`,12),lO(130,` getA11yLevel `),wg()()()()(),jc(131,`tr`,13)(132,`td`,13)(133,`p`),lO(134,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),jc(135,`code`),lO(136,`AAA`),wg(),lO(137,` como padrão.`),wg()()()(),jc(138,`h5`)(139,`b`),lO(140,`Retorno`),wg()(),jc(141,`table`,14)(142,`tr`,15)(143,`th`,16),lO(144,`Tipo`),wg(),jc(145,`th`,16),lO(146,`Descrição`),wg()(),jc(147,`tr`,9)(148,`td`,18)(149,`code`,19),lO(150,`PoThemeA11yEnum`),wg()(),jc(151,`td`,13)(152,`p`),lO(153,`O nível de acessibilidade, que pode ser `),jc(154,`code`),lO(155,`AA`),wg(),lO(156,` ou `),jc(157,`code`),lO(158,`AAA`),wg(),lO(159,`.`),wg()()()(),nu(160,`br`),jc(161,`table`,8)(162,`tr`,9)(163,`th`,10)(164,`div`,11)(165,`h4`)(166,`span`,12),lO(167,` setA11yDefaultSizeSmall `),wg()()()()(),jc(168,`tr`,13)(169,`td`,13)(170,`p`),lO(171,`Define o tamanho `),jc(172,`code`),lO(173,`small`),wg(),lO(174,` como padr\xE3o para componentes que n\xE3o possuem um tamanho definido. Essa configura\xE7\xE3o \xE9
aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),jc(175,`code`),lO(176,`AA`),wg(),lO(177,`. O valor definido \xE9 salvo no
`),jc(178,`code`),lO(179,`localStorage`),wg(),lO(180,` sob a chave `),jc(181,`code`),lO(182,`po-default-size`),wg(),lO(183,` e o atributo `),jc(184,`code`),lO(185,`data-default-size`),wg(),lO(186,` \xE9 adicionado ao elemento HTML
para que os componentes possam aplicar o tamanho`),wg(),jc(187,`p`),lO(188,`Exemplo de uso:`),wg(),jc(189,`pre`)(190,`code`,20),lO(191,`import { poThemeDefault, PoThemeService, PoThemeTypeEnum, PoThemeA11yEnum } from '@po-ui/ng-components';

private themeService = inject(PoThemeService);

constructor() {
 this.themeService.setA11yDefaultSizeSmall(true);
 this.themeService.setTheme(poThemeDefault, PoThemeTypeEnum.light, PoThemeA11yEnum.AA);
}
`),wg()(),jc(192,`blockquote`)(193,`p`),lO(194,`Para garantir que o tamanho `),jc(195,`code`),lO(196,`small`),wg(),lO(197,` seja aplicado corretamente a todos os componentes, recomendamos
definir esta configura\xE7\xE3o `),jc(198,`strong`),lO(199,`junto com o nível de acessibilidade `),jc(200,`code`),lO(201,`AA`),wg(),lO(202,` na inicialização da aplicação`),wg(),lO(203,`.
Para ajustar a densidade visual dos componentes agrupadores (como pages, container, etc.), utilize tamb\xE9m
o m\xE9todo `),jc(204,`code`),lO(205,`setDensityMode`),wg(),lO(206,` conforme necessário.`),wg()()()()(),jc(207,`h5`)(208,`b`),lO(209,`Parâmetros`),wg()(),jc(210,`table`,14)(211,`tr`,15)(212,`th`,16),lO(213,`Nome`),wg(),jc(214,`th`,16),lO(215,`Tipo`),wg(),jc(216,`th`,16),lO(217,`Descrição`),wg()(),jc(218,`tr`,9)(219,`td`,17),lO(220,` enable`),wg(),jc(221,`td`,18)(222,`code`,19),lO(223,` boolean `),wg()(),jc(224,`td`,13)(225,`p`),lO(226,`Habilita ou desabilita o tamanho `),jc(227,`code`),lO(228,`small`),wg(),lO(229,` globalmente.`),wg()()()(),nu(230,`br`),jc(231,`table`,8)(232,`tr`,9)(233,`th`,10)(234,`div`,11)(235,`h4`)(236,`span`,12),lO(237,` getDensityMode `),wg()()()()(),jc(238,`tr`,13)(239,`td`,13)(240,`p`),lO(241,`Retorna o modo de adensamento dos componentes agrupadores.
Se n\xE3o estiver configurado, retorna `),jc(242,`code`),lO(243,`medium`),wg(),lO(244,` como padrão.`),wg()()()(),jc(245,`h5`)(246,`b`),lO(247,`Retorno`),wg()(),jc(248,`table`,14)(249,`tr`,15)(250,`th`,16),lO(251,`Tipo`),wg(),jc(252,`th`,16),lO(253,`Descrição`),wg()(),jc(254,`tr`,9)(255,`td`,18)(256,`code`,19),lO(257,`PoDensityMode`),wg()(),jc(258,`td`,13)(259,`p`),lO(260,`O modo de adensamento, que pode ser `),jc(261,`code`),lO(262,`small`),wg(),lO(263,` ou `),jc(264,`code`),lO(265,`medium`),wg(),lO(266,`.`),wg()()()(),nu(267,`br`),jc(268,`table`,8)(269,`tr`,9)(270,`th`,10)(271,`div`,11)(272,`h4`)(273,`span`,12),lO(274,` setDensityMode `),wg()()()()(),jc(275,`tr`,13)(276,`td`,13)(277,`p`),lO(278,`Aplica o modo de adensamento compacto (`),jc(279,`code`),lO(280,`small`),wg(),lO(281,`) ou espaçoso (`),jc(282,`code`),lO(283,`medium`),wg(),lO(284,`) para os componentes agrupadores,
independentemente do n\xEDvel de acessibilidade. O valor definido \xE9 salvo no `),jc(285,`code`),lO(286,`localStorage`),wg(),lO(287,` sob a chave
`),jc(288,`code`),lO(289,`po-density-mode`),wg(),lO(290,`.`),wg()()()(),jc(291,`h5`)(292,`b`),lO(293,`Parâmetros`),wg()(),jc(294,`table`,14)(295,`tr`,15)(296,`th`,16),lO(297,`Nome`),wg(),jc(298,`th`,16),lO(299,`Tipo`),wg(),jc(300,`th`,16),lO(301,`Descrição`),wg()(),jc(302,`tr`,9)(303,`td`,17),lO(304,` mode`),wg(),jc(305,`td`,18)(306,`code`,21),lO(307,` 'small' `),wg(),jc(308,`code`,22),lO(309,` 'medium' `),wg()(),jc(310,`td`,13)(311,`p`),lO(312,`Define o modo de densidade: `),jc(313,`code`),lO(314,`small`),wg(),lO(315,` para compacto, `),jc(316,`code`),lO(317,`medium`),wg(),lO(318,` para espa\xE7oso.
O valor padr\xE3o \xE9 `),jc(319,`code`),lO(320,`medium`),wg(),lO(321,`.`),wg()()()(),nu(322,`br`),jc(323,`table`,8)(324,`tr`,9)(325,`th`,10)(326,`div`,11)(327,`h4`)(328,`span`,12),lO(329,` persistThemeActive `),wg()()()()(),jc(330,`tr`,13)(331,`td`,13)(332,`p`),lO(333,`Restaura e aplica as prefer\xEAncias visuais do usu\xE1rio para o tema da aplica\xE7\xE3o, garantindo que essas prefer\xEAncias
sejam persistidas no `),jc(334,`code`),lO(335,`localStorage`),wg(),lO(336,` para uso em recarregamentos futuros.`),wg()()()(),jc(337,`h5`)(338,`b`),lO(339,`Retorno`),wg()(),jc(340,`table`,14)(341,`tr`,15)(342,`th`,16),lO(343,`Tipo`),wg(),jc(344,`th`,16),lO(345,`Descrição`),wg()(),jc(346,`tr`,9)(347,`td`,18)(348,`code`,19),lO(349,`PoTheme`),wg()(),jc(350,`td`,13)(351,`p`),lO(352,`O tema atualmente aplicado.`),wg()()()(),nu(353,`br`),jc(354,`table`,8)(355,`tr`,9)(356,`th`,10)(357,`div`,11)(358,`h4`)(359,`span`,12),lO(360,` changeCurrentThemeType `),wg()()()()(),jc(361,`tr`,13)(362,`td`,13)(363,`p`),lO(364,`Altera o tipo do tema armazenado e aplica os novos estilos ao documento.`),wg(),jc(365,`p`),lO(366,`Este método altera o tipo do tema armazenado ativo (light/dark)`),wg()()()(),jc(367,`h5`)(368,`b`),lO(369,`Parâmetros`),wg()(),jc(370,`table`,14)(371,`tr`,15)(372,`th`,16),lO(373,`Nome`),wg(),jc(374,`th`,16),lO(375,`Tipo`),wg(),jc(376,`th`,16),lO(377,`Descrição`),wg()(),jc(378,`tr`,9)(379,`td`,17),lO(380,` themeType`),wg(),jc(381,`td`,18)(382,`code`,19),lO(383,` PoThemeTypeEnum `),wg()(),jc(384,`td`,13)(385,`p`),lO(386,`O tipo de tema a ser aplicado, light ou dark.`),wg()()()(),nu(387,`br`),jc(388,`table`,8)(389,`tr`,9)(390,`th`,10)(391,`div`,11)(392,`h4`)(393,`span`,12),lO(394,` cleanThemeActive `),wg()()()()(),jc(395,`tr`,13)(396,`td`,13)(397,`p`),lO(398,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),wg()()()(),jc(399,`h5`)(400,`b`),lO(401,`Parâmetros`),wg()(),jc(402,`table`,14)(403,`tr`,15)(404,`th`,16),lO(405,`Nome`),wg(),jc(406,`th`,16),lO(407,`Tipo`),wg(),jc(408,`th`,16),lO(409,`Descrição`),wg()(),jc(410,`tr`,9)(411,`td`,17),lO(412,` persistPreference`),wg(),jc(413,`td`,18)(414,`code`,19),lO(415,` boolean `),wg()(),jc(416,`td`,13)(417,`p`),lO(418,`(Opcional) Define se a preferência de tema não deve ser mantida no localStorage para persistência. `),jc(419,`code`),lO(420,`true`),wg(),lO(421,` para remover, `),jc(422,`code`),lO(423,`false`),wg(),lO(424,` para manter.`),wg()()()(),nu(425,`br`),jc(426,`table`,8)(427,`tr`,9)(428,`th`,10)(429,`div`,11)(430,`h4`)(431,`span`,12),lO(432,` getThemeActive `),wg()()()()(),jc(433,`tr`,13)(434,`td`,13)(435,`p`),lO(436,`Retorna o tema ativo como um observable. Este método funcionará apenas se o tema estiver armazenado no `),jc(437,`code`),lO(438,`localStorage`),wg(),lO(439,`.`),wg()()()(),jc(440,`h5`)(441,`b`),lO(442,`Retorno`),wg()(),jc(443,`table`,14)(444,`tr`,15)(445,`th`,16),lO(446,`Tipo`),wg(),jc(447,`th`,16),lO(448,`Descrição`),wg()(),jc(449,`tr`,9)(450,`td`,18)(451,`code`,19),lO(452,`PoTheme`),wg()(),jc(453,`td`,13)(454,`p`),lO(455,`Tema ativo.`),wg()()()(),nu(456,`br`),jc(457,`table`,8)(458,`tr`,9)(459,`th`,10)(460,`div`,11)(461,`h4`)(462,`span`,12),lO(463,` setDefaultTheme `),wg()()()()(),jc(464,`tr`,13)(465,`td`,13)(466,`p`),lO(467,`Define o tema atual como o tema "PoUI Padrão".`),wg()()()(),jc(468,`h5`)(469,`b`),lO(470,`Parâmetros`),wg()(),jc(471,`table`,14)(472,`tr`,15)(473,`th`,16),lO(474,`Nome`),wg(),jc(475,`th`,16),lO(476,`Tipo`),wg(),jc(477,`th`,16),lO(478,`Descrição`),wg()(),jc(479,`tr`,9)(480,`td`,17),lO(481,` type`),wg(),jc(482,`td`,18)(483,`code`,19),lO(484,` PoThemeTypeEnum `),wg()(),jc(485,`td`,13)(486,`p`),lO(487,`O tipo de Tema a ser aplicado, light / dark.`),wg()()()(),nu(488,`br`),jc(489,`table`,8)(490,`tr`,9)(491,`th`,10)(492,`div`,11)(493,`h4`)(494,`span`,12),lO(495,` setThemeType `),wg()()()()(),jc(496,`tr`,13)(497,`td`,13)(498,`p`),lO(499,`Define o tipo (light/dark) quando um tema está sendo aplicado.`),wg()()()(),jc(500,`h5`)(501,`b`),lO(502,`Parâmetros`),wg()(),jc(503,`table`,14)(504,`tr`,15)(505,`th`,16),lO(506,`Nome`),wg(),jc(507,`th`,16),lO(508,`Tipo`),wg(),jc(509,`th`,16),lO(510,`Descrição`),wg()(),jc(511,`tr`,9)(512,`td`,17),lO(513,` theme`),wg(),jc(514,`td`,18)(515,`code`,19),lO(516,` PoTheme `),wg()(),jc(517,`td`,13)(518,`p`),lO(519,`Objeto contendo as definições de tema a serem aplicadas no componente.`),wg()()(),jc(520,`tr`,9)(521,`td`,17),lO(522,` themeType`),wg(),jc(523,`td`,18)(524,`code`,19),lO(525,` PoThemeTypeEnum `),wg()(),jc(526,`td`,13)(527,`p`),lO(528,`(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padrão, o tema claro é aplicado.`),wg()()()(),nu(529,`br`),jc(530,`table`,8)(531,`tr`,9)(532,`th`,10)(533,`div`,11)(534,`h4`)(535,`span`,12),lO(536,` setCurrentThemeType `),wg()()()()(),jc(537,`tr`,13)(538,`td`,13)(539,`p`),lO(540,`Define o tipo (light/dark) para um tema já ativo.`),wg()()()(),jc(541,`h5`)(542,`b`),lO(543,`Parâmetros`),wg()(),jc(544,`table`,14)(545,`tr`,15)(546,`th`,16),lO(547,`Nome`),wg(),jc(548,`th`,16),lO(549,`Tipo`),wg(),jc(550,`th`,16),lO(551,`Descrição`),wg()(),jc(552,`tr`,9)(553,`td`,17),lO(554,` themeType`),wg(),jc(555,`td`,18)(556,`code`,19),lO(557,` PoThemeTypeEnum `),wg()(),jc(558,`td`,13)(559,`p`),lO(560,`(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padrão, o tema claro é aplicado.`),wg()()()(),nu(561,`br`),jc(562,`table`,8)(563,`tr`,9)(564,`th`,10)(565,`div`,11)(566,`h4`)(567,`span`,12),lO(568,` setThemeA11y `),wg()()()()(),jc(569,`tr`,13)(570,`td`,13)(571,`p`),lO(572,`Define o nível de acessibilidade quando um tema está sendo aplicado.`),wg()()()(),jc(573,`h5`)(574,`b`),lO(575,`Parâmetros`),wg()(),jc(576,`table`,14)(577,`tr`,15)(578,`th`,16),lO(579,`Nome`),wg(),jc(580,`th`,16),lO(581,`Tipo`),wg(),jc(582,`th`,16),lO(583,`Descrição`),wg()(),jc(584,`tr`,9)(585,`td`,17),lO(586,` theme`),wg(),jc(587,`td`,18)(588,`code`,19),lO(589,` PoTheme `),wg()(),jc(590,`td`,13)(591,`p`),lO(592,`Objeto contendo as definições de tema a serem aplicadas no componente.`),wg()()(),jc(593,`tr`,9)(594,`td`,17),lO(595,` a11y`),wg(),jc(596,`td`,18)(597,`code`,19),lO(598,` PoThemeA11yEnum `),wg()(),jc(599,`td`,13)(600,`p`),lO(601,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),wg()()()(),nu(602,`br`),jc(603,`table`,8)(604,`tr`,9)(605,`th`,10)(606,`div`,11)(607,`h4`)(608,`span`,12),lO(609,` setCurrentThemeA11y `),wg()()()()(),jc(610,`tr`,13)(611,`td`,13)(612,`p`),lO(613,`Define o nível de acessibilidade para um tema já ativo.`),wg()()()(),jc(614,`h5`)(615,`b`),lO(616,`Parâmetros`),wg()(),jc(617,`table`,14)(618,`tr`,15)(619,`th`,16),lO(620,`Nome`),wg(),jc(621,`th`,16),lO(622,`Tipo`),wg(),jc(623,`th`,16),lO(624,`Descrição`),wg()(),jc(625,`tr`,9)(626,`td`,17),lO(627,` a11y`),wg(),jc(628,`td`,18)(629,`code`,19),lO(630,` PoThemeA11yEnum `),wg()(),jc(631,`td`,13)(632,`p`),lO(633,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),wg()()()(),nu(634,`br`),jc(635,`h3`),lO(636,`Interfaces`),wg(),jc(637,`h4`,23)(638,`code`,5),lO(639,`PoThemeColor`),wg()(),jc(640,`div`,2)(641,`p`),lO(642,`Interface para representar as cores do tema.`),wg()(),jc(643,`h4`,7),lO(644,`Propriedades`),wg(),jc(645,`table`,14)(646,`tr`,15)(647,`th`,16),lO(648,`Nome`),wg(),jc(649,`th`,16),lO(650,`Tipo`),wg(),jc(651,`th`,16),lO(652,`Descrição`),wg()(),jc(653,`tr`,9)(654,`td`,17)(655,`div`,11)(656,`span`,12),lO(657,` action`),nu(658,`br`),wg()()(),jc(659,`td`,18)(660,`code`,24),lO(661,`PoThemeColorAction`),wg()(),jc(662,`td`,13)(663,`em`)(664,`strong`),lO(665,`(opcional)`),wg()(),jc(666,`p`),lO(667,`Cores da Action a serem aplicadas.`),wg(),jc(668,`p`),lO(669,`Exemplo de uso:`),wg(),jc(670,`pre`)(671,`code`,25),lO(672,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),wg()()()(),jc(673,`tr`,9)(674,`td`,17)(675,`div`,11)(676,`span`,12),lO(677,` brand`),nu(678,`br`),wg()()(),jc(679,`td`,18)(680,`code`,26),lO(681,`poThemeColorBrand`),wg()(),jc(682,`td`,13)(683,`em`)(684,`strong`),lO(685,`(opcional)`),wg()(),jc(686,`p`),lO(687,`Cores da Brand a serem aplicadas.`),wg(),jc(688,`p`),lO(689,`Exemplo de uso:`),wg(),jc(690,`pre`)(691,`code`,20),lO(692,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),wg()()()(),jc(693,`tr`,9)(694,`td`,17)(695,`div`,11)(696,`span`,12),lO(697,` categorical`),nu(698,`br`),wg()()(),jc(699,`td`,18)(700,`code`,27),lO(701,`PoThemeColorCategorical`),wg()(),jc(702,`td`,13)(703,`em`)(704,`strong`),lO(705,`(opcional)`),wg()(),jc(706,`p`),lO(707,`Cores da Categorical a serem aplicadas.`),wg(),jc(708,`p`),lO(709,`Exemplo de uso:`),wg(),jc(710,`pre`)(711,`code`,20),lO(712,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),wg()()()(),jc(713,`tr`,9)(714,`td`,17)(715,`div`,11)(716,`span`,12),lO(717,` categorical-overlay`),nu(718,`br`),wg()()(),jc(719,`td`,18)(720,`code`,27),lO(721,`PoThemeColorCategorical`),wg()(),jc(722,`td`,13)(723,`em`)(724,`strong`),lO(725,`(opcional)`),wg()(),jc(726,`p`),lO(727,`Cores da Categorical a serem aplicadas.`),wg(),jc(728,`p`),lO(729,`Exemplo de uso:`),wg(),jc(730,`pre`)(731,`code`,20),lO(732,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),wg()()()(),jc(733,`tr`,9)(734,`td`,17)(735,`div`,11)(736,`span`,12),lO(737,` neutral`),nu(738,`br`),wg()()(),jc(739,`td`,18)(740,`code`,28),lO(741,`PoThemeColorNeutral`),wg()(),jc(742,`td`,13)(743,`em`)(744,`strong`),lO(745,`(opcional)`),wg()(),jc(746,`p`),lO(747,`Cores Neutrals a serem aplicadas.`),wg(),jc(748,`p`),lO(749,`Exemplo de uso:`),wg(),jc(750,`pre`)(751,`code`,20),lO(752,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),wg()()()()(),jc(753,`h4`,23)(754,`code`,5),lO(755,`PoThemeColorAction`),wg()(),jc(756,`div`,2)(757,`p`),lO(758,`Interface para as cores de ação do tema.`),wg()(),jc(759,`h4`,7),lO(760,`Propriedades`),wg(),jc(761,`table`,14)(762,`tr`,15)(763,`th`,16),lO(764,`Nome`),wg(),jc(765,`th`,16),lO(766,`Tipo`),wg(),jc(767,`th`,16),lO(768,`Descrição`),wg()(),jc(769,`tr`,9)(770,`td`,17)(771,`div`,11)(772,`span`,12),lO(773,` default`),nu(774,`br`),wg()()(),jc(775,`td`,18)(776,`code`,29),lO(777,`string`),wg()(),jc(778,`td`,13)(779,`em`)(780,`strong`),lO(781,`(opcional)`),wg()(),jc(782,`p`),lO(783,`Cores da Action 'Default'.`),wg(),jc(784,`p`),lO(785,`Exemplo de uso:`),wg(),jc(786,`pre`)(787,`code`,20),lO(788,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),wg()()()(),jc(789,`tr`,9)(790,`td`,17)(791,`div`,11)(792,`span`,12),lO(793,` disabled`),nu(794,`br`),wg()()(),jc(795,`td`,18)(796,`code`,29),lO(797,`string`),wg()(),jc(798,`td`,13)(799,`em`)(800,`strong`),lO(801,`(opcional)`),wg()(),jc(802,`p`),lO(803,`Cores da Action de 'disabled'.`),wg(),jc(804,`p`),lO(805,`Exemplo de uso:`),wg(),jc(806,`pre`)(807,`code`,20),lO(808,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),wg()()()(),jc(809,`tr`,9)(810,`td`,17)(811,`div`,11)(812,`span`,12),lO(813,` focus`),nu(814,`br`),wg()()(),jc(815,`td`,18)(816,`code`,29),lO(817,`string`),wg()(),jc(818,`td`,13)(819,`em`)(820,`strong`),lO(821,`(opcional)`),wg()(),jc(822,`p`),lO(823,`Cores da Action para 'focus'.`),wg(),jc(824,`p`),lO(825,`Exemplo de uso:`),wg(),jc(826,`pre`)(827,`code`,20),lO(828,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),wg()()()(),jc(829,`tr`,9)(830,`td`,17)(831,`div`,11)(832,`span`,12),lO(833,` hover`),nu(834,`br`),wg()()(),jc(835,`td`,18)(836,`code`,29),lO(837,`string`),wg()(),jc(838,`td`,13)(839,`em`)(840,`strong`),lO(841,`(opcional)`),wg()(),jc(842,`p`),lO(843,`Cores da Action para 'hover'.`),wg(),jc(844,`p`),lO(845,`Exemplo de uso:`),wg(),jc(846,`pre`)(847,`code`,20),lO(848,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),wg()()()(),jc(849,`tr`,9)(850,`td`,17)(851,`div`,11)(852,`span`,12),lO(853,` pressed`),nu(854,`br`),wg()()(),jc(855,`td`,18)(856,`code`,29),lO(857,`string`),wg()(),jc(858,`td`,13)(859,`em`)(860,`strong`),lO(861,`(opcional)`),wg()(),jc(862,`p`),lO(863,`Cores da Action para 'pressed'.`),wg(),jc(864,`p`),lO(865,`Exemplo de uso:`),wg(),jc(866,`pre`)(867,`code`,20),lO(868,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),wg()()()()(),jc(869,`h4`,23)(870,`code`,5),lO(871,`PoThemeColorNeutral`),wg()(),jc(872,`div`,2)(873,`p`),lO(874,`Interface para as cores neutras do tema.`),wg()(),jc(875,`h4`,7),lO(876,`Propriedades`),wg(),jc(877,`table`,14)(878,`tr`,15)(879,`th`,16),lO(880,`Nome`),wg(),jc(881,`th`,16),lO(882,`Tipo`),wg(),jc(883,`th`,16),lO(884,`Descrição`),wg()(),jc(885,`tr`,9)(886,`td`,17)(887,`div`,11)(888,`span`,12),lO(889,` dark`),nu(890,`br`),wg()()(),jc(891,`td`,18)(892,`code`,30),lO(893,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),wg()(),jc(894,`td`,13)(895,`em`)(896,`strong`),lO(897,`(opcional)`),wg()(),jc(898,`p`),lO(899,`Cores Neutrals do tipo 'dark'.`),wg(),jc(900,`p`),lO(901,`Exemplo de uso:`),wg(),jc(902,`pre`)(903,`code`,20),lO(904,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),wg()()()(),jc(905,`tr`,9)(906,`td`,17)(907,`div`,11)(908,`span`,12),lO(909,` light`),nu(910,`br`),wg()()(),jc(911,`td`,18)(912,`code`,31),lO(913,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),wg()(),jc(914,`td`,13)(915,`em`)(916,`strong`),lO(917,`(opcional)`),wg()(),jc(918,`p`),lO(919,`Cores Neutrals do tipo 'light'.`),wg(),jc(920,`p`),lO(921,`Exemplo de uso:`),wg(),jc(922,`pre`)(923,`code`,20),lO(924,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),wg()()()(),jc(925,`tr`,9)(926,`td`,17)(927,`div`,11)(928,`span`,12),lO(929,` mid`),nu(930,`br`),wg()()(),jc(931,`td`,18)(932,`code`,32),lO(933,`{ '40'?: string; '60'?: string;
}`),wg()(),jc(934,`td`,13)(935,`em`)(936,`strong`),lO(937,`(opcional)`),wg()(),jc(938,`p`),lO(939,`Cores Neutrals do tipo 'mid'.`),wg(),jc(940,`p`),lO(941,`Exemplo de uso:`),wg(),jc(942,`pre`)(943,`code`,20),lO(944,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),wg()()()()(),jc(945,`h4`,23)(946,`code`,5),lO(947,`PoThemeTokens`),wg()(),jc(948,`div`,2)(949,`p`),lO(950,`Interface para o tema da aplicação.`),wg()(),jc(951,`h4`,23)(952,`code`,5),lO(953,`PoThemeToken`),wg()(),jc(954,`div`,2)(955,`p`),lO(956,`Interface para os tokens do Tema.`),wg()(),jc(957,`h4`,7),lO(958,`Propriedades`),wg(),jc(959,`table`,14)(960,`tr`,15)(961,`th`,16),lO(962,`Nome`),wg(),jc(963,`th`,16),lO(964,`Tipo`),wg(),jc(965,`th`,16),lO(966,`Descrição`),wg()(),jc(967,`tr`,9)(968,`td`,17)(969,`div`,11)(970,`span`,12),lO(971,` color`),nu(972,`br`),wg()()(),jc(973,`td`,18)(974,`code`,33),lO(975,`PoThemeColor`),wg()(),jc(976,`td`,13)(977,`em`)(978,`strong`),lO(979,`(opcional)`),wg()(),jc(980,`p`),lO(981,`Tokens do tipo 'color'`),wg()()(),jc(982,`tr`,9)(983,`td`,17)(984,`div`,11)(985,`span`,12),lO(986,` onRoot`),nu(987,`br`),wg()()(),jc(988,`td`,18)(989,`code`,34),lO(990,`DynamicProperties`),wg()(),jc(991,`td`,13)(992,`em`)(993,`strong`),lO(994,`(opcional)`),wg()(),jc(995,`p`),lO(996,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),jc(997,`code`),lO(998,`:root`),wg()(),jc(999,`p`),lO(1e3,`Exemplo de uso:`),wg(),jc(1001,`pre`)(1002,`code`,20),lO(1003,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),wg()()()(),jc(1004,`tr`,9)(1005,`td`,17)(1006,`div`,11)(1007,`span`,12),lO(1008,` perComponent`),nu(1009,`br`),wg()()(),jc(1010,`td`,18)(1011,`code`,34),lO(1012,`DynamicProperties`),wg()(),jc(1013,`td`,13)(1014,`em`)(1015,`strong`),lO(1016,`(opcional)`),wg()(),jc(1017,`p`),lO(1018,`Tokens do tipo 'perComponent'`),wg(),jc(1019,`p`),lO(1020,`Exemplo de uso:`),wg(),jc(1021,`pre`)(1022,`code`,20),lO(1023,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),wg()()()()(),jc(1024,`h4`,23)(1025,`code`,5),lO(1026,`PoTheme`),wg()(),jc(1027,`div`,2)(1028,`p`),lO(1029,`Interface para o método `),jc(1030,`code`),lO(1031,`setTheme()`),wg(),lO(1032,`.`),wg()(),jc(1033,`h4`,7),lO(1034,`Propriedades`),wg(),jc(1035,`table`,14)(1036,`tr`,15)(1037,`th`,16),lO(1038,`Nome`),wg(),jc(1039,`th`,16),lO(1040,`Tipo`),wg(),jc(1041,`th`,16),lO(1042,`Descrição`),wg()(),jc(1043,`tr`,9)(1044,`td`,17)(1045,`div`,11)(1046,`span`,12),lO(1047,` active`),nu(1048,`br`),wg()()(),jc(1049,`td`,18)(1050,`code`,35),lO(1051,`PoThemeTypeEnum `),wg(),jc(1052,`code`,36),lO(1053,` PoThemeActive`),wg()(),jc(1054,`td`,13)(1055,`em`)(1056,`strong`),lO(1057,`(opcional)`),wg()(),jc(1058,`p`),lO(1059,`Tipo e nível de acessibilidade de tema ativo`),wg()()(),jc(1060,`tr`,9)(1061,`td`,17)(1062,`div`,11)(1063,`span`,12),lO(1064,` inheritDefaultStyle`),nu(1065,`br`),wg()()(),jc(1066,`td`,18)(1067,`code`,37),lO(1068,`boolean`),wg()(),jc(1069,`td`,13)(1070,`em`)(1071,`strong`),lO(1072,`(opcional)`),wg()(),jc(1073,`p`),lO(1074,`Define se o tema herda a identidade visual do tema padrão do PO UI.`),wg(),jc(1075,`p`),lO(1076,`A identidade visual corresponde aos arredondamentos dos componentes e \xE0 cor de fundo da p\xE1gina definidos
pelo tema padr\xE3o. Os estilos estruturais (ex.: espessura de outline, adensamento e ajustes de light/dark)
s\xE3o aplicados em qualquer caso.`),wg(),jc(1077,`p`),lO(1078,`As fam\xEDlias de fonte do tema padr\xE3o n\xE3o s\xE3o controladas por esta propriedade: elas s\xE3o definidas pelo CSS
do `),jc(1079,`code`),lO(1080,`@po-ui/style`),wg(),lO(1081,`. Um tema com fontes próprias deve declará-las nos seus tokens.`),wg(),jc(1082,`p`),lO(1083,`Utilize `),jc(1084,`code`),lO(1085,`false`),wg(),lO(1086,` quando o tema define a própria identidade visual e não deve receber a do tema padrão.`),wg()()(),jc(1087,`tr`,9)(1088,`td`,17)(1089,`div`,11)(1090,`span`,12),lO(1091,` name`),nu(1092,`br`),wg()()(),jc(1093,`td`,18)(1094,`code`,29),lO(1095,`string`),wg()(),jc(1096,`td`,13)(1097,`p`),lO(1098,`Nome para o tema:
Ex.: default, totvs, sunset...`),wg()()(),jc(1099,`tr`,9)(1100,`td`,17)(1101,`div`,11)(1102,`span`,12),lO(1103,` type`),nu(1104,`br`),wg()()(),jc(1105,`td`,18)(1106,`code`,38),lO(1107,`PoThemeType `),wg(),jc(1108,`code`,39),lO(1109,` Array<PoThemeType>`),wg()(),jc(1110,`td`,13)(1111,`p`),lO(1112,`Tipo de tema:`),wg(),jc(1113,`ul`)(1114,`li`),lO(1115,`light`),wg(),jc(1116,`li`),lO(1117,`dark`),wg()()()()(),jc(1118,`h3`),lO(1119,`Enums`),wg(),jc(1120,`h4`,4)(1121,`code`,5),lO(1122,`PoThemeA11yEnum`),wg()(),jc(1123,`div`,2)(1124,`p`),lO(1125,`Enum para configurar o nível de acessibilidade dos componentes através do serviço de tema.`),wg(),jc(1126,`pre`)(1127,`code`),lO(1128,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),wg()()(),jc(1129,`h4`,7),lO(1130,`Propriedades`),wg(),jc(1131,`table`,14)(1132,`tr`,15)(1133,`th`,16),lO(1134,`Nome`),wg(),jc(1135,`th`,16),lO(1136,`Descrição`),wg()(),jc(1137,`tr`,9)(1138,`td`,17)(1139,`div`,11)(1140,`span`,12),lO(1141,` AA`),nu(1142,`br`),wg()()(),jc(1143,`td`,13)(1144,`p`),lO(1145,`Nível de acessibilidade AA.`),wg(),jc(1146,`ul`)(1147,`li`),lO(1148,`Define a espessura do `),jc(1149,`code`),lO(1150,`outline`),wg(),lO(1151,` para `),jc(1152,`strong`),lO(1153,`2px`),wg(),lO(1154,`.`),wg(),jc(1155,`li`),lO(1156,`Disponibiliza o tamanho `),jc(1157,`code`),lO(1158,`small`),wg(),lO(1159,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),wg()()()(),jc(1160,`tr`,9)(1161,`td`,17)(1162,`div`,11)(1163,`span`,12),lO(1164,` AAA`),nu(1165,`br`),wg()()(),jc(1166,`td`,13)(1167,`p`),lO(1168,`Nível de acessibilidade AAA.`),wg(),jc(1169,`ul`)(1170,`li`),lO(1171,`Define a espessura do `),jc(1172,`code`),lO(1173,`outline`),wg(),lO(1174,` para `),jc(1175,`strong`),lO(1176,`4px`),wg(),lO(1177,`.`),wg(),jc(1178,`li`),lO(1179,`Não disponibiliza o tamanho `),jc(1180,`code`),lO(1181,`small`),wg(),lO(1182,` para componentes de formulário.`),wg()()()()(),jc(1183,`h4`,4)(1184,`code`,5),lO(1185,`PoThemeTypeEnum`),wg()(),jc(1186,`div`,2)(1187,`p`),lO(1188,`Enum utilizado para configurar o tipo de tema suportado, é possível alternar entre os tipos definidos.`),wg(),jc(1189,`pre`)(1190,`code`),lO(1191,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),wg()()(),jc(1192,`h4`,7),lO(1193,`Propriedades`),wg(),jc(1194,`table`,14)(1195,`tr`,15)(1196,`th`,16),lO(1197,`Nome`),wg(),jc(1198,`th`,16),lO(1199,`Descrição`),wg()(),jc(1200,`tr`,9)(1201,`td`,17)(1202,`div`,11)(1203,`span`,12),lO(1204,` light`),nu(1205,`br`),wg()()(),jc(1206,`td`,13)(1207,`p`),lO(1208,`Define o tema como claro.`),wg()()(),jc(1209,`tr`,9)(1210,`td`,17)(1211,`div`,11)(1212,`span`,12),lO(1213,` dark`),nu(1214,`br`),wg()()(),jc(1215,`td`,13)(1216,`p`),lO(1217,`Define o tema como escuro.`),wg()()()()())},encapsulation:2,changeDetection:1})}return a})();function Fe(a,Oe){if(a&1){let l=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(l);let o=Fx();return __(o.changeTab(`web`))}),nu(1,`sample-po-theme-labs-view`),wg()}if(a&2){let l=Fx();UE(`p-active`,l.activeTab===`web`)}}var Ne=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,m){this.route=l,this.router=m}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let m=l.view;this.activeTab=m||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(m){return new(m||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Theme`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(m,o){m&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Fe,2,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return o.changeTab(`doc`)}),nu(4,`sample-po-theme-doc`),wg()()()),m&2&&(UE(`p-actions`,o.actions),rg(2),Dx(o.hidePoWebSample?-1:2),rg(),UE(`p-active`,o.activeTab===`doc`))},dependencies:[Tze,Qae,ere,Ce,Ae],encapsulation:2,changeDetection:1})}return a})()}];var De=(()=>{class a{static ɵfac=function(m){return new(m||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[I1.forChild(Ne),I1]})}return a})();var pt=(()=>{class a{static ɵfac=function(m){return new(m||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[M,De]})}return a})();export{pt as DocPoThemeModule};