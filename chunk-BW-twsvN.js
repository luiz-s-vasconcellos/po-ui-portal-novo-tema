import{m as P,p as M}from"./main-MOTCU2CE.js";import{$i as dF,Ar as I,At as Zte,Dr as Gk,F as Joe,G as Nf,Ii as WL,Ir as Kb,Ka as qk,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,an as ia,ar as An,bi as TZ,bn as oi,bt as Ul,ci as QP,cr as B_,da as gk,do as xo,gi as Rb,go as z0,io as vu,ji as Vk,li as Qc,na as de,oo as wg,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,tt as R4,ua as ge,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO,yr as Du}from"./chunk-DtUf9FxZ.js";var se=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-checkbox-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`checkbox`,`p-label`,`PO Checkbox`]],template:function(l,n){l&1&&vu(0,`po-checkbox`,0)},dependencies:[Ul],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i});var ue=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-checkbox-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-checkbox-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-checkbox-basic/sample-po-checkbox-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-checkbox-basic/sample-po-checkbox-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Checkbox Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-checkbox-basic/sample-po-checkbox-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-checkbox name="checkbox" p-label="PO Checkbox"> </po-checkbox>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-checkbox-basic/sample-po-checkbox-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-basic',
  templateUrl: './sample-po-checkbox-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-checkbox-basic`),Kg(),vu(25,`hr`)),l&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ve,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,se],encapsulation:2,changeDetection:1})}return i})();var he=(()=>{class i{helperText;checkbox;disabled;help;size;event;label;labelTextWrap;compactLabel;sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`},{label:`large`,value:`large`}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}restore(){this.helperText=``,this.checkbox=void 0,this.disabled=!1,this.event=void 0,this.help=``,this.label=void 0,this.size=`medium`,this.compactLabel=!1}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-checkbox-labs`]],standalone:!1,decls:19,vars:20,consts:[[`f`,`ngForm`],[`name`,`checkbox`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-help`,`p-label`,`p-size`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-sm-3`,3,`ngModelChange`,`ngModel`],[`name`,`labelTextWrap`,`p-label`,`Label Text Wrap`,1,`po-sm-3`,3,`ngModelChange`,`ngModel`],[`name`,`compactLabel`,`p-label`,`Compact Label`,1,`po-sm-3`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,n){if(l&1){let m=YO();Qc(0,`po-checkbox`,1),z0(),Kb(`ngModelChange`,function(p){return B_(m),Tk(n.checkbox,p)||(n.checkbox=p),U_(p)}),vt(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),Kg(),vu(1,`po-divider`),Qc(2,`div`,2),vu(3,`po-info`,3),Gk(4,`json`),vu(5,`po-info`,4),Kg(),vu(6,`po-divider`),Qc(7,`form`,null,0)(9,`div`,2)(10,`po-input`,5),z0(),Kb(`ngModelChange`,function(p){return B_(m),Tk(n.label,p)||(n.label=p),U_(p)}),Kg(),Qc(11,`po-input`,6),z0(),Kb(`ngModelChange`,function(p){return B_(m),Tk(n.help,p)||(n.help=p),U_(p)}),Kg(),Qc(12,`po-input`,7),z0(),Kb(`ngModelChange`,function(p){return B_(m),Tk(n.helperText,p)||(n.helperText=p),U_(p)}),Kg(),Qc(13,`po-switch`,8),z0(),Kb(`ngModelChange`,function(p){return B_(m),Tk(n.disabled,p)||(n.disabled=p),U_(p)}),Kg(),Qc(14,`po-switch`,9),z0(),Kb(`ngModelChange`,function(p){return B_(m),Tk(n.labelTextWrap,p)||(n.labelTextWrap=p),U_(p)}),Kg(),Qc(15,`po-switch`,10),z0(),Kb(`ngModelChange`,function(p){return B_(m),Tk(n.compactLabel,p)||(n.compactLabel=p),U_(p)}),Kg(),Qc(16,`po-radio-group`,11),z0(),Kb(`ngModelChange`,function(p){return B_(m),Tk(n.size,p)||(n.size=p),U_(p)}),Kg()(),Qc(17,`div`,2)(18,`po-button`,12),vt(`p-click`,function(){return n.restore()}),Kg()()()}l&2&&(Yb(`ngModel`,n.checkbox),Rb(`p-helper`,n.helperText)(`p-disabled`,n.disabled)(`p-help`,n.help)(`p-label`,n.label)(`p-size`,n.size)(`p-label-text-wrap`,n.labelTextWrap)(`p-compact-label`,n.compactLabel),W0(),wg(3),Rb(`p-value`,qk(4,18,n.checkbox)),wg(2),Rb(`p-value`,n.event),wg(5),Yb(`ngModel`,n.label),W0(),wg(),Yb(`ngModel`,n.help),W0(),wg(),Yb(`ngModel`,n.helperText),W0(),wg(),Yb(`ngModel`,n.disabled),W0(),wg(),Yb(`ngModel`,n.labelTextWrap),W0(),wg(),Yb(`ngModel`,n.compactLabel),W0(),wg(),Yb(`ngModel`,n.size),Rb(`p-options`,n.sizeOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,Ul,j4,Zte,R4,Joe,dF],encapsulation:2,changeDetection:1})}return i})();var ye=i=>({"docs-sample-code-tabs":i});var be=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-checkbox-labs-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-checkbox-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-checkbox-labs/sample-po-checkbox-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-checkbox-labs/sample-po-checkbox-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Checkbox Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-checkbox-labs/sample-po-checkbox-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-checkbox
  name="checkbox"
  [(ngModel)]="checkbox"
  [p-helper]="helperText"
  [p-disabled]="disabled"
  [p-help]="help"
  [p-label]="label"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-label-text-wrap]="labelTextWrap"
  [p-compact-label]="compactLabel"
>
</po-checkbox>

<po-divider></po-divider>

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="checkbox | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

    <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

    <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

    <po-switch class="po-sm-3" name="disabled" [(ngModel)]="disabled" p-label="Disabled"> </po-switch>
    <po-switch class="po-sm-3" name="labelTextWrap" [(ngModel)]="labelTextWrap" p-label="Label Text Wrap"> </po-switch>
    <po-switch class="po-sm-3" name="compactLabel" [(ngModel)]="compactLabel" p-label="Compact Label"> </po-switch>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-checkbox-labs/sample-po-checkbox-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PoRadioGroupOption } from '@po-ui/ng-components';
@Component({
  selector: 'sample-po-checkbox-labs',
  templateUrl: './sample-po-checkbox-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxLabsComponent implements OnInit {
  helperText: string;
  checkbox: boolean | null;
  disabled: boolean;
  help: string;
  size: string;
  event: string;
  label: string;
  labelTextWrap: boolean;
  compactLabel: boolean;

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
    { label: 'large', value: 'large' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.checkbox = undefined;
    this.disabled = false;
    this.event = undefined;
    this.help = '';
    this.label = undefined;
    this.size = 'medium';
    this.compactLabel = false;
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-checkbox-labs`),Kg(),vu(25,`hr`)),l&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ye,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,he],encapsulation:2,changeDetection:1})}return i})();var Ee=(()=>{class i{modalTerm;acceptance=!1;primaryAction={action:()=>{this.modalTerm.close()},disabled:!0,label:`Confirm`};static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-checkbox-acceptance-term`]],viewQuery:function(l,n){if(l&1&&Du(ia,7),l&2){let m;No(m=xo())&&(n.modalTerm=m.first)}},standalone:!1,decls:23,vars:2,consts:[[`modalTerm`,``],[`p-label`,`View term`,3,`p-click`],[`p-title`,`Acceptance Term`,3,`p-primary-action`],[1,`po-row`],[1,`po-sm-12`],[1,`po-font-text-large-bold`],[1,`po-row`,`po-p-1`],[`name`,`acceptance`,`p-label`,`I have read and agree to the terms of service and privacy`,3,`ngModelChange`,`p-change`,`ngModel`]],template:function(l,n){if(l&1){let m=YO();Qc(0,`po-button`,1),vt(`p-click`,function(){B_(m);let p=ik(2);return U_(p.open())}),Kg(),Qc(1,`po-modal`,2,0)(3,`div`,3)(4,`div`,4)(5,`h3`,5),Sk(6,`MIT License`),Kg()(),Qc(7,`div`,4)(8,`h4`),Sk(9,`Copyright (c) 2019 PO UI`),Kg()(),vu(10,`po-divider`,4),Qc(11,`div`,4)(12,`p`),Sk(13,` Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: `),Kg(),vu(14,`br`),Qc(15,`p`),Sk(16,` The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. `),Kg(),vu(17,`br`),Qc(18,`p`),Sk(19,` THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. `),Kg()()(),vu(20,`po-divider`),Qc(21,`div`,6)(22,`po-checkbox`,7),z0(),Kb(`ngModelChange`,function(p){return B_(m),Tk(n.acceptance,p)||(n.acceptance=p),U_(p)}),vt(`p-change`,function(){return n.primaryAction.disabled=!n.acceptance}),Kg()()()}l&2&&(wg(),Rb(`p-primary-action`,n.primaryAction),wg(21),Yb(`ngModel`,n.acceptance),W0())},dependencies:[MZ,QL,oi,Nf,Ul,ia],encapsulation:2,changeDetection:1})}return i})();var Ae=i=>({"docs-sample-code-tabs":i});var xe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-checkbox-acceptance-term-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-checkbox-acceptance-term`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Checkbox - Acceptance Term`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-button p-label="View term" (p-click)="modalTerm.open()"> </po-button>

<po-modal #modalTerm p-title="Acceptance Term" [p-primary-action]="primaryAction">
  <div class="po-row">
    <div class="po-sm-12">
      <h3 class="po-font-text-large-bold">MIT License</h3>
    </div>

    <div class="po-sm-12">
      <h4>Copyright (c) 2019 PO UI</h4>
    </div>

    <po-divider class="po-sm-12"></po-divider>

    <div class="po-sm-12">
      <p>
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
        documentation files (the "Software"), to deal in the Software without restriction, including without limitation
        the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
        to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      </p>
      <br />
      <p>
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of
        the Software.
      </p>
      <br />
      <p>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
        THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
        CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
        DEALINGS IN THE SOFTWARE.
      </p>
    </div>
  </div>

  <po-divider></po-divider>

  <div class="po-row po-p-1">
    <po-checkbox
      name="acceptance"
      [(ngModel)]="acceptance"
      p-label="I have read and agree to the terms of service and privacy"
      (p-change)="primaryAction.disabled = !acceptance"
    >
    </po-checkbox>
  </div>
</po-modal>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-acceptance-term',
  templateUrl: './sample-po-checkbox-acceptance-term.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxAcceptanceTermComponent {
  @ViewChild(PoModalComponent, { static: true }) modalTerm: PoModalComponent;

  acceptance: boolean = false;

  primaryAction: PoModalAction = {
    action: () => {
      this.modalTerm.close();
    },
    disabled: true,
    label: 'Confirm'
  };
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-checkbox-acceptance-term`),Kg(),vu(25,`hr`)),l&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ae,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ee],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-checkbox-doc`]],standalone:!1,decls:735,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-checkbox-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/use-of-color`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-auto-focus`,1,`docs-api-properties-row`],[`id`,`event-p-blur`,1,`docs-api-properties-row`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`method-focus`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`]],template:function(l,n){l&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Qc(7,`blockquote`)(8,`p`),Sk(9,`Não esqueça de importar o módulo `),Qc(10,`code`),Sk(11,`FormsModule`),Kg(),Sk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Qc(13,`code`),Sk(14,`ReactiveFormsModule`),Kg(),Sk(15,`, ambos nativos do Angular.`),Kg()()(),Qc(16,`h3`,3),Sk(17,`Componente`),Kg(),Qc(18,`h4`,4)(19,`code`,5),Sk(20,`PoCheckboxComponent`),Kg()(),Qc(21,`div`,2)(22,`p`),Sk(23,`O componente `),Qc(24,`code`),Sk(25,`po-checkbox`),Kg(),Sk(26,` exibe uma caixa de op\xE7\xE3o com um texto ao lado, na qual \xE9 poss\xEDvel marcar e desmarcar atrav\xE9s tanto
no `),Qc(27,`em`),Sk(28,`click`),Kg(),Sk(29,` do `),Qc(30,`em`),Sk(31,`mouse`),Kg(),Sk(32,` quanto por meio da tecla `),Qc(33,`em`),Sk(34,`space`),Kg(),Sk(35,` quando estiver com foco.`),Kg(),Qc(36,`p`),Sk(37,`Cada op\xE7\xE3o poder\xE1 receber um estado de marcado, desmarcado, indeterminado/mixed e desabilitado, como tamb\xE9m uma a\xE7\xE3o que ser\xE1 disparada quando
ocorrer mudan\xE7as do valor.`),Kg(),Qc(38,`blockquote`)(39,`p`),Sk(40,`O `),Qc(41,`em`),Sk(42,`model`),Kg(),Sk(43,` deste componente aceitará valores igual à `),Qc(44,`code`),Sk(45,`true`),Kg(),Sk(46,`, `),Qc(47,`code`),Sk(48,`false`),Kg(),Sk(49,` ou `),Qc(50,`code`),Sk(51,`null`),Kg(),Sk(52,` para quando for indeterminado/mixed.`),Kg()(),Qc(53,`p`)(54,`strong`),Sk(55,`Acessibilidade tratada no componente:`),Kg()(),Qc(56,`p`),Sk(57,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),Kg(),Qc(58,`ul`)(59,`li`),Sk(60,`O componente foi desenvolvido utilizando controles padrões HTML para permitir a identificação do mesmo na interface por tecnologias assistivas. `),Qc(61,`a`,6),Sk(62,`WCAG 4.1.2: Name, Role, Value`),Kg()(),Qc(63,`li`),Sk(64,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Qc(65,`a`,7),Sk(66,`WCAG 2.4.12: Focus Appearance`),Kg()(),Qc(67,`li`),Sk(68,`A cor não deve ser o único meio para diferenciar o componente do seu estado marcado e desmarcado. `),Qc(69,`a`,8),Sk(70,`WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification`),Kg()()(),Qc(71,`h4`),Sk(72,`Tokens customizáveis`),Kg(),Qc(73,`p`),Sk(74,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(75,`blockquote`)(76,`p`),Sk(77,`Para maiores informações, acesse o guia `),Qc(78,`a`,9),Sk(79,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(80,`.`),Kg()(),Qc(81,`table`)(82,`thead`)(83,`tr`)(84,`th`),Sk(85,`Propriedade`),Kg(),Qc(86,`th`),Sk(87,`Descrição`),Kg(),Qc(88,`th`),Sk(89,`Valor Padrão`),Kg()()(),Qc(90,`tbody`)(91,`tr`)(92,`td`)(93,`strong`),Sk(94,`Default Values`),Kg()(),vu(95,`td`)(96,`td`),Kg(),Qc(97,`tr`)(98,`td`)(99,`code`),Sk(100,`--border-color`),Kg()(),Qc(101,`td`),Sk(102,`Cor da borda`),Kg(),Qc(103,`td`)(104,`code`),Sk(105,`var(--color-neutral-dark-70)`),Kg()()(),Qc(106,`tr`)(107,`td`)(108,`code`),Sk(109,`--color-unchecked`),Kg()(),Qc(110,`td`),Sk(111,`Cor quando não selecionado`),Kg(),Qc(112,`td`)(113,`code`),Sk(114,`var(--color-neutral-light-00)`),Kg()()(),Qc(115,`tr`)(116,`td`)(117,`code`),Sk(118,`--color-checked`),Kg()(),Qc(119,`td`),Sk(120,`Cor quando selecionado`),Kg(),Qc(121,`td`)(122,`code`),Sk(123,`var(--color-action-default)`),Kg()()(),Qc(124,`tr`)(125,`td`)(126,`code`),Sk(127,`--field-container-title-justify`),Kg()(),Qc(128,`td`),Sk(129,`Alinhamento horizontal do título (`),Qc(130,`code`),Sk(131,`justify-content`),Kg(),Sk(132,`)`),Kg(),Qc(133,`td`)(134,`code`),Sk(135,`space-between`),Kg()()(),Qc(136,`tr`)(137,`td`)(138,`code`),Sk(139,`--field-container-title-flex`),Kg()(),Qc(140,`td`),Sk(141,`Flex do título (`),Qc(142,`code`),Sk(143,`flex`),Kg(),Sk(144,`)`),Kg(),Qc(145,`td`)(146,`code`),Sk(147,`1 auto`),Kg()()(),Qc(148,`tr`)(149,`td`)(150,`strong`),Sk(151,`Hover`),Kg()(),vu(152,`td`)(153,`td`),Kg(),Qc(154,`tr`)(155,`td`)(156,`code`),Sk(157,`--color-hover`),Kg()(),Qc(158,`td`),Sk(159,`Cor principal no estado hover`),Kg(),Qc(160,`td`)(161,`code`),Sk(162,`var(--color-action-hover)`),Kg()()(),Qc(163,`tr`)(164,`td`)(165,`code`),Sk(166,`--shadow-color-hover`),Kg()(),Qc(167,`td`),Sk(168,`Cor da sombra no estado hover`),Kg(),Qc(169,`td`)(170,`code`),Sk(171,`var(--color-brand-01-lighter)`),Kg()()(),Qc(172,`tr`)(173,`td`)(174,`strong`),Sk(175,`Focused`),Kg()(),vu(176,`td`)(177,`td`),Kg(),Qc(178,`tr`)(179,`td`)(180,`code`),Sk(181,`--outline-color-focused`),Kg()(),Qc(182,`td`),Sk(183,`Cor do outline do estado de focus`),Kg(),Qc(184,`td`)(185,`code`),Sk(186,`var(--color-action-focus)`),Kg()()(),Qc(187,`tr`)(188,`td`)(189,`strong`),Sk(190,`Disabled`),Kg()(),vu(191,`td`)(192,`td`),Kg(),Qc(193,`tr`)(194,`td`)(195,`code`),Sk(196,`--color-unchecked-disabled`),Kg(),Sk(197,` \xA0`),Kg(),Qc(198,`td`),Sk(199,`Cor pricipal quando não selecionado no estado disabled\xA0`),Kg(),Qc(200,`td`)(201,`code`),Sk(202,`var(--color-action-disabled)`),Kg()()(),Qc(203,`tr`)(204,`td`)(205,`code`),Sk(206,`--color-checked-disabled`),Kg(),Sk(207,` \xA0`),Kg(),Qc(208,`td`),Sk(209,`Cor pricipal quando selecionado no estado disabled`),Kg(),Qc(210,`td`)(211,`code`),Sk(212,`var(--color-neutral-dark-70)`),Kg()()()()()(),Qc(213,`div`,10)(214,`h4`,11),Sk(215,`Seletor`),Kg(),Qc(216,`pre`,12),Sk(217,`<po-checkbox
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-checkbox>
`),Kg()(),Qc(218,`h4`,13),Sk(219,`Propriedades`),Kg(),Qc(220,`table`,14)(221,`tr`,15)(222,`th`,16),Sk(223,`Nome`),Kg(),Qc(224,`th`,16),Sk(225,`Tipo`),Kg(),Qc(226,`th`,16),Sk(227,`Padrão`),Kg(),Qc(228,`th`,16),Sk(229,`Descrição`),Kg()(),Qc(230,`tr`,17)(231,`td`,18)(232,`div`,19)(233,`span`,20),Sk(234,` (p-additional-help)`),vu(235,`br`),Kg()(),Qc(236,`div`,21),Sk(237,`Deprecated`),Kg()(),Qc(238,`td`,22)(239,`code`,23),Sk(240,`EventEmitter`),Kg()(),Qc(241,`td`,24),Sk(242,`-`),Kg(),Qc(243,`td`,25)(244,`em`)(245,`strong`),Sk(246,`(opcional)`),Kg()(),Qc(247,`p`),Sk(248,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Qc(249,`blockquote`)(250,`p`),Sk(251,`Essa propriedade está `),Qc(252,`strong`),Sk(253,`depreciada`),Kg(),Sk(254,` e será removida na versão `),Qc(255,`code`),Sk(256,`23.x.x`),Kg(),Sk(257,`. Recomendamos utilizar a propriedade `),Qc(258,`code`),Sk(259,`p-helper`),Kg(),Sk(260,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(261,`tr`,26)(262,`td`,18)(263,`div`,27)(264,`span`,28),Sk(265,` p-additional-help-tooltip`),vu(266,`br`),Kg()(),Qc(267,`div`,21),Sk(268,`Deprecated`),Kg()(),Qc(269,`td`,22)(270,`code`,29),Sk(271,`string`),Kg()(),Qc(272,`td`,24),Sk(273,`-`),Kg(),Qc(274,`td`,25)(275,`em`)(276,`strong`),Sk(277,`(opcional)`),Kg()(),Qc(278,`p`),Sk(279,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Qc(280,`code`),Sk(281,`po-helper`),Kg(),Sk(282,`.
`),Qc(283,`strong`),Sk(284,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Qc(285,`blockquote`)(286,`p`),Sk(287,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Qc(288,`blockquote`)(289,`p`),Sk(290,`Essa propriedade está `),Qc(291,`strong`),Sk(292,`depreciada`),Kg(),Sk(293,` e será removida na versão `),Qc(294,`code`),Sk(295,`23.x.x`),Kg(),Sk(296,`. Recomendamos utilizar a propriedade `),Qc(297,`code`),Sk(298,`p-helper`),Kg(),Sk(299,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(300,`tr`,30)(301,`td`,18)(302,`div`,27)(303,`span`,28),Sk(304,` p-append-in-body`),vu(305,`br`),Kg()()(),Qc(306,`td`,22)(307,`code`,31),Sk(308,`boolean`),Kg()(),Qc(309,`td`,24)(310,`p`)(311,`code`),Sk(312,`false`),Kg()()(),Qc(313,`td`,25)(314,`em`)(315,`strong`),Sk(316,`(opcional)`),Kg()(),Qc(317,`p`),Sk(318,`Define que o popover (`),Qc(319,`code`),Sk(320,`p-helper`),Kg(),Sk(321,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Kg(),Qc(322,`blockquote`)(323,`p`),Sk(324,`Quando utilizado com `),Qc(325,`code`),Sk(326,`p-helper`),Kg(),Sk(327,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Qc(328,`tr`,32)(329,`td`,18)(330,`div`,27)(331,`span`,28),Sk(332,` p-auto-focus`),vu(333,`br`),Kg()()(),Qc(334,`td`,22)(335,`code`,31),Sk(336,`boolean`),Kg()(),Qc(337,`td`,24)(338,`p`)(339,`code`),Sk(340,`false`),Kg()()(),Qc(341,`td`,25)(342,`em`)(343,`strong`),Sk(344,`(opcional)`),Kg()(),Qc(345,`p`),Sk(346,`Aplica foco no elemento ao ser iniciado.`),Kg(),Qc(347,`blockquote`)(348,`p`),Sk(349,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Kg()()()(),Qc(350,`tr`,33)(351,`td`,18)(352,`div`,19)(353,`span`,20),Sk(354,` (p-blur)`),vu(355,`br`),Kg()()(),Qc(356,`td`,22)(357,`code`,23),Sk(358,`EventEmitter`),Kg()(),Qc(359,`td`,24),Sk(360,`-`),Kg(),Qc(361,`td`,25)(362,`em`)(363,`strong`),Sk(364,`(opcional)`),Kg()(),Qc(365,`p`),Sk(366,`Evento disparado ao sair do campo.`),Kg()()(),Qc(367,`tr`,34)(368,`td`,18)(369,`div`,19)(370,`span`,20),Sk(371,` (p-change)`),vu(372,`br`),Kg()()(),Qc(373,`td`,22)(374,`code`,23),Sk(375,`EventEmitter`),Kg()(),Qc(376,`td`,24),Sk(377,`-`),Kg(),Qc(378,`td`,25)(379,`em`)(380,`strong`),Sk(381,`(opcional)`),Kg()(),Qc(382,`p`),Sk(383,`Evento disparado quando o valor do `),Qc(384,`em`),Sk(385,`checkbox`),Kg(),Sk(386,` for alterado.`),Kg()()(),Qc(387,`tr`,35)(388,`td`,18)(389,`div`,19)(390,`span`,20),Sk(391,` (p-change-model)`),vu(392,`br`),Kg()()(),Qc(393,`td`,22)(394,`code`,23),Sk(395,`EventEmitter`),Kg()(),Qc(396,`td`,24),Sk(397,`-`),Kg(),Qc(398,`td`,25)(399,`em`)(400,`strong`),Sk(401,`(opcional)`),Kg()(),Qc(402,`p`),Sk(403,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Qc(404,`code`),Sk(405,`setValue`),Kg(),Sk(406,`, `),Qc(407,`code`),Sk(408,`patchValue`),Kg(),Sk(409,`, carregamento assíncrono).`),Kg(),Qc(410,`p`),Sk(411,`Diferentemente do `),Qc(412,`code`),Sk(413,`p-change`),Kg(),Sk(414,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Qc(415,`code`),Sk(416,`p-change-model`),Kg(),Sk(417,` cobre todos os cenários de alteração de valor.`),Kg(),Qc(418,`p`),Sk(419,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Qc(420,`tr`,36)(421,`td`,18)(422,`div`,27)(423,`span`,28),Sk(424,` p-compact-label`),vu(425,`br`),Kg()()(),Qc(426,`td`,22)(427,`code`,31),Sk(428,`boolean`),Kg()(),Qc(429,`td`,24)(430,`p`)(431,`code`),Sk(432,`false`),Kg()()(),Qc(433,`td`,25)(434,`em`)(435,`strong`),Sk(436,`(opcional)`),Kg()(),Qc(437,`p`),Sk(438,`Define se o título do campo será exibido de forma compacta.`),Kg(),Qc(439,`p`),Sk(440,`Quando habilitado (`),Qc(441,`code`),Sk(442,`true`),Kg(),Sk(443,`), o modo compacto afeta o conjunto composto por:`),Kg(),Qc(444,`ul`)(445,`li`)(446,`code`),Sk(447,`po-label`),Kg()(),Qc(448,`li`)(449,`code`),Sk(450,`p-requirement (showRequired)`),Kg()(),Qc(451,`li`)(452,`code`),Sk(453,`po-helper`),Kg()()(),Qc(454,`p`),Sk(455,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Qc(456,`p`),Sk(457,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Qc(458,`ul`)(459,`li`)(460,`code`),Sk(461,`--field-container-title-justify`),Kg()(),Qc(462,`li`)(463,`code`),Sk(464,`--field-container-title-flex`),Kg()()(),Qc(465,`p`),Sk(466,`Exemplo:`),Kg(),Qc(467,`pre`)(468,`code`),Sk(469,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Qc(470,`p`),Sk(471,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Qc(472,`tr`,37)(473,`td`,18)(474,`div`,27)(475,`span`,28),Sk(476,` p-disabled`),vu(477,`br`),Kg()()(),Qc(478,`td`,22)(479,`code`,31),Sk(480,`boolean`),Kg()(),Qc(481,`td`,24)(482,`p`)(483,`code`),Sk(484,`false`),Kg()()(),Qc(485,`td`,25)(486,`em`)(487,`strong`),Sk(488,`(opcional)`),Kg()(),Qc(489,`p`),Sk(490,`Define o estado do `),Qc(491,`em`),Sk(492,`checkbox`),Kg(),Sk(493,` como desabilitado.`),Kg()()(),Qc(494,`tr`,38)(495,`td`,18)(496,`div`,27)(497,`span`,28),Sk(498,` p-help`),vu(499,`br`),Kg()()(),Qc(500,`td`,22)(501,`code`,29),Sk(502,`string`),Kg()(),Qc(503,`td`,24),Sk(504,`-`),Kg(),Qc(505,`td`,25)(506,`em`)(507,`strong`),Sk(508,`(opcional)`),Kg()(),Qc(509,`p`),Sk(510,`Texto de apoio do campo`),Kg()()(),Qc(511,`tr`,39)(512,`td`,18)(513,`div`,19)(514,`span`,20),Sk(515,` (p-keydown)`),vu(516,`br`),Kg()()(),Qc(517,`td`,22)(518,`code`,23),Sk(519,`EventEmitter`),Kg()(),Qc(520,`td`,24),Sk(521,`-`),Kg(),Qc(522,`td`,25)(523,`em`)(524,`strong`),Sk(525,`(opcional)`),Kg()(),Qc(526,`p`),Sk(527,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Qc(528,`code`),Sk(529,`KeyboardEvent`),Kg(),Sk(530,` com informações sobre a tecla.`),Kg()()(),Qc(531,`tr`,40)(532,`td`,18)(533,`div`,27)(534,`span`,28),Sk(535,` p-label`),vu(536,`br`),Kg()()(),Qc(537,`td`,22)(538,`code`,29),Sk(539,`string`),Kg()(),Qc(540,`td`,24),Sk(541,`-`),Kg(),Qc(542,`td`,25)(543,`em`)(544,`strong`),Sk(545,`(opcional)`),Kg()(),Qc(546,`p`),Sk(547,`Texto de exibição do `),Qc(548,`em`),Sk(549,`checkbox`),Kg(),Sk(550,`.`),Kg()()(),Qc(551,`tr`,41)(552,`td`,18)(553,`div`,27)(554,`span`,28),Sk(555,` p-label-text-wrap`),vu(556,`br`),Kg()()(),Qc(557,`td`,22)(558,`code`,31),Sk(559,`boolean`),Kg()(),Qc(560,`td`,24)(561,`p`)(562,`code`),Sk(563,`false`),Kg()()(),Qc(564,`td`,25)(565,`em`)(566,`strong`),Sk(567,`(opcional)`),Kg()(),Qc(568,`p`),Sk(569,`Habilita a quebra automática do texto da propriedade `),Qc(570,`code`),Sk(571,`p-label`),Kg(),Sk(572,`. Quando `),Qc(573,`code`),Sk(574,`p-label-text-wrap`),Kg(),Sk(575,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Qc(576,`tr`,42)(577,`td`,18)(578,`div`,27)(579,`span`,28),Sk(580,` name`),vu(581,`br`),Kg()()(),Qc(582,`td`,22)(583,`code`,29),Sk(584,`string`),Kg()(),Qc(585,`td`,24),Sk(586,`-`),Kg(),Qc(587,`td`,25)(588,`p`),Sk(589,`Define o nome do `),Qc(590,`em`),Sk(591,`checkbox`),Kg(),Sk(592,`.`),Kg()()(),Qc(593,`tr`,43)(594,`td`,18)(595,`div`,27)(596,`span`,28),Sk(597,` p-helper`),vu(598,`br`),Kg()()(),Qc(599,`td`,22)(600,`code`,44),Sk(601,`PoHelperOptions `),Kg(),Qc(602,`code`,29),Sk(603,` string`),Kg()(),Qc(604,`td`,24),Sk(605,`-`),Kg(),Qc(606,`td`,25)(607,`em`)(608,`strong`),Sk(609,`(opcional)`),Kg()(),Qc(610,`p`),Sk(611,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Qc(612,`code`),Sk(613,`p-label`),Kg(),Sk(614,` for definida, ou, ao lado do componente na ausência da propriedade `),Qc(615,`code`),Sk(616,`p-label`),Kg(),Sk(617,`.`),Kg(),Qc(618,`blockquote`)(619,`p`),Sk(620,`Para mais informações acesse: `),Qc(621,`a`,45),Sk(622,`https://po-ui.io/documentation/po-helper`),Kg(),Sk(623,`.`),Kg()(),Qc(624,`blockquote`)(625,`p`),Sk(626,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Qc(627,`code`),Sk(628,`p-additional-help-tooltip`),Kg(),Sk(629,` e `),Qc(630,`code`),Sk(631,`p-additional-help`),Kg(),Sk(632,`) será ignorado.`),Kg()()()(),Qc(633,`tr`,46)(634,`td`,18)(635,`div`,27)(636,`span`,28),Sk(637,` p-size`),vu(638,`br`),Kg()()(),Qc(639,`td`,22)(640,`code`,29),Sk(641,`string`),Kg()(),Qc(642,`td`,24)(643,`p`)(644,`code`),Sk(645,`medium`),Kg()()(),Qc(646,`td`,25)(647,`em`)(648,`strong`),Sk(649,`(opcional)`),Kg()(),Qc(650,`p`),Sk(651,`Define o tamanho da caixa de seleção do componente:`),Kg(),Qc(652,`ul`)(653,`li`)(654,`code`),Sk(655,`small`),Kg(),Sk(656,`: 16x16 (disponível apenas para acessibilidade AA).`),Kg(),Qc(657,`li`)(658,`code`),Sk(659,`medium`),Kg(),Sk(660,`: 24x24.`),Kg(),Qc(661,`li`)(662,`code`),Sk(663,`large`),Kg(),Sk(664,`: 32x32.`),Kg()(),Qc(665,`blockquote`)(666,`p`),Sk(667,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(668,`code`),Sk(669,`medium`),Kg(),Sk(670,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(671,`a`,47),Sk(672,`po-theme`),Kg(),Sk(673,`.`),Kg()()()()(),Qc(674,`h3`,13),Sk(675,`Métodos`),Kg(),Qc(676,`table`,48)(677,`tr`,49)(678,`th`,50)(679,`div`,27)(680,`h4`)(681,`span`,28),Sk(682,` focus `),Kg()()()()(),Qc(683,`tr`,25)(684,`td`,25)(685,`p`),Sk(686,`Função que atribui foco ao `),Qc(687,`em`),Sk(688,`checkbox`),Kg(),Sk(689,`.`),Kg(),Qc(690,`p`),Sk(691,`Para utilizá-la é necessário capturar a referência do componente no DOM através do `),Qc(692,`code`),Sk(693,`ViewChild`),Kg(),Sk(694,`, como por exemplo:`),Kg(),Qc(695,`pre`)(696,`code`),Sk(697,`...
import { ViewChild } from '@angular/core';
import { PoCheckboxComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxComponent, { static: true }) checkbox: PoCheckboxComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),Kg()()()()(),vu(698,`br`),Qc(699,`table`,51)(700,`tr`,49)(701,`th`,50)(702,`div`,27)(703,`h4`)(704,`span`,28),Sk(705,` showAdditionalHelp `),Kg()()()()(),Qc(706,`tr`,25)(707,`td`,25)(708,`p`),Sk(709,`Método que exibe `),Qc(710,`code`),Sk(711,`p-helper`),Kg(),Sk(712,` ou executa a ação definida em `),Qc(713,`code`),Sk(714,`p-helper{eventOnClick}`),Kg(),Sk(715,` ou em `),Qc(716,`code`),Sk(717,`p-additionalHelp`),Kg(),Sk(718,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Qc(719,`code`),Sk(720,`p-keydown`),Kg(),Sk(721,`.`),Kg(),Qc(722,`blockquote`)(723,`p`),Sk(724,`Exibe ou oculta o conteúdo do componente `),Qc(725,`code`),Sk(726,`po-helper`),Kg(),Sk(727,` quando o componente estiver com foco.`),Kg()(),Qc(728,`pre`)(729,`code`),Sk(730,`//Exemplo com label e p-helper
<po-checkbox
 #checkbox
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkbox)"
></po-checkbox>
`),Kg()(),Qc(731,`pre`)(732,`code`),Sk(733,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),vu(734,`br`),Kg())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Oe(i,Le){if(i&1){let r=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(r);let n=ek();return U_(n.changeTab(`web`))}),vu(1,`sample-po-checkbox-basic-view`)(2,`sample-po-checkbox-labs-view`)(3,`sample-po-checkbox-acceptance-term-view`),Kg()}if(i&2){let r=ek();Rb(`p-active`,r.activeTab===`web`)}}var Ie=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Checkbox`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,n){l&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Oe,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),vu(4,`sample-po-checkbox-doc`),Kg()()()),l&2&&(Rb(`p-actions`,n.actions),wg(2),VO(n.hidePoWebSample?-1:2),wg(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Mze,tre,are,ue,be,xe,Se],encapsulation:2,changeDetection:1})}return i})()}];var Ce=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=ge({type:i});static ɵinj=de({imports:[GV.forChild(Ie),GV]})}return i})();var dt=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=ge({type:i});static ɵinj=de({imports:[M,Ce]})}return i})();export{dt as DocPoCheckboxModule};