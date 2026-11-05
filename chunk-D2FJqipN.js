import{$i as h,$n as AF,Ai as _O,B as L4,Cn as oi,Ct as Yoe,Da as pe,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,La as uO,Ln as w4,Mr as I1,Na as r0,Qa as xK,Qr as RK,Ra as ue,Sa as o0,Si as Xx,T as Gte,Vr as Mm,Xt as ere,Ya as wg,Za as xF,ai as Sn,cr as CO,dr as DO,gr as Dx,hi as VF,ht as U4,i as Ac,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,ni as SF,nr as Ag,or as Bx,qr as Ok,ri as SK,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu,xt as Woe,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-7FOYFSS2.js";var Pe=()=>({label:`Option 1`,value:`1`});var Te=()=>({label:`Option 2`,value:`2`});var Me=(i,Y)=>[i,Y];var ge=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-radio-group-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`radioGroupBasic`,`p-label`,`PO Radio Group`,3,`p-options`]],template:function(l,n){l&1&&nu(0,`po-radio-group`,0),l&2&&UE(`p-options`,CO(3,Me,_O(1,Pe),_O(2,Te)))},dependencies:[Gte],encapsulation:2,changeDetection:1})}return i})();var Ge=i=>({"docs-sample-code-tabs":i});var Ee=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-radio-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Radio Group Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-radio-group-basic/sample-po-radio-group-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-radio-group
  name="radioGroupBasic"
  p-label="PO Radio Group"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-radio-group>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-radio-group-basic',
  templateUrl: './sample-po-radio-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupBasicComponent {}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-radio-group-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ge,n.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,ge],encapsulation:2,changeDetection:1})}return i})();var he=(()=>{class i{helperText;columns;event;help;label;option;options;properties;radioGroup;fieldErrorMessage;size;columnOptions=[{label:`1 column`,value:1},{label:`2 columns`,value:2},{label:`3 columns`,value:3},{label:`4 columns`,value:4}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`}];sizesOptions=[{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];ngOnInit(){this.restore()}addOption(){this.options.push(this.option),this.option=this.getNewOption()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.event=``,this.radioGroup=void 0,this.properties=[],this.fieldErrorMessage=``,this.size=`medium`,this.option=this.getNewOption(),this.options=[]}getNewOption(){return{label:void 0,value:void 0}}static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-radio-group-labs`]],standalone:!1,decls:26,vars:31,consts:[[`optionForm`,`ngForm`],[`propertiesForm`,`ngForm`],[`name`,`radioGroupLabs`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-columns`,`p-disabled`,`p-help`,`p-label`,`p-optional`,`p-options`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`optionDisabled`,`p-label`,`Option Disabled`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`columns`,`p-columns`,`4`,`p-label`,`Columns`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`click`]],template:function(l,n){if(l&1){let s=Ax();jc(0,`po-radio-group`,2),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(n.radioGroup,r)||(n.radioGroup=r),__(r)}),mt(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),wg(),nu(1,`po-divider`),jc(2,`div`,3),nu(3,`po-info`,4)(4,`po-info`,5),wg(),nu(5,`po-divider`),jc(6,`form`,null,0)(8,`div`,3)(9,`po-input`,6),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(n.option.label,r)||(n.option.label=r),__(r)}),wg(),jc(10,`po-input`,7),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(n.option.value,r)||(n.option.value=r),__(r)}),wg(),jc(11,`po-switch`,8),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(n.option.disabled,r)||(n.option.disabled=r),__(r)}),wg()(),jc(12,`div`,3)(13,`po-button`,9),mt(`p-click`,function(){v_(s);let r=Bx(7);return n.addOption(),__(r.reset())}),wg()()(),nu(14,`po-divider`),jc(15,`form`,null,1)(17,`po-input`,10),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(n.label,r)||(n.label=r),__(r)}),wg(),jc(18,`po-input`,11),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(n.help,r)||(n.help=r),__(r)}),wg(),jc(19,`po-input`,12),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(n.helperText,r)||(n.helperText=r),__(r)}),wg(),jc(20,`po-input`,13),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),__(r)}),wg(),jc(21,`po-radio-group`,14),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(n.columns,r)||(n.columns=r),__(r)}),wg(),jc(22,`po-checkbox-group`,15),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(n.properties,r)||(n.properties=r),__(r)}),wg(),jc(23,`po-radio-group`,16),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(n.size,r)||(n.size=r),__(r)}),wg(),jc(24,`div`,3)(25,`po-button`,17),mt(`click`,function(){return v_(s),Bx(16).reset(),__(n.restore())}),wg()()()}if(l&2){let s=Bx(7);sb(`ngModel`,n.radioGroup),UE(`p-helper`,n.helperText)(`p-columns`,n.columns)(`p-disabled`,n.properties.includes(`disabled`))(`p-help`,n.help)(`p-label`,n.label)(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-show-required`,n.properties.includes(`showRequired`))(`p-size`,n.size)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-label-text-wrap`,n.properties?.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`)),o0(),rg(3),UE(`p-value`,n.radioGroup),rg(),UE(`p-value`,n.event),rg(5),sb(`ngModel`,n.option.label),o0(),rg(),sb(`ngModel`,n.option.value),o0(),rg(),sb(`ngModel`,n.option.disabled),o0(),rg(2),UE(`p-disabled`,s.invalid),rg(4),sb(`ngModel`,n.label),o0(),rg(),sb(`ngModel`,n.help),o0(),rg(),sb(`ngModel`,n.helperText),o0(),rg(),sb(`ngModel`,n.fieldErrorMessage),o0(),rg(),sb(`ngModel`,n.columns),UE(`p-options`,n.columnOptions),o0(),rg(),sb(`ngModel`,n.properties),UE(`p-options`,n.propertiesOptions),o0(),rg(),sb(`ngModel`,n.size),UE(`p-options`,n.sizesOptions),o0()}},dependencies:[RK,SK,MK,xF,SF,oi,Lf,w4,U4,Gte,L4,Yoe],encapsulation:2,changeDetection:1})}return i})();var Le=i=>({"docs-sample-code-tabs":i});var Se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-radio-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Radio Group Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-radio-group-labs/sample-po-radio-group-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-radio-group
  name="radioGroupLabs"
  [(ngModel)]="radioGroup"
  [p-helper]="helperText"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
>
</po-radio-group>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="radioGroup"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #optionForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6 po-lg-4" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6 po-lg-4" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>

    <po-switch class="po-lg-4" name="optionDisabled" [(ngModel)]="option.disabled" p-label="Option Disabled">
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6 po-lg-3"
      p-label="Add Option"
      [p-disabled]="optionForm.invalid"
      (p-click)="addOption(); optionForm.reset()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #propertiesForm="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-radio-group
    class="po-md-12"
    name="columns"
    [(ngModel)]="columns"
    p-columns="4"
    p-label="Columns"
    [p-options]="columnOptions"
  >
  </po-radio-group>

  <po-checkbox-group
    class="po-md-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>
  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    [p-options]="sizesOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (click)="propertiesForm.reset(); restore()">
    </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-labs',
  templateUrl: './sample-po-radio-group-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupLabsComponent implements OnInit {
  helperText: string;
  columns: number;
  event: string;
  help: string;
  label: string;
  option: PoRadioGroupOption;
  options: Array<PoRadioGroupOption>;
  properties: Array<string>;
  radioGroup: string;
  fieldErrorMessage: string;
  size: string;

  readonly columnOptions: Array<PoRadioGroupOption> = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 }
  ];

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  readonly sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options.push(this.option);
    this.option = this.getNewOption();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.event = '';
    this.radioGroup = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.size = 'medium';
    this.option = this.getNewOption();
    this.options = [];
  }

  private getNewOption(): PoRadioGroupOption {
    return {
      label: undefined,
      value: undefined
    };
  }
}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-radio-group-labs`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Le,n.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,he],encapsulation:2,changeDetection:1})}return i})();var xe=(()=>{class i{language=`es`;original=``;translated=``;languageOptions=[{label:`Spanish`,value:`es`},{label:`English`,value:`en`}];optionsList=[{value:`1`,label:`Olá`},{value:`2`,label:`Tchau`},{value:`3`,label:`Estrangeiro`},{value:`4`,label:`Alinhamento`},{value:`5`,label:`Visão`},{value:`6`,label:`Livro`}];wordsOptions=[{id:`1`,en:`Hello`,es:`Hola`},{id:`2`,en:`Bye`,es:`Hasta luego`},{id:`3`,en:`Foreign`,es:`Extranjero`},{id:`4`,en:`Alignment`,es:`Alineación`},{id:`5`,en:`Vision`,es:`Vista`},{id:`6`,en:`Book`,es:`Libro`}];changeLanguage(d){let l=this.wordsOptions.find(n=>n.id===this.original);l&&(this.translated=l[d||this.language])}static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-radio-group-translator`]],standalone:!1,decls:6,vars:5,consts:[[`f`,`ngForm`],[1,`po-row`],[`name`,`language`,`p-label`,`Select a Language`,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`original`,`p-label`,`Original Text (Portuguese)`,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`translated`,`p-label`,`Translated Text`,`p-readonly`,``,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`ngModel`]],template:function(l,n){if(l&1){let s=Ax();jc(0,`form`,null,0)(2,`div`,1)(3,`po-radio-group`,2),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(n.language,r)||(n.language=r),__(r)}),mt(`p-change`,function(r){return n.changeLanguage(r)}),wg(),jc(4,`po-select`,3),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(n.original,r)||(n.original=r),__(r)}),mt(`p-change`,function(r){return n.changeLanguage(r)}),wg(),jc(5,`po-input`,4),r0(),ab(`ngModelChange`,function(r){return v_(s),uO(n.translated,r)||(n.translated=r),__(r)}),wg()()()}l&2&&(rg(3),sb(`ngModel`,n.language),UE(`p-options`,n.languageOptions),o0(),rg(),sb(`ngModel`,n.original),UE(`p-options`,n.optionsList),o0(),rg(),sb(`ngModel`,n.translated),o0())},dependencies:[RK,SK,MK,xF,SF,U4,Gte,Woe],encapsulation:2,changeDetection:1})}return i})();var qe=i=>({"docs-sample-code-tabs":i});var fe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-radio-group-translator-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Radio Group - Translator`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-radio-group-translator/sample-po-radio-group-translator.component.html`),wg(),jc(13,`pre`,7),lO(14,`<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-4"
      name="language"
      [(ngModel)]="language"
      p-label="Select a Language"
      p-required
      [p-options]="languageOptions"
      (p-change)="changeLanguage($event)"
    >
    </po-radio-group>

    <po-select
      class="po-lg-4"
      name="original"
      [(ngModel)]="original"
      p-label="Original Text (Portuguese)"
      p-required
      [p-options]="optionsList"
      (p-change)="changeLanguage($event)"
    >
    </po-select>

    <po-input
      class="po-lg-4"
      name="translated"
      [(ngModel)]="translated"
      p-label="Translated Text"
      p-readonly
      p-required
    >
    </po-input>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-translator',
  templateUrl: './sample-po-radio-group-translator.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupTranslatorComponent {
  language: string = 'es';
  original: string = '';
  translated: string = '';

  readonly languageOptions: Array<PoRadioGroupOption> = [
    { label: 'Spanish', value: 'es' },
    { label: 'English', value: 'en' }
  ];

  readonly optionsList: Array<PoSelectOption> = [
    { value: '1', label: 'Ol\xE1' },
    { value: '2', label: 'Tchau' },
    { value: '3', label: 'Estrangeiro' },
    { value: '4', label: 'Alinhamento' },
    { value: '5', label: 'Vis\xE3o' },
    { value: '6', label: 'Livro' }
  ];

  readonly wordsOptions: Array<any> = [
    { id: '1', en: 'Hello', es: 'Hola' },
    { id: '2', en: 'Bye', es: 'Hasta luego' },
    { id: '3', en: 'Foreign', es: 'Extranjero' },
    { id: '4', en: 'Alignment', es: 'Alineaci\xF3n' },
    { id: '5', en: 'Vision', es: 'Vista' },
    { id: '6', en: 'Book', es: 'Libro' }
  ];

  changeLanguage(value) {
    const word = this.wordsOptions.find(item => item.id === this.original);

    if (word) {
      this.translated = word[value || this.language];
    }
  }
}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-radio-group-translator`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,qe,n.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,xe],encapsulation:2,changeDetection:1})}return i})();var ve=(()=>{class i{formBuilder=h(xK);translatorForm;languageOptions=[{label:`Spanish`,value:`es`},{label:`English`,value:`en`}];optionsList=[{value:`1`,label:`Olá`},{value:`2`,label:`Tchau`},{value:`3`,label:`Estrangeiro`},{value:`4`,label:`Alinhamento`},{value:`5`,label:`Visão`},{value:`6`,label:`Livro`}];wordsOptions=[{id:`1`,en:`Hello`,es:`Hola`},{id:`2`,en:`Bye`,es:`Hasta luego`},{id:`3`,en:`Foreign`,es:`Extranjero`},{id:`4`,en:`Alignment`,es:`Alineación`},{id:`5`,en:`Vision`,es:`Vista`},{id:`6`,en:`Book`,es:`Libro`}];ngOnInit(){this.translatorForm=this.formBuilder.group({language:[`es`,Mm.required],original:[void 0,Mm.required],translated:[void 0,Mm.required]})}changeLanguage(){let d=this.translatorForm.value.language,l=this.translatorForm.value.original,n=this.wordsOptions.find(s=>s.id===l);n&&this.translatorForm.patchValue({translated:n[d]})}static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-radio-group-translator-reactive-form`]],standalone:!1,decls:5,vars:3,consts:[[3,`formGroup`],[1,`po-row`],[`name`,`language`,`formControlName`,`language`,`p-label`,`Select a Language`,`p-required`,``,1,`po-lg-4`,3,`p-change`,`p-options`],[`name`,`original`,`formControlName`,`original`,`p-label`,`Original Text (Portuguese)`,`p-required`,``,1,`po-lg-4`,3,`p-change`,`p-options`],[`name`,`translated`,`formControlName`,`translated`,`p-label`,`Translated Text`,`p-readonly`,``,`p-required`,``,1,`po-lg-4`]],template:function(l,n){l&1&&(jc(0,`form`,0)(1,`div`,1)(2,`po-radio-group`,2),r0(),mt(`p-change`,function(){return n.changeLanguage()}),wg(),jc(3,`po-select`,3),r0(),mt(`p-change`,function(){return n.changeLanguage()}),wg(),jc(4,`po-input`,4),r0(),wg()()()),l&2&&(UE(`formGroup`,n.translatorForm),rg(2),UE(`p-options`,n.languageOptions),o0(),rg(),UE(`p-options`,n.optionsList),o0(),rg(),o0())},dependencies:[RK,SK,MK,AF,VF,U4,Gte,Woe],encapsulation:2,changeDetection:1})}return i})();var Ae=i=>({"docs-sample-code-tabs":i});var Ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-radio-group-translator-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Radio Group - Translator Reactive Form`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html`),wg(),jc(13,`pre`,7),lO(14,`<form [formGroup]="translatorForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-4"
      name="language"
      formControlName="language"
      p-label="Select a Language"
      p-required
      [p-options]="languageOptions"
      (p-change)="changeLanguage()"
    >
    </po-radio-group>

    <po-select
      class="po-lg-4"
      name="original"
      formControlName="original"
      p-label="Original Text (Portuguese)"
      p-required
      [p-options]="optionsList"
      (p-change)="changeLanguage()"
    >
    </po-select>

    <po-input
      class="po-lg-4"
      name="translated"
      formControlName="translated"
      p-label="Translated Text"
      p-readonly
      p-required
    >
    </po-input>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-translator-reactive-form',
  templateUrl: './sample-po-radio-group-translator-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupTranslatorReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  translatorForm: UntypedFormGroup;

  readonly languageOptions: Array<PoRadioGroupOption> = [
    { label: 'Spanish', value: 'es' },
    { label: 'English', value: 'en' }
  ];

  readonly optionsList: Array<PoSelectOption> = [
    { value: '1', label: 'Ol\xE1' },
    { value: '2', label: 'Tchau' },
    { value: '3', label: 'Estrangeiro' },
    { value: '4', label: 'Alinhamento' },
    { value: '5', label: 'Vis\xE3o' },
    { value: '6', label: 'Livro' }
  ];

  readonly wordsOptions: Array<any> = [
    { id: '1', en: 'Hello', es: 'Hola' },
    { id: '2', en: 'Bye', es: 'Hasta luego' },
    { id: '3', en: 'Foreign', es: 'Extranjero' },
    { id: '4', en: 'Alignment', es: 'Alineaci\xF3n' },
    { id: '5', en: 'Vision', es: 'Vista' },
    { id: '6', en: 'Book', es: 'Libro' }
  ];

  ngOnInit() {
    this.translatorForm = this.formBuilder.group({
      language: ['es', Validators.required],
      original: [undefined, Validators.required],
      translated: [undefined, Validators.required]
    });
  }

  changeLanguage() {
    const language = this.translatorForm.value.language;
    const original = this.translatorForm.value.original;

    const word = this.wordsOptions.find(item => item.id === original);

    if (word) {
      this.translatorForm.patchValue({
        translated: word[language]
      });
    }
  }
}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-radio-group-translator-reactive-form`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ae,n.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,ve],encapsulation:2,changeDetection:1})}return i})();var we=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-radio-group-doc`]],standalone:!1,decls:971,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-combo`],[`href`,`/documentation/po-select`],[`href`,`/documentation/po-checkbox-group`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/use-of-color`],[`href`,`https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://doc.animaliads.io/docs/components/radio`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoRadioGroupOption[]`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(l,n){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),lO(9,`Não esqueça de importar o módulo `),jc(10,`code`),lO(11,`FormsModule`),wg(),lO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),lO(14,`ReactiveFormsModule`),wg(),lO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),lO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),lO(20,`PoRadioGroupComponent`),wg()(),jc(21,`div`,2)(22,`p`),lO(23,`O componente `),jc(24,`code`),lO(25,`po-radio-group`),wg(),lO(26,` deve ser utilizado para disponibilizar m\xFAltiplas op\xE7\xF5es ao usu\xE1rio, permitindo a ele que
selecione apenas uma delas. Seu uso \xE9 recomendado para um n\xFAmero pequeno de op\xE7\xF5es, caso contr\xE1rio, recomenda-se o uso
do `),jc(27,`a`,6)(28,`strong`),lO(29,`po-combo`),wg()(),lO(30,` ou `),jc(31,`a`,7)(32,`strong`),lO(33,`po-select`),wg()(),lO(34,`.`),wg(),jc(35,`p`),lO(36,`Este n\xE3o \xE9 um componente de multisele\xE7\xE3o, se for este o caso, deve-se utilizar o
`),jc(37,`a`,8)(38,`strong`),lO(39,`po-checkbox-group`),wg()(),lO(40,`.`),wg(),jc(41,`blockquote`)(42,`p`),lO(43,`Ao passar um valor para o `),jc(44,`em`),lO(45,`model`),wg(),lO(46,` que não esteja na lista de opções, o mesmo será definido como `),jc(47,`code`),lO(48,`undefined`),wg(),lO(49,`.`),wg()(),jc(50,`h4`),lO(51,`Acessibilidade tratada no componente interno `),jc(52,`code`),lO(53,`po-radio`),wg(),lO(54,`:`),wg(),jc(55,`p`),lO(56,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),wg(),jc(57,`ul`)(58,`li`),lO(59,`O componente foi desenvolvido utilizando controles padrões HTML para permitir a identificação do mesmo na interface por tecnologias assistivas. `),jc(60,`a`,9),lO(61,`WCAG 4.1.2: Name, Role, Value`),wg()(),jc(62,`li`),lO(63,`A cor não deve ser o único meio para diferenciar o radio button normal do selecionado, por isso deve-se manter uma diferença visual entre os estados. `),jc(64,`a`,10),lO(65,`WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification`),wg()(),jc(66,`li`),lO(67,`Quando em foco, o componente é ativado usando as teclas de Espaço e Enter do teclado. `),jc(68,`a`,11),lO(69,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),wg()(),jc(70,`li`),lO(71,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),jc(72,`a`,12),lO(73,`(WCAG 2.4.12: Focus Appearance`),wg()()(),jc(74,`p`),lO(75,`Conforme documentação em: `),jc(76,`a`,13),lO(77,`https://doc.animaliads.io/docs/components/radio`),wg()(),jc(78,`h4`),lO(79,`Tokens customizáveis`),wg(),jc(80,`p`),lO(81,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),nu(82,`br`),lO(83,`
Obs: No componente Radio Group, a customiza\xE7\xE3o ocorre principalmente nos elementos `),jc(84,`code`),lO(85,`po-radio`),wg(),lO(86,` que compõem o grupo de opções. `),nu(87,`br`),lO(88,`
Portanto, ao aplicar estilos customizados, \xE9 importante focar na customiza\xE7\xE3o dos elementos `),jc(89,`code`),lO(90,`po-radio`),wg(),lO(91,` em vez do próprio `),jc(92,`code`),lO(93,`po-radio-group`),wg(),lO(94,`.`),wg(),jc(95,`blockquote`)(96,`p`),lO(97,`Para maiores informações, acesse o guia `),jc(98,`a`,14),lO(99,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(100,`.`),wg()(),jc(101,`table`)(102,`thead`)(103,`tr`)(104,`th`),lO(105,`Propriedade`),wg(),jc(106,`th`),lO(107,`Descrição`),wg(),jc(108,`th`),lO(109,`Valor Padrão`),wg()()(),jc(110,`tbody`)(111,`tr`)(112,`td`)(113,`strong`),lO(114,`Default Values`),wg()(),nu(115,`td`)(116,`td`),wg(),jc(117,`tr`)(118,`td`)(119,`code`),lO(120,`--border-color`),wg()(),jc(121,`td`),lO(122,`Cor da borda`),wg(),jc(123,`td`)(124,`code`),lO(125,`var(--color-neutral-dark-70)`),wg()()(),jc(126,`tr`)(127,`td`)(128,`code`),lO(129,`--field-container-title-justify`),wg()(),jc(130,`td`),lO(131,`Alinhamento horizontal do título (`),jc(132,`code`),lO(133,`justify-content`),wg(),lO(134,`)`),wg(),jc(135,`td`)(136,`code`),lO(137,`space-between`),wg()()(),jc(138,`tr`)(139,`td`)(140,`code`),lO(141,`--field-container-title-flex`),wg()(),jc(142,`td`),lO(143,`Flex do título (`),jc(144,`code`),lO(145,`flex`),wg(),lO(146,`)`),wg(),jc(147,`td`)(148,`code`),lO(149,`1 auto`),wg()()(),jc(150,`tr`)(151,`td`)(152,`strong`),lO(153,`Hover`),wg()(),nu(154,`td`)(155,`td`),wg(),jc(156,`tr`)(157,`td`)(158,`code`),lO(159,`--shadow-color-hover`),wg()(),jc(160,`td`),lO(161,`Cor da sombra no estado hover`),wg(),jc(162,`td`)(163,`code`),lO(164,`var(--color-brand-01-lighter)`),wg()()(),jc(165,`tr`)(166,`td`)(167,`code`),lO(168,`--color-hover`),wg()(),jc(169,`td`),lO(170,`Cor principal no estado hover`),wg(),jc(171,`td`)(172,`code`),lO(173,`var(--color-brand-01-dark)`),wg()()(),jc(174,`tr`)(175,`td`)(176,`strong`),lO(177,`Focused`),wg()(),nu(178,`td`)(179,`td`),wg(),jc(180,`tr`)(181,`td`)(182,`code`),lO(183,`--outline-color-focused`),wg()(),jc(184,`td`),lO(185,`Cor do outline do estado de focus`),wg(),jc(186,`td`)(187,`code`),lO(188,`var(--color-brand-01-darkest)`),wg()()(),jc(189,`tr`)(190,`td`)(191,`strong`),lO(192,`checked`),wg()(),nu(193,`td`)(194,`td`),wg(),jc(195,`tr`)(196,`td`)(197,`code`),lO(198,`--color-unchecked`),wg()(),jc(199,`td`),lO(200,`Cor quando não selecionado`),wg(),jc(201,`td`)(202,`code`),lO(203,`var(--color-neutral-light-00)`),wg()()(),jc(204,`tr`)(205,`td`)(206,`code`),lO(207,`--color-checked`),wg()(),jc(208,`td`),lO(209,`Cor quando selecionado`),wg(),jc(210,`td`)(211,`code`),lO(212,`var(--color-action-default)`),wg()()(),jc(213,`tr`)(214,`td`)(215,`strong`),lO(216,`Disabled`),wg()(),nu(217,`td`)(218,`td`),wg(),jc(219,`tr`)(220,`td`)(221,`code`),lO(222,`--color-unchecked-disabled`),wg()(),jc(223,`td`),lO(224,`Cor pricipal quando não selecionado no estado disabled`),wg(),jc(225,`td`)(226,`code`),lO(227,`var(--color-neutral-light-30)`),wg()()(),jc(228,`tr`)(229,`td`)(230,`code`),lO(231,`--color-checked-disabled`),wg()(),jc(232,`td`),lO(233,`Cor pricipal quando selecionado no estado disabled`),wg(),jc(234,`td`)(235,`code`),lO(236,`var(--color-neutral-dark-70)`),wg()()()()()(),jc(237,`div`,15)(238,`h4`,16),lO(239,`Seletor`),wg(),jc(240,`pre`,17),lO(241,`<po-radio-group
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-columns="number"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    p-optional="boolean"
    p-options="PoRadioGroupOption[]"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-radio-group>
`),wg()(),jc(242,`h4`,18),lO(243,`Propriedades`),wg(),jc(244,`table`,19)(245,`tr`,20)(246,`th`,21),lO(247,`Nome`),wg(),jc(248,`th`,21),lO(249,`Tipo`),wg(),jc(250,`th`,21),lO(251,`Padrão`),wg(),jc(252,`th`,21),lO(253,`Descrição`),wg()(),jc(254,`tr`,22)(255,`td`,23)(256,`div`,24)(257,`span`,25),lO(258,` (p-additional-help)`),nu(259,`br`),wg()(),jc(260,`div`,26),lO(261,`Deprecated`),wg()(),jc(262,`td`,27)(263,`code`,28),lO(264,`EventEmitter`),wg()(),jc(265,`td`,29),lO(266,`-`),wg(),jc(267,`td`,30)(268,`em`)(269,`strong`),lO(270,`(opcional)`),wg()(),jc(271,`p`),lO(272,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(273,`blockquote`)(274,`p`),lO(275,`Essa propriedade está `),jc(276,`strong`),lO(277,`depreciada`),wg(),lO(278,` e será removida na versão `),jc(279,`code`),lO(280,`23.x.x`),wg(),lO(281,`. Recomendamos utilizar a propriedade `),jc(282,`code`),lO(283,`p-helper`),wg(),lO(284,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(285,`tr`,22)(286,`td`,23)(287,`div`,31)(288,`span`,32),lO(289,` p-additional-help-tooltip`),nu(290,`br`),wg()(),jc(291,`div`,26),lO(292,`Deprecated`),wg()(),jc(293,`td`,27)(294,`code`,33),lO(295,`string`),wg()(),jc(296,`td`,29),lO(297,`-`),wg(),jc(298,`td`,30)(299,`em`)(300,`strong`),lO(301,`(opcional)`),wg()(),jc(302,`p`),lO(303,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(304,`code`),lO(305,`po-helper`),wg(),lO(306,`.
`),jc(307,`strong`),lO(308,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(309,`blockquote`)(310,`p`),lO(311,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),wg()(),jc(312,`blockquote`)(313,`p`),lO(314,`Essa propriedade está `),jc(315,`strong`),lO(316,`depreciada`),wg(),lO(317,` e será removida na versão `),jc(318,`code`),lO(319,`23.x.x`),wg(),lO(320,`. Recomendamos utilizar a propriedade `),jc(321,`code`),lO(322,`p-helper`),wg(),lO(323,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(324,`tr`,22)(325,`td`,23)(326,`div`,31)(327,`span`,32),lO(328,` p-append-in-body`),nu(329,`br`),wg()()(),jc(330,`td`,27)(331,`code`,34),lO(332,`boolean`),wg()(),jc(333,`td`,29)(334,`p`)(335,`code`),lO(336,`false`),wg()()(),jc(337,`td`,30)(338,`em`)(339,`strong`),lO(340,`(opcional)`),wg()(),jc(341,`p`),lO(342,`Define que o popover (`),jc(343,`code`),lO(344,`p-helper`),wg(),lO(345,` e/ou `),jc(346,`code`),lO(347,`p-error-limit`),wg(),lO(348,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),wg(),jc(349,`blockquote`)(350,`p`),lO(351,`Quando utilizado com `),jc(352,`code`),lO(353,`p-helper`),wg(),lO(354,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(355,`tr`,22)(356,`td`,23)(357,`div`,31)(358,`span`,32),lO(359,` p-auto-focus`),nu(360,`br`),wg()()(),jc(361,`td`,27)(362,`code`,34),lO(363,`boolean`),wg()(),jc(364,`td`,29)(365,`p`)(366,`code`),lO(367,`false`),wg()()(),jc(368,`td`,30)(369,`em`)(370,`strong`),lO(371,`(opcional)`),wg()(),jc(372,`p`),lO(373,`Aplica foco no elemento ao ser iniciado.`),wg(),jc(374,`blockquote`)(375,`p`),lO(376,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),wg()()()(),jc(377,`tr`,22)(378,`td`,23)(379,`div`,24)(380,`span`,25),lO(381,` (p-change)`),nu(382,`br`),wg()()(),jc(383,`td`,27)(384,`code`,28),lO(385,`EventEmitter`),wg()(),jc(386,`td`,29),lO(387,`-`),wg(),jc(388,`td`,30)(389,`em`)(390,`strong`),lO(391,`(opcional)`),wg()(),jc(392,`p`),lO(393,`Evento ao alterar valor do campo.`),wg()()(),jc(394,`tr`,22)(395,`td`,23)(396,`div`,24)(397,`span`,25),lO(398,` (p-change-model)`),nu(399,`br`),wg()()(),jc(400,`td`,27)(401,`code`,28),lO(402,`EventEmitter`),wg()(),jc(403,`td`,29),lO(404,`-`),wg(),jc(405,`td`,30)(406,`em`)(407,`strong`),lO(408,`(opcional)`),wg()(),jc(409,`p`),lO(410,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),jc(411,`code`),lO(412,`setValue`),wg(),lO(413,`, `),jc(414,`code`),lO(415,`patchValue`),wg(),lO(416,`, carregamento assíncrono).`),wg(),jc(417,`p`),lO(418,`Diferentemente do `),jc(419,`code`),lO(420,`p-change`),wg(),lO(421,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),jc(422,`code`),lO(423,`p-change-model`),wg(),lO(424,` cobre todos os cenários de alteração de valor.`),wg(),jc(425,`p`),lO(426,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),wg()()(),jc(427,`tr`,22)(428,`td`,23)(429,`div`,31)(430,`span`,32),lO(431,` p-columns`),nu(432,`br`),wg()()(),jc(433,`td`,27)(434,`code`,35),lO(435,`number`),wg()(),jc(436,`td`,29)(437,`p`)(438,`code`),lO(439,`2`),wg()()(),jc(440,`td`,30)(441,`em`)(442,`strong`),lO(443,`(opcional)`),wg()(),jc(444,`p`),lO(445,`Define a quantidade de colunas para exibição das opções.`),wg(),jc(446,`p`)(447,`strong`),lO(448,`Considerações:`),wg()(),jc(449,`ul`)(450,`li`),lO(451,`É possível exibir as opções entre `),jc(452,`code`),lO(453,`1`),wg(),lO(454,` e `),jc(455,`code`),lO(456,`4`),wg(),lO(457,` colunas.`),wg(),jc(458,`li`),lO(459,`O número máximo de colunas é invariável nas seguintes resoluções:`),jc(460,`ul`)(461,`li`)(462,`code`),lO(463,`sm`),wg(),lO(464,`: `),jc(465,`code`),lO(466,`1`),wg()(),jc(467,`li`)(468,`code`),lO(469,`md`),wg(),lO(470,`: `),jc(471,`code`),lO(472,`2`),wg()()()()()()(),jc(473,`tr`,22)(474,`td`,23)(475,`div`,31)(476,`span`,32),lO(477,` p-compact-label`),nu(478,`br`),wg()()(),jc(479,`td`,27)(480,`code`,34),lO(481,`boolean`),wg()(),jc(482,`td`,29)(483,`p`)(484,`code`),lO(485,`false`),wg()()(),jc(486,`td`,30)(487,`em`)(488,`strong`),lO(489,`(opcional)`),wg()(),jc(490,`p`),lO(491,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(492,`p`),lO(493,`Quando habilitado (`),jc(494,`code`),lO(495,`true`),wg(),lO(496,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(497,`ul`)(498,`li`)(499,`code`),lO(500,`po-label`),wg()(),jc(501,`li`)(502,`code`),lO(503,`p-requirement (showRequired)`),wg()(),jc(504,`li`)(505,`code`),lO(506,`po-helper`),wg()()(),jc(507,`p`),lO(508,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(509,`p`),lO(510,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(511,`ul`)(512,`li`)(513,`code`),lO(514,`--field-container-title-justify`),wg()(),jc(515,`li`)(516,`code`),lO(517,`--field-container-title-flex`),wg()()(),jc(518,`p`),lO(519,`Exemplo:`),wg(),jc(520,`pre`)(521,`code`),lO(522,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(523,`p`),lO(524,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(525,`tr`,22)(526,`td`,23)(527,`div`,31)(528,`span`,32),lO(529,` p-disabled`),nu(530,`br`),wg()()(),jc(531,`td`,27)(532,`code`,34),lO(533,`boolean`),wg()(),jc(534,`td`,29)(535,`p`)(536,`code`),lO(537,`false`),wg()()(),jc(538,`td`,30)(539,`em`)(540,`strong`),lO(541,`(opcional)`),wg()(),jc(542,`p`),lO(543,`Indica que o campo será desabilitado.`),wg()()(),jc(544,`tr`,22)(545,`td`,23)(546,`div`,31)(547,`span`,32),lO(548,` p-error-limit`),nu(549,`br`),wg()()(),jc(550,`td`,27)(551,`code`,34),lO(552,`boolean`),wg()(),jc(553,`td`,29)(554,`p`)(555,`code`),lO(556,`false`),wg()()(),jc(557,`td`,30)(558,`em`)(559,`strong`),lO(560,`(opcional)`),wg()(),jc(561,`p`),lO(562,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg(),jc(563,`blockquote`)(564,`p`),lO(565,`Caso essa propriedade seja definida como `),jc(566,`code`),lO(567,`true`),wg(),lO(568,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),wg()()()(),jc(569,`tr`,22)(570,`td`,23)(571,`div`,31)(572,`span`,32),lO(573,` p-field-error-message`),nu(574,`br`),wg()()(),jc(575,`td`,27)(576,`code`,33),lO(577,`string`),wg()(),jc(578,`td`,29),lO(579,`-`),wg(),jc(580,`td`,30)(581,`em`)(582,`strong`),lO(583,`(opcional)`),wg()(),jc(584,`p`),lO(585,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),wg(),jc(586,`blockquote`)(587,`p`),lO(588,`Necessário que a propriedade `),jc(589,`code`),lO(590,`p-required`),wg(),lO(591,` esteja habilitada.`),wg()()()(),jc(592,`tr`,22)(593,`td`,23)(594,`div`,31)(595,`span`,32),lO(596,` p-help`),nu(597,`br`),wg()()(),jc(598,`td`,27)(599,`code`,33),lO(600,`string`),wg()(),jc(601,`td`,29),lO(602,`-`),wg(),jc(603,`td`,30)(604,`em`)(605,`strong`),lO(606,`(opcional)`),wg()(),jc(607,`p`),lO(608,`Texto de apoio do campo.`),wg()()(),jc(609,`tr`,22)(610,`td`,23)(611,`div`,24)(612,`span`,25),lO(613,` (p-keydown)`),nu(614,`br`),wg()()(),jc(615,`td`,27)(616,`code`,28),lO(617,`EventEmitter`),wg()(),jc(618,`td`,29),lO(619,`-`),wg(),jc(620,`td`,30)(621,`em`)(622,`strong`),lO(623,`(opcional)`),wg()(),jc(624,`p`),lO(625,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(626,`code`),lO(627,`KeyboardEvent`),wg(),lO(628,` com informações sobre a tecla.`),wg()()(),jc(629,`tr`,22)(630,`td`,23)(631,`div`,31)(632,`span`,32),lO(633,` p-label`),nu(634,`br`),wg()()(),jc(635,`td`,27)(636,`code`,33),lO(637,`string`),wg()(),jc(638,`td`,29),lO(639,`-`),wg(),jc(640,`td`,30)(641,`em`)(642,`strong`),lO(643,`(opcional)`),wg()(),jc(644,`p`),lO(645,`Label do campo.`),wg()()(),jc(646,`tr`,22)(647,`td`,23)(648,`div`,31)(649,`span`,32),lO(650,` p-label-text-wrap`),nu(651,`br`),wg()()(),jc(652,`td`,27)(653,`code`,34),lO(654,`boolean`),wg()(),jc(655,`td`,29)(656,`p`)(657,`code`),lO(658,`false`),wg()()(),jc(659,`td`,30)(660,`em`)(661,`strong`),lO(662,`(opcional)`),wg()(),jc(663,`p`),lO(664,`Habilita a quebra automática do texto da propriedade `),jc(665,`code`),lO(666,`p-label`),wg(),lO(667,`. Quando `),jc(668,`code`),lO(669,`p-label-text-wrap`),wg(),lO(670,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg()()(),jc(671,`tr`,22)(672,`td`,23)(673,`div`,31)(674,`span`,32),lO(675,` name`),nu(676,`br`),wg()()(),jc(677,`td`,27)(678,`code`,33),lO(679,`string`),wg()(),jc(680,`td`,29),lO(681,`-`),wg(),jc(682,`td`,30)(683,`p`),lO(684,`Nome das opções.`),wg()()(),jc(685,`tr`,22)(686,`td`,23)(687,`div`,31)(688,`span`,32),lO(689,` p-optional`),nu(690,`br`),wg()()(),jc(691,`td`,27)(692,`code`,34),lO(693,`boolean`),wg()(),jc(694,`td`,29)(695,`p`)(696,`code`),lO(697,`false`),wg()()(),jc(698,`td`,30)(699,`em`)(700,`strong`),lO(701,`(opcional)`),wg()(),jc(702,`p`),lO(703,`Define se a indicação de campo opcional será exibida.`),wg(),jc(704,`blockquote`)(705,`p`),lO(706,`Não será exibida a indicação se:`),wg()(),jc(707,`ul`)(708,`li`),lO(709,`O campo conter `),jc(710,`code`),lO(711,`p-required`),wg(),lO(712,`;`),wg(),jc(713,`li`),lO(714,`Não possuir `),jc(715,`code`),lO(716,`p-help`),wg(),lO(717,` e/ou `),jc(718,`code`),lO(719,`p-label`),wg(),lO(720,`.`),wg()()()(),jc(721,`tr`,22)(722,`td`,23)(723,`div`,31)(724,`span`,32),lO(725,` p-options`),nu(726,`br`),wg()()(),jc(727,`td`,27)(728,`code`,36),lO(729,`PoRadioGroupOption[]`),wg()(),jc(730,`td`,29),lO(731,`-`),wg(),jc(732,`td`,30)(733,`p`),lO(734,`Lista de op\xE7\xF5es que ser\xE3o exibidas.
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.`),wg()()(),jc(735,`tr`,22)(736,`td`,23)(737,`div`,31)(738,`span`,32),lO(739,` p-helper`),nu(740,`br`),wg()()(),jc(741,`td`,27)(742,`code`,37),lO(743,`PoHelperOptions `),wg(),jc(744,`code`,33),lO(745,` string`),wg()(),jc(746,`td`,29),lO(747,`-`),wg(),jc(748,`td`,30)(749,`em`)(750,`strong`),lO(751,`(opcional)`),wg()(),jc(752,`p`),lO(753,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),jc(754,`code`),lO(755,`p-label`),wg(),lO(756,` for definida, ou, ao lado do componente na ausência da propriedade `),jc(757,`code`),lO(758,`p-label`),wg(),lO(759,`.`),wg(),jc(760,`blockquote`)(761,`p`),lO(762,`Para mais informações acesse: `),jc(763,`a`,38),lO(764,`https://po-ui.io/documentation/po-helper`),wg(),lO(765,`.`),wg()(),jc(766,`blockquote`)(767,`p`),lO(768,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),jc(769,`code`),lO(770,`p-additional-help-tooltip`),wg(),lO(771,` e `),jc(772,`code`),lO(773,`p-additional-help`),wg(),lO(774,`) será ignorado.`),wg()()()(),jc(775,`tr`,22)(776,`td`,23)(777,`div`,31)(778,`span`,32),lO(779,` p-required`),nu(780,`br`),wg()()(),jc(781,`td`,27)(782,`code`,34),lO(783,`boolean`),wg()(),jc(784,`td`,29)(785,`p`)(786,`code`),lO(787,`false`),wg()()(),jc(788,`td`,30)(789,`em`)(790,`strong`),lO(791,`(opcional)`),wg()(),jc(792,`p`),lO(793,`Define que o campo será obrigatório.`),wg()()(),jc(794,`tr`,22)(795,`td`,23)(796,`div`,31)(797,`span`,32),lO(798,` p-show-required`),nu(799,`br`),wg()()(),jc(800,`td`,27)(801,`code`,34),lO(802,`boolean`),wg()(),jc(803,`td`,29),lO(804,`-`),wg(),jc(805,`td`,30)(806,`p`),lO(807,`Define se a indicação de campo obrigatório será exibida.`),wg(),jc(808,`blockquote`)(809,`p`),lO(810,`Não será exibida a indicação se:`),wg()(),jc(811,`ul`)(812,`li`),lO(813,`Não possuir `),jc(814,`code`),lO(815,`p-help`),wg(),lO(816,` e/ou `),jc(817,`code`),lO(818,`p-label`),wg(),lO(819,`.`),wg()()()(),jc(820,`tr`,22)(821,`td`,23)(822,`div`,31)(823,`span`,32),lO(824,` p-size`),nu(825,`br`),wg()()(),jc(826,`td`,27)(827,`code`,33),lO(828,`string`),wg()(),jc(829,`td`,29)(830,`p`)(831,`code`),lO(832,`medium`),wg()()(),jc(833,`td`,30)(834,`em`)(835,`strong`),lO(836,`(opcional)`),wg()(),jc(837,`p`),lO(838,`Define o tamanho dos radios do componente:`),wg(),jc(839,`ul`)(840,`li`)(841,`code`),lO(842,`small`),wg(),lO(843,`: 16x16 (disponível apenas para acessibilidade AA).`),wg(),jc(844,`li`)(845,`code`),lO(846,`medium`),wg(),lO(847,`: 24x24.`),wg()(),jc(848,`blockquote`)(849,`p`),lO(850,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(851,`code`),lO(852,`medium`),wg(),lO(853,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(854,`a`,39),lO(855,`po-theme`),wg(),lO(856,`.`),wg()()()()(),jc(857,`h3`,18),lO(858,`Métodos`),wg(),jc(859,`table`,40)(860,`tr`,22)(861,`th`,41)(862,`div`,31)(863,`h4`)(864,`span`,32),lO(865,` focus `),wg()()()()(),jc(866,`tr`,30)(867,`td`,30)(868,`p`),lO(869,`Função que atribui foco ao componente.`),wg(),jc(870,`p`),lO(871,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(872,`pre`)(873,`code`),lO(874,`import { PoRadioGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRadioGroupComponent, { static: true }) radio: PoRadioGroupComponent;

focusRadio() {
  this.radio.focus();
}
`),wg()()()()(),nu(875,`br`),jc(876,`table`,40)(877,`tr`,22)(878,`th`,41)(879,`div`,31)(880,`h4`)(881,`span`,32),lO(882,` showAdditionalHelp `),wg()()()()(),jc(883,`tr`,30)(884,`td`,30)(885,`p`),lO(886,`Método que exibe `),jc(887,`code`),lO(888,`p-helper`),wg(),lO(889,` ou executa a ação definida em `),jc(890,`code`),lO(891,`p-helper{eventOnClick}`),wg(),lO(892,` ou em `),jc(893,`code`),lO(894,`p-additionalHelp`),wg(),lO(895,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(896,`code`),lO(897,`p-keydown`),wg(),lO(898,`.`),wg(),jc(899,`blockquote`)(900,`p`),lO(901,`Exibe ou oculta o conteúdo do componente `),jc(902,`code`),lO(903,`po-helper`),wg(),lO(904,` quando o componente estiver com foco.`),wg()(),jc(905,`pre`)(906,`code`),lO(907,`// Exemplo com p-label e p-helper
<po-radio-group
 #radioGroup
 ...
 p-label="Label do radioGroup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, radioGroup)"
></po-radio-group>
`),wg()(),jc(908,`pre`)(909,`code`),lO(910,`...
onKeyDown(event: KeyboardEvent, inp: PoRadioGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(911,`br`),jc(912,`h3`),lO(913,`Interfaces`),wg(),jc(914,`h4`,42)(915,`code`,5),lO(916,`PoRadioGroupOption`),wg()(),jc(917,`div`,2)(918,`p`),lO(919,`Interface para as ações do componente po-radio-group.`),wg()(),jc(920,`h4`,18),lO(921,`Propriedades`),wg(),jc(922,`table`,19)(923,`tr`,20)(924,`th`,21),lO(925,`Nome`),wg(),jc(926,`th`,21),lO(927,`Tipo`),wg(),jc(928,`th`,21),lO(929,`Descrição`),wg()(),jc(930,`tr`,22)(931,`td`,23)(932,`div`,31)(933,`span`,32),lO(934,` disabled`),nu(935,`br`),wg()()(),jc(936,`td`,27)(937,`code`,34),lO(938,`boolean`),wg()(),jc(939,`td`,30)(940,`em`)(941,`strong`),lO(942,`(opcional)`),wg()(),jc(943,`p`),lO(944,`Desabilita o radio.`),wg()()(),jc(945,`tr`,22)(946,`td`,23)(947,`div`,31)(948,`span`,32),lO(949,` label`),nu(950,`br`),wg()()(),jc(951,`td`,27)(952,`code`,33),lO(953,`string`),wg()(),jc(954,`td`,30)(955,`p`),lO(956,`Texto do radio.`),wg()()(),jc(957,`tr`,22)(958,`td`,23)(959,`div`,31)(960,`span`,32),lO(961,` value`),nu(962,`br`),wg()()(),jc(963,`td`,27)(964,`code`,33),lO(965,`string `),wg(),jc(966,`code`,35),lO(967,` number`),wg()(),jc(968,`td`,30)(969,`p`),lO(970,`Valor do radio.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Ne(i,Y){if(i&1){let d=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(d);let n=Fx();return __(n.changeTab(`web`))}),nu(1,`sample-po-radio-group-basic-view`)(2,`sample-po-radio-group-labs-view`)(3,`sample-po-radio-group-translator-view`)(4,`sample-po-radio-group-translator-reactive-form-view`),wg()}if(i&2){let d=Fx();UE(`p-active`,d.activeTab===`web`)}}var He=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||i)(b(ir),b(Sn))};static ɵcmp=Zn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Radio Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,n){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Ne,5,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return n.changeTab(`doc`)}),nu(4,`sample-po-radio-group-doc`),wg()()()),l&2&&(UE(`p-actions`,n.actions),rg(2),Dx(n.hidePoWebSample?-1:2),rg(),UE(`p-active`,n.activeTab===`doc`))},dependencies:[Tze,Qae,ere,Ee,Se,fe,Ce,we],encapsulation:2,changeDetection:1})}return i})()}];var _e=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=pe({type:i});static ɵinj=ue({imports:[I1.forChild(He),I1]})}return i})();var vt=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=pe({type:i});static ɵinj=ue({imports:[M,_e]})}return i})();export{vt as DocPoRadioGroupModule};