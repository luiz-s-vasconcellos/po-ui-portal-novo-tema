import{m as P,p as M}from"./main-MOTCU2CE.js";import{Ar as I,G as Nf,Ii as WL,Ir as Kb,It as bae,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Sa as j_,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,an as ia,ao as we$1,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,gi as Rb,go as z0,io as vu,j as I4,ji as Vk,k as Goe,ki as V_,kt as Zoe,li as Qc,na as de,oo as wg,pi as R,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,ua as ge$1,vi as Sk,w as Fc,wn as q4,wr as GV,xi as Tk,xn as p5,xr as FO,yr as Du}from"./chunk-DtUf9FxZ.js";var ge=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-container-basic`]],standalone:!1,decls:1,vars:0,template:function(a,i){a&1&&vu(0,`po-container`)},dependencies:[Fc],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o});var Se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-container-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-container-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-container-basic/sample-po-container-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-container-basic/sample-po-container-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Container Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-container-basic/sample-po-container-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-container></po-container>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-container-basic/sample-po-container-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-container-basic',
  templateUrl: './sample-po-container-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContainerBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-container-basic`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Te,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ge],encapsulation:2,changeDetection:1})}return o})();var fe=(()=>{class o{content;title;height;properties;propertiesOptions=[{value:`noBorder`,label:`No Border`},{value:`noPadding`,label:`No Padding`}];ngOnInit(){this.restore()}restore(){this.title=void 0,this.content=void 0,this.height=void 0,this.properties=[]}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-container-labs`]],standalone:!1,decls:13,vars:10,consts:[[`f`,`ngForm`],[3,`p-title`,`p-height`,`p-no-border`,`p-no-padding`],[1,`po-row`],[`name`,`title`,`p-label`,`Titulo`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-label`,`Height`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`content`,`p-label`,`Content`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let c=YO();Qc(0,`po-container`,1),Sk(1),Kg(),vu(2,`po-divider`),Qc(3,`form`,null,0)(5,`div`,2)(6,`po-input`,3),z0(),Kb(`ngModelChange`,function(s){return B_(c),Tk(i.title,s)||(i.title=s),U_(s)}),Kg(),Qc(7,`po-number`,4),z0(),Kb(`ngModelChange`,function(s){return B_(c),Tk(i.height,s)||(i.height=s),U_(s)}),Kg(),Qc(8,`po-checkbox-group`,5),z0(),Kb(`ngModelChange`,function(s){return B_(c),Tk(i.properties,s)||(i.properties=s),U_(s)}),Kg()(),Qc(9,`div`,2)(10,`po-textarea`,6),z0(),Kb(`ngModelChange`,function(s){return B_(c),Tk(i.content,s)||(i.content=s),U_(s)}),Kg()(),Qc(11,`div`,2)(12,`po-button`,7),vt(`p-click`,function(){return i.restore()}),Kg()()()}a&2&&(Rb(`p-title`,i.title)(`p-height`,i.height)(`p-no-border`,i.properties.includes(`noBorder`))(`p-no-padding`,i.properties.includes(`noPadding`)),wg(),tm(` `,i.content,`
`),wg(5),Yb(`ngModel`,i.title),W0(),wg(),Yb(`ngModel`,i.height),W0(),wg(),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),W0(),wg(2),Yb(`ngModel`,i.content),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Fc,Nf,I4,j4,Goe,Zoe],encapsulation:2,changeDetection:1})}return o})();var Ve=o=>({"docs-sample-code-tabs":o});var ve=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-container-labs-view`]],standalone:!1,decls:32,vars:6,consts:[[`id`,`sample-po-container-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-container-labs/sample-po-container-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-container-labs/sample-po-container-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Container Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-container-labs/sample-po-container-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-container
  [p-title]="title"
  [p-height]="height"
  [p-no-border]="properties.includes('noBorder')"
  [p-no-padding]="properties.includes('noPadding')"
>
  `),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` content `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`
</po-container>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-4" name="title" [(ngModel)]="title" p-label="Titulo"> </po-input>

    <po-number class="po-md-4" name="height" [(ngModel)]="height" p-label="Height"> </po-number>

    <po-checkbox-group
      class="po-md-4"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" [(ngModel)]="content" name="content" p-label="Content"> </po-textarea>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Kg()()()(),Qc(22,`po-tab`,9)(23,`div`)(24,`label`,6),Sk(25,`sample-po-container-labs/sample-po-container-labs.component.ts`),Kg(),Qc(26,`div`,10)(27,`pre`,11),Sk(28,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-container-labs',
  templateUrl: './sample-po-container-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContainerLabsComponent implements OnInit {
  content: string;
  title: string;
  height: number;
  properties: Array<string>;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'noBorder', label: 'No Border' },
    { value: 'noPadding', label: 'No Padding' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.title = undefined;
    this.content = undefined;
    this.height = undefined;
    this.properties = [];
  }
}
`),Kg()()()()()(),Qc(29,`div`,12),vu(30,`sample-po-container-labs`),Kg(),vu(31,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ve,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,fe],encapsulation:2,changeDetection:1})}return o})();var Z=(()=>{class o{getColumns(){return[{property:`cities`,label:`Cities that most downloaded PO`},{property:`packageVersion`,label:`Package version`},{property:`downloads`}]}getItems(){return[{cities:`São Paulo`,packageVersion:`3.0.0-beta.1`,downloads:`2000`},{cities:`Joinville`,packageVersion:`2.9.1`,downloads:`1000`},{cities:`Rio de Janeiro`,packageVersion:`3.0.0`,downloads:`250`},{cities:`Santa Catarina`,packageVersion:`1.9.1`,downloads:`100`},{cities:`Curitiba`,packageVersion:`2.0.0-beta.2`,downloads:`1040`},{cities:`Goiania`,packageVersion:`1.9.1`,downloads:`250`},{cities:`Londrina`,packageVersion:`1.9.1`,downloads:`35`},{cities:`Belo Horizonte`,packageVersion:`1.9.1`,downloads:`1100`}]}static ɵfac=function(a){return new(a||o)};static ɵprov=R({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var Be=[`formShare`];var Ee=(()=>{class o{poNotification=p(Ru);sampleDashboardService=p(Z);formShare;poModal;columns;email=void 0;isSubscribed=!1;items;actions=[{label:`Share`,action:this.modalOpen.bind(this),icon:`an an-share`},{label:`Disable notification`,icon:`an an-bell`,action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:`Home`,link:`/`},{label:`Dashboard`}]};cancelAction={action:()=>{this.modalClose()},label:`Cancel`};shareAction={action:()=>{this.share()},label:`Share`};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}ngAfterContentChecked(){this.shareAction.danger=this.formShare.invalid}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error(`Invalid email.`),this.modalClose()}disableNotification(){this.isSubscribed=!0}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-container-dashboard`]],viewQuery:function(a,i){if(a&1&&Du(Be,7)(ia,5),a&2){let c;No(c=xo())&&(i.formShare=c.first),No(c=xo())&&(i.poModal=c.first)}},standalone:!1,features:[we$1([Z])],decls:38,vars:8,consts:[[`formShare`,`ngForm`],[`p-title`,`Dashboard`,3,`p-actions`,`p-breadcrumb`],[1,`po-lg-6`],[`p-title`,`Daily visitors`,1,`po-lg-6`,`po-mb-1`],[1,`po-font-subtitle`,`po-text-center`],[1,`po-text-center`,`sample-container-dashboard`],[`p-title`,`Most viewed page`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`Website status`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`NPM downloads`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`Devforum PO questions`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`Angular versions supported`,1,`po-lg-6`,`po-mb-1`],[`p-striped`,`true`,3,`p-columns`,`p-items`,`p-hide-table-search`],[`p-title`,`Share webpage`,3,`p-primary-action`,`p-secondary-action`],[`name`,`email`,`p-clean`,``,`p-label`,`Type an e-mail for sharing webpage: http://www.po.com.br`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`]],template:function(a,i){if(a&1){let c=YO();Qc(0,`po-page-default`,1)(1,`po-container`,2)(2,`po-widget`,3)(3,`div`,4),Sk(4,`540`),Kg(),Qc(5,`div`,5),Sk(6,`www.po.com.br`),Kg()(),Qc(7,`po-widget`,6)(8,`div`,4),Sk(9,`300 views`),Kg(),Qc(10,`div`,5),Sk(11,`https://po-ui.io`),Kg()(),Qc(12,`po-widget`,7)(13,`div`,4),Sk(14,`Online`),Kg(),Qc(15,`div`,5),Sk(16,`21 days`),Kg()(),Qc(17,`po-widget`,8)(18,`div`,4),Sk(19,`266`),Kg(),Qc(20,`div`,5),Sk(21,`@po-ui/ng-components - 2.0.0`),Kg()(),Qc(22,`po-widget`,9)(23,`div`,4),Sk(24,`800 questions`),Kg(),Qc(25,`div`,5),Sk(26,`https://devforum.po.com.br`),Kg()(),Qc(27,`po-widget`,10)(28,`div`,4),Sk(29,`AngularJS - Angular 7`),Kg(),Qc(30,`div`,5),Sk(31,`Angular 7 most downloaded`),Kg()()(),Qc(32,`po-container`,2),vu(33,`po-table`,11),Kg()(),Qc(34,`po-modal`,12)(35,`form`,null,0)(37,`po-email`,13),z0(),Kb(`ngModelChange`,function(s){return B_(c),Tk(i.email,s)||(i.email=s),U_(s)}),Kg()()()}a&2&&(Rb(`p-actions`,i.actions)(`p-breadcrumb`,i.breadcrumb),wg(33),Rb(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),wg(),Rb(`p-primary-action`,i.shareAction)(`p-secondary-action`,i.cancelAction),wg(3),Yb(`ngModel`,i.email),W0())},dependencies:[AZ,MZ,TZ,QL,WL,Fc,p5,ia,Mze,q4,bae],styles:[`.sample-container-dashboard[_ngcontent-%COMP%]{color:#9da7a9;font-family:NunitoSans;font-size:14px}`],changeDetection:1})}return o})();var Ie=o=>({"docs-sample-code-tabs":o});var xe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-container-dashboard-view`]],standalone:!1,decls:38,vars:6,consts:[[`id`,`sample-po-container-dashboard`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-container-dashboard/sample-po-container-dashboard.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-container-dashboard/sample-po-container-dashboard.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-container-dashboard/sample-po-container-dashboard.service.ts`,1,`docs-code-block`],[`p-label`,`CSS`],[`data-file`,`sample-po-container-dashboard/sample-po-container-dashboard.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Container - Dashboard`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-container-dashboard/sample-po-container-dashboard.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-default p-title="Dashboard" [p-actions]="actions" [p-breadcrumb]="breadcrumb">
  <po-container class="po-lg-6">
    <po-widget class="po-lg-6 po-mb-1" p-title="Daily visitors">
      <div class="po-font-subtitle po-text-center">540</div>
      <div class="po-text-center sample-container-dashboard">www.po.com.br</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="Most viewed page">
      <div class="po-font-subtitle po-text-center">300 views</div>
      <div class="po-text-center sample-container-dashboard">https://po-ui.io</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="Website status">
      <div class="po-font-subtitle po-text-center">Online</div>
      <div class="po-text-center sample-container-dashboard">21 days</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="NPM downloads">
      <div class="po-font-subtitle po-text-center">266</div>
      <div class="po-text-center sample-container-dashboard">&#64;po-ui/ng-components - 2.0.0</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="Devforum PO questions">
      <div class="po-font-subtitle po-text-center">800 questions</div>
      <div class="po-text-center sample-container-dashboard">https://devforum.po.com.br</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="Angular versions supported">
      <div class="po-font-subtitle po-text-center">AngularJS - Angular 7</div>
      <div class="po-text-center sample-container-dashboard">Angular 7 most downloaded</div>
    </po-widget>
  </po-container>

  <po-container class="po-lg-6">
    <po-table [p-columns]="columns" [p-items]="items" p-striped="true" [p-hide-table-search]="false"> </po-table>
  </po-container>
</po-page-default>

<po-modal p-title="Share webpage" [p-primary-action]="shareAction" [p-secondary-action]="cancelAction">
  <form #formShare="ngForm">
    <po-email
      class="po-lg-12"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Type an e-mail for sharing webpage: http://www.po.com.br"
      p-required
    >
    </po-email>
  </form>
</po-modal>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-container-dashboard/sample-po-container-dashboard.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { AfterContentChecked, Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SampleDashboardService } from './sample-po-container-dashboard.service';

import {
  PoBreadcrumb,
  PoModalAction,
  PoModalComponent,
  PoNotificationService,
  PoPageAction,
  PoTableColumn
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-container-dashboard',
  templateUrl: './sample-po-container-dashboard.component.html',
  styleUrls: ['./sample-po-container-dashboard.component.css'],
  providers: [SampleDashboardService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContainerDashboardComponent implements AfterContentChecked, OnInit {
  private poNotification = inject(PoNotificationService);
  private sampleDashboardService = inject(SampleDashboardService);

  @ViewChild('formShare', { static: true }) formShare: NgForm;
  @ViewChild(PoModalComponent) poModal: PoModalComponent;

  columns: Array<PoTableColumn>;
  email: string = undefined;
  isSubscribed: boolean = false;
  items: Array<object>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Share', action: this.modalOpen.bind(this), icon: 'an an-share' },
    {
      label: 'Disable notification',
      icon: 'an an-bell',
      action: this.disableNotification.bind(this),
      disabled: () => this.isSubscribed
    }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Dashboard' }]
  };

  public readonly cancelAction: PoModalAction = {
    action: () => {
      this.modalClose();
    },
    label: 'Cancel'
  };

  public readonly shareAction: PoModalAction = {
    action: () => {
      this.share();
    },
    label: 'Share'
  };

  ngOnInit() {
    this.columns = this.sampleDashboardService.getColumns();
    this.items = this.sampleDashboardService.getItems();
  }

  ngAfterContentChecked() {
    this.shareAction.danger = this.formShare.invalid;
  }

  modalClose() {
    this.poModal.close();
    this.formShare.reset();
  }

  modalOpen() {
    this.poModal.open();
  }

  share() {
    if (this.formShare.valid) {
      this.poNotification.success(\`Webpage shared successfully to: \${this.email}.\`);
    } else {
      this.poNotification.error(\`Invalid email.\`);
    }
    this.modalClose();
  }

  private disableNotification() {
    this.isSubscribed = true;
  }
}
`),Kg()(),Qc(23,`label`,6),Sk(24,`sample-po-container-dashboard/sample-po-container-dashboard.service.ts`),Kg(),Qc(25,`div`,12)(26,`pre`,11),Sk(27,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SampleDashboardService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'cities', label: 'Cities that most downloaded PO' },
      { property: 'packageVersion', label: 'Package version' },
      { property: 'downloads' }
    ];
  }

  getItems() {
    return [
      { cities: 'S\xE3o Paulo', packageVersion: '3.0.0-beta.1', downloads: '2000' },
      { cities: 'Joinville', packageVersion: '2.9.1', downloads: '1000' },
      { cities: 'Rio de Janeiro', packageVersion: '3.0.0', downloads: '250' },
      { cities: 'Santa Catarina', packageVersion: '1.9.1', downloads: '100' },
      { cities: 'Curitiba', packageVersion: '2.0.0-beta.2', downloads: '1040' },
      { cities: 'Goiania', packageVersion: '1.9.1', downloads: '250' },
      { cities: 'Londrina', packageVersion: '1.9.1', downloads: '35' },
      { cities: 'Belo Horizonte', packageVersion: '1.9.1', downloads: '1100' }
    ];
  }
}
`),Kg()()()(),Qc(28,`po-tab`,13)(29,`div`)(30,`label`,6),Sk(31,`sample-po-container-dashboard/sample-po-container-dashboard.component.css`),Kg(),Qc(32,`div`,14)(33,`pre`,15),Sk(34,`.sample-container-dashboard {
  color: #9da7a9;
  font-family: NunitoSans;
  font-size: 14px;
}
`),Kg()()()()()(),Qc(35,`div`,16),vu(36,`sample-po-container-dashboard`),Kg(),vu(37,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ie,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ee],encapsulation:2,changeDetection:1})}return o})();var we=(()=>{class o{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-container-doc`]],standalone:!1,decls:277,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-container-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-height`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-no-border`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-no-padding`,1,`docs-api-properties-row`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(a,i){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoContainerModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente `),Qc(7,`code`),Sk(8,`po-container`),Kg(),Sk(9,`.`),Kg()(),Qc(10,`h3`,3),Sk(11,`Componente`),Kg(),Qc(12,`h4`,4)(13,`code`,5),Sk(14,`PoContainerComponent`),Kg()(),Qc(15,`div`,2)(16,`p`),Sk(17,`O `),Qc(18,`code`),Sk(19,`po-container`),Kg(),Sk(20,` \xE9 um componente que visa facilitar o agrupamento de conte\xFAdos.
Por padr\xE3o o mesmo exibe uma borda, um efeito de sombra ao seu redor e um espa\xE7amento em sua parte interna, os quais
podem ser desabilitados. Ao remover sua borda a sombra tamb\xE9m ser\xE1 removida. Al\xE9m disso, sua altura acompanha a
quantidade do conte\xFAdo, por\xE9m pode ser fixada. Para controlar sua largura, utilize o `),Qc(21,`a`,6),Sk(22,`Grid System`),Kg(),Sk(23,`,
assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),Kg(),Qc(24,`h4`),Sk(25,`Tokens customizáveis`),Kg(),Qc(26,`p`),Sk(27,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(28,`blockquote`)(29,`p`),Sk(30,`Para maiores informações, acesse o guia `),Qc(31,`a`,7),Sk(32,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(33,`.`),Kg()(),Qc(34,`table`)(35,`thead`)(36,`tr`)(37,`th`),Sk(38,`Propriedade`),Kg(),Qc(39,`th`),Sk(40,`Descrição`),Kg(),Qc(41,`th`),Sk(42,`Valor Padrão`),Kg()()(),Qc(43,`tbody`)(44,`tr`)(45,`td`)(46,`strong`),Sk(47,`Default Values - CONTENT`),Kg()(),vu(48,`td`)(49,`td`),Kg(),Qc(50,`tr`)(51,`td`)(52,`code`),Sk(53,`--padding`),Kg(),Sk(54,` \xA0`),Kg(),Qc(55,`td`),Sk(56,`Preenchimento`),Kg(),Qc(57,`td`)(58,`code`),Sk(59,`var(--spacing-sm)`),Kg()()(),Qc(60,`tr`)(61,`td`)(62,`code`),Sk(63,`--border-radius`),Kg(),Sk(64,` \xA0`),Kg(),Qc(65,`td`),Sk(66,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Qc(67,`td`)(68,`code`),Sk(69,`var(--border-radius-md)`),Kg()()(),Qc(70,`tr`)(71,`td`)(72,`code`),Sk(73,`--border-width`),Kg(),Sk(74,` \xA0`),Kg(),Qc(75,`td`),Sk(76,`Contém o valor da largura dos cantos do elemento\xA0`),Kg(),Qc(77,`td`)(78,`code`),Sk(79,`var(--border-width-sm)`),Kg()()(),Qc(80,`tr`)(81,`td`)(82,`code`),Sk(83,`--border-color`),Kg(),Sk(84,` \xA0`),Kg(),Qc(85,`td`),Sk(86,`Cor da borda`),Kg(),Qc(87,`td`)(88,`code`),Sk(89,`var(--color-neutral-light-20)`),Kg()()(),Qc(90,`tr`)(91,`td`)(92,`code`),Sk(93,`--background`),Kg(),Sk(94,` \xA0`),Kg(),Qc(95,`td`),Sk(96,`Cor de background`),Kg(),Qc(97,`td`)(98,`code`),Sk(99,`var(--color-neutral-light-00)`),Kg()()(),Qc(100,`tr`)(101,`td`)(102,`strong`),Sk(103,`Default Values - TITLE`),Kg()(),vu(104,`td`)(105,`td`),Kg(),Qc(106,`tr`)(107,`td`)(108,`code`),Sk(109,`--font-family`),Kg(),Sk(110,` \xA0`),Kg(),Qc(111,`td`),Sk(112,`Font aplicado ao titulo`),Kg(),Qc(113,`td`)(114,`code`),Sk(115,`var(--font-family-theme)`),Kg()()(),Qc(116,`tr`)(117,`td`)(118,`code`),Sk(119,`--line-weight`),Kg(),Sk(120,` \xA0`),Kg(),Qc(121,`td`),Sk(122,`Espessura da Fonte a ser aplicada do titulo`),Kg(),Qc(123,`td`)(124,`code`),Sk(125,`var(--font-weight-semibold)`),Kg()()(),Qc(126,`tr`)(127,`td`)(128,`code`),Sk(129,`--line-height`),Kg(),Sk(130,` \xA0`),Kg(),Qc(131,`td`),Sk(132,`tamanho da linha do titulo`),Kg(),Qc(133,`td`)(134,`code`),Sk(135,`var(--line-height-md)`),Kg()()(),Qc(136,`tr`)(137,`td`)(138,`code`),Sk(139,`--text-color`),Kg(),Sk(140,` \xA0`),Kg(),Qc(141,`td`),Sk(142,`Cor do Texto do titulo`),Kg(),Qc(143,`td`)(144,`code`),Sk(145,`var(--color-neutral-dark-90)`),Kg()()(),Qc(146,`tr`)(147,`td`)(148,`code`),Sk(149,`--font-size`),Kg(),Sk(150,` \xA0`),Kg(),Qc(151,`td`),Sk(152,`Tamanho da fonte do titulo`),Kg(),Qc(153,`td`)(154,`code`),Sk(155,`1.125rem`),Kg()()(),Qc(156,`tr`)(157,`td`)(158,`code`),Sk(159,`--letter-spacing`),Kg(),Sk(160,` \xA0`),Kg(),Qc(161,`td`),Sk(162,`distancia entre letras do titulo`),Kg(),Qc(163,`td`)(164,`code`),Sk(165,`0.017rem`),Kg()()(),Qc(166,`tr`)(167,`td`)(168,`code`),Sk(169,`--margin`),Kg(),Sk(170,` \xA0`),Kg(),Qc(171,`td`),Sk(172,`Margin entre o titulo e o conteudo`),Kg(),Qc(173,`td`)(174,`code`),Sk(175,`0 0 var(--spacing-xs)`),Kg()()()()()(),Qc(176,`div`,8)(177,`h4`,9),Sk(178,`Seletor`),Kg(),Qc(179,`pre`,10),Sk(180,`<po-container
    p-height="number"
    p-no-border="boolean"
    p-no-padding="boolean"
    p-title="string" >
</po-container>
`),Kg()(),Qc(181,`h4`,11),Sk(182,`Propriedades`),Kg(),Qc(183,`table`,12)(184,`tr`,13)(185,`th`,14),Sk(186,`Nome`),Kg(),Qc(187,`th`,14),Sk(188,`Tipo`),Kg(),Qc(189,`th`,14),Sk(190,`Padrão`),Kg(),Qc(191,`th`,14),Sk(192,`Descrição`),Kg()(),Qc(193,`tr`,15)(194,`td`,16)(195,`div`,17)(196,`span`,18),Sk(197,` p-height`),vu(198,`br`),Kg()()(),Qc(199,`td`,19)(200,`code`,20),Sk(201,`number`),Kg()(),Qc(202,`td`,21),Sk(203,`-`),Kg(),Qc(204,`td`,22)(205,`em`)(206,`strong`),Sk(207,`(opcional)`),Kg()(),Qc(208,`p`),Sk(209,`Define a altura do `),Qc(210,`code`),Sk(211,`po-container`),Kg(),Sk(212,`.`),Kg(),Qc(213,`blockquote`)(214,`p`),Sk(215,`Caso não seja definido um valor, a altura se ajustará de acordo com o conteúdo.`),Kg()()()(),Qc(216,`tr`,23)(217,`td`,16)(218,`div`,17)(219,`span`,18),Sk(220,` p-no-border`),vu(221,`br`),Kg()()(),Qc(222,`td`,19)(223,`code`,24),Sk(224,`boolean`),Kg()(),Qc(225,`td`,21)(226,`p`)(227,`code`),Sk(228,`false`),Kg()()(),Qc(229,`td`,22)(230,`em`)(231,`strong`),Sk(232,`(opcional)`),Kg()(),Qc(233,`p`),Sk(234,`Desabilita a borda e a sombra em torno do `),Qc(235,`code`),Sk(236,`po-container`),Kg(),Sk(237,`.`),Kg()()(),Qc(238,`tr`,25)(239,`td`,16)(240,`div`,17)(241,`span`,18),Sk(242,` p-no-padding`),vu(243,`br`),Kg()()(),Qc(244,`td`,19)(245,`code`,24),Sk(246,`boolean`),Kg()(),Qc(247,`td`,21)(248,`p`)(249,`code`),Sk(250,`false`),Kg()()(),Qc(251,`td`,22)(252,`em`)(253,`strong`),Sk(254,`(opcional)`),Kg()(),Qc(255,`p`),Sk(256,`Desabilita o espaçamento interno do `),Qc(257,`code`),Sk(258,`po-container`),Kg(),Sk(259,`.`),Kg()()(),Qc(260,`tr`,26)(261,`td`,16)(262,`div`,17)(263,`span`,18),Sk(264,` p-title`),vu(265,`br`),Kg()()(),Qc(266,`td`,19)(267,`code`,27),Sk(268,`string`),Kg()(),Qc(269,`td`,21),Sk(270,`-`),Kg(),Qc(271,`td`,22)(272,`em`)(273,`strong`),Sk(274,`(opcional)`),Kg()(),Qc(275,`p`),Sk(276,`Título do Container.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Fe(o,qe){if(o&1){let r=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(r);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-container-basic-view`)(2,`sample-po-container-labs-view`)(3,`sample-po-container-dashboard-view`),Kg()}if(o&2){let r=ek();Rb(`p-active`,r.activeTab===`web`)}}var We=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Container`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Fe,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-container-doc`),Kg()()()),a&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,Se,ve,xe,we],encapsulation:2,changeDetection:1})}return o})()}];var ye=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[GV.forChild(We),GV]})}return o})();var Et=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[M,ye]})}return o})();export{Et as DocPoContainerModule};