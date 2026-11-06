import{$n as Ak,Ai as XL,Ar as Ig,B as L4,Cn as oi,Ct as Yoe,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Ia as sk,Ja as vt,Li as ZO,Ln as w4,Mr as Jc,Ni as Y0,Pr as Jm,Ri as Zg,Rr as Kb,T as Gte,Ti as W0,Vi as _u,Xt as ere,Yi as eF,ba as o1,bi as Uk,ca as jk,di as RZ,ea as ge$1,er as An,fa as kZ,fi as Rb,gi as Tk,hi as TZ,ht as U4,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,rt as Qae,va as nk,wa as p,xi as VO,xt as Woe,ya as nm,yi as U_}from"./chunk-BQaN6dko.js";import{n as P,t as M}from"./main-SRPMFWZC.js";var _e=()=>({label:`Option 1`,value:`1`});var Te=()=>({label:`Option 2`,value:`2`});var Pe=(i,X)=>[i,X];var ce=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`radioGroupBasic`,`p-label`,`PO Radio Group`,3,`p-options`]],template:function(l,n){l&1&&_u(0,`po-radio-group`,0),l&2&&Rb(`p-options`,Uk(3,Pe,jk(1,_e),jk(2,Te)))},dependencies:[Gte],encapsulation:2,changeDetection:1})}return i})();var Re=i=>({"docs-sample-code-tabs":i});var ge=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Radio Group Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-radio-group-basic/sample-po-radio-group-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-radio-group
  name="radioGroupBasic"
  p-label="PO Radio Group"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-radio-group>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-radio-group-basic',
  templateUrl: './sample-po-radio-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-radio-group-basic`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Re,n.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ce],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{helperText;columns;event;help;label;option;options;properties;radioGroup;fieldErrorMessage;size;columnOptions=[{label:`1 column`,value:1},{label:`2 columns`,value:2},{label:`3 columns`,value:3},{label:`4 columns`,value:4}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`}];sizesOptions=[{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];ngOnInit(){this.restore()}addOption(){this.options.push(this.option),this.option=this.getNewOption()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.event=``,this.radioGroup=void 0,this.properties=[],this.fieldErrorMessage=``,this.size=`medium`,this.option=this.getNewOption(),this.options=[]}getNewOption(){return{label:void 0,value:void 0}}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-labs`]],standalone:!1,decls:26,vars:31,consts:[[`optionForm`,`ngForm`],[`propertiesForm`,`ngForm`],[`name`,`radioGroupLabs`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-columns`,`p-disabled`,`p-help`,`p-label`,`p-optional`,`p-options`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`optionDisabled`,`p-label`,`Option Disabled`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`columns`,`p-columns`,`4`,`p-label`,`Columns`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`click`]],template:function(l,n){if(l&1){let s=ZO();Jc(0,`po-radio-group`,2),W0(),Kb(`ngModelChange`,function(r){return U_(s),Ak(n.radioGroup,r)||(n.radioGroup=r),H_(r)}),vt(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,3),_u(3,`po-info`,4)(4,`po-info`,5),Zg(),_u(5,`po-divider`),Jc(6,`form`,null,0)(8,`div`,3)(9,`po-input`,6),W0(),Kb(`ngModelChange`,function(r){return U_(s),Ak(n.option.label,r)||(n.option.label=r),H_(r)}),Zg(),Jc(10,`po-input`,7),W0(),Kb(`ngModelChange`,function(r){return U_(s),Ak(n.option.value,r)||(n.option.value=r),H_(r)}),Zg(),Jc(11,`po-switch`,8),W0(),Kb(`ngModelChange`,function(r){return U_(s),Ak(n.option.disabled,r)||(n.option.disabled=r),H_(r)}),Zg()(),Jc(12,`div`,3)(13,`po-button`,9),vt(`p-click`,function(){U_(s);let r=sk(7);return n.addOption(),H_(r.reset())}),Zg()()(),_u(14,`po-divider`),Jc(15,`form`,null,1)(17,`po-input`,10),W0(),Kb(`ngModelChange`,function(r){return U_(s),Ak(n.label,r)||(n.label=r),H_(r)}),Zg(),Jc(18,`po-input`,11),W0(),Kb(`ngModelChange`,function(r){return U_(s),Ak(n.help,r)||(n.help=r),H_(r)}),Zg(),Jc(19,`po-input`,12),W0(),Kb(`ngModelChange`,function(r){return U_(s),Ak(n.helperText,r)||(n.helperText=r),H_(r)}),Zg(),Jc(20,`po-input`,13),W0(),Kb(`ngModelChange`,function(r){return U_(s),Ak(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),H_(r)}),Zg(),Jc(21,`po-radio-group`,14),W0(),Kb(`ngModelChange`,function(r){return U_(s),Ak(n.columns,r)||(n.columns=r),H_(r)}),Zg(),Jc(22,`po-checkbox-group`,15),W0(),Kb(`ngModelChange`,function(r){return U_(s),Ak(n.properties,r)||(n.properties=r),H_(r)}),Zg(),Jc(23,`po-radio-group`,16),W0(),Kb(`ngModelChange`,function(r){return U_(s),Ak(n.size,r)||(n.size=r),H_(r)}),Zg(),Jc(24,`div`,3)(25,`po-button`,17),vt(`click`,function(){return U_(s),sk(16).reset(),H_(n.restore())}),Zg()()()}if(l&2){let s=sk(7);Yb(`ngModel`,n.radioGroup),Rb(`p-helper`,n.helperText)(`p-columns`,n.columns)(`p-disabled`,n.properties.includes(`disabled`))(`p-help`,n.help)(`p-label`,n.label)(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-show-required`,n.properties.includes(`showRequired`))(`p-size`,n.size)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-label-text-wrap`,n.properties?.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`)),Y0(),Ig(3),Rb(`p-value`,n.radioGroup),Ig(),Rb(`p-value`,n.event),Ig(5),Yb(`ngModel`,n.option.label),Y0(),Ig(),Yb(`ngModel`,n.option.value),Y0(),Ig(),Yb(`ngModel`,n.option.disabled),Y0(),Ig(2),Rb(`p-disabled`,s.invalid),Ig(4),Yb(`ngModel`,n.label),Y0(),Ig(),Yb(`ngModel`,n.help),Y0(),Ig(),Yb(`ngModel`,n.helperText),Y0(),Ig(),Yb(`ngModel`,n.fieldErrorMessage),Y0(),Ig(),Yb(`ngModel`,n.columns),Rb(`p-options`,n.columnOptions),Y0(),Ig(),Yb(`ngModel`,n.properties),Rb(`p-options`,n.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,n.size),Rb(`p-options`,n.sizesOptions),Y0()}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,w4,U4,Gte,L4,Yoe],encapsulation:2,changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i});var he=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Radio Group Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-radio-group-labs/sample-po-radio-group-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-radio-group
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-radio-group-labs`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,De,n.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,be],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{language=`es`;original=``;translated=``;languageOptions=[{label:`Spanish`,value:`es`},{label:`English`,value:`en`}];optionsList=[{value:`1`,label:`Olá`},{value:`2`,label:`Tchau`},{value:`3`,label:`Estrangeiro`},{value:`4`,label:`Alinhamento`},{value:`5`,label:`Visão`},{value:`6`,label:`Livro`}];wordsOptions=[{id:`1`,en:`Hello`,es:`Hola`},{id:`2`,en:`Bye`,es:`Hasta luego`},{id:`3`,en:`Foreign`,es:`Extranjero`},{id:`4`,en:`Alignment`,es:`Alineación`},{id:`5`,en:`Vision`,es:`Vista`},{id:`6`,en:`Book`,es:`Libro`}];changeLanguage(d){let l=this.wordsOptions.find(n=>n.id===this.original);l&&(this.translated=l[d||this.language])}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-translator`]],standalone:!1,decls:6,vars:5,consts:[[`f`,`ngForm`],[1,`po-row`],[`name`,`language`,`p-label`,`Select a Language`,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`original`,`p-label`,`Original Text (Portuguese)`,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`translated`,`p-label`,`Translated Text`,`p-readonly`,``,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`ngModel`]],template:function(l,n){if(l&1){let s=ZO();Jc(0,`form`,null,0)(2,`div`,1)(3,`po-radio-group`,2),W0(),Kb(`ngModelChange`,function(r){return U_(s),Ak(n.language,r)||(n.language=r),H_(r)}),vt(`p-change`,function(r){return n.changeLanguage(r)}),Zg(),Jc(4,`po-select`,3),W0(),Kb(`ngModelChange`,function(r){return U_(s),Ak(n.original,r)||(n.original=r),H_(r)}),vt(`p-change`,function(r){return n.changeLanguage(r)}),Zg(),Jc(5,`po-input`,4),W0(),Kb(`ngModelChange`,function(r){return U_(s),Ak(n.translated,r)||(n.translated=r),H_(r)}),Zg()()()}l&2&&(Ig(3),Yb(`ngModel`,n.language),Rb(`p-options`,n.languageOptions),Y0(),Ig(),Yb(`ngModel`,n.original),Rb(`p-options`,n.optionsList),Y0(),Ig(),Yb(`ngModel`,n.translated),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,U4,Gte,Woe],encapsulation:2,changeDetection:1})}return i})();var ke=i=>({"docs-sample-code-tabs":i});var xe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-translator-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Radio Group - Translator`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-radio-group-translator/sample-po-radio-group-translator.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<form #f="ngForm">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-radio-group-translator`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ke,n.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Se],encapsulation:2,changeDetection:1})}return i})();var fe=(()=>{class i{formBuilder=p(kZ);translatorForm;languageOptions=[{label:`Spanish`,value:`es`},{label:`English`,value:`en`}];optionsList=[{value:`1`,label:`Olá`},{value:`2`,label:`Tchau`},{value:`3`,label:`Estrangeiro`},{value:`4`,label:`Alinhamento`},{value:`5`,label:`Visão`},{value:`6`,label:`Livro`}];wordsOptions=[{id:`1`,en:`Hello`,es:`Hola`},{id:`2`,en:`Bye`,es:`Hasta luego`},{id:`3`,en:`Foreign`,es:`Extranjero`},{id:`4`,en:`Alignment`,es:`Alineación`},{id:`5`,en:`Vision`,es:`Vista`},{id:`6`,en:`Book`,es:`Libro`}];ngOnInit(){this.translatorForm=this.formBuilder.group({language:[`es`,Jm.required],original:[void 0,Jm.required],translated:[void 0,Jm.required]})}changeLanguage(){let d=this.translatorForm.value.language,l=this.translatorForm.value.original,n=this.wordsOptions.find(s=>s.id===l);n&&this.translatorForm.patchValue({translated:n[d]})}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-translator-reactive-form`]],standalone:!1,decls:5,vars:3,consts:[[3,`formGroup`],[1,`po-row`],[`name`,`language`,`formControlName`,`language`,`p-label`,`Select a Language`,`p-required`,``,1,`po-lg-4`,3,`p-change`,`p-options`],[`name`,`original`,`formControlName`,`original`,`p-label`,`Original Text (Portuguese)`,`p-required`,``,1,`po-lg-4`,3,`p-change`,`p-options`],[`name`,`translated`,`formControlName`,`translated`,`p-label`,`Translated Text`,`p-readonly`,``,`p-required`,``,1,`po-lg-4`]],template:function(l,n){l&1&&(Jc(0,`form`,0)(1,`div`,1)(2,`po-radio-group`,2),W0(),vt(`p-change`,function(){return n.changeLanguage()}),Zg(),Jc(3,`po-select`,3),W0(),vt(`p-change`,function(){return n.changeLanguage()}),Zg(),Jc(4,`po-input`,4),W0(),Zg()()()),l&2&&(Rb(`formGroup`,n.translatorForm),Ig(2),Rb(`p-options`,n.languageOptions),Y0(),Ig(),Rb(`p-options`,n.optionsList),Y0(),Ig(),Y0())},dependencies:[NZ,TZ,RZ,XL,o1,U4,Gte,Woe],encapsulation:2,changeDetection:1})}return i})();var Be=i=>({"docs-sample-code-tabs":i});var ve=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-translator-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Radio Group - Translator Reactive Form`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<form [formGroup]="translatorForm">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-radio-group-translator-reactive-form`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Be,n.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,fe],encapsulation:2,changeDetection:1})}return i})();var Ce=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-doc`]],standalone:!1,decls:971,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-combo`],[`href`,`/documentation/po-select`],[`href`,`/documentation/po-checkbox-group`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/use-of-color`],[`href`,`https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://doc.animaliads.io/docs/components/radio`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoRadioGroupOption[]`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(l,n){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Zg(),Jc(7,`blockquote`)(8,`p`),Tk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Tk(11,`FormsModule`),Zg(),Tk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Tk(14,`ReactiveFormsModule`),Zg(),Tk(15,`, ambos nativos do Angular.`),Zg()()(),Jc(16,`h3`,3),Tk(17,`Componente`),Zg(),Jc(18,`h4`,4)(19,`code`,5),Tk(20,`PoRadioGroupComponent`),Zg()(),Jc(21,`div`,2)(22,`p`),Tk(23,`O componente `),Jc(24,`code`),Tk(25,`po-radio-group`),Zg(),Tk(26,` deve ser utilizado para disponibilizar m\xFAltiplas op\xE7\xF5es ao usu\xE1rio, permitindo a ele que
selecione apenas uma delas. Seu uso \xE9 recomendado para um n\xFAmero pequeno de op\xE7\xF5es, caso contr\xE1rio, recomenda-se o uso
do `),Jc(27,`a`,6)(28,`strong`),Tk(29,`po-combo`),Zg()(),Tk(30,` ou `),Jc(31,`a`,7)(32,`strong`),Tk(33,`po-select`),Zg()(),Tk(34,`.`),Zg(),Jc(35,`p`),Tk(36,`Este n\xE3o \xE9 um componente de multisele\xE7\xE3o, se for este o caso, deve-se utilizar o
`),Jc(37,`a`,8)(38,`strong`),Tk(39,`po-checkbox-group`),Zg()(),Tk(40,`.`),Zg(),Jc(41,`blockquote`)(42,`p`),Tk(43,`Ao passar um valor para o `),Jc(44,`em`),Tk(45,`model`),Zg(),Tk(46,` que não esteja na lista de opções, o mesmo será definido como `),Jc(47,`code`),Tk(48,`undefined`),Zg(),Tk(49,`.`),Zg()(),Jc(50,`h4`),Tk(51,`Acessibilidade tratada no componente interno `),Jc(52,`code`),Tk(53,`po-radio`),Zg(),Tk(54,`:`),Zg(),Jc(55,`p`),Tk(56,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),Zg(),Jc(57,`ul`)(58,`li`),Tk(59,`O componente foi desenvolvido utilizando controles padrões HTML para permitir a identificação do mesmo na interface por tecnologias assistivas. `),Jc(60,`a`,9),Tk(61,`WCAG 4.1.2: Name, Role, Value`),Zg()(),Jc(62,`li`),Tk(63,`A cor não deve ser o único meio para diferenciar o radio button normal do selecionado, por isso deve-se manter uma diferença visual entre os estados. `),Jc(64,`a`,10),Tk(65,`WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification`),Zg()(),Jc(66,`li`),Tk(67,`Quando em foco, o componente é ativado usando as teclas de Espaço e Enter do teclado. `),Jc(68,`a`,11),Tk(69,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),Zg()(),Jc(70,`li`),Tk(71,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Jc(72,`a`,12),Tk(73,`(WCAG 2.4.12: Focus Appearance`),Zg()()(),Jc(74,`p`),Tk(75,`Conforme documentação em: `),Jc(76,`a`,13),Tk(77,`https://doc.animaliads.io/docs/components/radio`),Zg()(),Jc(78,`h4`),Tk(79,`Tokens customizáveis`),Zg(),Jc(80,`p`),Tk(81,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),_u(82,`br`),Tk(83,`
Obs: No componente Radio Group, a customiza\xE7\xE3o ocorre principalmente nos elementos `),Jc(84,`code`),Tk(85,`po-radio`),Zg(),Tk(86,` que compõem o grupo de opções. `),_u(87,`br`),Tk(88,`
Portanto, ao aplicar estilos customizados, \xE9 importante focar na customiza\xE7\xE3o dos elementos `),Jc(89,`code`),Tk(90,`po-radio`),Zg(),Tk(91,` em vez do próprio `),Jc(92,`code`),Tk(93,`po-radio-group`),Zg(),Tk(94,`.`),Zg(),Jc(95,`blockquote`)(96,`p`),Tk(97,`Para maiores informações, acesse o guia `),Jc(98,`a`,14),Tk(99,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(100,`.`),Zg()(),Jc(101,`table`)(102,`thead`)(103,`tr`)(104,`th`),Tk(105,`Propriedade`),Zg(),Jc(106,`th`),Tk(107,`Descrição`),Zg(),Jc(108,`th`),Tk(109,`Valor Padrão`),Zg()()(),Jc(110,`tbody`)(111,`tr`)(112,`td`)(113,`strong`),Tk(114,`Default Values`),Zg()(),_u(115,`td`)(116,`td`),Zg(),Jc(117,`tr`)(118,`td`)(119,`code`),Tk(120,`--border-color`),Zg()(),Jc(121,`td`),Tk(122,`Cor da borda`),Zg(),Jc(123,`td`)(124,`code`),Tk(125,`var(--color-neutral-dark-70)`),Zg()()(),Jc(126,`tr`)(127,`td`)(128,`code`),Tk(129,`--field-container-title-justify`),Zg()(),Jc(130,`td`),Tk(131,`Alinhamento horizontal do título (`),Jc(132,`code`),Tk(133,`justify-content`),Zg(),Tk(134,`)`),Zg(),Jc(135,`td`)(136,`code`),Tk(137,`space-between`),Zg()()(),Jc(138,`tr`)(139,`td`)(140,`code`),Tk(141,`--field-container-title-flex`),Zg()(),Jc(142,`td`),Tk(143,`Flex do título (`),Jc(144,`code`),Tk(145,`flex`),Zg(),Tk(146,`)`),Zg(),Jc(147,`td`)(148,`code`),Tk(149,`1 auto`),Zg()()(),Jc(150,`tr`)(151,`td`)(152,`strong`),Tk(153,`Hover`),Zg()(),_u(154,`td`)(155,`td`),Zg(),Jc(156,`tr`)(157,`td`)(158,`code`),Tk(159,`--shadow-color-hover`),Zg()(),Jc(160,`td`),Tk(161,`Cor da sombra no estado hover`),Zg(),Jc(162,`td`)(163,`code`),Tk(164,`var(--color-brand-01-lighter)`),Zg()()(),Jc(165,`tr`)(166,`td`)(167,`code`),Tk(168,`--color-hover`),Zg()(),Jc(169,`td`),Tk(170,`Cor principal no estado hover`),Zg(),Jc(171,`td`)(172,`code`),Tk(173,`var(--color-brand-01-dark)`),Zg()()(),Jc(174,`tr`)(175,`td`)(176,`strong`),Tk(177,`Focused`),Zg()(),_u(178,`td`)(179,`td`),Zg(),Jc(180,`tr`)(181,`td`)(182,`code`),Tk(183,`--outline-color-focused`),Zg()(),Jc(184,`td`),Tk(185,`Cor do outline do estado de focus`),Zg(),Jc(186,`td`)(187,`code`),Tk(188,`var(--color-brand-01-darkest)`),Zg()()(),Jc(189,`tr`)(190,`td`)(191,`strong`),Tk(192,`checked`),Zg()(),_u(193,`td`)(194,`td`),Zg(),Jc(195,`tr`)(196,`td`)(197,`code`),Tk(198,`--color-unchecked`),Zg()(),Jc(199,`td`),Tk(200,`Cor quando não selecionado`),Zg(),Jc(201,`td`)(202,`code`),Tk(203,`var(--color-neutral-light-00)`),Zg()()(),Jc(204,`tr`)(205,`td`)(206,`code`),Tk(207,`--color-checked`),Zg()(),Jc(208,`td`),Tk(209,`Cor quando selecionado`),Zg(),Jc(210,`td`)(211,`code`),Tk(212,`var(--color-action-default)`),Zg()()(),Jc(213,`tr`)(214,`td`)(215,`strong`),Tk(216,`Disabled`),Zg()(),_u(217,`td`)(218,`td`),Zg(),Jc(219,`tr`)(220,`td`)(221,`code`),Tk(222,`--color-unchecked-disabled`),Zg()(),Jc(223,`td`),Tk(224,`Cor pricipal quando não selecionado no estado disabled`),Zg(),Jc(225,`td`)(226,`code`),Tk(227,`var(--color-neutral-light-30)`),Zg()()(),Jc(228,`tr`)(229,`td`)(230,`code`),Tk(231,`--color-checked-disabled`),Zg()(),Jc(232,`td`),Tk(233,`Cor pricipal quando selecionado no estado disabled`),Zg(),Jc(234,`td`)(235,`code`),Tk(236,`var(--color-neutral-dark-70)`),Zg()()()()()(),Jc(237,`div`,15)(238,`h4`,16),Tk(239,`Seletor`),Zg(),Jc(240,`pre`,17),Tk(241,`<po-radio-group
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
`),Zg()(),Jc(242,`h4`,18),Tk(243,`Propriedades`),Zg(),Jc(244,`table`,19)(245,`tr`,20)(246,`th`,21),Tk(247,`Nome`),Zg(),Jc(248,`th`,21),Tk(249,`Tipo`),Zg(),Jc(250,`th`,21),Tk(251,`Padrão`),Zg(),Jc(252,`th`,21),Tk(253,`Descrição`),Zg()(),Jc(254,`tr`,22)(255,`td`,23)(256,`div`,24)(257,`span`,25),Tk(258,` (p-additional-help)`),_u(259,`br`),Zg()(),Jc(260,`div`,26),Tk(261,`Deprecated`),Zg()(),Jc(262,`td`,27)(263,`code`,28),Tk(264,`EventEmitter`),Zg()(),Jc(265,`td`,29),Tk(266,`-`),Zg(),Jc(267,`td`,30)(268,`em`)(269,`strong`),Tk(270,`(opcional)`),Zg()(),Jc(271,`p`),Tk(272,`Evento disparado ao clicar no ícone de ajuda adicional.`),Zg(),Jc(273,`blockquote`)(274,`p`),Tk(275,`Essa propriedade está `),Jc(276,`strong`),Tk(277,`depreciada`),Zg(),Tk(278,` e será removida na versão `),Jc(279,`code`),Tk(280,`23.x.x`),Zg(),Tk(281,`. Recomendamos utilizar a propriedade `),Jc(282,`code`),Tk(283,`p-helper`),Zg(),Tk(284,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(285,`tr`,22)(286,`td`,23)(287,`div`,31)(288,`span`,32),Tk(289,` p-additional-help-tooltip`),_u(290,`br`),Zg()(),Jc(291,`div`,26),Tk(292,`Deprecated`),Zg()(),Jc(293,`td`,27)(294,`code`,33),Tk(295,`string`),Zg()(),Jc(296,`td`,29),Tk(297,`-`),Zg(),Jc(298,`td`,30)(299,`em`)(300,`strong`),Tk(301,`(opcional)`),Zg()(),Jc(302,`p`),Tk(303,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(304,`code`),Tk(305,`po-helper`),Zg(),Tk(306,`.
`),Jc(307,`strong`),Tk(308,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Zg()(),Jc(309,`blockquote`)(310,`p`),Tk(311,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Zg()(),Jc(312,`blockquote`)(313,`p`),Tk(314,`Essa propriedade está `),Jc(315,`strong`),Tk(316,`depreciada`),Zg(),Tk(317,` e será removida na versão `),Jc(318,`code`),Tk(319,`23.x.x`),Zg(),Tk(320,`. Recomendamos utilizar a propriedade `),Jc(321,`code`),Tk(322,`p-helper`),Zg(),Tk(323,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(324,`tr`,22)(325,`td`,23)(326,`div`,31)(327,`span`,32),Tk(328,` p-append-in-body`),_u(329,`br`),Zg()()(),Jc(330,`td`,27)(331,`code`,34),Tk(332,`boolean`),Zg()(),Jc(333,`td`,29)(334,`p`)(335,`code`),Tk(336,`false`),Zg()()(),Jc(337,`td`,30)(338,`em`)(339,`strong`),Tk(340,`(opcional)`),Zg()(),Jc(341,`p`),Tk(342,`Define que o popover (`),Jc(343,`code`),Tk(344,`p-helper`),Zg(),Tk(345,` e/ou `),Jc(346,`code`),Tk(347,`p-error-limit`),Zg(),Tk(348,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Zg(),Jc(349,`blockquote`)(350,`p`),Tk(351,`Quando utilizado com `),Jc(352,`code`),Tk(353,`p-helper`),Zg(),Tk(354,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Zg()()()(),Jc(355,`tr`,22)(356,`td`,23)(357,`div`,31)(358,`span`,32),Tk(359,` p-auto-focus`),_u(360,`br`),Zg()()(),Jc(361,`td`,27)(362,`code`,34),Tk(363,`boolean`),Zg()(),Jc(364,`td`,29)(365,`p`)(366,`code`),Tk(367,`false`),Zg()()(),Jc(368,`td`,30)(369,`em`)(370,`strong`),Tk(371,`(opcional)`),Zg()(),Jc(372,`p`),Tk(373,`Aplica foco no elemento ao ser iniciado.`),Zg(),Jc(374,`blockquote`)(375,`p`),Tk(376,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Zg()()()(),Jc(377,`tr`,22)(378,`td`,23)(379,`div`,24)(380,`span`,25),Tk(381,` (p-change)`),_u(382,`br`),Zg()()(),Jc(383,`td`,27)(384,`code`,28),Tk(385,`EventEmitter`),Zg()(),Jc(386,`td`,29),Tk(387,`-`),Zg(),Jc(388,`td`,30)(389,`em`)(390,`strong`),Tk(391,`(opcional)`),Zg()(),Jc(392,`p`),Tk(393,`Evento ao alterar valor do campo.`),Zg()()(),Jc(394,`tr`,22)(395,`td`,23)(396,`div`,24)(397,`span`,25),Tk(398,` (p-change-model)`),_u(399,`br`),Zg()()(),Jc(400,`td`,27)(401,`code`,28),Tk(402,`EventEmitter`),Zg()(),Jc(403,`td`,29),Tk(404,`-`),Zg(),Jc(405,`td`,30)(406,`em`)(407,`strong`),Tk(408,`(opcional)`),Zg()(),Jc(409,`p`),Tk(410,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(411,`code`),Tk(412,`setValue`),Zg(),Tk(413,`, `),Jc(414,`code`),Tk(415,`patchValue`),Zg(),Tk(416,`, carregamento assíncrono).`),Zg(),Jc(417,`p`),Tk(418,`Diferentemente do `),Jc(419,`code`),Tk(420,`p-change`),Zg(),Tk(421,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(422,`code`),Tk(423,`p-change-model`),Zg(),Tk(424,` cobre todos os cenários de alteração de valor.`),Zg(),Jc(425,`p`),Tk(426,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Zg()()(),Jc(427,`tr`,22)(428,`td`,23)(429,`div`,31)(430,`span`,32),Tk(431,` p-columns`),_u(432,`br`),Zg()()(),Jc(433,`td`,27)(434,`code`,35),Tk(435,`number`),Zg()(),Jc(436,`td`,29)(437,`p`)(438,`code`),Tk(439,`2`),Zg()()(),Jc(440,`td`,30)(441,`em`)(442,`strong`),Tk(443,`(opcional)`),Zg()(),Jc(444,`p`),Tk(445,`Define a quantidade de colunas para exibição das opções.`),Zg(),Jc(446,`p`)(447,`strong`),Tk(448,`Considerações:`),Zg()(),Jc(449,`ul`)(450,`li`),Tk(451,`É possível exibir as opções entre `),Jc(452,`code`),Tk(453,`1`),Zg(),Tk(454,` e `),Jc(455,`code`),Tk(456,`4`),Zg(),Tk(457,` colunas.`),Zg(),Jc(458,`li`),Tk(459,`O número máximo de colunas é invariável nas seguintes resoluções:`),Jc(460,`ul`)(461,`li`)(462,`code`),Tk(463,`sm`),Zg(),Tk(464,`: `),Jc(465,`code`),Tk(466,`1`),Zg()(),Jc(467,`li`)(468,`code`),Tk(469,`md`),Zg(),Tk(470,`: `),Jc(471,`code`),Tk(472,`2`),Zg()()()()()()(),Jc(473,`tr`,22)(474,`td`,23)(475,`div`,31)(476,`span`,32),Tk(477,` p-compact-label`),_u(478,`br`),Zg()()(),Jc(479,`td`,27)(480,`code`,34),Tk(481,`boolean`),Zg()(),Jc(482,`td`,29)(483,`p`)(484,`code`),Tk(485,`false`),Zg()()(),Jc(486,`td`,30)(487,`em`)(488,`strong`),Tk(489,`(opcional)`),Zg()(),Jc(490,`p`),Tk(491,`Define se o título do campo será exibido de forma compacta.`),Zg(),Jc(492,`p`),Tk(493,`Quando habilitado (`),Jc(494,`code`),Tk(495,`true`),Zg(),Tk(496,`), o modo compacto afeta o conjunto composto por:`),Zg(),Jc(497,`ul`)(498,`li`)(499,`code`),Tk(500,`po-label`),Zg()(),Jc(501,`li`)(502,`code`),Tk(503,`p-requirement (showRequired)`),Zg()(),Jc(504,`li`)(505,`code`),Tk(506,`po-helper`),Zg()()(),Jc(507,`p`),Tk(508,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Zg(),Jc(509,`p`),Tk(510,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Zg(),Jc(511,`ul`)(512,`li`)(513,`code`),Tk(514,`--field-container-title-justify`),Zg()(),Jc(515,`li`)(516,`code`),Tk(517,`--field-container-title-flex`),Zg()()(),Jc(518,`p`),Tk(519,`Exemplo:`),Zg(),Jc(520,`pre`)(521,`code`),Tk(522,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Zg()(),Jc(523,`p`),Tk(524,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Zg()()(),Jc(525,`tr`,22)(526,`td`,23)(527,`div`,31)(528,`span`,32),Tk(529,` p-disabled`),_u(530,`br`),Zg()()(),Jc(531,`td`,27)(532,`code`,34),Tk(533,`boolean`),Zg()(),Jc(534,`td`,29)(535,`p`)(536,`code`),Tk(537,`false`),Zg()()(),Jc(538,`td`,30)(539,`em`)(540,`strong`),Tk(541,`(opcional)`),Zg()(),Jc(542,`p`),Tk(543,`Indica que o campo será desabilitado.`),Zg()()(),Jc(544,`tr`,22)(545,`td`,23)(546,`div`,31)(547,`span`,32),Tk(548,` p-error-limit`),_u(549,`br`),Zg()()(),Jc(550,`td`,27)(551,`code`,34),Tk(552,`boolean`),Zg()(),Jc(553,`td`,29)(554,`p`)(555,`code`),Tk(556,`false`),Zg()()(),Jc(557,`td`,30)(558,`em`)(559,`strong`),Tk(560,`(opcional)`),Zg()(),Jc(561,`p`),Tk(562,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Zg(),Jc(563,`blockquote`)(564,`p`),Tk(565,`Caso essa propriedade seja definida como `),Jc(566,`code`),Tk(567,`true`),Zg(),Tk(568,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Zg()()()(),Jc(569,`tr`,22)(570,`td`,23)(571,`div`,31)(572,`span`,32),Tk(573,` p-field-error-message`),_u(574,`br`),Zg()()(),Jc(575,`td`,27)(576,`code`,33),Tk(577,`string`),Zg()(),Jc(578,`td`,29),Tk(579,`-`),Zg(),Jc(580,`td`,30)(581,`em`)(582,`strong`),Tk(583,`(opcional)`),Zg()(),Jc(584,`p`),Tk(585,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),Zg(),Jc(586,`blockquote`)(587,`p`),Tk(588,`Necessário que a propriedade `),Jc(589,`code`),Tk(590,`p-required`),Zg(),Tk(591,` esteja habilitada.`),Zg()()()(),Jc(592,`tr`,22)(593,`td`,23)(594,`div`,31)(595,`span`,32),Tk(596,` p-help`),_u(597,`br`),Zg()()(),Jc(598,`td`,27)(599,`code`,33),Tk(600,`string`),Zg()(),Jc(601,`td`,29),Tk(602,`-`),Zg(),Jc(603,`td`,30)(604,`em`)(605,`strong`),Tk(606,`(opcional)`),Zg()(),Jc(607,`p`),Tk(608,`Texto de apoio do campo.`),Zg()()(),Jc(609,`tr`,22)(610,`td`,23)(611,`div`,24)(612,`span`,25),Tk(613,` (p-keydown)`),_u(614,`br`),Zg()()(),Jc(615,`td`,27)(616,`code`,28),Tk(617,`EventEmitter`),Zg()(),Jc(618,`td`,29),Tk(619,`-`),Zg(),Jc(620,`td`,30)(621,`em`)(622,`strong`),Tk(623,`(opcional)`),Zg()(),Jc(624,`p`),Tk(625,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(626,`code`),Tk(627,`KeyboardEvent`),Zg(),Tk(628,` com informações sobre a tecla.`),Zg()()(),Jc(629,`tr`,22)(630,`td`,23)(631,`div`,31)(632,`span`,32),Tk(633,` p-label`),_u(634,`br`),Zg()()(),Jc(635,`td`,27)(636,`code`,33),Tk(637,`string`),Zg()(),Jc(638,`td`,29),Tk(639,`-`),Zg(),Jc(640,`td`,30)(641,`em`)(642,`strong`),Tk(643,`(opcional)`),Zg()(),Jc(644,`p`),Tk(645,`Label do campo.`),Zg()()(),Jc(646,`tr`,22)(647,`td`,23)(648,`div`,31)(649,`span`,32),Tk(650,` p-label-text-wrap`),_u(651,`br`),Zg()()(),Jc(652,`td`,27)(653,`code`,34),Tk(654,`boolean`),Zg()(),Jc(655,`td`,29)(656,`p`)(657,`code`),Tk(658,`false`),Zg()()(),Jc(659,`td`,30)(660,`em`)(661,`strong`),Tk(662,`(opcional)`),Zg()(),Jc(663,`p`),Tk(664,`Habilita a quebra automática do texto da propriedade `),Jc(665,`code`),Tk(666,`p-label`),Zg(),Tk(667,`. Quando `),Jc(668,`code`),Tk(669,`p-label-text-wrap`),Zg(),Tk(670,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Zg()()(),Jc(671,`tr`,22)(672,`td`,23)(673,`div`,31)(674,`span`,32),Tk(675,` name`),_u(676,`br`),Zg()()(),Jc(677,`td`,27)(678,`code`,33),Tk(679,`string`),Zg()(),Jc(680,`td`,29),Tk(681,`-`),Zg(),Jc(682,`td`,30)(683,`p`),Tk(684,`Nome das opções.`),Zg()()(),Jc(685,`tr`,22)(686,`td`,23)(687,`div`,31)(688,`span`,32),Tk(689,` p-optional`),_u(690,`br`),Zg()()(),Jc(691,`td`,27)(692,`code`,34),Tk(693,`boolean`),Zg()(),Jc(694,`td`,29)(695,`p`)(696,`code`),Tk(697,`false`),Zg()()(),Jc(698,`td`,30)(699,`em`)(700,`strong`),Tk(701,`(opcional)`),Zg()(),Jc(702,`p`),Tk(703,`Define se a indicação de campo opcional será exibida.`),Zg(),Jc(704,`blockquote`)(705,`p`),Tk(706,`Não será exibida a indicação se:`),Zg()(),Jc(707,`ul`)(708,`li`),Tk(709,`O campo conter `),Jc(710,`code`),Tk(711,`p-required`),Zg(),Tk(712,`;`),Zg(),Jc(713,`li`),Tk(714,`Não possuir `),Jc(715,`code`),Tk(716,`p-help`),Zg(),Tk(717,` e/ou `),Jc(718,`code`),Tk(719,`p-label`),Zg(),Tk(720,`.`),Zg()()()(),Jc(721,`tr`,22)(722,`td`,23)(723,`div`,31)(724,`span`,32),Tk(725,` p-options`),_u(726,`br`),Zg()()(),Jc(727,`td`,27)(728,`code`,36),Tk(729,`PoRadioGroupOption[]`),Zg()(),Jc(730,`td`,29),Tk(731,`-`),Zg(),Jc(732,`td`,30)(733,`p`),Tk(734,`Lista de op\xE7\xF5es que ser\xE3o exibidas.
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.`),Zg()()(),Jc(735,`tr`,22)(736,`td`,23)(737,`div`,31)(738,`span`,32),Tk(739,` p-helper`),_u(740,`br`),Zg()()(),Jc(741,`td`,27)(742,`code`,37),Tk(743,`PoHelperOptions `),Zg(),Jc(744,`code`,33),Tk(745,` string`),Zg()(),Jc(746,`td`,29),Tk(747,`-`),Zg(),Jc(748,`td`,30)(749,`em`)(750,`strong`),Tk(751,`(opcional)`),Zg()(),Jc(752,`p`),Tk(753,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(754,`code`),Tk(755,`p-label`),Zg(),Tk(756,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(757,`code`),Tk(758,`p-label`),Zg(),Tk(759,`.`),Zg(),Jc(760,`blockquote`)(761,`p`),Tk(762,`Para mais informações acesse: `),Jc(763,`a`,38),Tk(764,`https://po-ui.io/documentation/po-helper`),Zg(),Tk(765,`.`),Zg()(),Jc(766,`blockquote`)(767,`p`),Tk(768,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(769,`code`),Tk(770,`p-additional-help-tooltip`),Zg(),Tk(771,` e `),Jc(772,`code`),Tk(773,`p-additional-help`),Zg(),Tk(774,`) será ignorado.`),Zg()()()(),Jc(775,`tr`,22)(776,`td`,23)(777,`div`,31)(778,`span`,32),Tk(779,` p-required`),_u(780,`br`),Zg()()(),Jc(781,`td`,27)(782,`code`,34),Tk(783,`boolean`),Zg()(),Jc(784,`td`,29)(785,`p`)(786,`code`),Tk(787,`false`),Zg()()(),Jc(788,`td`,30)(789,`em`)(790,`strong`),Tk(791,`(opcional)`),Zg()(),Jc(792,`p`),Tk(793,`Define que o campo será obrigatório.`),Zg()()(),Jc(794,`tr`,22)(795,`td`,23)(796,`div`,31)(797,`span`,32),Tk(798,` p-show-required`),_u(799,`br`),Zg()()(),Jc(800,`td`,27)(801,`code`,34),Tk(802,`boolean`),Zg()(),Jc(803,`td`,29),Tk(804,`-`),Zg(),Jc(805,`td`,30)(806,`p`),Tk(807,`Define se a indicação de campo obrigatório será exibida.`),Zg(),Jc(808,`blockquote`)(809,`p`),Tk(810,`Não será exibida a indicação se:`),Zg()(),Jc(811,`ul`)(812,`li`),Tk(813,`Não possuir `),Jc(814,`code`),Tk(815,`p-help`),Zg(),Tk(816,` e/ou `),Jc(817,`code`),Tk(818,`p-label`),Zg(),Tk(819,`.`),Zg()()()(),Jc(820,`tr`,22)(821,`td`,23)(822,`div`,31)(823,`span`,32),Tk(824,` p-size`),_u(825,`br`),Zg()()(),Jc(826,`td`,27)(827,`code`,33),Tk(828,`string`),Zg()(),Jc(829,`td`,29)(830,`p`)(831,`code`),Tk(832,`medium`),Zg()()(),Jc(833,`td`,30)(834,`em`)(835,`strong`),Tk(836,`(opcional)`),Zg()(),Jc(837,`p`),Tk(838,`Define o tamanho dos radios do componente:`),Zg(),Jc(839,`ul`)(840,`li`)(841,`code`),Tk(842,`small`),Zg(),Tk(843,`: 16x16 (disponível apenas para acessibilidade AA).`),Zg(),Jc(844,`li`)(845,`code`),Tk(846,`medium`),Zg(),Tk(847,`: 24x24.`),Zg()(),Jc(848,`blockquote`)(849,`p`),Tk(850,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(851,`code`),Tk(852,`medium`),Zg(),Tk(853,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(854,`a`,39),Tk(855,`po-theme`),Zg(),Tk(856,`.`),Zg()()()()(),Jc(857,`h3`,18),Tk(858,`Métodos`),Zg(),Jc(859,`table`,40)(860,`tr`,22)(861,`th`,41)(862,`div`,31)(863,`h4`)(864,`span`,32),Tk(865,` focus `),Zg()()()()(),Jc(866,`tr`,30)(867,`td`,30)(868,`p`),Tk(869,`Função que atribui foco ao componente.`),Zg(),Jc(870,`p`),Tk(871,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Zg(),Jc(872,`pre`)(873,`code`),Tk(874,`import { PoRadioGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRadioGroupComponent, { static: true }) radio: PoRadioGroupComponent;

focusRadio() {
  this.radio.focus();
}
`),Zg()()()()(),_u(875,`br`),Jc(876,`table`,40)(877,`tr`,22)(878,`th`,41)(879,`div`,31)(880,`h4`)(881,`span`,32),Tk(882,` showAdditionalHelp `),Zg()()()()(),Jc(883,`tr`,30)(884,`td`,30)(885,`p`),Tk(886,`Método que exibe `),Jc(887,`code`),Tk(888,`p-helper`),Zg(),Tk(889,` ou executa a ação definida em `),Jc(890,`code`),Tk(891,`p-helper{eventOnClick}`),Zg(),Tk(892,` ou em `),Jc(893,`code`),Tk(894,`p-additionalHelp`),Zg(),Tk(895,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(896,`code`),Tk(897,`p-keydown`),Zg(),Tk(898,`.`),Zg(),Jc(899,`blockquote`)(900,`p`),Tk(901,`Exibe ou oculta o conteúdo do componente `),Jc(902,`code`),Tk(903,`po-helper`),Zg(),Tk(904,` quando o componente estiver com foco.`),Zg()(),Jc(905,`pre`)(906,`code`),Tk(907,`// Exemplo com p-label e p-helper
<po-radio-group
 #radioGroup
 ...
 p-label="Label do radioGroup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, radioGroup)"
></po-radio-group>
`),Zg()(),Jc(908,`pre`)(909,`code`),Tk(910,`...
onKeyDown(event: KeyboardEvent, inp: PoRadioGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Zg()()()()(),_u(911,`br`),Jc(912,`h3`),Tk(913,`Interfaces`),Zg(),Jc(914,`h4`,42)(915,`code`,5),Tk(916,`PoRadioGroupOption`),Zg()(),Jc(917,`div`,2)(918,`p`),Tk(919,`Interface para as ações do componente po-radio-group.`),Zg()(),Jc(920,`h4`,18),Tk(921,`Propriedades`),Zg(),Jc(922,`table`,19)(923,`tr`,20)(924,`th`,21),Tk(925,`Nome`),Zg(),Jc(926,`th`,21),Tk(927,`Tipo`),Zg(),Jc(928,`th`,21),Tk(929,`Descrição`),Zg()(),Jc(930,`tr`,22)(931,`td`,23)(932,`div`,31)(933,`span`,32),Tk(934,` disabled`),_u(935,`br`),Zg()()(),Jc(936,`td`,27)(937,`code`,34),Tk(938,`boolean`),Zg()(),Jc(939,`td`,30)(940,`em`)(941,`strong`),Tk(942,`(opcional)`),Zg()(),Jc(943,`p`),Tk(944,`Desabilita o radio.`),Zg()()(),Jc(945,`tr`,22)(946,`td`,23)(947,`div`,31)(948,`span`,32),Tk(949,` label`),_u(950,`br`),Zg()()(),Jc(951,`td`,27)(952,`code`,33),Tk(953,`string`),Zg()(),Jc(954,`td`,30)(955,`p`),Tk(956,`Texto do radio.`),Zg()()(),Jc(957,`tr`,22)(958,`td`,23)(959,`div`,31)(960,`span`,32),Tk(961,` value`),_u(962,`br`),Zg()()(),Jc(963,`td`,27)(964,`code`,33),Tk(965,`string `),Zg(),Jc(966,`code`,35),Tk(967,` number`),Zg()(),Jc(968,`td`,30)(969,`p`),Tk(970,`Valor do radio.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function ze(i,X){if(i&1){let d=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(d);let n=nk();return H_(n.changeTab(`web`))}),_u(1,`sample-po-radio-group-basic-view`)(2,`sample-po-radio-group-labs-view`)(3,`sample-po-radio-group-translator-view`)(4,`sample-po-radio-group-translator-reactive-form-view`),Zg()}if(i&2){let d=nk();Rb(`p-active`,d.activeTab===`web`)}}var Ne=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Radio Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,n){l&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,ze,5,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),_u(4,`sample-po-radio-group-doc`),Zg()()()),l&2&&(Rb(`p-actions`,n.actions),Ig(2),BO(n.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Tze,Qae,ere,ge,he,xe,ve,Ce],encapsulation:2,changeDetection:1})}return i})()}];var ye=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[WV.forChild(Ne),WV]})}return i})();var ft=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[M,ye]})}return i})();export{ft as DocPoRadioGroupModule};