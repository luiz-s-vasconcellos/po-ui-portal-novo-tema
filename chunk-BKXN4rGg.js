import{m as P,p as M}from"./main-MOTCU2CE.js";import{Ar as I,G as Nf,Ii as WL,Ir as Kb,L as Koe,Lr as Kg,Nn as tie,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,fn as lae,gi as Rb,go as z0,io as vu,ji as Vk,li as Qc,na as de$1,oo as wg,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,ua as ge$1,vi as Sk,wr as GV,xi as Tk,xr as FO,yr as Du}from"./chunk-DtUf9FxZ.js";var ae=(()=>{class n{srcImage=`https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg`;static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-image-basic`]],standalone:!1,decls:1,vars:1,consts:[[`p-alt`,`teste de imagem`,`p-height`,`300`,3,`p-src`]],template:function(a,i){a&1&&vu(0,`po-image`,0),a&2&&Rb(`p-src`,i.srcImage)},dependencies:[lae],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n});var pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-image-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-image-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-image-basic/sample-po-image-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-image-basic/sample-po-image-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Image Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-image-basic/sample-po-image-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-image [p-src]="srcImage" p-alt="teste de imagem" p-height="300"> </po-image>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-image-basic/sample-po-image-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-image-basic',
  templateUrl: './sample-po-image-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoImageBasicComponent {
  srcImage = 'https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg';
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-image-basic`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,fe,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ae],encapsulation:2,changeDetection:1})}return n})();var me=(()=>{class n{alt;height;src;ngOnInit(){this.restore()}restore(){this.alt=void 0,this.height=`auto`,this.src=void 0}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-image-labs`]],standalone:!1,decls:11,vars:6,consts:[[`f`,`ngForm`],[3,`p-src`,`p-alt`,`p-height`],[1,`po-row`],[`name`,`src`,`p-clean`,``,`p-label`,`Source`,`p-help`,`Enter a url or path of the image that will be displayed`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`alt`,`p-clean`,``,`p-label`,`Alternate`,`p-help`,`Alternative text for image description. Ex.: Po Ui logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-label`,`Height`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let d=YO();vu(0,`po-image`,1)(1,`po-divider`),Qc(2,`form`,null,0)(4,`div`,2)(5,`po-input`,3),z0(),Kb(`ngModelChange`,function(p){return B_(d),Tk(i.src,p)||(i.src=p),U_(p)}),Kg(),Qc(6,`po-input`,4),z0(),Kb(`ngModelChange`,function(p){return B_(d),Tk(i.alt,p)||(i.alt=p),U_(p)}),Kg(),Qc(7,`po-input`,5),z0(),Kb(`ngModelChange`,function(p){return B_(d),Tk(i.height,p)||(i.height=p),U_(p)}),Kg()(),vu(8,`po-divider`),Qc(9,`div`,2)(10,`po-button`,6),vt(`p-click`,function(){return i.restore()}),Kg()()()}a&2&&(Rb(`p-src`,i.src)(`p-alt`,i.alt)(`p-height`,i.height),wg(5),Yb(`ngModel`,i.src),W0(),wg(),Yb(`ngModel`,i.alt),W0(),wg(),Yb(`ngModel`,i.height),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,j4,lae],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n});var re=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-image-labs-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-image-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-image-labs/sample-po-image-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-image-labs/sample-po-image-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Image Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-image-labs/sample-po-image-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-image [p-src]="src" [p-alt]="alt" [p-height]="height"> </po-image>

<po-divider />
<form #f="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="src"
      [(ngModel)]="src"
      p-clean
      p-label="Source"
      p-help="Enter a url or path of the image that will be displayed"
    ></po-input>
    <po-input
      class="po-md-6"
      name="alt"
      [(ngModel)]="alt"
      p-clean
      p-label="Alternate"
      p-help="Alternative text for image description. Ex.: Po Ui logo"
    ></po-input>
    <po-input class="po-md-6" name="height" [(ngModel)]="height" p-clean p-label="Height"></po-input>
  </div>
  <po-divider />
  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"></po-button>
  </div>
</form>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-image-labs/sample-po-image-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-image-labs',
  templateUrl: './sample-po-image-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoImageLabsComponent implements OnInit {
  alt: string;
  height: string | number;
  src: string;

  ngOnInit(): void {
    this.restore();
  }

  restore() {
    this.alt = undefined;
    this.height = 'auto';
    this.src = undefined;
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-image-labs`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Se,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,me],encapsulation:2,changeDetection:1})}return n})();var xe=[`bookingForm`];var ye=[`datepicker`];var se=(()=>{class n{form;datepickerComponent;adults=1;checkin;checkout;children=0;hotel;destinations=`https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`;filterParams={};adultsOptions=[{label:`1 Adult`,value:1},{label:`2 Adults`,value:2},{label:`3 Adults`,value:3},{label:`4 Adults`,value:4}];childrenOptions=[{label:`No Child`,value:0},{label:`1 Child`,value:1},{label:`2 Children`,value:2}];travelOptions=[{label:`Nova york`,value:`https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`},{label:`Bélgica`,value:`https://images.unsplash.com/photo-1547057951-61fcf322bb1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`},{label:`Madrid`,value:`https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`}];constructor(){}restore(){this.adults=1,this.children=0,this.checkin=void 0,this.checkout=void 0,this.destinations=`https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-image-travel`]],viewQuery:function(a,i){if(a&1&&Du(xe,7)(ye,7),a&2){let d;No(d=xo())&&(i.form=d.first),No(d=xo())&&(i.datepickerComponent=d.first)}},standalone:!1,decls:17,vars:11,consts:[[`bookingForm`,`ngForm`],[`datepicker`,``],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[1,`po-md-3`],[`p-height`,`150`,3,`p-src`],[1,`po-md-9`],[`name`,`destinations`,`p-label`,`Destinos`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`children`,`p-label`,`Children`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`adults`,`p-label`,`Adults`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`checkin`,`p-label`,`Check In`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`checkout`,`p-label`,`Check Out`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-min-date`]],template:function(a,i){if(a&1){let d=YO();Qc(0,`div`,2)(1,`div`,3),Sk(2,`Choosing a trip`),Kg()(),Qc(3,`div`,4)(4,`div`,5),vu(5,`po-image`,6),Kg(),Qc(6,`div`,7)(7,`form`,null,0)(9,`div`,4)(10,`po-select`,8),z0(),Kb(`ngModelChange`,function(p){return B_(d),Tk(i.destinations,p)||(i.destinations=p),U_(p)}),Kg(),Qc(11,`po-select`,9),z0(),Kb(`ngModelChange`,function(p){return B_(d),Tk(i.children,p)||(i.children=p),U_(p)}),Kg(),Qc(12,`po-select`,10),z0(),Kb(`ngModelChange`,function(p){return B_(d),Tk(i.adults,p)||(i.adults=p),U_(p)}),Kg()(),Qc(13,`div`,4)(14,`po-datepicker`,11,1),z0(),Kb(`ngModelChange`,function(p){return B_(d),Tk(i.checkin,p)||(i.checkin=p),U_(p)}),Kg(),Qc(16,`po-datepicker`,12),z0(),Kb(`ngModelChange`,function(p){return B_(d),Tk(i.checkout,p)||(i.checkout=p),U_(p)}),Kg()()()()()}a&2&&(wg(5),Rb(`p-src`,i.destinations),wg(5),Yb(`ngModel`,i.destinations),Rb(`p-options`,i.travelOptions),W0(),wg(),Yb(`ngModel`,i.children),Rb(`p-options`,i.childrenOptions),W0(),wg(),Yb(`ngModel`,i.adults),Rb(`p-options`,i.adultsOptions),W0(),wg(2),Yb(`ngModel`,i.checkin),Rb(`p-max-date`,i.checkout),W0(),wg(2),Yb(`ngModel`,i.checkout),Rb(`p-min-date`,i.checkin),W0())},dependencies:[AZ,MZ,TZ,QL,WL,tie,Koe,lae],encapsulation:2,changeDetection:1})}return n})();var Me=n=>({"docs-sample-code-tabs":n});var de=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-image-travel-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-image-travel`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-image-travel/sample-po-image-travel.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-image-travel/sample-po-image-travel.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Image Travel`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-image-travel/sample-po-image-travel.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-text-center">
  <div class="po-font-title">Choosing a trip</div>
</div>

<div class="po-row">
  <div class="po-md-3">
    <po-image [p-src]="destinations" p-height="150"> </po-image>
  </div>

  <div class="po-md-9">
    <form #bookingForm="ngForm">
      <div class="po-row">
        <po-select
          class="po-md-4"
          name="destinations"
          [(ngModel)]="destinations"
          p-label="Destinos"
          [p-options]="travelOptions"
        >
        </po-select>

        <po-select
          class="po-md-4"
          name="children"
          [(ngModel)]="children"
          p-label="Children"
          [p-options]="childrenOptions"
        >
        </po-select>

        <po-select class="po-md-4" name="adults" [(ngModel)]="adults" p-label="Adults" [p-options]="adultsOptions">
        </po-select>
      </div>

      <div class="po-row">
        <po-datepicker
          #datepicker
          class="po-md-4"
          name="checkin"
          [(ngModel)]="checkin"
          p-label="Check In"
          p-placeholder="dd/mm/yyyy"
          p-required
          [p-max-date]="checkout"
        >
        </po-datepicker>

        <po-datepicker
          class="po-md-4"
          name="checkout"
          [(ngModel)]="checkout"
          p-label="Check Out"
          p-placeholder="dd/mm/yyyy"
          p-required
          [p-min-date]="checkin"
        >
        </po-datepicker>
      </div>
    </form>
  </div>
</div>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-image-travel/sample-po-image-travel.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoDatepickerComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-image-travel',
  templateUrl: './sample-po-image-travel.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoImageTravelComponent {
  @ViewChild('bookingForm', { static: true }) form: NgForm;
  @ViewChild('datepicker', { static: true }) datepickerComponent: PoDatepickerComponent;

  adults: number = 1;
  checkin: Date;
  checkout: Date;
  children: number = 0;
  hotel: string;
  destinations: string =
    'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
  filterParams = {};

  readonly adultsOptions: Array<PoSelectOption> = [
    { label: '1 Adult', value: 1 },
    { label: '2 Adults', value: 2 },
    { label: '3 Adults', value: 3 },
    { label: '4 Adults', value: 4 }
  ];

  readonly childrenOptions: Array<PoSelectOption> = [
    { label: 'No Child', value: 0 },
    { label: '1 Child', value: 1 },
    { label: '2 Children', value: 2 }
  ];

  readonly travelOptions: Array<PoSelectOption> = [
    {
      label: 'Nova york',
      value:
        'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      label: 'B\xE9lgica',
      value:
        'https://images.unsplash.com/photo-1547057951-61fcf322bb1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      label: 'Madrid',
      value:
        'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    }
  ];

  constructor() {}

  restore() {
    this.adults = 1;
    this.children = 0;
    this.checkin = undefined;
    this.checkout = undefined;
    this.destinations =
      'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-image-travel`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Me,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,se],encapsulation:2,changeDetection:1})}return n})();var ce=(()=>{class n{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-image-doc`]],standalone:!1,decls:181,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-image-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-alt`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-height`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoImageLoading`],[`id`,`prop-p-priority`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-src`,1,`docs-api-properties-row`]],template:function(a,i){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoImageModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-image`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoImageComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`As imagens têm a função de traduzir visualmente ideias específicas ou mensagens complexas, mostrar um produto ou contar uma história, estabelecendo empatia e se conectando com os usuários.`),Kg(),Qc(15,`h4`),Sk(16,`Boas Práticas`),Kg(),Qc(17,`p`),Sk(18,`O componente image foi projetado para atender os requisitos das Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.1. Também foram estruturadas padrões de usabilidade para auxiliar na utilização do componente e garantir uma boa experiência para os usuários. Por isso, é muito importante que, ao aplicar esse componente, o proprietário do conteúdo leve em consideração alguns critérios e práticas:`),Kg(),Qc(19,`h5`),Sk(20,`Uso`),Kg(),Qc(21,`ul`)(22,`li`),Sk(23,`Ao utilizar imagens, mantenha uma coerência entre elas no produto, de modo que compartilhem um mesmo estilo e intenção entre si.`),Kg(),Qc(24,`li`),Sk(25,`Utilize imagens que expressem a mensagem e estilo do produto, respeitando as diretrizes e guia da marca.`),Kg(),Qc(26,`li`),Sk(27,`Ao utilizar fotografias, é recomendável o uso de proporções de aspecto padrão, como 1:1, 3:1, 3:2, 16:9.`),Kg(),Qc(28,`li`),Sk(29,`Mantenha um ponto focal na imagem, pois isso influencia em como ela se comportará em diferentes formatos. Isso também ajuda a transmitir a mensagem de forma objetiva e consistente.`),Kg()(),Qc(30,`h5`),Sk(31,`Imagem como plano de fundo`),Kg(),Qc(32,`ul`)(33,`li`),Sk(34,`Avalie se é realmente necessário o uso de imagem como plano de fundo e evite sempre que possível, pois pode ocasionar em um baixo contraste entre texto e imagem.`),Kg(),Qc(35,`li`),Sk(36,`Caso utilize, redobre a atenção na escolha da imagem e certifique-se de que ela está adequada para a leitura do texto e não está sendo apenas um ruído.`),Kg(),Qc(37,`li`),Sk(38,`Tenha especial atenção em telas menores. Embora seja possível posicionar o texto em uma área mais vazia ou escurecida, o texto e imagem se ajustam aos diferentes espaços, de acordo com o dispositivo. Muitas vezes acaba resultando no comprometimento tanto da leitura do texto e quando na visualização da imagem.`),Kg(),Qc(39,`li`),Sk(40,`Verifique a taxa de contraste do texto em relação ao fundo. Deve ser suficiente para atender aos padrões de acessibilidade, sendo 4,5:1 para textos acima de 18pt ou bold e 7,1: 1 para textos menores que 18pt.`),Kg(),Qc(41,`li`),Sk(42,`Se não tiver controle sobre qual imagem será colocada por trás do texto, o recomendado é não utilizar nesse formato.`),Kg()(),Qc(43,`h4`),Sk(44,`Acessibilidade tratada no componente`),Kg(),Qc(45,`p`),Sk(46,`As boas práticas de acessibilidade variam de acordo com tipo da imagem, que podem ser divididas em:`),Kg(),Qc(47,`ul`)(48,`li`),Sk(49,`Imagem informativa simples, como por exemplo uma fotografia de um produto.`),Kg(),Qc(50,`li`),Sk(51,`Imagem complexa, como um gráfico, infográfico ou diagrama.`),Kg(),Qc(52,`li`),Sk(53,`Imagem decorativa, como um plano de fundo ou uma fotografia que ilustra um assunto, mas não é essencial para compreender a informação.`),Kg()()(),Qc(54,`div`,6)(55,`h4`,7),Sk(56,`Seletor`),Kg(),Qc(57,`pre`,8),Sk(58,`<po-image
    p-alt="string"
    p-height="number"
    p-loading="PoImageLoading"
    p-priority="boolean"
    p-src="string" >
</po-image>
`),Kg()(),Qc(59,`h4`,9),Sk(60,`Propriedades`),Kg(),Qc(61,`table`,10)(62,`tr`,11)(63,`th`,12),Sk(64,`Nome`),Kg(),Qc(65,`th`,12),Sk(66,`Tipo`),Kg(),Qc(67,`th`,12),Sk(68,`Padrão`),Kg(),Qc(69,`th`,12),Sk(70,`Descrição`),Kg()(),Qc(71,`tr`,13)(72,`td`,14)(73,`div`,15)(74,`span`,16),Sk(75,` p-alt`),vu(76,`br`),Kg()()(),Qc(77,`td`,17)(78,`code`,18),Sk(79,`string`),Kg()(),Qc(80,`td`,19),Sk(81,`-`),Kg(),Qc(82,`td`,20)(83,`em`)(84,`strong`),Sk(85,`(opcional)`),Kg()(),Qc(86,`p`),Sk(87,`Defini o texto alternativo descrevendo a imagem.`),Kg()()(),Qc(88,`tr`,21)(89,`td`,14)(90,`div`,15)(91,`span`,16),Sk(92,` p-height`),vu(93,`br`),Kg()()(),Qc(94,`td`,17)(95,`code`,22),Sk(96,`number`),Kg()(),Qc(97,`td`,19),Sk(98,`-`),Kg(),Qc(99,`td`,20)(100,`em`)(101,`strong`),Sk(102,`(opcional)`),Kg()(),Qc(103,`p`),Sk(104,`Define a altura da imagem em `),Qc(105,`em`),Sk(106,`pixels`),Kg(),Sk(107,`. Caso n\xE3o seja definida,
atribui o tamanho da imagem`),Kg()()(),Qc(108,`tr`,23)(109,`td`,14)(110,`div`,15)(111,`span`,16),Sk(112,` p-loading`),vu(113,`br`),Kg()()(),Qc(114,`td`,17)(115,`code`,24),Sk(116,`PoImageLoading`),Kg()(),Qc(117,`td`,19),Sk(118,`-`),Kg(),Qc(119,`td`,20)(120,`em`)(121,`strong`),Sk(122,`(opcional)`),Kg()(),Qc(123,`p`),Sk(124,`Defini o carregamento que pode ser dos tipo:`),Kg(),Qc(125,`p`),Sk(126,`\u2014 lazy
\u2014 eager
\u2014 auto`),Kg(),Qc(127,`blockquote`)(128,`p`),Sk(129,`Não é permitido definir esta propriedade em conjunto com a propriedade `),Qc(130,`code`),Sk(131,`p-priority`),Kg(),Sk(132,`.`),Kg()()()(),Qc(133,`tr`,25)(134,`td`,14)(135,`div`,15)(136,`span`,16),Sk(137,` p-priority`),vu(138,`br`),Kg()()(),Qc(139,`td`,17)(140,`code`,26),Sk(141,`boolean`),Kg()(),Qc(142,`td`,19)(143,`p`)(144,`code`),Sk(145,`false`),Kg()()(),Qc(146,`td`,20)(147,`em`)(148,`strong`),Sk(149,`(opcional)`),Kg()(),Qc(150,`p`),Sk(151,`Defini a prioridade de carregamento da imagem.`),Kg(),Qc(152,`blockquote`)(153,`p`),Sk(154,`Para as imagens com carregamento priorit\xE1tio ativo \xE9 necess\xE1rio incluir
uma tag link no head do arquivo index.html da sua aplica\xE7\xE3o.`),Kg()(),Qc(155,`pre`)(156,`code`),Sk(157,`<link rel="preconnect" href="<url_base_da_imagem>">
`),Kg()()()(),Qc(158,`tr`,27)(159,`td`,14)(160,`div`,15)(161,`span`,16),Sk(162,` p-src`),vu(163,`br`),Kg()()(),Qc(164,`td`,17)(165,`code`,18),Sk(166,`string`),Kg()(),Qc(167,`td`,19),Sk(168,`-`),Kg(),Qc(169,`td`,20)(170,`em`)(171,`strong`),Sk(172,`(opcional)`),Kg()(),Qc(173,`p`),Sk(174,`Fonte da imagem que pode ser um caminho local (`),Qc(175,`code`),Sk(176,`./assets/images/logo-black-small.png`),Kg(),Sk(177,`)
ou um servidor externo (`),Qc(178,`code`),Sk(179,`https://po-ui.io/assets/images/logo-black-small.png`),Kg(),Sk(180,`).`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function De(n,Ie){if(n&1){let l=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(l);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-image-basic-view`)(2,`sample-po-image-labs-view`)(3,`sample-po-image-travel-view`),Kg()}if(n&2){let l=ek();Rb(`p-active`,l.activeTab===`web`)}}var ke=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Image`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,De,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-image-doc`),Kg()()()),a&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,pe,re,de,ce],encapsulation:2,changeDetection:1})}return n})()}];var ge=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge$1({type:n});static ɵinj=de$1({imports:[GV.forChild(ke),GV]})}return n})();var nt=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge$1({type:n});static ɵinj=de$1({imports:[M,ge]})}return n})();export{nt as DocPoImageModule};