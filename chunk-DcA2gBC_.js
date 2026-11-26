import{m as P,p as M}from"./main-RU54IPUI.js";import{$r as No,$t as ia,A as Goe,Ba as q0,Bn as yae,Br as Kb,Ci as U_,D as GD,Dn as tre,E as G4,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,I as Joe,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Kt as eI,Lr as Jn,Mt as Zte,Pr as I,Qn as AZ,Tr as G0,Vi as ZL,Vr as Kg,W as Mze,Wr as LO,Y as On,Ya as tk,_a as jO,_i as RZ,ca as ge$1,do as xo,ea as de,er as Ab,fn as oi,fr as Cu,ii as PZ,jr as H_,li as QL,ln as ni,mi as Qm,or as Be,pa as i1,pn as p5,qr as Mk,ro as wg,so as xZ,tn as j4,tr as An,vi as Rk,w as Fc,yt as UH,zr as KO}from"./chunk-CTJH0VS3.js";var ge=[`reactiveFormData`];function Te(a,be){if(a&1){let r=KO();Jc(0,`po-container`,7)(1,`form`,14),_u(2,`po-divider`,15),Jc(3,`div`,2)(4,`po-input`,16),G0(),Kg(),Jc(5,`po-email`,17),G0(),Kg()(),_u(6,`po-divider`,18),Jc(7,`div`,2)(8,`po-input`,19),G0(),Kg(),Jc(9,`po-number`,20),G0(),Kg(),Jc(10,`po-url`,21),G0(),Kg()(),Jc(11,`div`,2)(12,`po-button`,22),_t(`p-click`,function(){U_(r);let o=tk();return H_(o.saveForm())}),Kg()()()()}if(a&2){let r=tk();wg(),Ab(`formGroup`,r.reactiveForm),wg(3),q0(),wg(),q0(),wg(3),q0(),wg(),q0(),wg(),q0(),wg(2),Ab(`p-disabled`,r.reactiveForm.invalid)}}var he=(()=>{class a{reactiveFormModal;formBuilder=p(PZ);poTheme=p(eI);changeDetector=p(Be);theme=`evo`;themeType=On.light;a11yLevel=ni.AAA;densityMode=`medium`;exampleVisible=!0;reactiveForm=this.createReactiveForm();themeOptions=[{label:`EVO (default)`,value:`evo`},{label:`PO UI (deprecated)`,value:`deprecated`}];themeTypeOptions=[{label:`Light`,value:On.light},{label:`Dark`,value:On.dark}];a11yLevelOptions=[{label:`AAA`,value:ni.AAA},{label:`AA`,value:ni.AA}];densityModeOptions=[{label:`Medium`,value:`medium`},{label:`Small`,value:`small`}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:`Close`};themes={evo:GD,deprecated:UH};ngOnInit(){let r=this.poTheme.getThemeActive();r&&(this.theme=r.name===UH.name?`deprecated`:`evo`,typeof r.active==`object`&&(this.themeType=r.active.type??On.light,this.a11yLevel=r.active.a11y??ni.AAA)),this.densityMode=this.poTheme.getDensityMode()}applyTheme(){this.poTheme.setTheme(this.themes[this.theme],this.themeType,this.a11yLevel),this.poTheme.setA11yDefaultSizeSmall(this.a11yLevel===ni.AA),this.poTheme.setDensityMode(this.densityMode),this.exampleVisible=!1,this.changeDetector.detectChanges(),this.exampleVisible=!0}saveForm(){this.reactiveFormModal.open()}createReactiveForm(){return this.formBuilder.group({name:[``,Qm.compose([Qm.required,Qm.minLength(5),Qm.maxLength(30)])],address:[``,Qm.compose([Qm.required,Qm.minLength(5),Qm.maxLength(50)])],number:[``,Qm.compose([Qm.required,Qm.min(1),Qm.max(99999)])],email:[``,Qm.required],website:[``,Qm.required]})}static ɵfac=function(m){return new(m||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-theme-labs`]],viewQuery:function(m,o){if(m&1&&Cu(ge,7),m&2){let E;No(E=xo())&&(o.reactiveFormModal=E.first)}},standalone:!1,decls:17,vars:15,consts:[[`reactiveFormData`,``],[`p-title`,`Theme settings`],[1,`po-row`],[`name`,`theme`,`p-label`,`Theme`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`themeType`,`p-label`,`Theme type`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`a11yLevel`,`p-label`,`Accessibility level`,`p-helper`,`AA allows the small size as default for components.`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`densityMode`,`p-label`,`Density`,`p-helper`,`Spacing of grouping components, such as pages, containers and modals.`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[1,`po-mt-3`],[`p-title`,`Save successful`,3,`p-primary-action`],[`p-label`,`Name`,1,`po-md-12`,3,`p-value`],[`p-label`,`Address`,1,`po-md-6`,3,`p-value`],[`p-label`,`Number`,1,`po-md-6`,3,`p-value`],[`p-label`,`Email`,1,`po-md-6`,3,`p-value`],[`p-label`,`Website`,1,`po-md-6`,3,`p-value`],[3,`formGroup`],[`p-label`,`Customer`],[`formControlName`,`name`,`p-clean`,``,`p-icon`,`an an-user`,`p-label`,`Customer name`,1,`po-lg-6`],[`formControlName`,`email`,`p-label`,`Email`,`p-clean`,``,1,`po-lg-6`],[`p-label`,`Address`],[`formControlName`,`address`,`p-clean`,``,`p-icon`,`an an-map-pin`,`p-label`,`Address`,1,`po-lg-4`,`po-md-8`],[`formControlName`,`number`,`p-label`,`Number`,`p-clean`,``,1,`po-lg-2`,`po-md-4`],[`formControlName`,`website`,`p-label`,`Website`,`p-clean`,``,1,`po-lg-6`],[`p-label`,`Save`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(m,o){if(m&1){let E=KO();Jc(0,`po-widget`,1)(1,`div`,2)(2,`po-radio-group`,3),G0(),Zb(`ngModelChange`,function(p){return U_(E),Rk(o.theme,p)||(o.theme=p),H_(p)}),_t(`p-change`,function(){return o.applyTheme()}),Kg(),Jc(3,`po-radio-group`,4),G0(),Zb(`ngModelChange`,function(p){return U_(E),Rk(o.themeType,p)||(o.themeType=p),H_(p)}),_t(`p-change`,function(){return o.applyTheme()}),Kg(),Jc(4,`po-radio-group`,5),G0(),Zb(`ngModelChange`,function(p){return U_(E),Rk(o.a11yLevel,p)||(o.a11yLevel=p),H_(p)}),_t(`p-change`,function(){return o.applyTheme()}),Kg(),Jc(5,`po-radio-group`,6),G0(),Zb(`ngModelChange`,function(p){return U_(E),Rk(o.densityMode,p)||(o.densityMode=p),H_(p)}),_t(`p-change`,function(){return o.applyTheme()}),Kg()()(),LO(6,Te,13,2,`po-container`,7),Jc(7,`po-modal`,8,0)(9,`div`,2),_u(10,`po-info`,9),Kg(),Jc(11,`div`,2),_u(12,`po-info`,10)(13,`po-info`,11),Kg(),Jc(14,`div`,2),_u(15,`po-info`,12)(16,`po-info`,13),Kg()()}m&2&&(wg(2),Kb(`ngModel`,o.theme),Ab(`p-options`,o.themeOptions),q0(),wg(),Kb(`ngModel`,o.themeType),Ab(`p-options`,o.themeTypeOptions),q0(),wg(),Kb(`ngModel`,o.a11yLevel),Ab(`p-options`,o.a11yLevelOptions),q0(),wg(),Kb(`ngModel`,o.densityMode),Ab(`p-options`,o.densityModeOptions),q0(),wg(),jO(o.exampleVisible?6:-1),wg(),Ab(`p-primary-action`,o.modalPrimaryAction),wg(3),Ab(`p-value`,o.reactiveForm.controls.name.value),wg(2),Ab(`p-value`,o.reactiveForm.controls.address.value),wg(),Ab(`p-value`,o.reactiveForm.controls.number.value),wg(2),Ab(`p-value`,o.reactiveForm.controls.email.value),wg(),Ab(`p-value`,o.reactiveForm.controls.website.value))},dependencies:[xZ,RZ,AZ,QL,ZL,i1,oi,Fc,Nf,p5,j4,Goe,Zte,G4,Joe,ia,yae],encapsulation:2,changeDetection:1})}return a})();var Ee=(()=>{class a{static ɵfac=function(m){return new(m||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-theme-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-theme-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-theme-labs/sample-po-theme-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-theme-labs/sample-po-theme-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(m,o){m&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Theme Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-theme-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-theme-labs/sample-po-theme-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-widget p-title="Theme settings">
  <div class="po-row">
    <po-radio-group
      class="po-md-6"
      name="theme"
      p-label="Theme"
      [(ngModel)]="theme"
      [p-options]="themeOptions"
      (p-change)="applyTheme()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-6"
      name="themeType"
      p-label="Theme type"
      [(ngModel)]="themeType"
      [p-options]="themeTypeOptions"
      (p-change)="applyTheme()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-6"
      name="a11yLevel"
      p-label="Accessibility level"
      p-helper="AA allows the small size as default for components."
      [(ngModel)]="a11yLevel"
      [p-options]="a11yLevelOptions"
      (p-change)="applyTheme()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-6"
      name="densityMode"
      p-label="Density"
      p-helper="Spacing of grouping components, such as pages, containers and modals."
      [(ngModel)]="densityMode"
      [p-options]="densityModeOptions"
      (p-change)="applyTheme()"
    >
    </po-radio-group>
  </div>
</po-widget>

@if (exampleVisible) {
  <po-container class="po-mt-3">
    <form [formGroup]="reactiveForm">
      <po-divider p-label="Customer"></po-divider>

      <div class="po-row">
        <po-input class="po-lg-6" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name">
        </po-input>

        <po-email class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>
      </div>

      <po-divider p-label="Address"></po-divider>

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
  </po-container>
}

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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-theme-labs/sample-po-theme-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import {
  PoModalAction,
  PoModalComponent,
  PoRadioGroupOption,
  PoTheme,
  PoThemeA11yEnum,
  poThemeDefault,
  poThemeDefaultDeprecated,
  PoThemeService,
  PoThemeTypeEnum
} from '@po-ui/ng-components';

type SampleTheme = 'evo' | 'deprecated';

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
  private readonly changeDetector = inject(ChangeDetectorRef);

  theme: SampleTheme = 'evo';
  themeType: PoThemeTypeEnum = PoThemeTypeEnum.light;
  a11yLevel: PoThemeA11yEnum = PoThemeA11yEnum.AAA;
  densityMode: string = 'medium';
  exampleVisible = true;

  reactiveForm: UntypedFormGroup = this.createReactiveForm();

  readonly themeOptions: Array<PoRadioGroupOption> = [
    { label: 'EVO (default)', value: 'evo' },
    { label: 'PO UI (deprecated)', value: 'deprecated' }
  ];

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

  private readonly themes: Record<SampleTheme, PoTheme> = {
    evo: poThemeDefault,
    deprecated: poThemeDefaultDeprecated
  };

  ngOnInit(): void {
    // Only reads the current preferences (saved by the service); nothing is applied when the sample opens.
    const active = this.poTheme.getThemeActive();

    if (active) {
      this.theme = active.name === poThemeDefaultDeprecated.name ? 'deprecated' : 'evo';

      if (typeof active.active === 'object') {
        this.themeType = active.active.type ?? PoThemeTypeEnum.light;
        this.a11yLevel = active.active.a11y ?? PoThemeA11yEnum.AAA;
      }
    }

    this.densityMode = this.poTheme.getDensityMode();
  }

  applyTheme(): void {
    // 1. the theme, with its type (light/dark) and accessibility level
    this.poTheme.setTheme(this.themes[this.theme], this.themeType, this.a11yLevel);
    // 2. the \`small\` default size, only for AA; it reads the level set above
    this.poTheme.setA11yDefaultSizeSmall(this.a11yLevel === PoThemeA11yEnum.AA);
    // 3. the density of grouping components (pages, containers, modals), for any level
    this.poTheme.setDensityMode(this.densityMode);

    // components read the default size when they are created: render the example again
    this.exampleVisible = false;
    this.changeDetector.detectChanges();
    this.exampleVisible = true;
  }

  saveForm(): void {
    this.reactiveFormModal.open();
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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,he],encapsulation:2,changeDetection:1})}return a})();var Se=(()=>{class a{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(m){return new(m||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-theme-doc`]],standalone:!1,decls:1259,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-theme-service`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/theme-service`],[1,`docs-api-h5`,`docs-api-method-header`],[`id`,`method-setTheme`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[`id`,`method-getA11yLevel`,1,`docs-api-method-table`],[`id`,`method-setA11yDefaultSizeSmall`,1,`docs-api-method-table`],[1,`language-typescript`],[`id`,`method-getDensityMode`,1,`docs-api-method-table`],[`id`,`method-setDensityMode`,1,`docs-api-method-table`],[`pan`,``,1,`docs-api-property-type`,`'small'`],[`pan`,``,1,`docs-api-property-type`,`'medium'`],[`id`,`method-persistThemeActive`,1,`docs-api-method-table`],[`id`,`method-changeCurrentThemeType`,1,`docs-api-method-table`],[`id`,`method-cleanThemeActive`,1,`docs-api-method-table`],[`id`,`method-getThemeActive`,1,`docs-api-method-table`],[`id`,`method-setDefaultTheme`,1,`docs-api-method-table`],[`id`,`method-setThemeType`,1,`docs-api-method-table`],[`id`,`method-setCurrentThemeType`,1,`docs-api-method-table`],[`id`,`method-setThemeA11y`,1,`docs-api-method-table`],[`id`,`method-setCurrentThemeA11y`,1,`docs-api-method-table`],[`id`,`interface-po-theme-color`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-theme-color-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorAction`],[1,`language-javascript`],[`id`,`interface-po-theme-color-brand`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`poThemeColorBrand`],[`id`,`interface-po-theme-color-categorical`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorCategorical`],[`id`,`interface-po-theme-color-categorical-overlay`,1,`docs-api-properties-row`],[`id`,`interface-po-theme-color-neutral`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColorNeutral`],[`id`,`interface-po-theme-color-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-theme-color-action-default`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`interface-po-theme-color-action-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-theme-color-action-focus`,1,`docs-api-properties-row`],[`id`,`interface-po-theme-color-action-hover`,1,`docs-api-properties-row`],[`id`,`interface-po-theme-color-action-pressed`,1,`docs-api-properties-row`],[`id`,`interface-po-theme-color-neutral`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-theme-color-neutral-dark`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`'70'?:`,`string;`,`'80'?:`,`string;`,`'90'?:`,`string;`,`'95'?:`,`string;`,`}`],[`id`,`interface-po-theme-color-neutral-light`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`'00'?:`,`string;`,`'05'?:`,`string;`,`'10'?:`,`string;`,`'20'?:`,`string;`,`'30'?:`,`string;`,`}`],[`id`,`interface-po-theme-color-neutral-mid`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`'40'?:`,`string;`,`'60'?:`,`string;`,`}`],[`id`,`interface-po-theme-tokens`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-theme-token`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-theme-token-color`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoThemeColor`],[`id`,`interface-po-theme-token-on-root`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`DynamicProperties`],[`id`,`interface-po-theme-token-per-component`,1,`docs-api-properties-row`],[`id`,`interface-po-theme`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-theme-active`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoThemeTypeEnum`],[`pan`,``,1,`docs-api-property-type`,`PoThemeActive`],[`id`,`interface-po-theme-inherit-default-style`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`interface-po-theme-name`,1,`docs-api-properties-row`],[`id`,`interface-po-theme-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoThemeType`],[`pan`,``,1,`docs-api-property-type`,`Array<PoThemeType>`],[`id`,`enum-po-theme-a11y-enum`,1,`docs-api-class-name`],[`id`,`enum-po-theme-a11y-enum-aa`,1,`docs-api-properties-row`],[`id`,`enum-po-theme-a11y-enum-aaa`,1,`docs-api-properties-row`],[`id`,`enum-po-theme-type-enum`,1,`docs-api-class-name`],[`id`,`enum-po-theme-type-enum-light`,1,`docs-api-properties-row`],[`id`,`enum-po-theme-type-enum-dark`,1,`docs-api-properties-row`]],template:function(m,o){m&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoThemeModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do serviço PoThemeService.`),Kg()(),Jc(7,`h3`,3),Mk(8,`Services`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoThemeService`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,`O serviço `),Jc(15,`code`),Mk(16,`PoThemeService`),Kg(),Mk(17,` permite customizar as cores do tema padrão do `),Jc(18,`code`),Mk(19,`PO-UI`),Kg(),Mk(20,` e definir o n\xEDvel de acessibilidade
mais adequado ao projeto.`),Kg(),Jc(21,`p`),Mk(22,`O nível `),Jc(23,`strong`),Mk(24,`AAA`),Kg(),Mk(25,` (padr\xE3o) garante maior contraste, \xE1reas clic\xE1veis amplas e espa\xE7amentos maiores entre os elementos,
enquanto o n\xEDvel `),Jc(26,`strong`),Mk(27,`AA`),Kg(),Mk(28,` mant\xE9m a conformidade com as diretrizes de acessibilidade, mas com propor\xE7\xF5es mais equilibradas
e contornos mais sutis.`),Kg(),Jc(29,`p`),Mk(30,`O serviço também possibilita configurar a `),Jc(31,`strong`),Mk(32,`densidade de espaçamentos`),Kg(),Mk(33,`, permitindo ajustar o espa\xE7o entre e dentro dos
componentes. Essa configura\xE7\xE3o pode ser utilizada com qualquer n\xEDvel de acessibilidade.`),Kg(),Jc(34,`blockquote`)(35,`p`)(36,`strong`),Mk(37,`Importante:`),Kg(),Mk(38,` o novo tema padrão do PO UI (EVO, `),Jc(39,`code`),Mk(40,`poThemeDefault`),Kg(),Mk(41,`) tem duas partes: as `),Jc(42,`strong`),Mk(43,`cores`),Kg(),Mk(44,`, que v\xEAm do CSS
`),Jc(45,`code`),Mk(46,`po-theme-default.min.css`),Kg(),Mk(47,` do `),Jc(48,`code`),Mk(49,`@po-ui/style`),Kg(),Mk(50,`, e os `),Jc(51,`strong`),Mk(52,`ajustes de cada componente`),Kg(),Mk(53,` (raios de borda, botão `),Jc(54,`code`),Mk(55,`glow`),Kg(),Mk(56,`,
campos e outros), que s\xE3o aplicados por este servi\xE7o. Para ter o tema EVO completo, basta importar o `),Jc(57,`code`),Mk(58,`PoModule`),Kg(),Mk(59,` e
carregar o CSS `),Jc(60,`code`),Mk(61,`po-theme-default.min.css`),Kg(),Mk(62,`: o `),Jc(63,`code`),Mk(64,`PoModule`),Kg(),Mk(65,` já inicia o `),Jc(66,`code`),Mk(67,`PoThemeService`),Kg(),Mk(68,`, que aplica os ajustes sozinho.
Use o `),Jc(69,`code`),Mk(70,`setTheme`),Kg(),Mk(71,` para escolher o modo claro ou escuro, o n\xEDvel de acessibilidade ou o tema depreciado. Se a aplica\xE7\xE3o
importar s\xF3 m\xF3dulos de componentes, sem o `),Jc(72,`code`),Mk(73,`PoModule`),Kg(),Mk(74,` e sem injetar este serviço, ela recebe apenas as cores do EVO.`),Kg()(),Jc(75,`blockquote`)(76,`p`),Mk(77,`Observação: a customização das cores de `),Jc(78,`code`),Mk(79,`feedback`),Kg(),Mk(80,` não é recomendada por motivos de acessibilidade e usabilidade.`),Kg()(),Jc(81,`blockquote`)(82,`p`),Mk(83,`Para saber mais sobre como customizar o tema padr\xE3o, consulte o item
`),Jc(84,`a`,6),Mk(85,`Customização de Temas usando o serviço PO-UI`),Kg(),Mk(86,` na aba `),Jc(87,`code`),Mk(88,`Guias`),Kg(),Mk(89,`.`),Kg()()(),Jc(90,`h3`,7),Mk(91,`Métodos`),Kg(),Jc(92,`table`,8)(93,`tr`,9)(94,`th`,10)(95,`div`,11)(96,`h4`)(97,`span`,12),Mk(98,` setTheme `),Kg()()()()(),Jc(99,`tr`,13)(100,`td`,13)(101,`p`),Mk(102,`Aplica um tema ao componente de acordo com o tipo de tema e o nível de acessibilidade especificados.`),Kg(),Jc(103,`p`),Mk(104,`Este método configura o tema do componente com base no objeto `),Jc(105,`code`),Mk(106,`themeConfig`),Kg(),Mk(107,` fornecido, no `),Jc(108,`code`),Mk(109,`themeType`),Kg(),Mk(110,` e no `),Jc(111,`code`),Mk(112,`a11yLevel`),Kg(),Mk(113,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),Kg()()()(),Jc(114,`h5`)(115,`b`),Mk(116,`Parâmetros`),Kg()(),Jc(117,`table`,14)(118,`tr`,15)(119,`th`,16),Mk(120,`Nome`),Kg(),Jc(121,`th`,16),Mk(122,`Tipo`),Kg(),Jc(123,`th`,16),Mk(124,`Descrição`),Kg()(),Jc(125,`tr`,9)(126,`td`,17),Mk(127,` themeConfig`),Kg(),Jc(128,`td`,18)(129,`code`,19),Mk(130,` PoTheme `),Kg()(),Jc(131,`td`,13)(132,`p`),Mk(133,`Configuração de tema a ser aplicada ao componente.`),Kg()()(),Jc(134,`tr`,9)(135,`td`,17),Mk(136,` themeType`),Kg(),Jc(137,`td`,18)(138,`code`,19),Mk(139,` PoThemeTypeEnum `),Kg()(),Jc(140,`td`,13)(141,`p`),Mk(142,`(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro é o padrão.`),Kg()()(),Jc(143,`tr`,9)(144,`td`,17),Mk(145,` a11yLevel`),Kg(),Jc(146,`td`,18)(147,`code`,19),Mk(148,` PoThemeA11yEnum `),Kg()(),Jc(149,`td`,13)(150,`p`),Mk(151,`(Opcional) Nível de acessibilidade dos componentes, podendo ser AA ou AAA. Padrão é AAA.`),Kg()()(),Jc(152,`tr`,9)(153,`td`,17),Mk(154,` persistPreference`),Kg(),Jc(155,`td`,18)(156,`code`,19),Mk(157,` boolean `),Kg()(),Jc(158,`td`,13)(159,`p`),Mk(160,`(Opcional) Define se a prefer\xEAncia de tema deve ser salva no
localStorage para persist\xEAncia. Por padr\xE3o \xE9 `),Jc(161,`code`),Mk(162,`true`),Kg(),Mk(163,`, ou seja, a preferência será salva automaticamente.`),Kg()()()(),_u(164,`br`),Jc(165,`table`,20)(166,`tr`,9)(167,`th`,10)(168,`div`,11)(169,`h4`)(170,`span`,12),Mk(171,` getA11yLevel `),Kg()()()()(),Jc(172,`tr`,13)(173,`td`,13)(174,`p`),Mk(175,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),Jc(176,`code`),Mk(177,`AAA`),Kg(),Mk(178,` como padrão.`),Kg()()()(),Jc(179,`h5`)(180,`b`),Mk(181,`Retorno`),Kg()(),Jc(182,`table`,14)(183,`tr`,15)(184,`th`,16),Mk(185,`Tipo`),Kg(),Jc(186,`th`,16),Mk(187,`Descrição`),Kg()(),Jc(188,`tr`,9)(189,`td`,18)(190,`code`,19),Mk(191,`PoThemeA11yEnum`),Kg()(),Jc(192,`td`,13)(193,`p`),Mk(194,`O nível de acessibilidade, que pode ser `),Jc(195,`code`),Mk(196,`AA`),Kg(),Mk(197,` ou `),Jc(198,`code`),Mk(199,`AAA`),Kg(),Mk(200,`.`),Kg()()()(),_u(201,`br`),Jc(202,`table`,21)(203,`tr`,9)(204,`th`,10)(205,`div`,11)(206,`h4`)(207,`span`,12),Mk(208,` setA11yDefaultSizeSmall `),Kg()()()()(),Jc(209,`tr`,13)(210,`td`,13)(211,`p`),Mk(212,`Define o tamanho `),Jc(213,`code`),Mk(214,`small`),Kg(),Mk(215,` como padr\xE3o para componentes que n\xE3o possuem um tamanho definido. Essa configura\xE7\xE3o \xE9
aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),Jc(216,`code`),Mk(217,`AA`),Kg(),Mk(218,`. O valor definido \xE9 salvo no
`),Jc(219,`code`),Mk(220,`localStorage`),Kg(),Mk(221,` sob a chave `),Jc(222,`code`),Mk(223,`po-default-size`),Kg(),Mk(224,` e o atributo `),Jc(225,`code`),Mk(226,`data-default-size`),Kg(),Mk(227,` \xE9 adicionado ao elemento HTML
para que os componentes possam aplicar o tamanho`),Kg(),Jc(228,`p`),Mk(229,`Exemplo de uso:`),Kg(),Jc(230,`pre`)(231,`code`,22),Mk(232,`import { poThemeDefault, PoThemeService, PoThemeTypeEnum, PoThemeA11yEnum } from '@po-ui/ng-components';

private themeService = inject(PoThemeService);

constructor() {
 this.themeService.setA11yDefaultSizeSmall(true);
 this.themeService.setTheme(poThemeDefault, PoThemeTypeEnum.light, PoThemeA11yEnum.AA);
}
`),Kg()(),Jc(233,`blockquote`)(234,`p`),Mk(235,`Para garantir que o tamanho `),Jc(236,`code`),Mk(237,`small`),Kg(),Mk(238,` seja aplicado corretamente a todos os componentes, recomendamos
definir esta configura\xE7\xE3o `),Jc(239,`strong`),Mk(240,`junto com o nível de acessibilidade `),Jc(241,`code`),Mk(242,`AA`),Kg(),Mk(243,` na inicialização da aplicação`),Kg(),Mk(244,`.
Para ajustar a densidade visual dos componentes agrupadores (como pages, container, etc.), utilize tamb\xE9m
o m\xE9todo `),Jc(245,`code`),Mk(246,`setDensityMode`),Kg(),Mk(247,` conforme necessário.`),Kg()()()()(),Jc(248,`h5`)(249,`b`),Mk(250,`Parâmetros`),Kg()(),Jc(251,`table`,14)(252,`tr`,15)(253,`th`,16),Mk(254,`Nome`),Kg(),Jc(255,`th`,16),Mk(256,`Tipo`),Kg(),Jc(257,`th`,16),Mk(258,`Descrição`),Kg()(),Jc(259,`tr`,9)(260,`td`,17),Mk(261,` enable`),Kg(),Jc(262,`td`,18)(263,`code`,19),Mk(264,` boolean `),Kg()(),Jc(265,`td`,13)(266,`p`),Mk(267,`Habilita ou desabilita o tamanho `),Jc(268,`code`),Mk(269,`small`),Kg(),Mk(270,` globalmente.`),Kg()()()(),_u(271,`br`),Jc(272,`table`,23)(273,`tr`,9)(274,`th`,10)(275,`div`,11)(276,`h4`)(277,`span`,12),Mk(278,` getDensityMode `),Kg()()()()(),Jc(279,`tr`,13)(280,`td`,13)(281,`p`),Mk(282,`Retorna o modo de adensamento dos componentes agrupadores.
Se n\xE3o estiver configurado, retorna `),Jc(283,`code`),Mk(284,`medium`),Kg(),Mk(285,` como padrão.`),Kg()()()(),Jc(286,`h5`)(287,`b`),Mk(288,`Retorno`),Kg()(),Jc(289,`table`,14)(290,`tr`,15)(291,`th`,16),Mk(292,`Tipo`),Kg(),Jc(293,`th`,16),Mk(294,`Descrição`),Kg()(),Jc(295,`tr`,9)(296,`td`,18)(297,`code`,19),Mk(298,`PoDensityMode`),Kg()(),Jc(299,`td`,13)(300,`p`),Mk(301,`O modo de adensamento, que pode ser `),Jc(302,`code`),Mk(303,`small`),Kg(),Mk(304,` ou `),Jc(305,`code`),Mk(306,`medium`),Kg(),Mk(307,`.`),Kg()()()(),_u(308,`br`),Jc(309,`table`,24)(310,`tr`,9)(311,`th`,10)(312,`div`,11)(313,`h4`)(314,`span`,12),Mk(315,` setDensityMode `),Kg()()()()(),Jc(316,`tr`,13)(317,`td`,13)(318,`p`),Mk(319,`Aplica o modo de adensamento compacto (`),Jc(320,`code`),Mk(321,`small`),Kg(),Mk(322,`) ou espaçoso (`),Jc(323,`code`),Mk(324,`medium`),Kg(),Mk(325,`) para os componentes agrupadores,
independentemente do n\xEDvel de acessibilidade. O valor definido \xE9 salvo no `),Jc(326,`code`),Mk(327,`localStorage`),Kg(),Mk(328,` sob a chave
`),Jc(329,`code`),Mk(330,`po-density-mode`),Kg(),Mk(331,`.`),Kg()()()(),Jc(332,`h5`)(333,`b`),Mk(334,`Parâmetros`),Kg()(),Jc(335,`table`,14)(336,`tr`,15)(337,`th`,16),Mk(338,`Nome`),Kg(),Jc(339,`th`,16),Mk(340,`Tipo`),Kg(),Jc(341,`th`,16),Mk(342,`Descrição`),Kg()(),Jc(343,`tr`,9)(344,`td`,17),Mk(345,` mode`),Kg(),Jc(346,`td`,18)(347,`code`,25),Mk(348,` 'small' `),Kg(),Jc(349,`code`,26),Mk(350,` 'medium' `),Kg()(),Jc(351,`td`,13)(352,`p`),Mk(353,`Define o modo de densidade: `),Jc(354,`code`),Mk(355,`small`),Kg(),Mk(356,` para compacto, `),Jc(357,`code`),Mk(358,`medium`),Kg(),Mk(359,` para espa\xE7oso.
O valor padr\xE3o \xE9 `),Jc(360,`code`),Mk(361,`medium`),Kg(),Mk(362,`.`),Kg()()()(),_u(363,`br`),Jc(364,`table`,27)(365,`tr`,9)(366,`th`,10)(367,`div`,11)(368,`h4`)(369,`span`,12),Mk(370,` persistThemeActive `),Kg()()()()(),Jc(371,`tr`,13)(372,`td`,13)(373,`p`),Mk(374,`Restaura e aplica as prefer\xEAncias visuais do usu\xE1rio para o tema da aplica\xE7\xE3o, garantindo que essas prefer\xEAncias
sejam persistidas no `),Jc(375,`code`),Mk(376,`localStorage`),Kg(),Mk(377,` para uso em recarregamentos futuros.`),Kg()()()(),Jc(378,`h5`)(379,`b`),Mk(380,`Retorno`),Kg()(),Jc(381,`table`,14)(382,`tr`,15)(383,`th`,16),Mk(384,`Tipo`),Kg(),Jc(385,`th`,16),Mk(386,`Descrição`),Kg()(),Jc(387,`tr`,9)(388,`td`,18)(389,`code`,19),Mk(390,`PoTheme`),Kg()(),Jc(391,`td`,13)(392,`p`),Mk(393,`O tema atualmente aplicado.`),Kg()()()(),_u(394,`br`),Jc(395,`table`,28)(396,`tr`,9)(397,`th`,10)(398,`div`,11)(399,`h4`)(400,`span`,12),Mk(401,` changeCurrentThemeType `),Kg()()()()(),Jc(402,`tr`,13)(403,`td`,13)(404,`p`),Mk(405,`Altera o tipo do tema armazenado e aplica os novos estilos ao documento.`),Kg(),Jc(406,`p`),Mk(407,`Este método altera o tipo do tema armazenado ativo (light/dark)`),Kg()()()(),Jc(408,`h5`)(409,`b`),Mk(410,`Parâmetros`),Kg()(),Jc(411,`table`,14)(412,`tr`,15)(413,`th`,16),Mk(414,`Nome`),Kg(),Jc(415,`th`,16),Mk(416,`Tipo`),Kg(),Jc(417,`th`,16),Mk(418,`Descrição`),Kg()(),Jc(419,`tr`,9)(420,`td`,17),Mk(421,` themeType`),Kg(),Jc(422,`td`,18)(423,`code`,19),Mk(424,` PoThemeTypeEnum `),Kg()(),Jc(425,`td`,13)(426,`p`),Mk(427,`O tipo de tema a ser aplicado, light ou dark.`),Kg()()()(),_u(428,`br`),Jc(429,`table`,29)(430,`tr`,9)(431,`th`,10)(432,`div`,11)(433,`h4`)(434,`span`,12),Mk(435,` cleanThemeActive `),Kg()()()()(),Jc(436,`tr`,13)(437,`td`,13)(438,`p`),Mk(439,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),Kg()()()(),Jc(440,`h5`)(441,`b`),Mk(442,`Parâmetros`),Kg()(),Jc(443,`table`,14)(444,`tr`,15)(445,`th`,16),Mk(446,`Nome`),Kg(),Jc(447,`th`,16),Mk(448,`Tipo`),Kg(),Jc(449,`th`,16),Mk(450,`Descrição`),Kg()(),Jc(451,`tr`,9)(452,`td`,17),Mk(453,` persistPreference`),Kg(),Jc(454,`td`,18)(455,`code`,19),Mk(456,` boolean `),Kg()(),Jc(457,`td`,13)(458,`p`),Mk(459,`(Opcional) Define se a preferência de tema não deve ser mantida no localStorage para persistência. `),Jc(460,`code`),Mk(461,`true`),Kg(),Mk(462,` para remover, `),Jc(463,`code`),Mk(464,`false`),Kg(),Mk(465,` para manter.`),Kg()()()(),_u(466,`br`),Jc(467,`table`,30)(468,`tr`,9)(469,`th`,10)(470,`div`,11)(471,`h4`)(472,`span`,12),Mk(473,` getThemeActive `),Kg()()()()(),Jc(474,`tr`,13)(475,`td`,13)(476,`p`),Mk(477,`Retorna o tema ativo como um observable. Este método funcionará apenas se o tema estiver armazenado no `),Jc(478,`code`),Mk(479,`localStorage`),Kg(),Mk(480,`.`),Kg()()()(),Jc(481,`h5`)(482,`b`),Mk(483,`Retorno`),Kg()(),Jc(484,`table`,14)(485,`tr`,15)(486,`th`,16),Mk(487,`Tipo`),Kg(),Jc(488,`th`,16),Mk(489,`Descrição`),Kg()(),Jc(490,`tr`,9)(491,`td`,18)(492,`code`,19),Mk(493,`PoTheme`),Kg()(),Jc(494,`td`,13)(495,`p`),Mk(496,`Tema ativo.`),Kg()()()(),_u(497,`br`),Jc(498,`table`,31)(499,`tr`,9)(500,`th`,10)(501,`div`,11)(502,`h4`)(503,`span`,12),Mk(504,` setDefaultTheme `),Kg()()()()(),Jc(505,`tr`,13)(506,`td`,13)(507,`p`),Mk(508,`Define o tema atual como o tema "PoUI Padrão".`),Kg()()()(),Jc(509,`h5`)(510,`b`),Mk(511,`Parâmetros`),Kg()(),Jc(512,`table`,14)(513,`tr`,15)(514,`th`,16),Mk(515,`Nome`),Kg(),Jc(516,`th`,16),Mk(517,`Tipo`),Kg(),Jc(518,`th`,16),Mk(519,`Descrição`),Kg()(),Jc(520,`tr`,9)(521,`td`,17),Mk(522,` type`),Kg(),Jc(523,`td`,18)(524,`code`,19),Mk(525,` PoThemeTypeEnum `),Kg()(),Jc(526,`td`,13)(527,`p`),Mk(528,`O tipo de Tema a ser aplicado, light / dark.`),Kg()()()(),_u(529,`br`),Jc(530,`table`,32)(531,`tr`,9)(532,`th`,10)(533,`div`,11)(534,`h4`)(535,`span`,12),Mk(536,` setThemeType `),Kg()()()()(),Jc(537,`tr`,13)(538,`td`,13)(539,`p`),Mk(540,`Define o tipo (light/dark) quando um tema está sendo aplicado.`),Kg()()()(),Jc(541,`h5`)(542,`b`),Mk(543,`Parâmetros`),Kg()(),Jc(544,`table`,14)(545,`tr`,15)(546,`th`,16),Mk(547,`Nome`),Kg(),Jc(548,`th`,16),Mk(549,`Tipo`),Kg(),Jc(550,`th`,16),Mk(551,`Descrição`),Kg()(),Jc(552,`tr`,9)(553,`td`,17),Mk(554,` theme`),Kg(),Jc(555,`td`,18)(556,`code`,19),Mk(557,` PoTheme `),Kg()(),Jc(558,`td`,13)(559,`p`),Mk(560,`Objeto contendo as definições de tema a serem aplicadas no componente.`),Kg()()(),Jc(561,`tr`,9)(562,`td`,17),Mk(563,` themeType`),Kg(),Jc(564,`td`,18)(565,`code`,19),Mk(566,` PoThemeTypeEnum `),Kg()(),Jc(567,`td`,13)(568,`p`),Mk(569,`(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padrão, o tema claro é aplicado.`),Kg()()()(),_u(570,`br`),Jc(571,`table`,33)(572,`tr`,9)(573,`th`,10)(574,`div`,11)(575,`h4`)(576,`span`,12),Mk(577,` setCurrentThemeType `),Kg()()()()(),Jc(578,`tr`,13)(579,`td`,13)(580,`p`),Mk(581,`Define o tipo (light/dark) para um tema já ativo.`),Kg()()()(),Jc(582,`h5`)(583,`b`),Mk(584,`Parâmetros`),Kg()(),Jc(585,`table`,14)(586,`tr`,15)(587,`th`,16),Mk(588,`Nome`),Kg(),Jc(589,`th`,16),Mk(590,`Tipo`),Kg(),Jc(591,`th`,16),Mk(592,`Descrição`),Kg()(),Jc(593,`tr`,9)(594,`td`,17),Mk(595,` themeType`),Kg(),Jc(596,`td`,18)(597,`code`,19),Mk(598,` PoThemeTypeEnum `),Kg()(),Jc(599,`td`,13)(600,`p`),Mk(601,`(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padrão, o tema claro é aplicado.`),Kg()()()(),_u(602,`br`),Jc(603,`table`,34)(604,`tr`,9)(605,`th`,10)(606,`div`,11)(607,`h4`)(608,`span`,12),Mk(609,` setThemeA11y `),Kg()()()()(),Jc(610,`tr`,13)(611,`td`,13)(612,`p`),Mk(613,`Define o nível de acessibilidade quando um tema está sendo aplicado.`),Kg()()()(),Jc(614,`h5`)(615,`b`),Mk(616,`Parâmetros`),Kg()(),Jc(617,`table`,14)(618,`tr`,15)(619,`th`,16),Mk(620,`Nome`),Kg(),Jc(621,`th`,16),Mk(622,`Tipo`),Kg(),Jc(623,`th`,16),Mk(624,`Descrição`),Kg()(),Jc(625,`tr`,9)(626,`td`,17),Mk(627,` theme`),Kg(),Jc(628,`td`,18)(629,`code`,19),Mk(630,` PoTheme `),Kg()(),Jc(631,`td`,13)(632,`p`),Mk(633,`Objeto contendo as definições de tema a serem aplicadas no componente.`),Kg()()(),Jc(634,`tr`,9)(635,`td`,17),Mk(636,` a11y`),Kg(),Jc(637,`td`,18)(638,`code`,19),Mk(639,` PoThemeA11yEnum `),Kg()(),Jc(640,`td`,13)(641,`p`),Mk(642,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),Kg()()()(),_u(643,`br`),Jc(644,`table`,35)(645,`tr`,9)(646,`th`,10)(647,`div`,11)(648,`h4`)(649,`span`,12),Mk(650,` setCurrentThemeA11y `),Kg()()()()(),Jc(651,`tr`,13)(652,`td`,13)(653,`p`),Mk(654,`Define o nível de acessibilidade para um tema já ativo.`),Kg()()()(),Jc(655,`h5`)(656,`b`),Mk(657,`Parâmetros`),Kg()(),Jc(658,`table`,14)(659,`tr`,15)(660,`th`,16),Mk(661,`Nome`),Kg(),Jc(662,`th`,16),Mk(663,`Tipo`),Kg(),Jc(664,`th`,16),Mk(665,`Descrição`),Kg()(),Jc(666,`tr`,9)(667,`td`,17),Mk(668,` a11y`),Kg(),Jc(669,`td`,18)(670,`code`,19),Mk(671,` PoThemeA11yEnum `),Kg()(),Jc(672,`td`,13)(673,`p`),Mk(674,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),Kg()()()(),_u(675,`br`),Jc(676,`h3`),Mk(677,`Interfaces`),Kg(),Jc(678,`h4`,36)(679,`code`,5),Mk(680,`PoThemeColor`),Kg()(),Jc(681,`div`,2)(682,`p`),Mk(683,`Interface para representar as cores do tema.`),Kg()(),Jc(684,`h4`,7),Mk(685,`Propriedades`),Kg(),Jc(686,`table`,14)(687,`tr`,15)(688,`th`,16),Mk(689,`Nome`),Kg(),Jc(690,`th`,16),Mk(691,`Tipo`),Kg(),Jc(692,`th`,16),Mk(693,`Descrição`),Kg()(),Jc(694,`tr`,37)(695,`td`,17)(696,`div`,11)(697,`span`,12),Mk(698,` action`),_u(699,`br`),Kg()()(),Jc(700,`td`,18)(701,`code`,38),Mk(702,`PoThemeColorAction`),Kg()(),Jc(703,`td`,13)(704,`em`)(705,`strong`),Mk(706,`(opcional)`),Kg()(),Jc(707,`p`),Mk(708,`Cores da Action a serem aplicadas.`),Kg(),Jc(709,`p`),Mk(710,`Exemplo de uso:`),Kg(),Jc(711,`pre`)(712,`code`,39),Mk(713,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),Kg()()()(),Jc(714,`tr`,40)(715,`td`,17)(716,`div`,11)(717,`span`,12),Mk(718,` brand`),_u(719,`br`),Kg()()(),Jc(720,`td`,18)(721,`code`,41),Mk(722,`poThemeColorBrand`),Kg()(),Jc(723,`td`,13)(724,`em`)(725,`strong`),Mk(726,`(opcional)`),Kg()(),Jc(727,`p`),Mk(728,`Cores da Brand a serem aplicadas.`),Kg(),Jc(729,`p`),Mk(730,`Exemplo de uso:`),Kg(),Jc(731,`pre`)(732,`code`,22),Mk(733,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),Kg()()()(),Jc(734,`tr`,42)(735,`td`,17)(736,`div`,11)(737,`span`,12),Mk(738,` categorical`),_u(739,`br`),Kg()()(),Jc(740,`td`,18)(741,`code`,43),Mk(742,`PoThemeColorCategorical`),Kg()(),Jc(743,`td`,13)(744,`em`)(745,`strong`),Mk(746,`(opcional)`),Kg()(),Jc(747,`p`),Mk(748,`Cores da Categorical a serem aplicadas.`),Kg(),Jc(749,`p`),Mk(750,`Exemplo de uso:`),Kg(),Jc(751,`pre`)(752,`code`,22),Mk(753,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),Kg()()()(),Jc(754,`tr`,44)(755,`td`,17)(756,`div`,11)(757,`span`,12),Mk(758,` categorical-overlay`),_u(759,`br`),Kg()()(),Jc(760,`td`,18)(761,`code`,43),Mk(762,`PoThemeColorCategorical`),Kg()(),Jc(763,`td`,13)(764,`em`)(765,`strong`),Mk(766,`(opcional)`),Kg()(),Jc(767,`p`),Mk(768,`Cores da Categorical a serem aplicadas.`),Kg(),Jc(769,`p`),Mk(770,`Exemplo de uso:`),Kg(),Jc(771,`pre`)(772,`code`,22),Mk(773,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),Kg()()()(),Jc(774,`tr`,45)(775,`td`,17)(776,`div`,11)(777,`span`,12),Mk(778,` neutral`),_u(779,`br`),Kg()()(),Jc(780,`td`,18)(781,`code`,46),Mk(782,`PoThemeColorNeutral`),Kg()(),Jc(783,`td`,13)(784,`em`)(785,`strong`),Mk(786,`(opcional)`),Kg()(),Jc(787,`p`),Mk(788,`Cores Neutrals a serem aplicadas.`),Kg(),Jc(789,`p`),Mk(790,`Exemplo de uso:`),Kg(),Jc(791,`pre`)(792,`code`,22),Mk(793,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),Kg()()()()(),Jc(794,`h4`,47)(795,`code`,5),Mk(796,`PoThemeColorAction`),Kg()(),Jc(797,`div`,2)(798,`p`),Mk(799,`Interface para as cores de ação do tema.`),Kg()(),Jc(800,`h4`,7),Mk(801,`Propriedades`),Kg(),Jc(802,`table`,14)(803,`tr`,15)(804,`th`,16),Mk(805,`Nome`),Kg(),Jc(806,`th`,16),Mk(807,`Tipo`),Kg(),Jc(808,`th`,16),Mk(809,`Descrição`),Kg()(),Jc(810,`tr`,48)(811,`td`,17)(812,`div`,11)(813,`span`,12),Mk(814,` default`),_u(815,`br`),Kg()()(),Jc(816,`td`,18)(817,`code`,49),Mk(818,`string`),Kg()(),Jc(819,`td`,13)(820,`em`)(821,`strong`),Mk(822,`(opcional)`),Kg()(),Jc(823,`p`),Mk(824,`Cores da Action 'Default'.`),Kg(),Jc(825,`p`),Mk(826,`Exemplo de uso:`),Kg(),Jc(827,`pre`)(828,`code`,22),Mk(829,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),Kg()()()(),Jc(830,`tr`,50)(831,`td`,17)(832,`div`,11)(833,`span`,12),Mk(834,` disabled`),_u(835,`br`),Kg()()(),Jc(836,`td`,18)(837,`code`,49),Mk(838,`string`),Kg()(),Jc(839,`td`,13)(840,`em`)(841,`strong`),Mk(842,`(opcional)`),Kg()(),Jc(843,`p`),Mk(844,`Cores da Action de 'disabled'.`),Kg(),Jc(845,`p`),Mk(846,`Exemplo de uso:`),Kg(),Jc(847,`pre`)(848,`code`,22),Mk(849,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),Kg()()()(),Jc(850,`tr`,51)(851,`td`,17)(852,`div`,11)(853,`span`,12),Mk(854,` focus`),_u(855,`br`),Kg()()(),Jc(856,`td`,18)(857,`code`,49),Mk(858,`string`),Kg()(),Jc(859,`td`,13)(860,`em`)(861,`strong`),Mk(862,`(opcional)`),Kg()(),Jc(863,`p`),Mk(864,`Cores da Action para 'focus'.`),Kg(),Jc(865,`p`),Mk(866,`Exemplo de uso:`),Kg(),Jc(867,`pre`)(868,`code`,22),Mk(869,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),Kg()()()(),Jc(870,`tr`,52)(871,`td`,17)(872,`div`,11)(873,`span`,12),Mk(874,` hover`),_u(875,`br`),Kg()()(),Jc(876,`td`,18)(877,`code`,49),Mk(878,`string`),Kg()(),Jc(879,`td`,13)(880,`em`)(881,`strong`),Mk(882,`(opcional)`),Kg()(),Jc(883,`p`),Mk(884,`Cores da Action para 'hover'.`),Kg(),Jc(885,`p`),Mk(886,`Exemplo de uso:`),Kg(),Jc(887,`pre`)(888,`code`,22),Mk(889,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),Kg()()()(),Jc(890,`tr`,53)(891,`td`,17)(892,`div`,11)(893,`span`,12),Mk(894,` pressed`),_u(895,`br`),Kg()()(),Jc(896,`td`,18)(897,`code`,49),Mk(898,`string`),Kg()(),Jc(899,`td`,13)(900,`em`)(901,`strong`),Mk(902,`(opcional)`),Kg()(),Jc(903,`p`),Mk(904,`Cores da Action para 'pressed'.`),Kg(),Jc(905,`p`),Mk(906,`Exemplo de uso:`),Kg(),Jc(907,`pre`)(908,`code`,22),Mk(909,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),Kg()()()()(),Jc(910,`h4`,54)(911,`code`,5),Mk(912,`PoThemeColorNeutral`),Kg()(),Jc(913,`div`,2)(914,`p`),Mk(915,`Interface para as cores neutras do tema.`),Kg()(),Jc(916,`h4`,7),Mk(917,`Propriedades`),Kg(),Jc(918,`table`,14)(919,`tr`,15)(920,`th`,16),Mk(921,`Nome`),Kg(),Jc(922,`th`,16),Mk(923,`Tipo`),Kg(),Jc(924,`th`,16),Mk(925,`Descrição`),Kg()(),Jc(926,`tr`,55)(927,`td`,17)(928,`div`,11)(929,`span`,12),Mk(930,` dark`),_u(931,`br`),Kg()()(),Jc(932,`td`,18)(933,`code`,56),Mk(934,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),Kg()(),Jc(935,`td`,13)(936,`em`)(937,`strong`),Mk(938,`(opcional)`),Kg()(),Jc(939,`p`),Mk(940,`Cores Neutrals do tipo 'dark'.`),Kg(),Jc(941,`p`),Mk(942,`Exemplo de uso:`),Kg(),Jc(943,`pre`)(944,`code`,22),Mk(945,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),Kg()()()(),Jc(946,`tr`,57)(947,`td`,17)(948,`div`,11)(949,`span`,12),Mk(950,` light`),_u(951,`br`),Kg()()(),Jc(952,`td`,18)(953,`code`,58),Mk(954,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),Kg()(),Jc(955,`td`,13)(956,`em`)(957,`strong`),Mk(958,`(opcional)`),Kg()(),Jc(959,`p`),Mk(960,`Cores Neutrals do tipo 'light'.`),Kg(),Jc(961,`p`),Mk(962,`Exemplo de uso:`),Kg(),Jc(963,`pre`)(964,`code`,22),Mk(965,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),Kg()()()(),Jc(966,`tr`,59)(967,`td`,17)(968,`div`,11)(969,`span`,12),Mk(970,` mid`),_u(971,`br`),Kg()()(),Jc(972,`td`,18)(973,`code`,60),Mk(974,`{ '40'?: string; '60'?: string;
}`),Kg()(),Jc(975,`td`,13)(976,`em`)(977,`strong`),Mk(978,`(opcional)`),Kg()(),Jc(979,`p`),Mk(980,`Cores Neutrals do tipo 'mid'.`),Kg(),Jc(981,`p`),Mk(982,`Exemplo de uso:`),Kg(),Jc(983,`pre`)(984,`code`,22),Mk(985,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),Kg()()()()(),Jc(986,`h4`,61)(987,`code`,5),Mk(988,`PoThemeTokens`),Kg()(),Jc(989,`div`,2)(990,`p`),Mk(991,`Interface para o tema da aplicação.`),Kg()(),Jc(992,`h4`,62)(993,`code`,5),Mk(994,`PoThemeToken`),Kg()(),Jc(995,`div`,2)(996,`p`),Mk(997,`Interface para os tokens do Tema.`),Kg()(),Jc(998,`h4`,7),Mk(999,`Propriedades`),Kg(),Jc(1e3,`table`,14)(1001,`tr`,15)(1002,`th`,16),Mk(1003,`Nome`),Kg(),Jc(1004,`th`,16),Mk(1005,`Tipo`),Kg(),Jc(1006,`th`,16),Mk(1007,`Descrição`),Kg()(),Jc(1008,`tr`,63)(1009,`td`,17)(1010,`div`,11)(1011,`span`,12),Mk(1012,` color`),_u(1013,`br`),Kg()()(),Jc(1014,`td`,18)(1015,`code`,64),Mk(1016,`PoThemeColor`),Kg()(),Jc(1017,`td`,13)(1018,`em`)(1019,`strong`),Mk(1020,`(opcional)`),Kg()(),Jc(1021,`p`),Mk(1022,`Tokens do tipo 'color'`),Kg()()(),Jc(1023,`tr`,65)(1024,`td`,17)(1025,`div`,11)(1026,`span`,12),Mk(1027,` onRoot`),_u(1028,`br`),Kg()()(),Jc(1029,`td`,18)(1030,`code`,66),Mk(1031,`DynamicProperties`),Kg()(),Jc(1032,`td`,13)(1033,`em`)(1034,`strong`),Mk(1035,`(opcional)`),Kg()(),Jc(1036,`p`),Mk(1037,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),Jc(1038,`code`),Mk(1039,`:root`),Kg()(),Jc(1040,`p`),Mk(1041,`Exemplo de uso:`),Kg(),Jc(1042,`pre`)(1043,`code`,22),Mk(1044,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),Kg()()()(),Jc(1045,`tr`,67)(1046,`td`,17)(1047,`div`,11)(1048,`span`,12),Mk(1049,` perComponent`),_u(1050,`br`),Kg()()(),Jc(1051,`td`,18)(1052,`code`,66),Mk(1053,`DynamicProperties`),Kg()(),Jc(1054,`td`,13)(1055,`em`)(1056,`strong`),Mk(1057,`(opcional)`),Kg()(),Jc(1058,`p`),Mk(1059,`Tokens do tipo 'perComponent'`),Kg(),Jc(1060,`p`),Mk(1061,`Exemplo de uso:`),Kg(),Jc(1062,`pre`)(1063,`code`,22),Mk(1064,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),Kg()()()()(),Jc(1065,`h4`,68)(1066,`code`,5),Mk(1067,`PoTheme`),Kg()(),Jc(1068,`div`,2)(1069,`p`),Mk(1070,`Interface para o método `),Jc(1071,`code`),Mk(1072,`setTheme()`),Kg(),Mk(1073,`.`),Kg()(),Jc(1074,`h4`,7),Mk(1075,`Propriedades`),Kg(),Jc(1076,`table`,14)(1077,`tr`,15)(1078,`th`,16),Mk(1079,`Nome`),Kg(),Jc(1080,`th`,16),Mk(1081,`Tipo`),Kg(),Jc(1082,`th`,16),Mk(1083,`Descrição`),Kg()(),Jc(1084,`tr`,69)(1085,`td`,17)(1086,`div`,11)(1087,`span`,12),Mk(1088,` active`),_u(1089,`br`),Kg()()(),Jc(1090,`td`,18)(1091,`code`,70),Mk(1092,`PoThemeTypeEnum `),Kg(),Jc(1093,`code`,71),Mk(1094,` PoThemeActive`),Kg()(),Jc(1095,`td`,13)(1096,`em`)(1097,`strong`),Mk(1098,`(opcional)`),Kg()(),Jc(1099,`p`),Mk(1100,`Tipo e nível de acessibilidade de tema ativo`),Kg()()(),Jc(1101,`tr`,72)(1102,`td`,17)(1103,`div`,11)(1104,`span`,12),Mk(1105,` inheritDefaultStyle`),_u(1106,`br`),Kg()()(),Jc(1107,`td`,18)(1108,`code`,73),Mk(1109,`boolean`),Kg()(),Jc(1110,`td`,13)(1111,`em`)(1112,`strong`),Mk(1113,`(opcional)`),Kg()(),Jc(1114,`p`),Mk(1115,`Define se o tema herda a identidade visual do tema padrão do PO UI.`),Kg(),Jc(1116,`p`),Mk(1117,`A identidade visual corresponde aos arredondamentos dos componentes e \xE0 cor de fundo da p\xE1gina definidos
pelo tema padr\xE3o. Os estilos estruturais (ex.: espessura de outline, adensamento e ajustes de light/dark)
s\xE3o aplicados em qualquer caso.`),Kg(),Jc(1118,`p`),Mk(1119,`As fam\xEDlias de fonte do tema padr\xE3o n\xE3o s\xE3o controladas por esta propriedade: elas s\xE3o definidas pelo CSS
do `),Jc(1120,`code`),Mk(1121,`@po-ui/style`),Kg(),Mk(1122,`. Um tema com fontes próprias deve declará-las nos seus tokens.`),Kg(),Jc(1123,`p`),Mk(1124,`Utilize `),Jc(1125,`code`),Mk(1126,`false`),Kg(),Mk(1127,` quando o tema define a própria identidade visual e não deve receber a do tema padrão.`),Kg()()(),Jc(1128,`tr`,74)(1129,`td`,17)(1130,`div`,11)(1131,`span`,12),Mk(1132,` name`),_u(1133,`br`),Kg()()(),Jc(1134,`td`,18)(1135,`code`,49),Mk(1136,`string`),Kg()(),Jc(1137,`td`,13)(1138,`p`),Mk(1139,`Nome para o tema:
Ex.: default, totvs, sunset...`),Kg()()(),Jc(1140,`tr`,75)(1141,`td`,17)(1142,`div`,11)(1143,`span`,12),Mk(1144,` type`),_u(1145,`br`),Kg()()(),Jc(1146,`td`,18)(1147,`code`,76),Mk(1148,`PoThemeType `),Kg(),Jc(1149,`code`,77),Mk(1150,` Array<PoThemeType>`),Kg()(),Jc(1151,`td`,13)(1152,`p`),Mk(1153,`Tipo de tema:`),Kg(),Jc(1154,`ul`)(1155,`li`),Mk(1156,`light`),Kg(),Jc(1157,`li`),Mk(1158,`dark`),Kg()()()()(),Jc(1159,`h3`),Mk(1160,`Enums`),Kg(),Jc(1161,`h4`,78)(1162,`code`,5),Mk(1163,`PoThemeA11yEnum`),Kg()(),Jc(1164,`div`,2)(1165,`p`),Mk(1166,`Enum para configurar o nível de acessibilidade dos componentes através do serviço de tema.`),Kg(),Jc(1167,`pre`)(1168,`code`),Mk(1169,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),Kg()()(),Jc(1170,`h4`,7),Mk(1171,`Propriedades`),Kg(),Jc(1172,`table`,14)(1173,`tr`,15)(1174,`th`,16),Mk(1175,`Nome`),Kg(),Jc(1176,`th`,16),Mk(1177,`Descrição`),Kg()(),Jc(1178,`tr`,79)(1179,`td`,17)(1180,`div`,11)(1181,`span`,12),Mk(1182,` AA`),_u(1183,`br`),Kg()()(),Jc(1184,`td`,13)(1185,`p`),Mk(1186,`Nível de acessibilidade AA.`),Kg(),Jc(1187,`ul`)(1188,`li`),Mk(1189,`Define a espessura do `),Jc(1190,`code`),Mk(1191,`outline`),Kg(),Mk(1192,` para `),Jc(1193,`strong`),Mk(1194,`2px`),Kg(),Mk(1195,`.`),Kg(),Jc(1196,`li`),Mk(1197,`Disponibiliza o tamanho `),Jc(1198,`code`),Mk(1199,`small`),Kg(),Mk(1200,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),Kg()()()(),Jc(1201,`tr`,80)(1202,`td`,17)(1203,`div`,11)(1204,`span`,12),Mk(1205,` AAA`),_u(1206,`br`),Kg()()(),Jc(1207,`td`,13)(1208,`p`),Mk(1209,`Nível de acessibilidade AAA.`),Kg(),Jc(1210,`ul`)(1211,`li`),Mk(1212,`Define a espessura do `),Jc(1213,`code`),Mk(1214,`outline`),Kg(),Mk(1215,` para `),Jc(1216,`strong`),Mk(1217,`4px`),Kg(),Mk(1218,`.`),Kg(),Jc(1219,`li`),Mk(1220,`Não disponibiliza o tamanho `),Jc(1221,`code`),Mk(1222,`small`),Kg(),Mk(1223,` para componentes de formulário.`),Kg()()()()(),Jc(1224,`h4`,81)(1225,`code`,5),Mk(1226,`PoThemeTypeEnum`),Kg()(),Jc(1227,`div`,2)(1228,`p`),Mk(1229,`Enum utilizado para configurar o tipo de tema suportado, é possível alternar entre os tipos definidos.`),Kg(),Jc(1230,`pre`)(1231,`code`),Mk(1232,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),Kg()()(),Jc(1233,`h4`,7),Mk(1234,`Propriedades`),Kg(),Jc(1235,`table`,14)(1236,`tr`,15)(1237,`th`,16),Mk(1238,`Nome`),Kg(),Jc(1239,`th`,16),Mk(1240,`Descrição`),Kg()(),Jc(1241,`tr`,82)(1242,`td`,17)(1243,`div`,11)(1244,`span`,12),Mk(1245,` light`),_u(1246,`br`),Kg()()(),Jc(1247,`td`,13)(1248,`p`),Mk(1249,`Define o tema como claro.`),Kg()()(),Jc(1250,`tr`,83)(1251,`td`,17)(1252,`div`,11)(1253,`span`,12),Mk(1254,` dark`),_u(1255,`br`),Kg()()(),Jc(1256,`td`,13)(1257,`p`),Mk(1258,`Define o tema como escuro.`),Kg()()()()())},encapsulation:2,changeDetection:1})}return a})();function Ae(a,be){if(a&1&&(Jc(0,`div`,1),_u(1,`sample-po-theme-labs-view`),Kg()),a&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var Ce=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;title=`Theme`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,m){this.route=r,this.router=m}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let m=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:m||`web`,this.title=`Theme · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(m){return new(m||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(m,o){m&1&&(Jc(0,`po-page-default`,0),LO(1,Ae,2,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-theme-doc`),Kg()()),m&2&&(Ab(`p-title`,o.title)(`p-actions`,o.actions),wg(),jO(o.hidePoWebSample?-1:1),wg(),Ab(`hidden`,o.activeTab!==`doc`))},dependencies:[Mze,Ee,Se],encapsulation:2,changeDetection:1})}return a})()}];var ve=(()=>{class a{static ɵfac=function(m){return new(m||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[GV.forChild(Ce),GV]})}return a})();var et=(()=>{class a{static ɵfac=function(m){return new(m||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[M,ve]})}return a})();export{et as DocPoThemeModule};