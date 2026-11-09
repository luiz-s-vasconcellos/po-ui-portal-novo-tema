import{$n as Ak,Ar as Ig,Dt as Zoe,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Mze,Hi as ar,Hr as Me,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,Pt as bae,Ri as Zg,Rr as Kb,Sn as q4,Ti as W0,U as Nf,Vi as _u,Xr as No,Yi as eF,an as j4,di as RZ,dr as Cu,ea as ge$1,eo as xo,er as An,fi as Rb,gi as Tk,hi as TZ,j as I4,jr as JL,k as Goe,ka as qL,kr as I,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,rn as ia,tt as Ru,ui as R,va as nk,vn as oi,w as Fc,wa as p,xi as VO,ya as nm,yi as U_,yn as p5}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var he=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-container-basic`]],standalone:!1,decls:1,vars:0,template:function(a,i){a&1&&_u(0,`po-container`)},dependencies:[Fc],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o});var ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-container-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Container Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-container-basic/sample-po-container-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-container></po-container>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-container-basic/sample-po-container-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-container-basic',
  templateUrl: './sample-po-container-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContainerBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-container-basic`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ye,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,he],encapsulation:2,changeDetection:1})}return o})();var Ce=(()=>{class o{content;title;height;properties;propertiesOptions=[{value:`noBorder`,label:`No Border`},{value:`noPadding`,label:`No Padding`}];ngOnInit(){this.restore()}restore(){this.title=void 0,this.content=void 0,this.height=void 0,this.properties=[]}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-container-labs`]],standalone:!1,decls:13,vars:10,consts:[[`f`,`ngForm`],[3,`p-title`,`p-height`,`p-no-border`,`p-no-padding`],[1,`po-row`],[`name`,`title`,`p-label`,`Titulo`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-label`,`Height`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`content`,`p-label`,`Content`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let c=ZO();Jc(0,`po-container`,1),Tk(1),Zg(),_u(2,`po-divider`),Jc(3,`form`,null,0)(5,`div`,2)(6,`po-input`,3),W0(),Kb(`ngModelChange`,function(s){return U_(c),Ak(i.title,s)||(i.title=s),H_(s)}),Zg(),Jc(7,`po-number`,4),W0(),Kb(`ngModelChange`,function(s){return U_(c),Ak(i.height,s)||(i.height=s),H_(s)}),Zg(),Jc(8,`po-checkbox-group`,5),W0(),Kb(`ngModelChange`,function(s){return U_(c),Ak(i.properties,s)||(i.properties=s),H_(s)}),Zg()(),Jc(9,`div`,2)(10,`po-textarea`,6),W0(),Kb(`ngModelChange`,function(s){return U_(c),Ak(i.content,s)||(i.content=s),H_(s)}),Zg()(),Jc(11,`div`,2)(12,`po-button`,7),vt(`p-click`,function(){return i.restore()}),Zg()()()}a&2&&(Rb(`p-title`,i.title)(`p-height`,i.height)(`p-no-border`,i.properties.includes(`noBorder`))(`p-no-padding`,i.properties.includes(`noPadding`)),Ig(),nm(` `,i.content,`
`),Ig(5),Yb(`ngModel`,i.title),Y0(),Ig(),Yb(`ngModel`,i.height),Y0(),Ig(),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),Y0(),Ig(2),Yb(`ngModel`,i.content),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Fc,Nf,I4,j4,Goe,Zoe],encapsulation:2,changeDetection:1})}return o})();var _e=o=>({"docs-sample-code-tabs":o});var Se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-container-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Container Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-container-labs/sample-po-container-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-container
  [p-title]="title"
  [p-height]="height"
  [p-no-border]="properties.includes('noBorder')"
  [p-no-padding]="properties.includes('noPadding')"
>
  { { content }}
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-container-labs/sample-po-container-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-container-labs`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,_e,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Ce],encapsulation:2,changeDetection:1})}return o})();var K=(()=>{class o{getColumns(){return[{property:`cities`,label:`Cities that most downloaded PO`},{property:`packageVersion`,label:`Package version`},{property:`downloads`}]}getItems(){return[{cities:`São Paulo`,packageVersion:`3.0.0-beta.1`,downloads:`2000`},{cities:`Joinville`,packageVersion:`2.9.1`,downloads:`1000`},{cities:`Rio de Janeiro`,packageVersion:`3.0.0`,downloads:`250`},{cities:`Santa Catarina`,packageVersion:`1.9.1`,downloads:`100`},{cities:`Curitiba`,packageVersion:`2.0.0-beta.2`,downloads:`1040`},{cities:`Goiania`,packageVersion:`1.9.1`,downloads:`250`},{cities:`Londrina`,packageVersion:`1.9.1`,downloads:`35`},{cities:`Belo Horizonte`,packageVersion:`1.9.1`,downloads:`1100`}]}static ɵfac=function(a){return new(a||o)};static ɵprov=R({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var Ve=[`formShare`];var fe=(()=>{class o{poNotification=p(Ru);sampleDashboardService=p(K);formShare;poModal;columns;email=void 0;isSubscribed=!1;items;actions=[{label:`Share`,action:this.modalOpen.bind(this),icon:`an an-share`},{label:`Disable notification`,icon:`an an-bell`,action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:`Home`,link:`/`},{label:`Dashboard`}]};cancelAction={action:()=>{this.modalClose()},label:`Cancel`};shareAction={action:()=>{this.share()},label:`Share`};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}ngAfterContentChecked(){this.shareAction.danger=this.formShare.invalid}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error(`Invalid email.`),this.modalClose()}disableNotification(){this.isSubscribed=!0}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-container-dashboard`]],viewQuery:function(a,i){if(a&1&&Cu(Ve,7)(ia,5),a&2){let c;No(c=xo())&&(i.formShare=c.first),No(c=xo())&&(i.poModal=c.first)}},standalone:!1,features:[Me([K])],decls:38,vars:8,consts:[[`formShare`,`ngForm`],[`p-title`,`Dashboard`,3,`p-actions`,`p-breadcrumb`],[1,`po-lg-6`],[`p-title`,`Daily visitors`,1,`po-lg-6`,`po-mb-1`],[1,`po-font-subtitle`,`po-text-center`],[1,`po-text-center`,`sample-container-dashboard`],[`p-title`,`Most viewed page`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`Website status`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`NPM downloads`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`Devforum PO questions`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`Angular versions supported`,1,`po-lg-6`,`po-mb-1`],[`p-striped`,`true`,3,`p-columns`,`p-items`,`p-hide-table-search`],[`p-title`,`Share webpage`,3,`p-primary-action`,`p-secondary-action`],[`name`,`email`,`p-clean`,``,`p-label`,`Type an e-mail for sharing webpage: http://www.po.com.br`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`]],template:function(a,i){if(a&1){let c=ZO();Jc(0,`po-page-default`,1)(1,`po-container`,2)(2,`po-widget`,3)(3,`div`,4),Tk(4,`540`),Zg(),Jc(5,`div`,5),Tk(6,`www.po.com.br`),Zg()(),Jc(7,`po-widget`,6)(8,`div`,4),Tk(9,`300 views`),Zg(),Jc(10,`div`,5),Tk(11,`https://po-ui.io`),Zg()(),Jc(12,`po-widget`,7)(13,`div`,4),Tk(14,`Online`),Zg(),Jc(15,`div`,5),Tk(16,`21 days`),Zg()(),Jc(17,`po-widget`,8)(18,`div`,4),Tk(19,`266`),Zg(),Jc(20,`div`,5),Tk(21,`@po-ui/ng-components - 2.0.0`),Zg()(),Jc(22,`po-widget`,9)(23,`div`,4),Tk(24,`800 questions`),Zg(),Jc(25,`div`,5),Tk(26,`https://devforum.po.com.br`),Zg()(),Jc(27,`po-widget`,10)(28,`div`,4),Tk(29,`AngularJS - Angular 7`),Zg(),Jc(30,`div`,5),Tk(31,`Angular 7 most downloaded`),Zg()()(),Jc(32,`po-container`,2),_u(33,`po-table`,11),Zg()(),Jc(34,`po-modal`,12)(35,`form`,null,0)(37,`po-email`,13),W0(),Kb(`ngModelChange`,function(s){return U_(c),Ak(i.email,s)||(i.email=s),H_(s)}),Zg()()()}a&2&&(Rb(`p-actions`,i.actions)(`p-breadcrumb`,i.breadcrumb),Ig(33),Rb(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),Ig(),Rb(`p-primary-action`,i.shareAction)(`p-secondary-action`,i.cancelAction),Ig(3),Yb(`ngModel`,i.email),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,Fc,p5,ia,Mze,q4,bae],styles:[`.sample-container-dashboard[_ngcontent-%COMP%]{color:#9da7a9;font-family:NunitoSans;font-size:14px}`],changeDetection:1})}return o})();var Be=o=>({"docs-sample-code-tabs":o});var ve=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-container-dashboard-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Container - Dashboard`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-container-dashboard/sample-po-container-dashboard.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-default p-title="Dashboard" [p-actions]="actions" [p-breadcrumb]="breadcrumb">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-container-dashboard/sample-po-container-dashboard.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { AfterContentChecked, Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-container-dashboard/sample-po-container-dashboard.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { Injectable } from '@angular/core';

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
`),Zg()()(),Jc(25,`po-tab`,10)(26,`div`)(27,`label`,6),Tk(28,`sample-po-container-dashboard/sample-po-container-dashboard.component.css`),Zg(),Jc(29,`pre`,11),Tk(30,`.sample-container-dashboard {
  color: #9da7a9;
  font-family: NunitoSans;
  font-size: 14px;
}
`),Zg()()()()(),Jc(31,`div`,12),_u(32,`sample-po-container-dashboard`),Zg(),_u(33,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Be,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,fe],encapsulation:2,changeDetection:1})}return o})();var Ee=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-container-doc`]],standalone:!1,decls:277,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(a,i){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoContainerModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente `),Jc(7,`code`),Tk(8,`po-container`),Zg(),Tk(9,`.`),Zg()(),Jc(10,`h3`,3),Tk(11,`Componente`),Zg(),Jc(12,`h4`,4)(13,`code`,5),Tk(14,`PoContainerComponent`),Zg()(),Jc(15,`div`,2)(16,`p`),Tk(17,`O `),Jc(18,`code`),Tk(19,`po-container`),Zg(),Tk(20,` \xE9 um componente que visa facilitar o agrupamento de conte\xFAdos.
Por padr\xE3o o mesmo exibe uma borda, um efeito de sombra ao seu redor e um espa\xE7amento em sua parte interna, os quais
podem ser desabilitados. Ao remover sua borda a sombra tamb\xE9m ser\xE1 removida. Al\xE9m disso, sua altura acompanha a
quantidade do conte\xFAdo, por\xE9m pode ser fixada. Para controlar sua largura, utilize o `),Jc(21,`a`,6),Tk(22,`Grid System`),Zg(),Tk(23,`,
assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),Zg(),Jc(24,`h4`),Tk(25,`Tokens customizáveis`),Zg(),Jc(26,`p`),Tk(27,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(28,`blockquote`)(29,`p`),Tk(30,`Para maiores informações, acesse o guia `),Jc(31,`a`,7),Tk(32,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(33,`.`),Zg()(),Jc(34,`table`)(35,`thead`)(36,`tr`)(37,`th`),Tk(38,`Propriedade`),Zg(),Jc(39,`th`),Tk(40,`Descrição`),Zg(),Jc(41,`th`),Tk(42,`Valor Padrão`),Zg()()(),Jc(43,`tbody`)(44,`tr`)(45,`td`)(46,`strong`),Tk(47,`Default Values - CONTENT`),Zg()(),_u(48,`td`)(49,`td`),Zg(),Jc(50,`tr`)(51,`td`)(52,`code`),Tk(53,`--padding`),Zg(),Tk(54,` \xA0`),Zg(),Jc(55,`td`),Tk(56,`Preenchimento`),Zg(),Jc(57,`td`)(58,`code`),Tk(59,`var(--spacing-sm)`),Zg()()(),Jc(60,`tr`)(61,`td`)(62,`code`),Tk(63,`--border-radius`),Zg(),Tk(64,` \xA0`),Zg(),Jc(65,`td`),Tk(66,`Contém o valor do raio dos cantos do elemento\xA0`),Zg(),Jc(67,`td`)(68,`code`),Tk(69,`var(--border-radius-md)`),Zg()()(),Jc(70,`tr`)(71,`td`)(72,`code`),Tk(73,`--border-width`),Zg(),Tk(74,` \xA0`),Zg(),Jc(75,`td`),Tk(76,`Contém o valor da largura dos cantos do elemento\xA0`),Zg(),Jc(77,`td`)(78,`code`),Tk(79,`var(--border-width-sm)`),Zg()()(),Jc(80,`tr`)(81,`td`)(82,`code`),Tk(83,`--border-color`),Zg(),Tk(84,` \xA0`),Zg(),Jc(85,`td`),Tk(86,`Cor da borda`),Zg(),Jc(87,`td`)(88,`code`),Tk(89,`var(--color-neutral-light-20)`),Zg()()(),Jc(90,`tr`)(91,`td`)(92,`code`),Tk(93,`--background`),Zg(),Tk(94,` \xA0`),Zg(),Jc(95,`td`),Tk(96,`Cor de background`),Zg(),Jc(97,`td`)(98,`code`),Tk(99,`var(--color-neutral-light-00)`),Zg()()(),Jc(100,`tr`)(101,`td`)(102,`strong`),Tk(103,`Default Values - TITLE`),Zg()(),_u(104,`td`)(105,`td`),Zg(),Jc(106,`tr`)(107,`td`)(108,`code`),Tk(109,`--font-family`),Zg(),Tk(110,` \xA0`),Zg(),Jc(111,`td`),Tk(112,`Font aplicado ao titulo`),Zg(),Jc(113,`td`)(114,`code`),Tk(115,`var(--font-family-theme)`),Zg()()(),Jc(116,`tr`)(117,`td`)(118,`code`),Tk(119,`--line-weight`),Zg(),Tk(120,` \xA0`),Zg(),Jc(121,`td`),Tk(122,`Espessura da Fonte a ser aplicada do titulo`),Zg(),Jc(123,`td`)(124,`code`),Tk(125,`var(--font-weight-semibold)`),Zg()()(),Jc(126,`tr`)(127,`td`)(128,`code`),Tk(129,`--line-height`),Zg(),Tk(130,` \xA0`),Zg(),Jc(131,`td`),Tk(132,`tamanho da linha do titulo`),Zg(),Jc(133,`td`)(134,`code`),Tk(135,`var(--line-height-md)`),Zg()()(),Jc(136,`tr`)(137,`td`)(138,`code`),Tk(139,`--text-color`),Zg(),Tk(140,` \xA0`),Zg(),Jc(141,`td`),Tk(142,`Cor do Texto do titulo`),Zg(),Jc(143,`td`)(144,`code`),Tk(145,`var(--color-neutral-dark-90)`),Zg()()(),Jc(146,`tr`)(147,`td`)(148,`code`),Tk(149,`--font-size`),Zg(),Tk(150,` \xA0`),Zg(),Jc(151,`td`),Tk(152,`Tamanho da fonte do titulo`),Zg(),Jc(153,`td`)(154,`code`),Tk(155,`1.125rem`),Zg()()(),Jc(156,`tr`)(157,`td`)(158,`code`),Tk(159,`--letter-spacing`),Zg(),Tk(160,` \xA0`),Zg(),Jc(161,`td`),Tk(162,`distancia entre letras do titulo`),Zg(),Jc(163,`td`)(164,`code`),Tk(165,`0.017rem`),Zg()()(),Jc(166,`tr`)(167,`td`)(168,`code`),Tk(169,`--margin`),Zg(),Tk(170,` \xA0`),Zg(),Jc(171,`td`),Tk(172,`Margin entre o titulo e o conteudo`),Zg(),Jc(173,`td`)(174,`code`),Tk(175,`0 0 var(--spacing-xs)`),Zg()()()()()(),Jc(176,`div`,8)(177,`h4`,9),Tk(178,`Seletor`),Zg(),Jc(179,`pre`,10),Tk(180,`<po-container
    p-height="number"
    p-no-border="boolean"
    p-no-padding="boolean"
    p-title="string" >
</po-container>
`),Zg()(),Jc(181,`h4`,11),Tk(182,`Propriedades`),Zg(),Jc(183,`table`,12)(184,`tr`,13)(185,`th`,14),Tk(186,`Nome`),Zg(),Jc(187,`th`,14),Tk(188,`Tipo`),Zg(),Jc(189,`th`,14),Tk(190,`Padrão`),Zg(),Jc(191,`th`,14),Tk(192,`Descrição`),Zg()(),Jc(193,`tr`,15)(194,`td`,16)(195,`div`,17)(196,`span`,18),Tk(197,` p-height`),_u(198,`br`),Zg()()(),Jc(199,`td`,19)(200,`code`,20),Tk(201,`number`),Zg()(),Jc(202,`td`,21),Tk(203,`-`),Zg(),Jc(204,`td`,22)(205,`em`)(206,`strong`),Tk(207,`(opcional)`),Zg()(),Jc(208,`p`),Tk(209,`Define a altura do `),Jc(210,`code`),Tk(211,`po-container`),Zg(),Tk(212,`.`),Zg(),Jc(213,`blockquote`)(214,`p`),Tk(215,`Caso não seja definido um valor, a altura se ajustará de acordo com o conteúdo.`),Zg()()()(),Jc(216,`tr`,15)(217,`td`,16)(218,`div`,17)(219,`span`,18),Tk(220,` p-no-border`),_u(221,`br`),Zg()()(),Jc(222,`td`,19)(223,`code`,23),Tk(224,`boolean`),Zg()(),Jc(225,`td`,21)(226,`p`)(227,`code`),Tk(228,`false`),Zg()()(),Jc(229,`td`,22)(230,`em`)(231,`strong`),Tk(232,`(opcional)`),Zg()(),Jc(233,`p`),Tk(234,`Desabilita a borda e a sombra em torno do `),Jc(235,`code`),Tk(236,`po-container`),Zg(),Tk(237,`.`),Zg()()(),Jc(238,`tr`,15)(239,`td`,16)(240,`div`,17)(241,`span`,18),Tk(242,` p-no-padding`),_u(243,`br`),Zg()()(),Jc(244,`td`,19)(245,`code`,23),Tk(246,`boolean`),Zg()(),Jc(247,`td`,21)(248,`p`)(249,`code`),Tk(250,`false`),Zg()()(),Jc(251,`td`,22)(252,`em`)(253,`strong`),Tk(254,`(opcional)`),Zg()(),Jc(255,`p`),Tk(256,`Desabilita o espaçamento interno do `),Jc(257,`code`),Tk(258,`po-container`),Zg(),Tk(259,`.`),Zg()()(),Jc(260,`tr`,15)(261,`td`,16)(262,`div`,17)(263,`span`,18),Tk(264,` p-title`),_u(265,`br`),Zg()()(),Jc(266,`td`,19)(267,`code`,24),Tk(268,`string`),Zg()(),Jc(269,`td`,21),Tk(270,`-`),Zg(),Jc(271,`td`,22)(272,`em`)(273,`strong`),Tk(274,`(opcional)`),Zg()(),Jc(275,`p`),Tk(276,`Título do Container.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Le(o,Fe){if(o&1){let l=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(l);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-container-basic-view`)(2,`sample-po-container-labs-view`)(3,`sample-po-container-dashboard-view`),Zg()}if(o&2){let l=nk();Rb(`p-active`,l.activeTab===`web`)}}var Oe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Container`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Le,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-container-doc`),Zg()()()),a&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,ge,Se,ve,Ee],encapsulation:2,changeDetection:1})}return o})()}];var we=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[WV.forChild(Oe),WV]})}return o})();var bt=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[M,we]})}return o})();export{bt as DocPoContainerModule};