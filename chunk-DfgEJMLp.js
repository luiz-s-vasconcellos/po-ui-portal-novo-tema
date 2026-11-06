import{t as r}from"./chunk-zystk1pz.js";import{$n as Ak,Aa as qk,Ar as Ig,Cn as oi,Ct as Yoe,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,I as Jo,Ia as sk,Ii as Z,Ja as vt,Li as ZO,Ln as w4,Mr as Jc,Ni as Y0,Oa as qI,Ri as Zg,Rr as Kb,Sr as Ge,T as Gte,Ti as W0,Vi as _u,Xr as No,Xt as ere,Yi as eF,Yt as ea,Zt as fae,b as Fu,bn as o5,ca as jk,di as RZ,dr as Cu,ea as ge,eo as xo,er as An,fi as Rb,gi as Tk,hi as TZ,ht as U4,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,pt as Tt,qi as de,qr as NZ,rt as Qae,ta as hF,va as nk,w as Goe,wa as p,xi as VO,xt as Woe,ya as nm,yi as U_,zr as Kk}from"./chunk-BQaN6dko.js";import{n as P,t as M}from"./main-SRPMFWZC.js";var Ve=[`target`];var qe=()=>({label:`PO Popup`});var Re=l=>[l];var Pe=(()=>{class l{cdr=p(Ge);targetRef;ngAfterViewInit(){this.cdr.detectChanges()}static ɵfac=function(i){return new(i||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-popup-basic`]],viewQuery:function(i,o){if(i&1&&Cu(Ve,5,Z),i&2){let r;No(r=xo())&&(o.targetRef=r.first)}},standalone:!1,decls:4,vars:5,consts:[[`target`,``],[`popup`,``],[`p-icon`,`an an-question`,1,`po-clickable`,3,`click`],[3,`p-actions`,`p-target`]],template:function(i,o){if(i&1){let r=ZO();Jc(0,`po-icon`,2,0),vt(`click`,function(){U_(r);let a=sk(3);return H_(a.toggle())}),Zg(),_u(2,`po-popup`,3,1)}i&2&&(Ig(2),Rb(`p-actions`,Bk(3,Re,jk(2,qe)))(`p-target`,o.targetRef))},dependencies:[Tt,Jo],encapsulation:2,changeDetection:1})}return l})();var Be=l=>({"docs-sample-code-tabs":l});var ye=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-popup-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Popup - Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-popup-basic/sample-po-popup-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-icon p-icon="an an-question" #target class="po-clickable" (click)="popup.toggle()"> </po-icon>
<po-popup #popup [p-actions]="[{ label: 'PO Popup' }]" [p-target]="targetRef"> </po-popup>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-popup-basic/sample-po-popup-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import {
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-popup-basic`),Zg(),_u(23,`hr`)),i&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Be,o.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Pe],encapsulation:2,changeDetection:1})}return l})();var We=[`target`];var we=(()=>{class l{poNotification=p(Fu);targetRef;action;actions;customPositions;event;infoValue;parentList;position;positions;properties;size;actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{label:`fa fa-address-card`,value:`fa fa-address-card`},{label:`fa fa-bell`,value:`fa fa-bell`}];positionOptions=[{label:`Right`,value:`right`},{label:`Right-top`,value:`right-top`},{label:`Right-bottom`,value:`right-bottom`},{label:`Bottom`,value:`bottom`},{label:`Bottom-left`,value:`bottom-left`},{label:`Bottom-right`,value:`bottom-right`},{label:`Left`,value:`left`},{label:`Left-top`,value:`left-top`},{label:`Left-bottom`,value:`left-bottom`},{label:`Top`,value:`top`},{label:`Top-left`,value:`top-left`},{label:`Top-right`,value:`top-right`}];propertiesOptions=[{value:`hideArrow`,label:`Hide arrow`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(m){let i=r({},m);if(i.action=i.action?this.showAction.bind(this,i.action):void 0,!m.parent)this.actions=[...this.actions,i];else{let o=this.getActionNode(this.actions,m.parent);o?o.subItems=[...o.subItems||[],i]:this.actions=[...this.actions,i]}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm()}convertToArray(){this.customPositions=this.positions&&this.positions.length?JSON.parse(this.positions):void 0}changeEvent(m,i){this.event=m,this.infoValue=i}restore(){this.actions=[],this.customPositions=[],this.event=``,this.infoValue=``,this.parentList=[],this.position=void 0,this.positions=``,this.properties=[],this.size=`medium`,this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0}}getActionNode(m,i){if(!(!m||!Array.isArray(m)||!i))for(let o of m){if(o.label===i||o.value===i)return o;if(o.subItems&&Array.isArray(o.subItems)){let r=this.getActionNode(o.subItems,i);if(r)return r}}}updateParentList(m,i=0,o=[]){return!m||!Array.isArray(m)||m.forEach(r=>{let{label:c}=r;o.push({label:`${`-`.repeat(i)} ${c}`,value:c}),r.subItems&&Array.isArray(r.subItems)&&this.updateParentList(r.subItems,i+1,o)}),o}showAction(m){this.poNotification.success(`Action clicked: ${m}`)}static ɵfac=function(i){return new(i||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-popup-labs`]],viewQuery:function(i,o){if(i&1&&Cu(We,7,Z),i&2){let r;No(r=xo())&&(o.targetRef=r.first)}},standalone:!1,decls:33,vars:29,consts:[[`popup`,``],[`target`,``],[`formAction`,`ngForm`],[`f`,`ngForm`],[3,`p-click-item`,`p-actions`,`p-custom-positions`,`p-hide-arrow`,`p-position`,`p-size`,`p-target`],[1,`po-row`,`sample-button-container`],[1,`po-offset-xl-5`,`po-offset-lg-5`,`po-md-2`,`po-lg-2`],[`p-label`,`Popup`,3,`p-click`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-label`,`Clicked item`,1,`po-md-6`,3,`p-value`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`parent`,`p-label`,`Subitems`,`p-placeholder`,`Add subitems`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`customPositions`,`p-help`,`["top", "left", "right-bottom"]`,`p-label`,`Custom positions`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`position`,`p-label`,`Position`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(i,o){if(i&1){let r=ZO();Jc(0,`po-popup`,4,0),vt(`p-click-item`,function(a){return o.changeEvent(`p-click-item`,a)}),Zg(),Jc(2,`div`,5)(3,`div`,6)(4,`po-button`,7,1),vt(`p-click`,function(){U_(r);let a=sk(1);return H_(a.toggle())}),Zg()()(),_u(6,`po-divider`),Jc(7,`div`,8),_u(8,`po-info`,9)(9,`po-info`,10),qk(10,`json`),Zg(),_u(11,`po-divider`),Jc(12,`form`,null,2)(14,`po-input`,11),W0(),Kb(`ngModelChange`,function(a){return U_(r),Ak(o.action.label,a)||(o.action.label=a),H_(a)}),Zg(),Jc(15,`po-input`,12),W0(),Kb(`ngModelChange`,function(a){return U_(r),Ak(o.action.action,a)||(o.action.action=a),H_(a)}),Zg(),Jc(16,`po-input`,13),W0(),Kb(`ngModelChange`,function(a){return U_(r),Ak(o.action.url,a)||(o.action.url=a),H_(a)}),Zg(),Jc(17,`po-select`,14),W0(),Kb(`ngModelChange`,function(a){return U_(r),Ak(o.action.type,a)||(o.action.type=a),H_(a)}),Zg(),Jc(18,`po-select`,15),W0(),Kb(`ngModelChange`,function(a){return U_(r),Ak(o.action.icon,a)||(o.action.icon=a),H_(a)}),Zg(),Jc(19,`po-select`,16),W0(),Kb(`ngModelChange`,function(a){return U_(r),Ak(o.action.parent,a)||(o.action.parent=a),H_(a)}),Zg(),Jc(20,`po-checkbox-group`,17),W0(),Kb(`ngModelChange`,function(a){return U_(r),Ak(o.action,a)||(o.action=a),H_(a)}),Zg(),Jc(21,`div`,8)(22,`po-button`,18),vt(`p-click`,function(){return o.addAction(o.action)}),Zg()()(),_u(23,`po-divider`),Jc(24,`form`,null,3)(26,`div`,8)(27,`po-input`,19),W0(),Kb(`ngModelChange`,function(a){return U_(r),Ak(o.positions,a)||(o.positions=a),H_(a)}),vt(`p-change`,function(){return o.convertToArray()}),Zg(),Jc(28,`po-select`,20),W0(),Kb(`ngModelChange`,function(a){return U_(r),Ak(o.position,a)||(o.position=a),H_(a)}),Zg(),Jc(29,`po-checkbox-group`,21),W0(),Kb(`ngModelChange`,function(a){return U_(r),Ak(o.properties,a)||(o.properties=a),H_(a)}),Zg(),Jc(30,`po-radio-group`,22),W0(),Kb(`ngModelChange`,function(a){return U_(r),Ak(o.size,a)||(o.size=a),H_(a)}),Zg()(),Jc(31,`div`,8)(32,`po-button`,23),vt(`p-click`,function(){U_(r);let a=sk(13);return sk(25).reset(),a.reset(),H_(o.restore())}),Zg()()()}if(i&2){let r=sk(13);Rb(`p-actions`,o.actions)(`p-custom-positions`,o.customPositions)(`p-hide-arrow`,o.properties.includes(`hideArrow`))(`p-position`,o.position)(`p-size`,o.size)(`p-target`,o.targetRef),Ig(8),Rb(`p-value`,o.event),Ig(),Rb(`p-value`,Kk(10,27,o.infoValue)),Ig(5),Yb(`ngModel`,o.action.label),Y0(),Ig(),Yb(`ngModel`,o.action.action),Y0(),Ig(),Yb(`ngModel`,o.action.url),Y0(),Ig(),Yb(`ngModel`,o.action.type),Rb(`p-options`,o.typeOptions),Y0(),Ig(),Yb(`ngModel`,o.action.icon),Rb(`p-options`,o.iconOptions),Y0(),Ig(),Yb(`ngModel`,o.action.parent),Rb(`p-options`,o.parentList),Y0(),Ig(),Yb(`ngModel`,o.action),Rb(`p-options`,o.actionOptions),Y0(),Ig(2),Rb(`p-disabled`,r.form.invalid),Ig(5),Yb(`ngModel`,o.positions),Y0(),Ig(),Yb(`ngModel`,o.position),Rb(`p-options`,o.positionOptions),Y0(),Ig(),Yb(`ngModel`,o.properties),Rb(`p-options`,o.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,o.size),Rb(`p-options`,o.sizeOptions),Y0()}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,w4,U4,Gte,Woe,Yoe,Jo,hF],styles:[`.sample-button-container[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}`],changeDetection:1})}return l})();var Ne=l=>({"docs-sample-code-tabs":l});var _e=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-popup-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Popup - Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-popup-labs/sample-po-popup-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-popup
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-popup-labs/sample-po-popup-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ElementRef, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()(),Jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Tk(24,`sample-po-popup-labs/sample-po-popup-labs.component.css`),Zg(),Jc(25,`pre`,11),Tk(26,`.sample-button-container {
  margin-top: 20px;
  margin-bottom: 20px;
}
`),Zg()()()()(),Jc(27,`div`,12),_u(28,`sample-po-popup-labs`),Zg(),_u(29,`hr`)),i&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ne,o.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,we],encapsulation:2,changeDetection:1})}return l})();var He=[`formEmail`];var Qe=[`target`];function Ue(l,Le){if(l&1&&(Jc(0,`div`)(1,`div`,6),_u(2,`po-info`,20),Zg(),_u(3,`po-divider`),Zg()),l&2){let m=nk();Ig(2),Rb(`p-value`,m.cc)}}var Ae=(()=>{class l{formEmail;targetRef;poModal;cc;emailText;from;popupActions;primaryAction;subject;to;ngOnInit(){this.popupActions=[{icon:`an an-plus`,label:`Upper Text`,type:`default`,action:this.upper.bind(this)},{icon:`an an-minus`,label:`Lower Text`,type:`default`,action:this.lower.bind(this)},{icon:`an an-x`,label:`Clear`,type:`danger`,action:this.clear.bind(this),separator:!0}],this.primaryAction={label:`Confirmar`,action:()=>{this.poModal.close(),this.reset()}}}send(){this.poModal.open()}reset(){this.formEmail.reset()}clear(){this.emailText=void 0}lower(){this.emailText=this.emailText&&this.emailText.toLowerCase()}upper(){this.emailText=this.emailText&&this.emailText.toUpperCase()}static ɵfac=function(i){return new(i||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-popup-email`]],viewQuery:function(i,o){if(i&1&&Cu(He,7)(Qe,7,Z)(ea,7),i&2){let r;No(r=xo())&&(o.formEmail=r.first),No(r=xo())&&(o.targetRef=r.first),No(r=xo())&&(o.poModal=r.first)}},standalone:!1,decls:31,vars:14,consts:[[`popup`,``],[`formEmail`,`ngForm`],[`target`,``],[`p-position`,`right`,3,`p-actions`,`p-target`],[`p-popup-header-template`,``],[1,`sample-popup-header-template`],[1,`po-row`],[`p-title`,`Send email`,1,`po-sm-12`],[`name`,`to`,`p-clean`,``,`p-label`,`To`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`cc`,`p-clean`,``,`p-label`,`CC`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`subject`,`p-clean`,``,`p-label`,`Subject`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`message`,`p-help`,`Click show settings popup`,`p-label`,`Message`,`p-required`,``,1,`po-lg-10`,3,`ngModelChange`,`click`,`ngModel`],[`src`,`./assets/graphics/po.png`,1,`po-lg-2`,`sample-logo-po`],[`p-label`,`Send`,`p-kind`,`primary`,1,`po-md-4`,3,`p-click`,`p-disabled`],[`p-label`,`Reset`,1,`po-md-4`,3,`p-click`,`p-disabled`],[`p-title`,`Email successfully sent`,3,`p-primary-action`],[`p-label`,`From:`,1,`po-md-6`,3,`p-value`],[`p-label`,`To:`,1,`po-md-6`,3,`p-value`],[`p-label`,`subject:`,1,`po-md-12`,3,`p-value`],[`name`,`text`,`p-label`,`E-mail`,`p-readonly`,``,`p-rows`,`6`,`ngDefaultControl`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`CC:`,1,`po-md-12`,3,`p-value`]],template:function(i,o){if(i&1){let r=ZO();Jc(0,`po-popup`,3,0)(2,`div`,4)(3,`div`,5),Tk(4,`Settings`),Zg()()(),Jc(5,`div`,6)(6,`po-widget`,7)(7,`form`,null,1)(9,`div`,6)(10,`po-email`,8),W0(),Kb(`ngModelChange`,function(a){return U_(r),Ak(o.to,a)||(o.to=a),H_(a)}),Zg(),Jc(11,`po-email`,9),W0(),Kb(`ngModelChange`,function(a){return U_(r),Ak(o.cc,a)||(o.cc=a),H_(a)}),Zg(),Jc(12,`po-input`,10),W0(),Kb(`ngModelChange`,function(a){return U_(r),Ak(o.subject,a)||(o.subject=a),H_(a)}),Zg()(),Jc(13,`div`,6)(14,`po-textarea`,11,2),W0(),Kb(`ngModelChange`,function(a){return U_(r),Ak(o.emailText,a)||(o.emailText=a),H_(a)}),vt(`click`,function(){U_(r);let a=sk(1);return H_(a.toggle())}),Zg(),_u(16,`img`,12),Zg(),Jc(17,`div`,6)(18,`po-button`,13),vt(`p-click`,function(){return o.send()}),Zg(),Jc(19,`po-button`,14),vt(`p-click`,function(){return o.reset()}),Zg()()()()(),Jc(20,`po-modal`,15)(21,`div`,6),_u(22,`po-info`,16)(23,`po-info`,17),Zg(),_u(24,`po-divider`),VO(25,Ue,4,1,`div`),Jc(26,`div`,6),_u(27,`po-info`,18),Zg(),_u(28,`po-divider`),Jc(29,`div`,6)(30,`po-textarea`,19),W0(),Kb(`ngModelChange`,function(a){return U_(r),Ak(o.emailText,a)||(o.emailText=a),H_(a)}),Zg()()()}if(i&2){let r=sk(8);Rb(`p-actions`,o.popupActions)(`p-target`,o.targetRef),Ig(10),Yb(`ngModel`,o.to),Y0(),Ig(),Yb(`ngModel`,o.cc),Y0(),Ig(),Yb(`ngModel`,o.subject),Y0(),Ig(2),Yb(`ngModel`,o.emailText),Y0(),Ig(4),Rb(`p-disabled`,r.form.invalid),Ig(),Rb(`p-disabled`,r.form.invalid),Ig(),Rb(`p-primary-action`,o.primaryAction),Ig(2),Rb(`p-value`,o.from),Ig(),Rb(`p-value`,o.to),Ig(2),BO(o.cc!==``?25:-1),Ig(2),Rb(`p-value`,o.subject),Ig(3),Yb(`ngModel`,o.emailText),Y0()}},dependencies:[NZ,qI,TZ,RZ,JL,qL,oi,Lf,o5,U4,Goe,Yoe,ea,Jo,fae],styles:[`.sample-logo-po[_ngcontent-%COMP%]{height:15%;padding-top:2.5%}.sample-popup-header-template[_ngcontent-%COMP%]{border-top-left-radius:3px;border-top-right-radius:3px;color:#0c9abe;padding-bottom:5%;padding-left:25%;padding-top:5%}`],changeDetection:1})}return l})();var Je=l=>({"docs-sample-code-tabs":l});var Me=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-popup-email-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Popup Email`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-popup-email/sample-po-popup-email.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-popup #popup p-position="right" [p-actions]="popupActions" [p-target]="targetRef">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-popup-email/sample-po-popup-email.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()(),Jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Tk(24,`sample-po-popup-email/sample-po-popup-email.component.css`),Zg(),Jc(25,`pre`,11),Tk(26,`.sample-logo-po {
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
`),Zg()()()()(),Jc(27,`div`,12),_u(28,`sample-po-popup-email`),Zg(),_u(29,`hr`)),i&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Je,o.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Ae],encapsulation:2,changeDetection:1})}return l})();var Te=(()=>{class l{static ɵfac=function(i){return new(i||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-popup-doc`]],standalone:!1,decls:1002,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string[]`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`any`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`]],template:function(i,o){i&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoPopupModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-popup.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoPopupComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O componente `),Jc(15,`code`),Tk(16,`po-popup`),Zg(),Tk(17,` \xE9 um container pequeno recomendado para a\xE7\xF5es de navega\xE7\xE3o:
Ele abre sobreposto aos outros componentes.`),Zg(),Jc(18,`p`),Tk(19,`Suporta subníveis (submenus) quando as ações possuem a propriedade `),Jc(20,`code`),Tk(21,`subItems`),Zg(),Tk(22,`,
habilitando navega\xE7\xE3o hier\xE1rquica automaticamente.`),Zg(),Jc(23,`p`),Tk(24,`É possível escolher as posições do `),Jc(25,`code`),Tk(26,`po-popup`),Zg(),Tk(27,` em relação ao componente alvo, para isto veja a propriedade `),Jc(28,`code`),Tk(29,`p-position`),Zg(),Tk(30,`.`),Zg(),Jc(31,`p`),Tk(32,`Também é possível informar um `),Jc(33,`em`),Tk(34,`template`),Zg(),Jc(35,`em`),Tk(36,`header`),Zg(),Tk(37,` para o `),Jc(38,`code`),Tk(39,`po-popup`),Zg(),Tk(40,`, que ser\xE1 exibido acima das a\xE7\xF5es.
Para funcionar corretamente \xE9 preciso adicionar a propriedade `),Jc(41,`code`),Tk(42,`p-popup-header-template`),Zg(),Tk(43,` no elemento que servirá de template, por exemplo:`),Zg(),Jc(44,`pre`)(45,`code`),Tk(46,`<po-popup [p-target]="target">
  <div p-popup-header-template>
    <div>
      Dev PO
    </div>
    <div>
      dev.po@po-ui.com.br
    </div>
  </div>
</po-popup >
`),Zg()(),Jc(47,`h4`),Tk(48,`Tokens customizáveis`),Zg(),Jc(49,`p`),Tk(50,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(51,`blockquote`)(52,`p`),Tk(53,`Para maiores informações, acesse o guia `),Jc(54,`a`,6),Tk(55,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(56,`.`),Zg()(),Jc(57,`table`)(58,`thead`)(59,`tr`)(60,`th`),Tk(61,`Propriedade`),Zg(),Jc(62,`th`),Tk(63,`Descrição`),Zg(),Jc(64,`th`),Tk(65,`Valor Padrão`),Zg()()(),Jc(66,`tbody`)(67,`tr`)(68,`td`)(69,`strong`),Tk(70,`Default Values`),Zg()(),_u(71,`td`)(72,`td`),Zg(),Jc(73,`tr`)(74,`td`)(75,`code`),Tk(76,`--border-radius`),Zg()(),Jc(77,`td`),Tk(78,`Contém o valor do raio dos cantos do elemento\xA0`),Zg(),Jc(79,`td`)(80,`code`),Tk(81,`var(--border-radius-md)`),Zg()()(),Jc(82,`tr`)(83,`td`)(84,`code`),Tk(85,`--border-width`),Zg()(),Jc(86,`td`),Tk(87,`Contém o valor da largura dos cantos do elemento\xA0`),Zg(),Jc(88,`td`)(89,`code`),Tk(90,`var(--border-width-sm)`),Zg()()(),Jc(91,`tr`)(92,`td`)(93,`code`),Tk(94,`--border-color`),Zg()(),Jc(95,`td`),Tk(96,`Cor da borda`),Zg(),Jc(97,`td`)(98,`code`),Tk(99,`var(--color-neutral-light-20)`),Zg()()(),Jc(100,`tr`)(101,`td`)(102,`code`),Tk(103,`--background`),Zg()(),Jc(104,`td`),Tk(105,`Cor do background`),Zg(),Jc(106,`td`)(107,`code`),Tk(108,`var(--color-neutral-light-00)`),Zg()()(),Jc(109,`tr`)(110,`td`)(111,`code`),Tk(112,`--shadow`),Zg()(),Jc(113,`td`),Tk(114,`Contém o valor da sombra do elemento`),Zg(),Jc(115,`td`)(116,`code`),Tk(117,`var(--shadow-md)`),Zg()()(),Jc(118,`tr`)(119,`td`)(120,`strong`),Tk(121,`po-popup po-item-list`),Zg()(),_u(122,`td`)(123,`td`),Zg(),Jc(124,`tr`)(125,`td`)(126,`code`),Tk(127,`--font-family`),Zg()(),Jc(128,`td`),Tk(129,`Família tipográfica usada`),Zg(),Jc(130,`td`)(131,`code`),Tk(132,`var(--font-family-theme)`),Zg()()(),Jc(133,`tr`)(134,`td`)(135,`code`),Tk(136,`--font-size`),Zg()(),Jc(137,`td`),Tk(138,`Tamanho da fonte`),Zg(),Jc(139,`td`)(140,`code`),Tk(141,`var(--font-size-default)`),Zg()()(),Jc(142,`tr`)(143,`td`)(144,`code`),Tk(145,`--line-height`),Zg()(),Jc(146,`td`),Tk(147,`Tamanho da label`),Zg(),Jc(148,`td`)(149,`code`),Tk(150,`var(--line-height-md)`),Zg()()(),Jc(151,`tr`)(152,`td`)(153,`strong`),Tk(154,`Action`),Zg()(),_u(155,`td`)(156,`td`),Zg(),Jc(157,`tr`)(158,`td`)(159,`code`),Tk(160,`--font-weight`),Zg()(),Jc(161,`td`),Tk(162,`Peso da fonte`),Zg(),Jc(163,`td`)(164,`code`),Tk(165,`var(--font-weight-bold)`),Zg()()(),Jc(166,`tr`)(167,`td`)(168,`code`),Tk(169,`--color`),Zg()(),Jc(170,`td`),Tk(171,`Cor principal do popup`),Zg(),Jc(172,`td`)(173,`code`),Tk(174,`var(--color-action-default)`),Zg()()(),Jc(175,`tr`)(176,`td`)(177,`strong`),Tk(178,`Hover`),Zg()(),_u(179,`td`)(180,`td`),Zg(),Jc(181,`tr`)(182,`td`)(183,`code`),Tk(184,`--color-hover`),Zg()(),Jc(185,`td`),Tk(186,`Cor principal no estado hover`),Zg(),Jc(187,`td`)(188,`code`),Tk(189,`var(--color-brand-01-darkest)`),Zg()()(),Jc(190,`tr`)(191,`td`)(192,`code`),Tk(193,`--background-hover`),Zg()(),Jc(194,`td`),Tk(195,`Cor de background no estado hover`),Zg(),Jc(196,`td`)(197,`code`),Tk(198,`var(--color-brand-01-lighter)`),Zg()()(),Jc(199,`tr`)(200,`td`)(201,`strong`),Tk(202,`Focused`),Zg()(),_u(203,`td`)(204,`td`),Zg(),Jc(205,`tr`)(206,`td`)(207,`code`),Tk(208,`--outline-color-focused`),Zg()(),Jc(209,`td`),Tk(210,`Cor do outline do estado de focus`),Zg(),Jc(211,`td`)(212,`code`),Tk(213,`var(--color-action-focus)`),Zg()()(),Jc(214,`tr`)(215,`td`)(216,`strong`),Tk(217,`Pressed`),Zg()(),_u(218,`td`)(219,`td`),Zg(),Jc(220,`tr`)(221,`td`)(222,`code`),Tk(223,`--background-pressed`),Zg()(),Jc(224,`td`),Tk(225,`Cor de background no estado de pressionado\xA0`),Zg(),Jc(226,`td`)(227,`code`),Tk(228,`var(--color-brand-01-light)`),Zg()()(),Jc(229,`tr`)(230,`td`)(231,`strong`),Tk(232,`Disabled`),Zg()(),_u(233,`td`)(234,`td`),Zg(),Jc(235,`tr`)(236,`td`)(237,`code`),Tk(238,`--color-disabled`),Zg()(),Jc(239,`td`),Tk(240,`Cor principal no estado disabled`),Zg(),Jc(241,`td`)(242,`code`),Tk(243,`var(--color-action-disabled)`),Zg()()(),Jc(244,`tr`)(245,`td`)(246,`strong`),Tk(247,`Selected`),Zg()(),_u(248,`td`)(249,`td`),Zg(),Jc(250,`tr`)(251,`td`)(252,`code`),Tk(253,`--font-weight-selected`),Zg()(),Jc(254,`td`),Tk(255,`Peso da fonte no estado selecionado`),Zg(),Jc(256,`td`)(257,`code`),Tk(258,`var(--font-weight-bold)`),Zg()()(),Jc(259,`tr`)(260,`td`)(261,`code`),Tk(262,`--background-selected`),Zg()(),Jc(263,`td`),Tk(264,`Cor de background no estado selecionado`),Zg(),Jc(265,`td`)(266,`code`),Tk(267,`var(--color-brand-01-lightest)`),Zg()()(),Jc(268,`tr`)(269,`td`)(270,`strong`),Tk(271,`Option e check`),Zg()(),_u(272,`td`)(273,`td`),Zg(),Jc(274,`tr`)(275,`td`)(276,`code`),Tk(277,`--color-option`),Zg()(),Jc(278,`td`),Tk(279,`Cor principa no estado Option/check`),Zg(),Jc(280,`td`)(281,`code`),Tk(282,`var(--color-neutral-dark-90)`),Zg()()()()()(),Jc(283,`div`,7)(284,`h4`,8),Tk(285,`Seletor`),Zg(),Jc(286,`pre`,9),Tk(287,`<po-popup
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
`),Zg()(),Jc(288,`h4`,10),Tk(289,`Propriedades`),Zg(),Jc(290,`table`,11)(291,`tr`,12)(292,`th`,13),Tk(293,`Nome`),Zg(),Jc(294,`th`,13),Tk(295,`Tipo`),Zg(),Jc(296,`th`,13),Tk(297,`Padrão`),Zg(),Jc(298,`th`,13),Tk(299,`Descrição`),Zg()(),Jc(300,`tr`,14)(301,`td`,15)(302,`div`,16)(303,`span`,17),Tk(304,` p-actions`),_u(305,`br`),Zg()()(),Jc(306,`td`,18)(307,`code`,19),Tk(308,`Array<PoPopupAction>`),Zg()(),Jc(309,`td`,20),Tk(310,`-`),Zg(),Jc(311,`td`,21)(312,`p`),Tk(313,`Lista de a\xE7\xF5es que ser\xE3o exibidas no componente.
Aceita um `),Jc(314,`em`),Tk(315,`array`),Zg(),Tk(316,` de `),Jc(317,`code`),Tk(318,`PoPopupAction`),Zg(),Tk(319,`.`),Zg()()(),Jc(320,`tr`,14)(321,`td`,15)(322,`div`,22)(323,`span`,23),Tk(324,` (p-click-item)`),_u(325,`br`),Zg()()(),Jc(326,`td`,18)(327,`code`,24),Tk(328,`EventEmitter`),Zg()(),Jc(329,`td`,20),Tk(330,`-`),Zg(),Jc(331,`td`,21)(332,`em`)(333,`strong`),Tk(334,`(opcional)`),Zg()(),Jc(335,`p`),Tk(336,`Evento disparado a cada clique em um item do menu.
Retorna o item clicado (`),Jc(337,`code`),Tk(338,`PoDropdownAction`),Zg(),Tk(339,`).`),Zg(),Jc(340,`blockquote`)(341,`p`),Tk(342,`Não é disparado para a ação interna de voltar (`),Jc(343,`code`),Tk(344,`goBack`),Zg(),Tk(345,`).`),Zg()()()(),Jc(346,`tr`,14)(347,`td`,15)(348,`div`,16)(349,`span`,17),Tk(350,` p-custom-positions`),_u(351,`br`),Zg()()(),Jc(352,`td`,18)(353,`code`,25),Tk(354,`string[]`),Zg()(),Jc(355,`td`,20),Tk(356,`-`),Zg(),Jc(357,`td`,21)(358,`em`)(359,`strong`),Tk(360,`(opcional)`),Zg()(),Jc(361,`p`),Tk(362,`Define as posições e a sequência que o `),Jc(363,`code`),Tk(364,`po-popup`),Zg(),Tk(365,` poder\xE1 rotacionar. A sequ\xEAncia ser\xE1 definida pela ordem passada
no `),Jc(366,`em`),Tk(367,`array`),Zg(),Tk(368,`. Caso não seja definido, o `),Jc(369,`code`),Tk(370,`po-popup`),Zg(),Tk(371,` irá rotacionar em todas as posições válidas.`),Zg(),Jc(372,`blockquote`)(373,`p`),Tk(374,`O componente sempre irá abrir na posição definida no `),Jc(375,`code`),Tk(376,`p-position`),Zg(),Tk(377,` e caso n\xE3o caiba na posi\xE7\xE3o definida o mesmo
ir\xE1 rotacionar seguindo a ordem definida pelo `),Jc(378,`code`),Tk(379,`p-custom-position`),Zg(),Tk(380,`.`),Zg()(),Jc(381,`p`),Tk(382,`Posições válidas:`),Zg(),Jc(383,`ul`)(384,`li`)(385,`code`),Tk(386,`right`),Zg(),Tk(387,`: Posiciona o po-popup no lado direito do componente alvo.`),Zg(),Jc(388,`li`)(389,`code`),Tk(390,`right-bottom`),Zg(),Tk(391,`: Posiciona o po-popup no lado direito inferior do componente alvo.`),Zg(),Jc(392,`li`)(393,`code`),Tk(394,`right-top`),Zg(),Tk(395,`: Posiciona o po-popup no lado direito superior do componente alvo.`),Zg(),Jc(396,`li`)(397,`code`),Tk(398,`bottom`),Zg(),Tk(399,`: Posiciona o po-popup abaixo do componente alvo.`),Zg(),Jc(400,`li`)(401,`code`),Tk(402,`bottom-left`),Zg(),Tk(403,`: Posiciona o po-popup abaixo e à esquerda do componente alvo.`),Zg(),Jc(404,`li`)(405,`code`),Tk(406,`bottom-right`),Zg(),Tk(407,`: Posiciona o po-popup abaixo e à direita do componente alvo.`),Zg(),Jc(408,`li`)(409,`code`),Tk(410,`left`),Zg(),Tk(411,`: Posiciona o po-popup no lado esquerdo do componente alvo.`),Zg(),Jc(412,`li`)(413,`code`),Tk(414,`left-top`),Zg(),Tk(415,`: Posiciona o po-popup no lado esquerdo superior do componente alvo.`),Zg(),Jc(416,`li`)(417,`code`),Tk(418,`left-bottom`),Zg(),Tk(419,`: Posiciona o po-popup no lado esquerdo inferior do componente alvo.`),Zg(),Jc(420,`li`)(421,`code`),Tk(422,`top`),Zg(),Tk(423,`: Posiciona o po-popup acima do componente alvo.`),Zg(),Jc(424,`li`)(425,`code`),Tk(426,`top-right`),Zg(),Tk(427,`: Posiciona o po-popup acima e à direita do componente alvo.`),Zg(),Jc(428,`li`)(429,`code`),Tk(430,`top-left`),Zg(),Tk(431,`: Posiciona o po-popup acima e à esquerda do componente alvo.`),Zg()()()(),Jc(432,`tr`,14)(433,`td`,15)(434,`div`,16)(435,`span`,17),Tk(436,` p-hide-arrow`),_u(437,`br`),Zg()()(),Jc(438,`td`,18)(439,`code`,26),Tk(440,`boolean`),Zg()(),Jc(441,`td`,20)(442,`p`)(443,`code`),Tk(444,`false`),Zg()()(),Jc(445,`td`,21)(446,`em`)(447,`strong`),Tk(448,`(opcional)`),Zg()(),Jc(449,`p`),Tk(450,`Oculta a seta do componente `),Jc(451,`em`),Tk(452,`popup`),Zg(),Tk(453,`.`),Zg()()(),Jc(454,`tr`,14)(455,`td`,15)(456,`div`,16)(457,`span`,17),Tk(458,` p-position`),_u(459,`br`),Zg()()(),Jc(460,`td`,18)(461,`code`,27),Tk(462,`string`),Zg()(),Jc(463,`td`,20)(464,`p`)(465,`code`),Tk(466,`bottom-left`),Zg()()(),Jc(467,`td`,21)(468,`em`)(469,`strong`),Tk(470,`(opcional)`),Zg()(),Jc(471,`p`),Tk(472,`Define a posição inicial que o `),Jc(473,`code`),Tk(474,`po-popup`),Zg(),Tk(475,` abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o `),Jc(476,`code`),Tk(477,`bottom-left`),Zg(),Tk(478,` (abaixo e a esquerda), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),Zg(),Jc(479,`blockquote`)(480,`p`),Tk(481,`Caso seja definido um `),Jc(482,`code`),Tk(483,`p-custom-positions`),Zg(),Tk(484,` o componente irá abrir na posição definida na propriedade `),Jc(485,`code`),Tk(486,`p-position`),Zg(),Tk(487,`
e caso n\xE3o caiba na posi\xE7\xE3o inicial ele ir\xE1 rotacionar seguindo a ordem de posi\xE7\xF5es definidas no `),Jc(488,`code`),Tk(489,`p-custom-positions`),Zg(),Tk(490,`.`),Zg()(),Jc(491,`p`),Tk(492,`Posições válidas:`),Zg(),Jc(493,`ul`)(494,`li`)(495,`code`),Tk(496,`right`),Zg(),Tk(497,`: Posiciona o po-popup no lado direito do componente alvo.`),Zg(),Jc(498,`li`)(499,`code`),Tk(500,`right-bottom`),Zg(),Tk(501,`: Posiciona o po-popup no lado direito inferior do componente alvo.`),Zg(),Jc(502,`li`)(503,`code`),Tk(504,`right-top`),Zg(),Tk(505,`: Posiciona o po-popup no lado direito superior do componente alvo.`),Zg(),Jc(506,`li`)(507,`code`),Tk(508,`bottom`),Zg(),Tk(509,`: Posiciona o po-popup abaixo do componente alvo.`),Zg(),Jc(510,`li`)(511,`code`),Tk(512,`bottom-left`),Zg(),Tk(513,`: Posiciona o po-popup abaixo e à esquerda do componente alvo.`),Zg(),Jc(514,`li`)(515,`code`),Tk(516,`bottom-right`),Zg(),Tk(517,`: Posiciona o po-popup abaixo e à direita do componente alvo.`),Zg(),Jc(518,`li`)(519,`code`),Tk(520,`left`),Zg(),Tk(521,`: Posiciona o po-popup no lado esquerdo do componente alvo.`),Zg(),Jc(522,`li`)(523,`code`),Tk(524,`left-top`),Zg(),Tk(525,`: Posiciona o po-popup no lado esquerdo superior do componente alvo.`),Zg(),Jc(526,`li`)(527,`code`),Tk(528,`left-bottom`),Zg(),Tk(529,`: Posiciona o po-popup no lado esquerdo inferior do componente alvo.`),Zg(),Jc(530,`li`)(531,`code`),Tk(532,`top`),Zg(),Tk(533,`: Posiciona o po-popup acima do componente alvo.`),Zg(),Jc(534,`li`)(535,`code`),Tk(536,`top-right`),Zg(),Tk(537,`: Posiciona o po-popup acima e à direita do componente alvo.`),Zg(),Jc(538,`li`)(539,`code`),Tk(540,`top-left`),Zg(),Tk(541,`: Posiciona o po-popup acima e à esquerda do componente alvo.`),Zg()()()(),Jc(542,`tr`,14)(543,`td`,15)(544,`div`,22)(545,`span`,23),Tk(546,` (p-root-items-load)`),_u(547,`br`),Zg()()(),Jc(548,`td`,18)(549,`code`,24),Tk(550,`EventEmitter`),Zg()(),Jc(551,`td`,20),Tk(552,`-`),Zg(),Jc(553,`td`,21)(554,`em`)(555,`strong`),Tk(556,`(opcional)`),Zg()(),Jc(557,`p`),Tk(558,`Evento disparado no momento em que a requisição assíncrona do nível raiz é iniciada`),Zg(),Jc(559,`blockquote`)(560,`p`),Tk(561,`Compatível com a propriedade PoPopupAction.subItemsLazy`),Zg()()()(),Jc(562,`tr`,14)(563,`td`,15)(564,`div`,16)(565,`span`,17),Tk(566,` p-size`),_u(567,`br`),Zg()()(),Jc(568,`td`,18)(569,`code`,27),Tk(570,`string`),Zg()(),Jc(571,`td`,20)(572,`p`)(573,`code`),Tk(574,`medium`),Zg()()(),Jc(575,`td`,21)(576,`em`)(577,`strong`),Tk(578,`(opcional)`),Zg()(),Jc(579,`p`),Tk(580,`Define o tamanho dos componentes de formulário no template:`),Zg(),Jc(581,`ul`)(582,`li`)(583,`code`),Tk(584,`small`),Zg(),Tk(585,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Zg(),Jc(586,`li`)(587,`code`),Tk(588,`medium`),Zg(),Tk(589,`: aplica a medida medium de cada componente.`),Zg()(),Jc(590,`blockquote`)(591,`p`),Tk(592,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(593,`code`),Tk(594,`medium`),Zg(),Tk(595,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(596,`a`,28),Tk(597,`po-theme`),Zg(),Tk(598,`.`),Zg()()()(),Jc(599,`tr`,14)(600,`td`,15)(601,`div`,22)(602,`span`,23),Tk(603,` (p-sub-items-load)`),_u(604,`br`),Zg()()(),Jc(605,`td`,18)(606,`code`,24),Tk(607,`EventEmitter`),Zg()(),Jc(608,`td`,20),Tk(609,`-`),Zg(),Jc(610,`td`,21)(611,`em`)(612,`strong`),Tk(613,`(opcional)`),Zg()(),Jc(614,`p`),Tk(615,`Evento disparado no momento em que a requisi\xE7\xE3o ass\xEDncrona de um subn\xEDvel \xE9 iniciada.
Retorna o item agrupador (`),Jc(616,`code`),Tk(617,`PoPopupAction`),Zg(),Tk(618,`) que originou o carregamento.`),Zg(),Jc(619,`blockquote`)(620,`p`),Tk(621,`Compatível com a propriedade PoPopupAction.subItemsLazy`),Zg()()()(),Jc(622,`tr`,14)(623,`td`,15)(624,`div`,16)(625,`span`,17),Tk(626,` p-target`),_u(627,`br`),Zg()()(),Jc(628,`td`,18)(629,`code`,29),Tk(630,`any`),Zg()(),Jc(631,`td`,20),Tk(632,`-`),Zg(),Jc(633,`td`,21)(634,`p`),Tk(635,`Para utilizar o `),Jc(636,`code`),Tk(637,`po-popup`),Zg(),Tk(638,` deve-se colocar uma vari\xE1vel local no componente que disparar\xE1 o evento
de abertura no mesmo e com isso, invocar\xE1 a fun\xE7\xE3o `),Jc(639,`code`),Tk(640,`toggle`),Zg(),Tk(641,`, por exemplo:`),Zg(),Jc(642,`pre`)(643,`code`),Tk(644,`<span #icon class="an an-credit-card" (click)="popup.toggle()">
  Credit Actions
</span>

<po-popup #popup
  [p-actions]="actions"
  [p-target]="icon">
</po-popup>
`),Zg()(),Jc(645,`p`),Tk(646,`Caso o elemento alvo for um componente, será preciso obter o `),Jc(647,`code`),Tk(648,`ElementRef`),Zg(),Tk(649,` do mesmo e passá-lo à propriedade, por exemplo:`),Zg(),Jc(650,`pre`)(651,`code`),Tk(652,`// component.html

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
`),Zg()()()()(),Jc(653,`h3`,10),Tk(654,`Métodos`),Zg(),Jc(655,`table`,30)(656,`tr`,14)(657,`th`,31)(658,`div`,16)(659,`h4`)(660,`span`,17),Tk(661,` close `),Zg()()()()(),Jc(662,`tr`,21)(663,`td`,21)(664,`p`),Tk(665,`Fecha o componente `),Jc(666,`em`),Tk(667,`popup`),Zg(),Tk(668,`.`),Zg(),Jc(669,`blockquote`)(670,`p`),Tk(671,`Por padrão, este comportamento é acionado somente ao clicar fora do componente ou em determinada ação / url.`),Zg()()()()(),_u(672,`br`),Jc(673,`table`,30)(674,`tr`,14)(675,`th`,31)(676,`div`,16)(677,`h4`)(678,`span`,17),Tk(679,` open `),Zg()()()()(),Jc(680,`tr`,21)(681,`td`,21)(682,`p`),Tk(683,`Abre o componente `),Jc(684,`em`),Tk(685,`popup`),Zg(),Tk(686,`.`),Zg(),Jc(687,`blockquote`)(688,`p`),Tk(689,`É possível informar um parâmetro que será utilizado na execução da ação do item e na função de desabilitar.`),Zg()()()()(),_u(690,`br`),Jc(691,`table`,30)(692,`tr`,14)(693,`th`,31)(694,`div`,16)(695,`h4`)(696,`span`,17),Tk(697,` toggle `),Zg()()()()(),Jc(698,`tr`,21)(699,`td`,21)(700,`p`),Tk(701,`Responsável por abrir e fechar o `),Jc(702,`em`),Tk(703,`popup`),Zg(),Tk(704,`.`),Zg(),Jc(705,`p`),Tk(706,`Quando disparado abrirá o `),Jc(707,`em`),Tk(708,`popup`),Zg(),Tk(709,` e caso o mesmo já estiver aberto e possuir o mesmo `),Jc(710,`code`),Tk(711,`target`),Zg(),Tk(712,` irá fecha-lo.`),Zg(),Jc(713,`p`),Tk(714,`É possível informar um parâmetro que será utilizado na execução da ação do item e na função de desabilitar.`),Zg()()()(),_u(715,`br`),Jc(716,`h3`),Tk(717,`Interfaces`),Zg(),Jc(718,`h4`,32)(719,`code`,5),Tk(720,`PoPopupAction`),Zg()(),Jc(721,`div`,2)(722,`p`),Tk(723,`Interface para lista de ações do componente.`),Zg()(),Jc(724,`h4`,10),Tk(725,`Propriedades`),Zg(),Jc(726,`table`,11)(727,`tr`,12)(728,`th`,13),Tk(729,`Nome`),Zg(),Jc(730,`th`,13),Tk(731,`Tipo`),Zg(),Jc(732,`th`,13),Tk(733,`Descrição`),Zg()(),Jc(734,`tr`,14)(735,`td`,15)(736,`div`,16)(737,`span`,17),Tk(738,` action`),_u(739,`br`),Zg()()(),Jc(740,`td`,18)(741,`code`,33),Tk(742,`Function`),Zg()(),Jc(743,`td`,21)(744,`em`)(745,`strong`),Tk(746,`(opcional)`),Zg()(),Jc(747,`p`),Tk(748,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),Zg(),Jc(749,`p`),Tk(750,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Jc(751,`code`),Tk(752,`subItems`),Zg(),Tk(753,`.`),Zg(),Jc(754,`blockquote`)(755,`p`),Tk(756,`Para que a função seja executada no contexto do componente, utilize `),Jc(757,`em`),Tk(758,`bind`),Zg(),Tk(759,`:
`),Jc(760,`code`),Tk(761,`action: this.myFunction.bind(this)`),Zg()()()()(),Jc(762,`tr`,14)(763,`td`,15)(764,`div`,16)(765,`span`,17),Tk(766,` disabled`),_u(767,`br`),Zg()()(),Jc(768,`td`,18)(769,`code`,26),Tk(770,`boolean `),Zg(),Jc(771,`code`,33),Tk(772,` Function`),Zg()(),Jc(773,`td`,21)(774,`em`)(775,`strong`),Tk(776,`(opcional)`),Zg()(),Jc(777,`p`),Tk(778,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),Zg()()(),Jc(779,`tr`,14)(780,`td`,15)(781,`div`,16)(782,`span`,17),Tk(783,` icon`),_u(784,`br`),Zg()()(),Jc(785,`td`,18)(786,`code`,27),Tk(787,`string `),Zg(),Jc(788,`code`,34),Tk(789,` TemplateRef<void>`),Zg()(),Jc(790,`td`,21)(791,`em`)(792,`strong`),Tk(793,`(opcional)`),Zg()(),Jc(794,`p`),Tk(795,`Ícone exibido ao lado esquerdo do rótulo.`),Zg(),Jc(796,`p`),Tk(797,`Aceita ícones da `),Jc(798,`a`,35),Tk(799,`Biblioteca de ícones`),Zg(),Tk(800,`, fontes externas (ex: Font Awesome)
ou um `),Jc(801,`code`),Tk(802,`TemplateRef`),Zg(),Tk(803,` para ícones customizados.`),Zg(),Jc(804,`pre`)(805,`code`),Tk(806,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),Zg()()()(),Jc(807,`tr`,14)(808,`td`,15)(809,`div`,16)(810,`span`,17),Tk(811,` label`),_u(812,`br`),Zg()()(),Jc(813,`td`,18)(814,`code`,27),Tk(815,`string`),Zg()(),Jc(816,`td`,21)(817,`p`),Tk(818,`Rótulo da ação.`),Zg(),Jc(819,`p`),Tk(820,`A label também pode representar o agrupador de subitens quando a ação possuir `),Jc(821,`code`),Tk(822,`subItems`),Zg(),Tk(823,`.`),Zg()()(),Jc(824,`tr`,14)(825,`td`,15)(826,`div`,16)(827,`span`,17),Tk(828,` selected`),_u(829,`br`),Zg()()(),Jc(830,`td`,18)(831,`code`,26),Tk(832,`boolean`),Zg()(),Jc(833,`td`,21)(834,`em`)(835,`strong`),Tk(836,`(opcional)`),Zg()(),Jc(837,`p`),Tk(838,`Define se a ação está selecionada.`),Zg()()(),Jc(839,`tr`,14)(840,`td`,15)(841,`div`,16)(842,`span`,17),Tk(843,` separator`),_u(844,`br`),Zg()()(),Jc(845,`td`,18)(846,`code`,26),Tk(847,`boolean`),Zg()(),Jc(848,`td`,21)(849,`em`)(850,`strong`),Tk(851,`(opcional)`),Zg()(),Jc(852,`p`),Tk(853,`Atribui uma linha separadora acima do item.`),Zg()()(),Jc(854,`tr`,14)(855,`td`,15)(856,`div`,16)(857,`span`,17),Tk(858,` subItems`),_u(859,`br`),Zg()()(),Jc(860,`td`,18)(861,`code`,19),Tk(862,`Array<PoPopupAction>`),Zg()(),Jc(863,`td`,21)(864,`em`)(865,`strong`),Tk(866,`(opcional)`),Zg()(),Jc(867,`p`),Tk(868,`Define uma lista de subitens para criação de menus aninhados.`),Zg(),Jc(869,`pre`)(870,`code`),Tk(871,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),Zg()(),Jc(872,`p`),Tk(873,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),Zg(),Jc(874,`blockquote`)(875,`p`),Tk(876,`As propriedades `),Jc(877,`code`),Tk(878,`disabled`),Zg(),Tk(879,`, `),Jc(880,`code`),Tk(881,`type`),Zg(),Tk(882,` e `),Jc(883,`code`),Tk(884,`visible`),Zg(),Tk(885,` não são aplicadas visualmente ao item agrupador.`),Zg()(),Jc(886,`blockquote`)(887,`p`),Tk(888,`Quando `),Jc(889,`code`),Tk(890,`url`),Zg(),Tk(891,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),Zg()(),Jc(892,`blockquote`)(893,`p`),Tk(894,`Em subníveis aninhados, o `),Jc(895,`code`),Tk(896,`icon`),Zg(),Tk(897,` do agrupador é substituído pelo indicador de navegação (seta).`),Zg()()()(),Jc(898,`tr`,14)(899,`td`,15)(900,`div`,16)(901,`span`,17),Tk(902,` subItemsLazy`),_u(903,`br`),Zg()()(),Jc(904,`td`,18)(905,`code`,36),Tk(906,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),Zg()(),Jc(907,`td`,21)(908,`em`)(909,`strong`),Tk(910,`(opcional)`),Zg()(),Jc(911,`p`),Tk(912,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),Zg(),Jc(913,`p`),Tk(914,`Recebe o item agrupador e retorna um `),Jc(915,`code`),Tk(916,`Observable<Array<PoPopupAction>>`),Zg(),Tk(917,`. A requisi\xE7\xE3o \xE9 disparada
`),Jc(918,`strong`),Tk(919,`apenas`),Zg(),Tk(920,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),Jc(921,`code`),Tk(922,`po-skeleton`),Zg(),Tk(923,`
enquanto os dados s\xE3o carregados:`),Zg(),Jc(924,`pre`)(925,`code`),Tk(926,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),Zg()(),Jc(927,`blockquote`)(928,`p`),Tk(929,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),Zg()(),Jc(930,`p`),Tk(931,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),Zg()()(),Jc(932,`tr`,14)(933,`td`,15)(934,`div`,16)(935,`span`,17),Tk(936,` type`),_u(937,`br`),Zg()()(),Jc(938,`td`,18)(939,`code`,27),Tk(940,`string`),Zg()(),Jc(941,`td`,21)(942,`em`)(943,`strong`),Tk(944,`(opcional)`),Zg()(),Jc(945,`p`),Tk(946,`Define a cor do item.`),Zg(),Jc(947,`p`),Tk(948,`Valores válidos:`),Zg(),Jc(949,`ul`)(950,`li`)(951,`code`),Tk(952,`default`),Zg()(),Jc(953,`li`)(954,`code`),Tk(955,`danger`),Zg()()()()(),Jc(956,`tr`,14)(957,`td`,15)(958,`div`,16)(959,`span`,17),Tk(960,` url`),_u(961,`br`),Zg()()(),Jc(962,`td`,18)(963,`code`,27),Tk(964,`string`),Zg()(),Jc(965,`td`,21)(966,`em`)(967,`strong`),Tk(968,`(opcional)`),Zg()(),Jc(969,`p`),Tk(970,`URL para redirecionamento. Aceita rotas internas e links externos.`),Zg(),Jc(971,`p`),Tk(972,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Jc(973,`code`),Tk(974,`url`),Zg(),Tk(975,` é informada em um agrupador, o clique `),Jc(976,`strong`),Tk(977,`não abrirá os subitens`),Zg(),Tk(978,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),Zg(),Jc(979,`blockquote`)(980,`p`),Tk(981,`Quando informada, tem prioridade sobre a propriedade `),Jc(982,`code`),Tk(983,`action`),Zg(),Tk(984,`.`),Zg()()()(),Jc(985,`tr`,14)(986,`td`,15)(987,`div`,16)(988,`span`,17),Tk(989,` visible`),_u(990,`br`),Zg()()(),Jc(991,`td`,18)(992,`code`,26),Tk(993,`boolean `),Zg(),Jc(994,`code`,33),Tk(995,` Function`),Zg()(),Jc(996,`td`,21)(997,`em`)(998,`strong`),Tk(999,`(opcional)`),Zg()(),Jc(1e3,`p`),Tk(1001,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return l})();function Ye(l,Le){if(l&1){let m=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(m);let o=nk();return H_(o.changeTab(`web`))}),_u(1,`sample-po-popup-basic-view`)(2,`sample-po-popup-labs-view`)(3,`sample-po-popup-email-view`),Zg()}if(l&2){let m=nk();Rb(`p-active`,m.activeTab===`web`)}}var Ze=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,i){this.route=m,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let i=m.view;this.activeTab=i||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||l)(I(ar),I(An))};static ɵcmp=Jn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Popup`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(i,o){i&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Ye,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),_u(4,`sample-po-popup-doc`),Zg()()()),i&2&&(Rb(`p-actions`,o.actions),Ig(2),BO(o.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Tze,Qae,ere,ye,_e,Me,Te],encapsulation:2,changeDetection:1})}return l})()}];var De=(()=>{class l{static ɵfac=function(i){return new(i||l)};static ɵmod=ge({type:l});static ɵinj=de({imports:[WV.forChild(Ze),WV]})}return l})();var It=(()=>{class l{static ɵfac=function(i){return new(i||l)};static ɵmod=ge({type:l});static ɵinj=de({imports:[M,De]})}return l})();export{It as DocPoPopupModule};