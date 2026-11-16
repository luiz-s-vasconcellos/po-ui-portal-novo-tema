import{m as P,p as M}from"./main-5ZHUK4IE.js";import{$i as dF,Ar as I,At as Zte,Dr as Gk,F as Joe,G as Nf,Ga as qI,Hr as Lk,Ii as WL,Ir as Kb,It as bae,Ka as qk,Ki as Z,L as Koe,Lr as Kg,Mn as ta,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,an as ia,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,gi as Rb,go as z0,ht as Tt,io as vu,j as I4,ji as Vk,kt as Zoe,li as Qc,lr as Be$1,na as de,oo as wg,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,ua as ge,va as ik,vi as Sk,wr as GV,xi as Tk,xn as p5,xr as FO,yr as Du}from"./chunk-DtUf9FxZ.js";import{t as r}from"./chunk-zystk1pz.js";var Ve=[`target`];var qe=()=>({label:`PO Popup`});var Re=l=>[l];var Pe=(()=>{class l{cdr=p(Be$1);targetRef;ngAfterViewInit(){this.cdr.detectChanges()}static ɵfac=function(i){return new(i||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-popup-basic`]],viewQuery:function(i,o){if(i&1&&Du(Ve,5,Z),i&2){let r;No(r=xo())&&(o.targetRef=r.first)}},standalone:!1,decls:4,vars:5,consts:[[`target`,``],[`popup`,``],[`p-icon`,`an an-question`,1,`po-clickable`,3,`click`],[3,`p-actions`,`p-target`]],template:function(i,o){if(i&1){let r=YO();Qc(0,`po-icon`,2,0),vt(`click`,function(){B_(r);let a=ik(3);return U_(a.toggle())}),Kg(),vu(2,`po-popup`,3,1)}i&2&&(wg(2),Rb(`p-actions`,Vk(3,Re,Lk(2,qe)))(`p-target`,o.targetRef))},dependencies:[Tt,ta],encapsulation:2,changeDetection:1})}return l})();var Be=l=>({"docs-sample-code-tabs":l});var ye=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-popup-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-popup-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Popup - Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-popup-basic/sample-po-popup-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-icon p-icon="an an-question" #target class="po-clickable" (click)="popup.toggle()"> </po-icon>
<po-popup #popup [p-actions]="[{ label: 'PO Popup' }]" [p-target]="targetRef"> </po-popup>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-popup-basic/sample-po-popup-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  inject,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'sample-po-popup-basic',
  templateUrl: './sample-po-popup-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopupBasicComponent implements AfterViewInit {
  private cdr = inject(ChangeDetectorRef);

  @ViewChild('target', { read: ElementRef }) targetRef: ElementRef;

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-popup-basic`),Kg(),vu(23,`hr`)),i&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Be,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Pe],encapsulation:2,changeDetection:1})}return l})();var We=[`target`];var we=(()=>{class l{poNotification=p(Ru);targetRef;action;actions;customPositions;event;infoValue;parentList;position;positions;properties;size;actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{label:`fa fa-address-card`,value:`fa fa-address-card`},{label:`fa fa-bell`,value:`fa fa-bell`}];positionOptions=[{label:`Right`,value:`right`},{label:`Right-top`,value:`right-top`},{label:`Right-bottom`,value:`right-bottom`},{label:`Bottom`,value:`bottom`},{label:`Bottom-left`,value:`bottom-left`},{label:`Bottom-right`,value:`bottom-right`},{label:`Left`,value:`left`},{label:`Left-top`,value:`left-top`},{label:`Left-bottom`,value:`left-bottom`},{label:`Top`,value:`top`},{label:`Top-left`,value:`top-left`},{label:`Top-right`,value:`top-right`}];propertiesOptions=[{value:`hideArrow`,label:`Hide arrow`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(m){let i=r({},m);if(i.action=i.action?this.showAction.bind(this,i.action):void 0,!m.parent)this.actions=[...this.actions,i];else{let o=this.getActionNode(this.actions,m.parent);o?o.subItems=[...o.subItems||[],i]:this.actions=[...this.actions,i]}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm()}convertToArray(){this.customPositions=this.positions&&this.positions.length?JSON.parse(this.positions):void 0}changeEvent(m,i){this.event=m,this.infoValue=i}restore(){this.actions=[],this.customPositions=[],this.event=``,this.infoValue=``,this.parentList=[],this.position=void 0,this.positions=``,this.properties=[],this.size=`medium`,this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0}}getActionNode(m,i){if(!(!m||!Array.isArray(m)||!i))for(let o of m){if(o.label===i||o.value===i)return o;if(o.subItems&&Array.isArray(o.subItems)){let r=this.getActionNode(o.subItems,i);if(r)return r}}}updateParentList(m,i=0,o=[]){return!m||!Array.isArray(m)||m.forEach(r=>{let{label:c}=r;o.push({label:`${`-`.repeat(i)} ${c}`,value:c}),r.subItems&&Array.isArray(r.subItems)&&this.updateParentList(r.subItems,i+1,o)}),o}showAction(m){this.poNotification.success(`Action clicked: ${m}`)}static ɵfac=function(i){return new(i||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-popup-labs`]],viewQuery:function(i,o){if(i&1&&Du(We,7,Z),i&2){let r;No(r=xo())&&(o.targetRef=r.first)}},standalone:!1,decls:33,vars:29,consts:[[`popup`,``],[`target`,``],[`formAction`,`ngForm`],[`f`,`ngForm`],[3,`p-click-item`,`p-actions`,`p-custom-positions`,`p-hide-arrow`,`p-position`,`p-size`,`p-target`],[1,`po-row`,`sample-button-container`],[1,`po-offset-xl-5`,`po-offset-lg-5`,`po-md-2`,`po-lg-2`],[`p-label`,`Popup`,3,`p-click`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-label`,`Clicked item`,1,`po-md-6`,3,`p-value`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`parent`,`p-label`,`Subitems`,`p-placeholder`,`Add subitems`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`customPositions`,`p-help`,`["top", "left", "right-bottom"]`,`p-label`,`Custom positions`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`position`,`p-label`,`Position`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(i,o){if(i&1){let r=YO();Qc(0,`po-popup`,4,0),vt(`p-click-item`,function(a){return o.changeEvent(`p-click-item`,a)}),Kg(),Qc(2,`div`,5)(3,`div`,6)(4,`po-button`,7,1),vt(`p-click`,function(){B_(r);let a=ik(1);return U_(a.toggle())}),Kg()()(),vu(6,`po-divider`),Qc(7,`div`,8),vu(8,`po-info`,9)(9,`po-info`,10),Gk(10,`json`),Kg(),vu(11,`po-divider`),Qc(12,`form`,null,2)(14,`po-input`,11),z0(),Kb(`ngModelChange`,function(a){return B_(r),Tk(o.action.label,a)||(o.action.label=a),U_(a)}),Kg(),Qc(15,`po-input`,12),z0(),Kb(`ngModelChange`,function(a){return B_(r),Tk(o.action.action,a)||(o.action.action=a),U_(a)}),Kg(),Qc(16,`po-input`,13),z0(),Kb(`ngModelChange`,function(a){return B_(r),Tk(o.action.url,a)||(o.action.url=a),U_(a)}),Kg(),Qc(17,`po-select`,14),z0(),Kb(`ngModelChange`,function(a){return B_(r),Tk(o.action.type,a)||(o.action.type=a),U_(a)}),Kg(),Qc(18,`po-select`,15),z0(),Kb(`ngModelChange`,function(a){return B_(r),Tk(o.action.icon,a)||(o.action.icon=a),U_(a)}),Kg(),Qc(19,`po-select`,16),z0(),Kb(`ngModelChange`,function(a){return B_(r),Tk(o.action.parent,a)||(o.action.parent=a),U_(a)}),Kg(),Qc(20,`po-checkbox-group`,17),z0(),Kb(`ngModelChange`,function(a){return B_(r),Tk(o.action,a)||(o.action=a),U_(a)}),Kg(),Qc(21,`div`,8)(22,`po-button`,18),vt(`p-click`,function(){return o.addAction(o.action)}),Kg()()(),vu(23,`po-divider`),Qc(24,`form`,null,3)(26,`div`,8)(27,`po-input`,19),z0(),Kb(`ngModelChange`,function(a){return B_(r),Tk(o.positions,a)||(o.positions=a),U_(a)}),vt(`p-change`,function(){return o.convertToArray()}),Kg(),Qc(28,`po-select`,20),z0(),Kb(`ngModelChange`,function(a){return B_(r),Tk(o.position,a)||(o.position=a),U_(a)}),Kg(),Qc(29,`po-checkbox-group`,21),z0(),Kb(`ngModelChange`,function(a){return B_(r),Tk(o.properties,a)||(o.properties=a),U_(a)}),Kg(),Qc(30,`po-radio-group`,22),z0(),Kb(`ngModelChange`,function(a){return B_(r),Tk(o.size,a)||(o.size=a),U_(a)}),Kg()(),Qc(31,`div`,8)(32,`po-button`,23),vt(`p-click`,function(){B_(r);let a=ik(13);return ik(25).reset(),a.reset(),U_(o.restore())}),Kg()()()}if(i&2){let r=ik(13);Rb(`p-actions`,o.actions)(`p-custom-positions`,o.customPositions)(`p-hide-arrow`,o.properties.includes(`hideArrow`))(`p-position`,o.position)(`p-size`,o.size)(`p-target`,o.targetRef),wg(8),Rb(`p-value`,o.event),wg(),Rb(`p-value`,qk(10,27,o.infoValue)),wg(5),Yb(`ngModel`,o.action.label),W0(),wg(),Yb(`ngModel`,o.action.action),W0(),wg(),Yb(`ngModel`,o.action.url),W0(),wg(),Yb(`ngModel`,o.action.type),Rb(`p-options`,o.typeOptions),W0(),wg(),Yb(`ngModel`,o.action.icon),Rb(`p-options`,o.iconOptions),W0(),wg(),Yb(`ngModel`,o.action.parent),Rb(`p-options`,o.parentList),W0(),wg(),Yb(`ngModel`,o.action),Rb(`p-options`,o.actionOptions),W0(),wg(2),Rb(`p-disabled`,r.form.invalid),wg(5),Yb(`ngModel`,o.positions),W0(),wg(),Yb(`ngModel`,o.position),Rb(`p-options`,o.positionOptions),W0(),wg(),Yb(`ngModel`,o.properties),Rb(`p-options`,o.propertiesOptions),W0(),wg(),Yb(`ngModel`,o.size),Rb(`p-options`,o.sizeOptions),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Zte,Koe,Joe,ta,dF],styles:[`.sample-button-container[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}`],changeDetection:1})}return l})();var Ne=l=>({"docs-sample-code-tabs":l});var _e=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-popup-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[`id`,`sample-po-popup-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Popup - Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-popup-labs/sample-po-popup-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-popup
  #popup
  [p-actions]="actions"
  [p-custom-positions]="customPositions"
  [p-hide-arrow]="properties.includes('hideArrow')"
  [p-position]="position"
  [p-size]="size"
  [p-target]="targetRef"
  (p-click-item)="changeEvent('p-click-item', $event)"
>
</po-popup>

<div class="po-row sample-button-container">
  <div class="po-offset-xl-5 po-offset-lg-5 po-md-2 po-lg-2">
    <po-button #target p-label="Popup" (p-click)="popup.toggle()"> </po-button>
  </div>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
  <po-info class="po-md-6" p-label="Clicked item" [p-value]="infoValue | json"> </po-info>
</div>

<po-divider />

<form #formAction="ngForm">
  <po-input class="po-md-6 po-lg-4" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required>
  </po-input>

  <po-input class="po-md-6 po-lg-4" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action">
  </po-input>

  <po-input class="po-md-6 po-lg-4" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

  <po-select class="po-md-6 po-lg-4" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
  </po-select>

  <po-select class="po-md-6 po-lg-4" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
  </po-select>

  <po-select
    class="po-md-6 po-lg-4"
    name="parent"
    [(ngModel)]="action.parent"
    p-label="Subitems"
    p-placeholder="Add subitems"
    [p-options]="parentList"
  >
  </po-select>

  <po-checkbox-group
    class="po-md-12"
    name="action"
    [(ngModel)]="action"
    p-columns="4"
    p-indeterminate
    p-label="Action properties"
    [p-options]="actionOptions"
  >
  </po-checkbox-group>

  <div class="po-row">
    <po-button
      class="po-lg-2 po-md-4"
      p-label="Add Action"
      [p-disabled]="formAction.form.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="customPositions"
      [(ngModel)]="positions"
      p-help='["top", "left", "right-bottom"]'
      p-label="Custom positions"
      (p-change)="convertToArray()"
    >
    </po-input>

    <po-select
      class="po-md-6 po-lg-3"
      name="position"
      [(ngModel)]="position"
      p-label="Position"
      [p-options]="positionOptions"
    >
    </po-select>

    <po-checkbox-group
      class="po-md-12 po-lg-3"
      name="properties"
      [(ngModel)]="properties"
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
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); formAction.reset(); restore()">
    </po-button>
  </div>
</form>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-popup-labs/sample-po-popup-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ElementRef, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoNotificationService,
  PoPopupAction,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popup-labs',
  templateUrl: './sample-po-popup-labs.component.html',
  styleUrls: ['./sample-po-popup-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopupLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  @ViewChild('target', { read: ElementRef, static: true }) targetRef: ElementRef;

  action: PoPopupAction & { parent?: string };
  actions: Array<PoPopupAction>;
  customPositions: Array<string>;
  event: string;
  infoValue: any;
  parentList: Array<PoSelectOption>;
  position: string;
  positions: string;
  properties: Array<string>;
  size: string;

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { label: 'fa fa-address-card', value: 'fa fa-address-card' },
    { label: 'fa fa-bell', value: 'fa fa-bell' }
  ];

  public readonly positionOptions: Array<PoSelectOption> = [
    { label: 'Right', value: 'right' },
    { label: 'Right-top', value: 'right-top' },
    { label: 'Right-bottom', value: 'right-bottom' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom-left', value: 'bottom-left' },
    { label: 'Bottom-right', value: 'bottom-right' },
    { label: 'Left', value: 'left' },
    { label: 'Left-top', value: 'left-top' },
    { label: 'Left-bottom', value: 'left-bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Top-left', value: 'top-left' },
    { label: 'Top-right', value: 'top-right' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'hideArrow', label: 'Hide arrow' }];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoPopupAction & { parent?: string }) {
    const newAction: PoPopupAction = { ...action };
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;

    if (!action.parent) {
      this.actions = [...this.actions, newAction];
    } else {
      const parentNode = this.getActionNode(this.actions, action.parent);
      if (parentNode) {
        parentNode.subItems = [...(parentNode.subItems || []), newAction];
      } else {
        this.actions = [...this.actions, newAction];
      }
    }

    this.actions = [].concat(this.actions);
    this.parentList = this.updateParentList(this.actions);

    this.restoreActionForm();
  }

  convertToArray() {
    this.customPositions = this.positions && this.positions.length ? JSON.parse(this.positions) : undefined;
  }

  changeEvent(type: string, event?: any) {
    this.event = type;
    this.infoValue = event;
  }

  restore() {
    this.actions = [];
    this.customPositions = [];
    this.event = '';
    this.infoValue = '';
    this.parentList = [];
    this.position = undefined;
    this.positions = '';
    this.properties = [];
    this.size = 'medium';
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null,
      parent: undefined
    };
  }

  private getActionNode(items: Array<PoPopupAction>, value: string): PoPopupAction | undefined {
    if (!items || !Array.isArray(items) || !value) {
      return undefined;
    }

    for (const item of items) {
      if (item.label === value || (item as any).value === value) {
        return item;
      }

      if (item.subItems && Array.isArray(item.subItems)) {
        const found = this.getActionNode(item.subItems, value);
        if (found) {
          return found;
        }
      }
    }

    return undefined;
  }

  private updateParentList(
    items: Array<PoPopupAction>,
    level = 0,
    parentList: Array<PoSelectOption> = []
  ): Array<PoSelectOption> {
    if (!items || !Array.isArray(items)) {
      return parentList;
    }

    items.forEach(item => {
      const { label } = item;
      parentList.push({ label: \`\${'-'.repeat(level)} \${label}\`, value: label });

      if (item.subItems && Array.isArray(item.subItems)) {
        this.updateParentList(item.subItems, level + 1, parentList);
      }
    });

    return parentList;
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),Kg()()(),Qc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Sk(24,`sample-po-popup-labs/sample-po-popup-labs.component.css`),Kg(),Qc(25,`pre`,11),Sk(26,`.sample-button-container {
  margin-top: 20px;
  margin-bottom: 20px;
}
`),Kg()()()()(),Qc(27,`div`,12),vu(28,`sample-po-popup-labs`),Kg(),vu(29,`hr`)),i&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ne,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,we],encapsulation:2,changeDetection:1})}return l})();var He=[`formEmail`];var Qe=[`target`];function Ue(l,Le){if(l&1&&(Qc(0,`div`)(1,`div`,6),vu(2,`po-info`,20),Kg(),vu(3,`po-divider`),Kg()),l&2){let m=ek();wg(2),Rb(`p-value`,m.cc)}}var Ae=(()=>{class l{formEmail;targetRef;poModal;cc;emailText;from;popupActions;primaryAction;subject;to;ngOnInit(){this.popupActions=[{icon:`an an-plus`,label:`Upper Text`,type:`default`,action:this.upper.bind(this)},{icon:`an an-minus`,label:`Lower Text`,type:`default`,action:this.lower.bind(this)},{icon:`an an-x`,label:`Clear`,type:`danger`,action:this.clear.bind(this),separator:!0}],this.primaryAction={label:`Confirmar`,action:()=>{this.poModal.close(),this.reset()}}}send(){this.poModal.open()}reset(){this.formEmail.reset()}clear(){this.emailText=void 0}lower(){this.emailText=this.emailText&&this.emailText.toLowerCase()}upper(){this.emailText=this.emailText&&this.emailText.toUpperCase()}static ɵfac=function(i){return new(i||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-popup-email`]],viewQuery:function(i,o){if(i&1&&Du(He,7)(Qe,7,Z)(ia,7),i&2){let r;No(r=xo())&&(o.formEmail=r.first),No(r=xo())&&(o.targetRef=r.first),No(r=xo())&&(o.poModal=r.first)}},standalone:!1,decls:31,vars:14,consts:[[`popup`,``],[`formEmail`,`ngForm`],[`target`,``],[`p-position`,`right`,3,`p-actions`,`p-target`],[`p-popup-header-template`,``],[1,`sample-popup-header-template`],[1,`po-row`],[`p-title`,`Send email`,1,`po-sm-12`],[`name`,`to`,`p-clean`,``,`p-label`,`To`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`cc`,`p-clean`,``,`p-label`,`CC`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`subject`,`p-clean`,``,`p-label`,`Subject`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`message`,`p-help`,`Click show settings popup`,`p-label`,`Message`,`p-required`,``,1,`po-lg-10`,3,`ngModelChange`,`click`,`ngModel`],[`src`,`./assets/graphics/po.png`,1,`po-lg-2`,`sample-logo-po`],[`p-label`,`Send`,`p-kind`,`primary`,1,`po-md-4`,3,`p-click`,`p-disabled`],[`p-label`,`Reset`,1,`po-md-4`,3,`p-click`,`p-disabled`],[`p-title`,`Email successfully sent`,3,`p-primary-action`],[`p-label`,`From:`,1,`po-md-6`,3,`p-value`],[`p-label`,`To:`,1,`po-md-6`,3,`p-value`],[`p-label`,`subject:`,1,`po-md-12`,3,`p-value`],[`name`,`text`,`p-label`,`E-mail`,`p-readonly`,``,`p-rows`,`6`,`ngDefaultControl`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`CC:`,1,`po-md-12`,3,`p-value`]],template:function(i,o){if(i&1){let r=YO();Qc(0,`po-popup`,3,0)(2,`div`,4)(3,`div`,5),Sk(4,`Settings`),Kg()()(),Qc(5,`div`,6)(6,`po-widget`,7)(7,`form`,null,1)(9,`div`,6)(10,`po-email`,8),z0(),Kb(`ngModelChange`,function(a){return B_(r),Tk(o.to,a)||(o.to=a),U_(a)}),Kg(),Qc(11,`po-email`,9),z0(),Kb(`ngModelChange`,function(a){return B_(r),Tk(o.cc,a)||(o.cc=a),U_(a)}),Kg(),Qc(12,`po-input`,10),z0(),Kb(`ngModelChange`,function(a){return B_(r),Tk(o.subject,a)||(o.subject=a),U_(a)}),Kg()(),Qc(13,`div`,6)(14,`po-textarea`,11,2),z0(),Kb(`ngModelChange`,function(a){return B_(r),Tk(o.emailText,a)||(o.emailText=a),U_(a)}),vt(`click`,function(){B_(r);let a=ik(1);return U_(a.toggle())}),Kg(),vu(16,`img`,12),Kg(),Qc(17,`div`,6)(18,`po-button`,13),vt(`p-click`,function(){return o.send()}),Kg(),Qc(19,`po-button`,14),vt(`p-click`,function(){return o.reset()}),Kg()()()()(),Qc(20,`po-modal`,15)(21,`div`,6),vu(22,`po-info`,16)(23,`po-info`,17),Kg(),vu(24,`po-divider`),FO(25,Ue,4,1,`div`),Qc(26,`div`,6),vu(27,`po-info`,18),Kg(),vu(28,`po-divider`),Qc(29,`div`,6)(30,`po-textarea`,19),z0(),Kb(`ngModelChange`,function(a){return B_(r),Tk(o.emailText,a)||(o.emailText=a),U_(a)}),Kg()()()}if(i&2){let r=ik(8);Rb(`p-actions`,o.popupActions)(`p-target`,o.targetRef),wg(10),Yb(`ngModel`,o.to),W0(),wg(),Yb(`ngModel`,o.cc),W0(),wg(),Yb(`ngModel`,o.subject),W0(),wg(2),Yb(`ngModel`,o.emailText),W0(),wg(4),Rb(`p-disabled`,r.form.invalid),wg(),Rb(`p-disabled`,r.form.invalid),wg(),Rb(`p-primary-action`,o.primaryAction),wg(2),Rb(`p-value`,o.from),wg(),Rb(`p-value`,o.to),wg(2),VO(o.cc!==``?25:-1),wg(2),Rb(`p-value`,o.subject),wg(3),Yb(`ngModel`,o.emailText),W0()}},dependencies:[AZ,qI,MZ,TZ,QL,WL,oi,Nf,p5,j4,Zoe,Joe,ia,ta,bae],styles:[`.sample-logo-po[_ngcontent-%COMP%]{height:15%;padding-top:2.5%}.sample-popup-header-template[_ngcontent-%COMP%]{border-top-left-radius:3px;border-top-right-radius:3px;color:#0c9abe;padding-bottom:5%;padding-left:25%;padding-top:5%}`],changeDetection:1})}return l})();var Je=l=>({"docs-sample-code-tabs":l});var Me=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-popup-email-view`]],standalone:!1,decls:30,vars:6,consts:[[`id`,`sample-po-popup-email`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Popup Email`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-popup-email/sample-po-popup-email.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-popup #popup p-position="right" [p-actions]="popupActions" [p-target]="targetRef">
  <div p-popup-header-template>
    <div class="sample-popup-header-template">Settings</div>
  </div>
</po-popup>

<div class="po-row">
  <po-widget class="po-sm-12" p-title="Send email">
    <form #formEmail="ngForm">
      <div class="po-row">
        <po-email class="po-sm-12" name="to" [(ngModel)]="to" p-clean p-label="To" p-required> </po-email>

        <po-email class="po-sm-12" name="cc" [(ngModel)]="cc" p-clean p-label="CC"> </po-email>

        <po-input class="po-sm-12" name="subject" [(ngModel)]="subject" p-clean p-label="Subject" p-required>
        </po-input>
      </div>

      <div class="po-row">
        <po-textarea
          #target
          class="po-lg-10"
          name="message"
          [(ngModel)]="emailText"
          p-help="Click show settings popup"
          p-label="Message"
          p-required
          (click)="popup.toggle()"
        >
        </po-textarea>

        <img class="po-lg-2 sample-logo-po" src="./assets/graphics/po.png" />
      </div>

      <div class="po-row">
        <po-button
          class="po-md-4"
          p-label="Send"
          p-kind="primary"
          [p-disabled]="formEmail.form.invalid"
          (p-click)="send()"
        >
        </po-button>
        <po-button class="po-md-4" p-label="Reset" [p-disabled]="formEmail.form.invalid" (p-click)="reset()">
        </po-button>
      </div>
    </form>
  </po-widget>
</div>

<po-modal p-title="Email successfully sent" [p-primary-action]="primaryAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From:" [p-value]="from"> </po-info>

    <po-info class="po-md-6" p-label="To:" [p-value]="to"> </po-info>
  </div>

  <po-divider />

  @if (cc !== '') {
    <div>
      <div class="po-row">
        <po-info class="po-md-12" p-label="CC:" [p-value]="cc"> </po-info>
      </div>
      <po-divider />
    </div>
  }

  <div class="po-row">
    <po-info class="po-md-12" p-label="subject:" [p-value]="subject"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-textarea
      class="po-md-12"
      name="text"
      [(ngModel)]="emailText"
      p-label="E-mail"
      p-readonly
      p-rows="6"
      ngDefaultControl
    >
    </po-textarea>
  </div>
</po-modal>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-popup-email/sample-po-popup-email.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoPopupAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popup-email',
  templateUrl: './sample-po-popup-email.component.html',
  styleUrls: ['./sample-po-popup-email.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopupEmailComponent implements OnInit {
  @ViewChild('formEmail', { static: true }) formEmail: UntypedFormControl;

  @ViewChild('target', { read: ElementRef, static: true }) targetRef: ElementRef;

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  cc: string;
  emailText: string;
  from: string;
  popupActions: Array<PoPopupAction>;
  primaryAction: PoModalAction;
  subject: string;
  to: string;

  ngOnInit() {
    this.popupActions = [
      { icon: 'an an-plus', label: 'Upper Text', type: 'default', action: this.upper.bind(this) },
      { icon: 'an an-minus', label: 'Lower Text', type: 'default', action: this.lower.bind(this) },
      { icon: 'an an-x', label: 'Clear', type: 'danger', action: this.clear.bind(this), separator: true }
    ];

    this.primaryAction = {
      label: 'Confirmar',
      action: () => {
        this.poModal.close();
        this.reset();
      }
    };
  }

  send() {
    this.poModal.open();
  }

  reset() {
    this.formEmail.reset();
  }

  private clear() {
    this.emailText = undefined;
  }

  private lower() {
    this.emailText = this.emailText && this.emailText.toLowerCase();
  }

  private upper() {
    this.emailText = this.emailText && this.emailText.toUpperCase();
  }
}
`),Kg()()(),Qc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Sk(24,`sample-po-popup-email/sample-po-popup-email.component.css`),Kg(),Qc(25,`pre`,11),Sk(26,`.sample-logo-po {
  height: 15%;
  padding-top: 2.5%;
}

.sample-popup-header-template {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: #0c9abe;
  padding-bottom: 5%;
  padding-left: 25%;
  padding-top: 5%;
}
`),Kg()()()()(),Qc(27,`div`,12),vu(28,`sample-po-popup-email`),Kg(),vu(29,`hr`)),i&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Je,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ae],encapsulation:2,changeDetection:1})}return l})();var Te=(()=>{class l{static ɵfac=function(i){return new(i||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-popup-doc`]],standalone:!1,decls:1002,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-popup-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-actions`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-click-item`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-custom-positions`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string[]`],[`id`,`prop-p-hide-arrow`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-position`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`event-p-root-items-load`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`event-p-sub-items-load`,1,`docs-api-properties-row`],[`id`,`prop-p-target`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`any`],[`id`,`method-close`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-open`,1,`docs-api-method-table`],[`id`,`method-toggle`,1,`docs-api-method-table`],[`id`,`interface-po-popup-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-toolbar-action-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-toolbar-action-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`interface-po-toolbar-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-selected`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-separator`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-sub-items`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-sub-items-lazy`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`],[`id`,`interface-po-toolbar-action-type`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-url`,1,`docs-api-properties-row`],[`id`,`interface-po-toolbar-action-visible`,1,`docs-api-properties-row`]],template:function(i,o){i&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoPopupModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-popup.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoPopupComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`O componente `),Qc(15,`code`),Sk(16,`po-popup`),Kg(),Sk(17,` \xE9 um container pequeno recomendado para a\xE7\xF5es de navega\xE7\xE3o:
Ele abre sobreposto aos outros componentes.`),Kg(),Qc(18,`p`),Sk(19,`Suporta subníveis (submenus) quando as ações possuem a propriedade `),Qc(20,`code`),Sk(21,`subItems`),Kg(),Sk(22,`,
habilitando navega\xE7\xE3o hier\xE1rquica automaticamente.`),Kg(),Qc(23,`p`),Sk(24,`É possível escolher as posições do `),Qc(25,`code`),Sk(26,`po-popup`),Kg(),Sk(27,` em relação ao componente alvo, para isto veja a propriedade `),Qc(28,`code`),Sk(29,`p-position`),Kg(),Sk(30,`.`),Kg(),Qc(31,`p`),Sk(32,`Também é possível informar um `),Qc(33,`em`),Sk(34,`template`),Kg(),Qc(35,`em`),Sk(36,`header`),Kg(),Sk(37,` para o `),Qc(38,`code`),Sk(39,`po-popup`),Kg(),Sk(40,`, que ser\xE1 exibido acima das a\xE7\xF5es.
Para funcionar corretamente \xE9 preciso adicionar a propriedade `),Qc(41,`code`),Sk(42,`p-popup-header-template`),Kg(),Sk(43,` no elemento que servirá de template, por exemplo:`),Kg(),Qc(44,`pre`)(45,`code`),Sk(46,`<po-popup [p-target]="target">
  <div p-popup-header-template>
    <div>
      Dev PO
    </div>
    <div>
      dev.po@po-ui.com.br
    </div>
  </div>
</po-popup >
`),Kg()(),Qc(47,`h4`),Sk(48,`Tokens customizáveis`),Kg(),Qc(49,`p`),Sk(50,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(51,`blockquote`)(52,`p`),Sk(53,`Para maiores informações, acesse o guia `),Qc(54,`a`,6),Sk(55,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(56,`.`),Kg()(),Qc(57,`table`)(58,`thead`)(59,`tr`)(60,`th`),Sk(61,`Propriedade`),Kg(),Qc(62,`th`),Sk(63,`Descrição`),Kg(),Qc(64,`th`),Sk(65,`Valor Padrão`),Kg()()(),Qc(66,`tbody`)(67,`tr`)(68,`td`)(69,`strong`),Sk(70,`Default Values`),Kg()(),vu(71,`td`)(72,`td`),Kg(),Qc(73,`tr`)(74,`td`)(75,`code`),Sk(76,`--border-radius`),Kg()(),Qc(77,`td`),Sk(78,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Qc(79,`td`)(80,`code`),Sk(81,`var(--border-radius-md)`),Kg()()(),Qc(82,`tr`)(83,`td`)(84,`code`),Sk(85,`--border-width`),Kg()(),Qc(86,`td`),Sk(87,`Contém o valor da largura dos cantos do elemento\xA0`),Kg(),Qc(88,`td`)(89,`code`),Sk(90,`var(--border-width-sm)`),Kg()()(),Qc(91,`tr`)(92,`td`)(93,`code`),Sk(94,`--border-color`),Kg()(),Qc(95,`td`),Sk(96,`Cor da borda`),Kg(),Qc(97,`td`)(98,`code`),Sk(99,`var(--color-neutral-light-20)`),Kg()()(),Qc(100,`tr`)(101,`td`)(102,`code`),Sk(103,`--background`),Kg()(),Qc(104,`td`),Sk(105,`Cor do background`),Kg(),Qc(106,`td`)(107,`code`),Sk(108,`var(--color-neutral-light-00)`),Kg()()(),Qc(109,`tr`)(110,`td`)(111,`code`),Sk(112,`--shadow`),Kg()(),Qc(113,`td`),Sk(114,`Contém o valor da sombra do elemento`),Kg(),Qc(115,`td`)(116,`code`),Sk(117,`var(--shadow-md)`),Kg()()(),Qc(118,`tr`)(119,`td`)(120,`strong`),Sk(121,`po-popup po-item-list`),Kg()(),vu(122,`td`)(123,`td`),Kg(),Qc(124,`tr`)(125,`td`)(126,`code`),Sk(127,`--font-family`),Kg()(),Qc(128,`td`),Sk(129,`Família tipográfica usada`),Kg(),Qc(130,`td`)(131,`code`),Sk(132,`var(--font-family-theme)`),Kg()()(),Qc(133,`tr`)(134,`td`)(135,`code`),Sk(136,`--font-size`),Kg()(),Qc(137,`td`),Sk(138,`Tamanho da fonte`),Kg(),Qc(139,`td`)(140,`code`),Sk(141,`var(--font-size-default)`),Kg()()(),Qc(142,`tr`)(143,`td`)(144,`code`),Sk(145,`--line-height`),Kg()(),Qc(146,`td`),Sk(147,`Tamanho da label`),Kg(),Qc(148,`td`)(149,`code`),Sk(150,`var(--line-height-md)`),Kg()()(),Qc(151,`tr`)(152,`td`)(153,`strong`),Sk(154,`Action`),Kg()(),vu(155,`td`)(156,`td`),Kg(),Qc(157,`tr`)(158,`td`)(159,`code`),Sk(160,`--font-weight`),Kg()(),Qc(161,`td`),Sk(162,`Peso da fonte`),Kg(),Qc(163,`td`)(164,`code`),Sk(165,`var(--font-weight-bold)`),Kg()()(),Qc(166,`tr`)(167,`td`)(168,`code`),Sk(169,`--color`),Kg()(),Qc(170,`td`),Sk(171,`Cor principal do popup`),Kg(),Qc(172,`td`)(173,`code`),Sk(174,`var(--color-action-default)`),Kg()()(),Qc(175,`tr`)(176,`td`)(177,`strong`),Sk(178,`Hover`),Kg()(),vu(179,`td`)(180,`td`),Kg(),Qc(181,`tr`)(182,`td`)(183,`code`),Sk(184,`--color-hover`),Kg()(),Qc(185,`td`),Sk(186,`Cor principal no estado hover`),Kg(),Qc(187,`td`)(188,`code`),Sk(189,`var(--color-brand-01-darkest)`),Kg()()(),Qc(190,`tr`)(191,`td`)(192,`code`),Sk(193,`--background-hover`),Kg()(),Qc(194,`td`),Sk(195,`Cor de background no estado hover`),Kg(),Qc(196,`td`)(197,`code`),Sk(198,`var(--color-brand-01-lighter)`),Kg()()(),Qc(199,`tr`)(200,`td`)(201,`strong`),Sk(202,`Focused`),Kg()(),vu(203,`td`)(204,`td`),Kg(),Qc(205,`tr`)(206,`td`)(207,`code`),Sk(208,`--outline-color-focused`),Kg()(),Qc(209,`td`),Sk(210,`Cor do outline do estado de focus`),Kg(),Qc(211,`td`)(212,`code`),Sk(213,`var(--color-action-focus)`),Kg()()(),Qc(214,`tr`)(215,`td`)(216,`strong`),Sk(217,`Pressed`),Kg()(),vu(218,`td`)(219,`td`),Kg(),Qc(220,`tr`)(221,`td`)(222,`code`),Sk(223,`--background-pressed`),Kg()(),Qc(224,`td`),Sk(225,`Cor de background no estado de pressionado\xA0`),Kg(),Qc(226,`td`)(227,`code`),Sk(228,`var(--color-brand-01-light)`),Kg()()(),Qc(229,`tr`)(230,`td`)(231,`strong`),Sk(232,`Disabled`),Kg()(),vu(233,`td`)(234,`td`),Kg(),Qc(235,`tr`)(236,`td`)(237,`code`),Sk(238,`--color-disabled`),Kg()(),Qc(239,`td`),Sk(240,`Cor principal no estado disabled`),Kg(),Qc(241,`td`)(242,`code`),Sk(243,`var(--color-action-disabled)`),Kg()()(),Qc(244,`tr`)(245,`td`)(246,`strong`),Sk(247,`Selected`),Kg()(),vu(248,`td`)(249,`td`),Kg(),Qc(250,`tr`)(251,`td`)(252,`code`),Sk(253,`--font-weight-selected`),Kg()(),Qc(254,`td`),Sk(255,`Peso da fonte no estado selecionado`),Kg(),Qc(256,`td`)(257,`code`),Sk(258,`var(--font-weight-bold)`),Kg()()(),Qc(259,`tr`)(260,`td`)(261,`code`),Sk(262,`--background-selected`),Kg()(),Qc(263,`td`),Sk(264,`Cor de background no estado selecionado`),Kg(),Qc(265,`td`)(266,`code`),Sk(267,`var(--color-brand-01-lightest)`),Kg()()(),Qc(268,`tr`)(269,`td`)(270,`strong`),Sk(271,`Option e check`),Kg()(),vu(272,`td`)(273,`td`),Kg(),Qc(274,`tr`)(275,`td`)(276,`code`),Sk(277,`--color-option`),Kg()(),Qc(278,`td`),Sk(279,`Cor principa no estado Option/check`),Kg(),Qc(280,`td`)(281,`code`),Sk(282,`var(--color-neutral-dark-90)`),Kg()()()()()(),Qc(283,`div`,7)(284,`h4`,8),Sk(285,`Seletor`),Kg(),Qc(286,`pre`,9),Sk(287,`<po-popup
    p-actions="Array<PoPopupAction>"
    (p-click-item)="EventEmitter"
    p-custom-positions="string[]"
    p-hide-arrow="boolean"
    p-position="string"
    (p-root-items-load)="EventEmitter"
    p-size="string"
    (p-sub-items-load)="EventEmitter"
    p-target="any" >
</po-popup>
`),Kg()(),Qc(288,`h4`,10),Sk(289,`Propriedades`),Kg(),Qc(290,`table`,11)(291,`tr`,12)(292,`th`,13),Sk(293,`Nome`),Kg(),Qc(294,`th`,13),Sk(295,`Tipo`),Kg(),Qc(296,`th`,13),Sk(297,`Padrão`),Kg(),Qc(298,`th`,13),Sk(299,`Descrição`),Kg()(),Qc(300,`tr`,14)(301,`td`,15)(302,`div`,16)(303,`span`,17),Sk(304,` p-actions`),vu(305,`br`),Kg()()(),Qc(306,`td`,18)(307,`code`,19),Sk(308,`Array<PoPopupAction>`),Kg()(),Qc(309,`td`,20),Sk(310,`-`),Kg(),Qc(311,`td`,21)(312,`p`),Sk(313,`Lista de a\xE7\xF5es que ser\xE3o exibidas no componente.
Aceita um `),Qc(314,`em`),Sk(315,`array`),Kg(),Sk(316,` de `),Qc(317,`code`),Sk(318,`PoPopupAction`),Kg(),Sk(319,`.`),Kg()()(),Qc(320,`tr`,22)(321,`td`,15)(322,`div`,23)(323,`span`,24),Sk(324,` (p-click-item)`),vu(325,`br`),Kg()()(),Qc(326,`td`,18)(327,`code`,25),Sk(328,`EventEmitter`),Kg()(),Qc(329,`td`,20),Sk(330,`-`),Kg(),Qc(331,`td`,21)(332,`em`)(333,`strong`),Sk(334,`(opcional)`),Kg()(),Qc(335,`p`),Sk(336,`Evento disparado a cada clique em um item do menu.
Retorna o item clicado (`),Qc(337,`code`),Sk(338,`PoDropdownAction`),Kg(),Sk(339,`).`),Kg(),Qc(340,`blockquote`)(341,`p`),Sk(342,`Não é disparado para a ação interna de voltar (`),Qc(343,`code`),Sk(344,`goBack`),Kg(),Sk(345,`).`),Kg()()()(),Qc(346,`tr`,26)(347,`td`,15)(348,`div`,16)(349,`span`,17),Sk(350,` p-custom-positions`),vu(351,`br`),Kg()()(),Qc(352,`td`,18)(353,`code`,27),Sk(354,`string[]`),Kg()(),Qc(355,`td`,20),Sk(356,`-`),Kg(),Qc(357,`td`,21)(358,`em`)(359,`strong`),Sk(360,`(opcional)`),Kg()(),Qc(361,`p`),Sk(362,`Define as posições e a sequência que o `),Qc(363,`code`),Sk(364,`po-popup`),Kg(),Sk(365,` poder\xE1 rotacionar. A sequ\xEAncia ser\xE1 definida pela ordem passada
no `),Qc(366,`em`),Sk(367,`array`),Kg(),Sk(368,`. Caso não seja definido, o `),Qc(369,`code`),Sk(370,`po-popup`),Kg(),Sk(371,` irá rotacionar em todas as posições válidas.`),Kg(),Qc(372,`blockquote`)(373,`p`),Sk(374,`O componente sempre irá abrir na posição definida no `),Qc(375,`code`),Sk(376,`p-position`),Kg(),Sk(377,` e caso n\xE3o caiba na posi\xE7\xE3o definida o mesmo
ir\xE1 rotacionar seguindo a ordem definida pelo `),Qc(378,`code`),Sk(379,`p-custom-position`),Kg(),Sk(380,`.`),Kg()(),Qc(381,`p`),Sk(382,`Posições válidas:`),Kg(),Qc(383,`ul`)(384,`li`)(385,`code`),Sk(386,`right`),Kg(),Sk(387,`: Posiciona o po-popup no lado direito do componente alvo.`),Kg(),Qc(388,`li`)(389,`code`),Sk(390,`right-bottom`),Kg(),Sk(391,`: Posiciona o po-popup no lado direito inferior do componente alvo.`),Kg(),Qc(392,`li`)(393,`code`),Sk(394,`right-top`),Kg(),Sk(395,`: Posiciona o po-popup no lado direito superior do componente alvo.`),Kg(),Qc(396,`li`)(397,`code`),Sk(398,`bottom`),Kg(),Sk(399,`: Posiciona o po-popup abaixo do componente alvo.`),Kg(),Qc(400,`li`)(401,`code`),Sk(402,`bottom-left`),Kg(),Sk(403,`: Posiciona o po-popup abaixo e à esquerda do componente alvo.`),Kg(),Qc(404,`li`)(405,`code`),Sk(406,`bottom-right`),Kg(),Sk(407,`: Posiciona o po-popup abaixo e à direita do componente alvo.`),Kg(),Qc(408,`li`)(409,`code`),Sk(410,`left`),Kg(),Sk(411,`: Posiciona o po-popup no lado esquerdo do componente alvo.`),Kg(),Qc(412,`li`)(413,`code`),Sk(414,`left-top`),Kg(),Sk(415,`: Posiciona o po-popup no lado esquerdo superior do componente alvo.`),Kg(),Qc(416,`li`)(417,`code`),Sk(418,`left-bottom`),Kg(),Sk(419,`: Posiciona o po-popup no lado esquerdo inferior do componente alvo.`),Kg(),Qc(420,`li`)(421,`code`),Sk(422,`top`),Kg(),Sk(423,`: Posiciona o po-popup acima do componente alvo.`),Kg(),Qc(424,`li`)(425,`code`),Sk(426,`top-right`),Kg(),Sk(427,`: Posiciona o po-popup acima e à direita do componente alvo.`),Kg(),Qc(428,`li`)(429,`code`),Sk(430,`top-left`),Kg(),Sk(431,`: Posiciona o po-popup acima e à esquerda do componente alvo.`),Kg()()()(),Qc(432,`tr`,28)(433,`td`,15)(434,`div`,16)(435,`span`,17),Sk(436,` p-hide-arrow`),vu(437,`br`),Kg()()(),Qc(438,`td`,18)(439,`code`,29),Sk(440,`boolean`),Kg()(),Qc(441,`td`,20)(442,`p`)(443,`code`),Sk(444,`false`),Kg()()(),Qc(445,`td`,21)(446,`em`)(447,`strong`),Sk(448,`(opcional)`),Kg()(),Qc(449,`p`),Sk(450,`Oculta a seta do componente `),Qc(451,`em`),Sk(452,`popup`),Kg(),Sk(453,`.`),Kg()()(),Qc(454,`tr`,30)(455,`td`,15)(456,`div`,16)(457,`span`,17),Sk(458,` p-position`),vu(459,`br`),Kg()()(),Qc(460,`td`,18)(461,`code`,31),Sk(462,`string`),Kg()(),Qc(463,`td`,20)(464,`p`)(465,`code`),Sk(466,`bottom-left`),Kg()()(),Qc(467,`td`,21)(468,`em`)(469,`strong`),Sk(470,`(opcional)`),Kg()(),Qc(471,`p`),Sk(472,`Define a posição inicial que o `),Qc(473,`code`),Sk(474,`po-popup`),Kg(),Sk(475,` abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o `),Qc(476,`code`),Sk(477,`bottom-left`),Kg(),Sk(478,` (abaixo e a esquerda), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),Kg(),Qc(479,`blockquote`)(480,`p`),Sk(481,`Caso seja definido um `),Qc(482,`code`),Sk(483,`p-custom-positions`),Kg(),Sk(484,` o componente irá abrir na posição definida na propriedade `),Qc(485,`code`),Sk(486,`p-position`),Kg(),Sk(487,`
e caso n\xE3o caiba na posi\xE7\xE3o inicial ele ir\xE1 rotacionar seguindo a ordem de posi\xE7\xF5es definidas no `),Qc(488,`code`),Sk(489,`p-custom-positions`),Kg(),Sk(490,`.`),Kg()(),Qc(491,`p`),Sk(492,`Posições válidas:`),Kg(),Qc(493,`ul`)(494,`li`)(495,`code`),Sk(496,`right`),Kg(),Sk(497,`: Posiciona o po-popup no lado direito do componente alvo.`),Kg(),Qc(498,`li`)(499,`code`),Sk(500,`right-bottom`),Kg(),Sk(501,`: Posiciona o po-popup no lado direito inferior do componente alvo.`),Kg(),Qc(502,`li`)(503,`code`),Sk(504,`right-top`),Kg(),Sk(505,`: Posiciona o po-popup no lado direito superior do componente alvo.`),Kg(),Qc(506,`li`)(507,`code`),Sk(508,`bottom`),Kg(),Sk(509,`: Posiciona o po-popup abaixo do componente alvo.`),Kg(),Qc(510,`li`)(511,`code`),Sk(512,`bottom-left`),Kg(),Sk(513,`: Posiciona o po-popup abaixo e à esquerda do componente alvo.`),Kg(),Qc(514,`li`)(515,`code`),Sk(516,`bottom-right`),Kg(),Sk(517,`: Posiciona o po-popup abaixo e à direita do componente alvo.`),Kg(),Qc(518,`li`)(519,`code`),Sk(520,`left`),Kg(),Sk(521,`: Posiciona o po-popup no lado esquerdo do componente alvo.`),Kg(),Qc(522,`li`)(523,`code`),Sk(524,`left-top`),Kg(),Sk(525,`: Posiciona o po-popup no lado esquerdo superior do componente alvo.`),Kg(),Qc(526,`li`)(527,`code`),Sk(528,`left-bottom`),Kg(),Sk(529,`: Posiciona o po-popup no lado esquerdo inferior do componente alvo.`),Kg(),Qc(530,`li`)(531,`code`),Sk(532,`top`),Kg(),Sk(533,`: Posiciona o po-popup acima do componente alvo.`),Kg(),Qc(534,`li`)(535,`code`),Sk(536,`top-right`),Kg(),Sk(537,`: Posiciona o po-popup acima e à direita do componente alvo.`),Kg(),Qc(538,`li`)(539,`code`),Sk(540,`top-left`),Kg(),Sk(541,`: Posiciona o po-popup acima e à esquerda do componente alvo.`),Kg()()()(),Qc(542,`tr`,32)(543,`td`,15)(544,`div`,23)(545,`span`,24),Sk(546,` (p-root-items-load)`),vu(547,`br`),Kg()()(),Qc(548,`td`,18)(549,`code`,25),Sk(550,`EventEmitter`),Kg()(),Qc(551,`td`,20),Sk(552,`-`),Kg(),Qc(553,`td`,21)(554,`em`)(555,`strong`),Sk(556,`(opcional)`),Kg()(),Qc(557,`p`),Sk(558,`Evento disparado no momento em que a requisição assíncrona do nível raiz é iniciada`),Kg(),Qc(559,`blockquote`)(560,`p`),Sk(561,`Compatível com a propriedade PoPopupAction.subItemsLazy`),Kg()()()(),Qc(562,`tr`,33)(563,`td`,15)(564,`div`,16)(565,`span`,17),Sk(566,` p-size`),vu(567,`br`),Kg()()(),Qc(568,`td`,18)(569,`code`,31),Sk(570,`string`),Kg()(),Qc(571,`td`,20)(572,`p`)(573,`code`),Sk(574,`medium`),Kg()()(),Qc(575,`td`,21)(576,`em`)(577,`strong`),Sk(578,`(opcional)`),Kg()(),Qc(579,`p`),Sk(580,`Define o tamanho dos componentes de formulário no template:`),Kg(),Qc(581,`ul`)(582,`li`)(583,`code`),Sk(584,`small`),Kg(),Sk(585,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(586,`li`)(587,`code`),Sk(588,`medium`),Kg(),Sk(589,`: aplica a medida medium de cada componente.`),Kg()(),Qc(590,`blockquote`)(591,`p`),Sk(592,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(593,`code`),Sk(594,`medium`),Kg(),Sk(595,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(596,`a`,34),Sk(597,`po-theme`),Kg(),Sk(598,`.`),Kg()()()(),Qc(599,`tr`,35)(600,`td`,15)(601,`div`,23)(602,`span`,24),Sk(603,` (p-sub-items-load)`),vu(604,`br`),Kg()()(),Qc(605,`td`,18)(606,`code`,25),Sk(607,`EventEmitter`),Kg()(),Qc(608,`td`,20),Sk(609,`-`),Kg(),Qc(610,`td`,21)(611,`em`)(612,`strong`),Sk(613,`(opcional)`),Kg()(),Qc(614,`p`),Sk(615,`Evento disparado no momento em que a requisi\xE7\xE3o ass\xEDncrona de um subn\xEDvel \xE9 iniciada.
Retorna o item agrupador (`),Qc(616,`code`),Sk(617,`PoPopupAction`),Kg(),Sk(618,`) que originou o carregamento.`),Kg(),Qc(619,`blockquote`)(620,`p`),Sk(621,`Compatível com a propriedade PoPopupAction.subItemsLazy`),Kg()()()(),Qc(622,`tr`,36)(623,`td`,15)(624,`div`,16)(625,`span`,17),Sk(626,` p-target`),vu(627,`br`),Kg()()(),Qc(628,`td`,18)(629,`code`,37),Sk(630,`any`),Kg()(),Qc(631,`td`,20),Sk(632,`-`),Kg(),Qc(633,`td`,21)(634,`p`),Sk(635,`Para utilizar o `),Qc(636,`code`),Sk(637,`po-popup`),Kg(),Sk(638,` deve-se colocar uma vari\xE1vel local no componente que disparar\xE1 o evento
de abertura no mesmo e com isso, invocar\xE1 a fun\xE7\xE3o `),Qc(639,`code`),Sk(640,`toggle`),Kg(),Sk(641,`, por exemplo:`),Kg(),Qc(642,`pre`)(643,`code`),Sk(644,`<span #icon class="an an-credit-card" (click)="popup.toggle()">
  Credit Actions
</span>

<po-popup #popup
  [p-actions]="actions"
  [p-target]="icon">
</po-popup>
`),Kg()(),Qc(645,`p`),Sk(646,`Caso o elemento alvo for um componente, será preciso obter o `),Qc(647,`code`),Sk(648,`ElementRef`),Kg(),Sk(649,` do mesmo e passá-lo à propriedade, por exemplo:`),Kg(),Qc(650,`pre`)(651,`code`),Sk(652,`// component.html

<po-button #poButton
  p-label="Open Popover"
  (p-click)="popup.toggle()">
</po-button>

<po-popup #popup
  [p-actions]="actions"
  [p-target]="poButtonRef">
</po-popup>

// component.ts

@ViewChild('poButton', { read: ElementRef }) poButtonRef: ElementRef;
`),Kg()()()()(),Qc(653,`h3`,10),Sk(654,`Métodos`),Kg(),Qc(655,`table`,38)(656,`tr`,39)(657,`th`,40)(658,`div`,16)(659,`h4`)(660,`span`,17),Sk(661,` close `),Kg()()()()(),Qc(662,`tr`,21)(663,`td`,21)(664,`p`),Sk(665,`Fecha o componente `),Qc(666,`em`),Sk(667,`popup`),Kg(),Sk(668,`.`),Kg(),Qc(669,`blockquote`)(670,`p`),Sk(671,`Por padrão, este comportamento é acionado somente ao clicar fora do componente ou em determinada ação / url.`),Kg()()()()(),vu(672,`br`),Qc(673,`table`,41)(674,`tr`,39)(675,`th`,40)(676,`div`,16)(677,`h4`)(678,`span`,17),Sk(679,` open `),Kg()()()()(),Qc(680,`tr`,21)(681,`td`,21)(682,`p`),Sk(683,`Abre o componente `),Qc(684,`em`),Sk(685,`popup`),Kg(),Sk(686,`.`),Kg(),Qc(687,`blockquote`)(688,`p`),Sk(689,`É possível informar um parâmetro que será utilizado na execução da ação do item e na função de desabilitar.`),Kg()()()()(),vu(690,`br`),Qc(691,`table`,42)(692,`tr`,39)(693,`th`,40)(694,`div`,16)(695,`h4`)(696,`span`,17),Sk(697,` toggle `),Kg()()()()(),Qc(698,`tr`,21)(699,`td`,21)(700,`p`),Sk(701,`Responsável por abrir e fechar o `),Qc(702,`em`),Sk(703,`popup`),Kg(),Sk(704,`.`),Kg(),Qc(705,`p`),Sk(706,`Quando disparado abrirá o `),Qc(707,`em`),Sk(708,`popup`),Kg(),Sk(709,` e caso o mesmo já estiver aberto e possuir o mesmo `),Qc(710,`code`),Sk(711,`target`),Kg(),Sk(712,` irá fecha-lo.`),Kg(),Qc(713,`p`),Sk(714,`É possível informar um parâmetro que será utilizado na execução da ação do item e na função de desabilitar.`),Kg()()()(),vu(715,`br`),Qc(716,`h3`),Sk(717,`Interfaces`),Kg(),Qc(718,`h4`,43)(719,`code`,5),Sk(720,`PoPopupAction`),Kg()(),Qc(721,`div`,2)(722,`p`),Sk(723,`Interface para lista de ações do componente.`),Kg()(),Qc(724,`h4`,10),Sk(725,`Propriedades`),Kg(),Qc(726,`table`,11)(727,`tr`,12)(728,`th`,13),Sk(729,`Nome`),Kg(),Qc(730,`th`,13),Sk(731,`Tipo`),Kg(),Qc(732,`th`,13),Sk(733,`Descrição`),Kg()(),Qc(734,`tr`,44)(735,`td`,15)(736,`div`,16)(737,`span`,17),Sk(738,` action`),vu(739,`br`),Kg()()(),Qc(740,`td`,18)(741,`code`,45),Sk(742,`Function`),Kg()(),Qc(743,`td`,21)(744,`em`)(745,`strong`),Sk(746,`(opcional)`),Kg()(),Qc(747,`p`),Sk(748,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Kg(),Qc(749,`p`),Sk(750,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Qc(751,`code`),Sk(752,`subItems`),Kg(),Sk(753,`.`),Kg(),Qc(754,`blockquote`)(755,`p`),Sk(756,`Para que a função seja executada no contexto do componente, utilize `),Qc(757,`em`),Sk(758,`bind`),Kg(),Sk(759,`:
`),Qc(760,`code`),Sk(761,`action: this.myFunction.bind(this)`),Kg()()()()(),Qc(762,`tr`,46)(763,`td`,15)(764,`div`,16)(765,`span`,17),Sk(766,` disabled`),vu(767,`br`),Kg()()(),Qc(768,`td`,18)(769,`code`,29),Sk(770,`boolean `),Kg(),Qc(771,`code`,45),Sk(772,` Function`),Kg()(),Qc(773,`td`,21)(774,`em`)(775,`strong`),Sk(776,`(opcional)`),Kg()(),Qc(777,`p`),Sk(778,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()(),Qc(779,`tr`,47)(780,`td`,15)(781,`div`,16)(782,`span`,17),Sk(783,` icon`),vu(784,`br`),Kg()()(),Qc(785,`td`,18)(786,`code`,31),Sk(787,`string `),Kg(),Qc(788,`code`,48),Sk(789,` TemplateRef<void>`),Kg()(),Qc(790,`td`,21)(791,`em`)(792,`strong`),Sk(793,`(opcional)`),Kg()(),Qc(794,`p`),Sk(795,`Ícone exibido ao lado esquerdo do rótulo.`),Kg(),Qc(796,`p`),Sk(797,`Aceita ícones da `),Qc(798,`a`,49),Sk(799,`Biblioteca de ícones`),Kg(),Sk(800,`, fontes externas (ex: Font Awesome)
ou um `),Qc(801,`code`),Sk(802,`TemplateRef`),Kg(),Sk(803,` para ícones customizados.`),Kg(),Qc(804,`pre`)(805,`code`),Sk(806,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Kg()()()(),Qc(807,`tr`,50)(808,`td`,15)(809,`div`,16)(810,`span`,17),Sk(811,` label`),vu(812,`br`),Kg()()(),Qc(813,`td`,18)(814,`code`,31),Sk(815,`string`),Kg()(),Qc(816,`td`,21)(817,`p`),Sk(818,`Rótulo da ação.`),Kg(),Qc(819,`p`),Sk(820,`A label também pode representar o agrupador de subitens quando a ação possuir `),Qc(821,`code`),Sk(822,`subItems`),Kg(),Sk(823,`.`),Kg()()(),Qc(824,`tr`,51)(825,`td`,15)(826,`div`,16)(827,`span`,17),Sk(828,` selected`),vu(829,`br`),Kg()()(),Qc(830,`td`,18)(831,`code`,29),Sk(832,`boolean`),Kg()(),Qc(833,`td`,21)(834,`em`)(835,`strong`),Sk(836,`(opcional)`),Kg()(),Qc(837,`p`),Sk(838,`Define se a ação está selecionada.`),Kg()()(),Qc(839,`tr`,52)(840,`td`,15)(841,`div`,16)(842,`span`,17),Sk(843,` separator`),vu(844,`br`),Kg()()(),Qc(845,`td`,18)(846,`code`,29),Sk(847,`boolean`),Kg()(),Qc(848,`td`,21)(849,`em`)(850,`strong`),Sk(851,`(opcional)`),Kg()(),Qc(852,`p`),Sk(853,`Atribui uma linha separadora acima do item.`),Kg()()(),Qc(854,`tr`,53)(855,`td`,15)(856,`div`,16)(857,`span`,17),Sk(858,` subItems`),vu(859,`br`),Kg()()(),Qc(860,`td`,18)(861,`code`,19),Sk(862,`Array<PoPopupAction>`),Kg()(),Qc(863,`td`,21)(864,`em`)(865,`strong`),Sk(866,`(opcional)`),Kg()(),Qc(867,`p`),Sk(868,`Define uma lista de subitens para criação de menus aninhados.`),Kg(),Qc(869,`pre`)(870,`code`),Sk(871,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Kg()(),Qc(872,`p`),Sk(873,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Kg(),Qc(874,`blockquote`)(875,`p`),Sk(876,`As propriedades `),Qc(877,`code`),Sk(878,`disabled`),Kg(),Sk(879,`, `),Qc(880,`code`),Sk(881,`type`),Kg(),Sk(882,` e `),Qc(883,`code`),Sk(884,`visible`),Kg(),Sk(885,` não são aplicadas visualmente ao item agrupador.`),Kg()(),Qc(886,`blockquote`)(887,`p`),Sk(888,`Quando `),Qc(889,`code`),Sk(890,`url`),Kg(),Sk(891,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Kg()(),Qc(892,`blockquote`)(893,`p`),Sk(894,`Em subníveis aninhados, o `),Qc(895,`code`),Sk(896,`icon`),Kg(),Sk(897,` do agrupador é substituído pelo indicador de navegação (seta).`),Kg()()()(),Qc(898,`tr`,54)(899,`td`,15)(900,`div`,16)(901,`span`,17),Sk(902,` subItemsLazy`),vu(903,`br`),Kg()()(),Qc(904,`td`,18)(905,`code`,55),Sk(906,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Kg()(),Qc(907,`td`,21)(908,`em`)(909,`strong`),Sk(910,`(opcional)`),Kg()(),Qc(911,`p`),Sk(912,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Kg(),Qc(913,`p`),Sk(914,`Recebe o item agrupador e retorna um `),Qc(915,`code`),Sk(916,`Observable<Array<PoPopupAction>>`),Kg(),Sk(917,`. A requisi\xE7\xE3o \xE9 disparada
`),Qc(918,`strong`),Sk(919,`apenas`),Kg(),Sk(920,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Qc(921,`code`),Sk(922,`po-skeleton`),Kg(),Sk(923,`
enquanto os dados s\xE3o carregados:`),Kg(),Qc(924,`pre`)(925,`code`),Sk(926,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Kg()(),Qc(927,`blockquote`)(928,`p`),Sk(929,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Kg()(),Qc(930,`p`),Sk(931,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Kg()()(),Qc(932,`tr`,56)(933,`td`,15)(934,`div`,16)(935,`span`,17),Sk(936,` type`),vu(937,`br`),Kg()()(),Qc(938,`td`,18)(939,`code`,31),Sk(940,`string`),Kg()(),Qc(941,`td`,21)(942,`em`)(943,`strong`),Sk(944,`(opcional)`),Kg()(),Qc(945,`p`),Sk(946,`Define a cor do item.`),Kg(),Qc(947,`p`),Sk(948,`Valores válidos:`),Kg(),Qc(949,`ul`)(950,`li`)(951,`code`),Sk(952,`default`),Kg()(),Qc(953,`li`)(954,`code`),Sk(955,`danger`),Kg()()()()(),Qc(956,`tr`,57)(957,`td`,15)(958,`div`,16)(959,`span`,17),Sk(960,` url`),vu(961,`br`),Kg()()(),Qc(962,`td`,18)(963,`code`,31),Sk(964,`string`),Kg()(),Qc(965,`td`,21)(966,`em`)(967,`strong`),Sk(968,`(opcional)`),Kg()(),Qc(969,`p`),Sk(970,`URL para redirecionamento. Aceita rotas internas e links externos.`),Kg(),Qc(971,`p`),Sk(972,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Qc(973,`code`),Sk(974,`url`),Kg(),Sk(975,` é informada em um agrupador, o clique `),Qc(976,`strong`),Sk(977,`não abrirá os subitens`),Kg(),Sk(978,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Kg(),Qc(979,`blockquote`)(980,`p`),Sk(981,`Quando informada, tem prioridade sobre a propriedade `),Qc(982,`code`),Sk(983,`action`),Kg(),Sk(984,`.`),Kg()()()(),Qc(985,`tr`,58)(986,`td`,15)(987,`div`,16)(988,`span`,17),Sk(989,` visible`),vu(990,`br`),Kg()()(),Qc(991,`td`,18)(992,`code`,29),Sk(993,`boolean `),Kg(),Qc(994,`code`,45),Sk(995,` Function`),Kg()(),Qc(996,`td`,21)(997,`em`)(998,`strong`),Sk(999,`(opcional)`),Kg()(),Qc(1e3,`p`),Sk(1001,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return l})();function Ye(l,Le){if(l&1){let m=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(m);let o=ek();return U_(o.changeTab(`web`))}),vu(1,`sample-po-popup-basic-view`)(2,`sample-po-popup-labs-view`)(3,`sample-po-popup-email-view`),Kg()}if(l&2){let m=ek();Rb(`p-active`,m.activeTab===`web`)}}var Ze=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,i){this.route=m,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let i=m.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||l)(I(ar),I(An))};static ɵcmp=Jn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Popup`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(i,o){i&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Ye,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),vu(4,`sample-po-popup-doc`),Kg()()()),i&2&&(Rb(`p-actions`,o.actions),wg(2),VO(o.hidePoWebSample?-1:2),wg(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Mze,tre,are,ye,_e,Me,Te],encapsulation:2,changeDetection:1})}return l})()}];var De=(()=>{class l{static ɵfac=function(i){return new(i||l)};static ɵmod=ge({type:l});static ɵinj=de({imports:[GV.forChild(Ze),GV]})}return l})();var It=(()=>{class l{static ɵfac=function(i){return new(i||l)};static ɵmod=ge({type:l});static ɵinj=de({imports:[M,De]})}return l})();export{It as DocPoPopupModule};