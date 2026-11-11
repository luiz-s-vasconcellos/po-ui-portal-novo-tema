import{n as P,t as M}from"./main-G4GMLTOQ.js";import{Ei as WV,Fr as Jc,H as Mze,Hi as ar,I as Koe,Ii as ZO,Ji as eF,Li as Zb,Mi as Y0,Mn as tre,Mt as are,Nr as Ig,Oa as qL,Or as H_,Pr as JL,Ri as Zg,Rr as Jn,Ti as W0,U as Nf,Vi as _u,Vr as Kb,Yr as NZ,Zn as $_,Zr as No,an as j4,cr as Bk,ea as ge,eo as xo,er as Ab,fi as RZ,gi as Tk,hi as TZ,ir as BO,jn as tie,jr as I,no as yk,nr as An,pr as Cu,qa as vt,qi as de$1,tr as Ak,un as lae,va as nk,vn as oi,xi as VO,ya as nm}from"./chunk-BJubg121.js";var ne=(()=>{class n{srcImage=`https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg`;static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-image-basic`]],standalone:!1,decls:1,vars:1,consts:[[`p-alt`,`teste de imagem`,`p-height`,`300`,3,`p-src`]],template:function(a,i){a&1&&_u(0,`po-image`,0),a&2&&Ab(`p-src`,i.srcImage)},dependencies:[lae],encapsulation:2,changeDetection:1})}return n})();var he=n=>({"docs-sample-code-tabs":n});var le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-image-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Image Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-image-basic/sample-po-image-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-image [p-src]="srcImage" p-alt="teste de imagem" p-height="300"> </po-image>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-image-basic/sample-po-image-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-image-basic',
  templateUrl: './sample-po-image-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoImageBasicComponent {
  srcImage = 'https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg';
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-image-basic`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,he,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ne],encapsulation:2,changeDetection:1})}return n})();var me=(()=>{class n{alt;height;src;ngOnInit(){this.restore()}restore(){this.alt=void 0,this.height=`auto`,this.src=void 0}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-image-labs`]],standalone:!1,decls:11,vars:6,consts:[[`f`,`ngForm`],[3,`p-src`,`p-alt`,`p-height`],[1,`po-row`],[`name`,`src`,`p-clean`,``,`p-label`,`Source`,`p-help`,`Enter a url or path of the image that will be displayed`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`alt`,`p-clean`,``,`p-label`,`Alternate`,`p-help`,`Alternative text for image description. Ex.: Po Ui logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-label`,`Height`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let d=ZO();_u(0,`po-image`,1)(1,`po-divider`),Jc(2,`form`,null,0)(4,`div`,2)(5,`po-input`,3),W0(),Zb(`ngModelChange`,function(l){return H_(d),Ak(i.src,l)||(i.src=l),$_(l)}),Zg(),Jc(6,`po-input`,4),W0(),Zb(`ngModelChange`,function(l){return H_(d),Ak(i.alt,l)||(i.alt=l),$_(l)}),Zg(),Jc(7,`po-input`,5),W0(),Zb(`ngModelChange`,function(l){return H_(d),Ak(i.height,l)||(i.height=l),$_(l)}),Zg()(),_u(8,`po-divider`),Jc(9,`div`,2)(10,`po-button`,6),vt(`p-click`,function(){return i.restore()}),Zg()()()}a&2&&(Ab(`p-src`,i.src)(`p-alt`,i.alt)(`p-height`,i.height),Ig(5),Kb(`ngModel`,i.src),Y0(),Ig(),Kb(`ngModel`,i.alt),Y0(),Ig(),Kb(`ngModel`,i.height),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,j4,lae],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n});var pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-image-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Image Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-image-labs/sample-po-image-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-image [p-src]="src" [p-alt]="alt" [p-height]="height"> </po-image>

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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-image-labs/sample-po-image-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-image-labs`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,Se,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,me],encapsulation:2,changeDetection:1})}return n})();var Ee=[`bookingForm`];var xe=[`datepicker`];var re=(()=>{class n{form;datepickerComponent;adults=1;checkin;checkout;children=0;hotel;destinations=`https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`;filterParams={};adultsOptions=[{label:`1 Adult`,value:1},{label:`2 Adults`,value:2},{label:`3 Adults`,value:3},{label:`4 Adults`,value:4}];childrenOptions=[{label:`No Child`,value:0},{label:`1 Child`,value:1},{label:`2 Children`,value:2}];travelOptions=[{label:`Nova york`,value:`https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`},{label:`Bélgica`,value:`https://images.unsplash.com/photo-1547057951-61fcf322bb1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`},{label:`Madrid`,value:`https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`}];constructor(){}restore(){this.adults=1,this.children=0,this.checkin=void 0,this.checkout=void 0,this.destinations=`https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-image-travel`]],viewQuery:function(a,i){if(a&1&&Cu(Ee,7)(xe,7),a&2){let d;No(d=xo())&&(i.form=d.first),No(d=xo())&&(i.datepickerComponent=d.first)}},standalone:!1,decls:17,vars:11,consts:[[`bookingForm`,`ngForm`],[`datepicker`,``],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[1,`po-md-3`],[`p-height`,`150`,3,`p-src`],[1,`po-md-9`],[`name`,`destinations`,`p-label`,`Destinos`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`children`,`p-label`,`Children`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`adults`,`p-label`,`Adults`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`checkin`,`p-label`,`Check In`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`checkout`,`p-label`,`Check Out`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-min-date`]],template:function(a,i){if(a&1){let d=ZO();Jc(0,`div`,2)(1,`div`,3),Tk(2,`Choosing a trip`),Zg()(),Jc(3,`div`,4)(4,`div`,5),_u(5,`po-image`,6),Zg(),Jc(6,`div`,7)(7,`form`,null,0)(9,`div`,4)(10,`po-select`,8),W0(),Zb(`ngModelChange`,function(l){return H_(d),Ak(i.destinations,l)||(i.destinations=l),$_(l)}),Zg(),Jc(11,`po-select`,9),W0(),Zb(`ngModelChange`,function(l){return H_(d),Ak(i.children,l)||(i.children=l),$_(l)}),Zg(),Jc(12,`po-select`,10),W0(),Zb(`ngModelChange`,function(l){return H_(d),Ak(i.adults,l)||(i.adults=l),$_(l)}),Zg()(),Jc(13,`div`,4)(14,`po-datepicker`,11,1),W0(),Zb(`ngModelChange`,function(l){return H_(d),Ak(i.checkin,l)||(i.checkin=l),$_(l)}),Zg(),Jc(16,`po-datepicker`,12),W0(),Zb(`ngModelChange`,function(l){return H_(d),Ak(i.checkout,l)||(i.checkout=l),$_(l)}),Zg()()()()()}a&2&&(Ig(5),Ab(`p-src`,i.destinations),Ig(5),Kb(`ngModel`,i.destinations),Ab(`p-options`,i.travelOptions),Y0(),Ig(),Kb(`ngModel`,i.children),Ab(`p-options`,i.childrenOptions),Y0(),Ig(),Kb(`ngModel`,i.adults),Ab(`p-options`,i.adultsOptions),Y0(),Ig(2),Kb(`ngModel`,i.checkin),Ab(`p-max-date`,i.checkout),Y0(),Ig(2),Kb(`ngModel`,i.checkout),Ab(`p-min-date`,i.checkin),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,tie,Koe,lae],encapsulation:2,changeDetection:1})}return n})();var we=n=>({"docs-sample-code-tabs":n});var se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-image-travel-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Image Travel`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-image-travel/sample-po-image-travel.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-text-center">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-image-travel/sample-po-image-travel.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-image-travel`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,we,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,re],encapsulation:2,changeDetection:1})}return n})();var de=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-image-doc`]],standalone:!1,decls:181,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoImageLoading`],[`pan`,``,1,`docs-api-property-type`,`boolean`]],template:function(a,i){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoImageModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-image`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoImageComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`As imagens têm a função de traduzir visualmente ideias específicas ou mensagens complexas, mostrar um produto ou contar uma história, estabelecendo empatia e se conectando com os usuários.`),Zg(),Jc(15,`h4`),Tk(16,`Boas Práticas`),Zg(),Jc(17,`p`),Tk(18,`O componente image foi projetado para atender os requisitos das Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.1. Também foram estruturadas padrões de usabilidade para auxiliar na utilização do componente e garantir uma boa experiência para os usuários. Por isso, é muito importante que, ao aplicar esse componente, o proprietário do conteúdo leve em consideração alguns critérios e práticas:`),Zg(),Jc(19,`h5`),Tk(20,`Uso`),Zg(),Jc(21,`ul`)(22,`li`),Tk(23,`Ao utilizar imagens, mantenha uma coerência entre elas no produto, de modo que compartilhem um mesmo estilo e intenção entre si.`),Zg(),Jc(24,`li`),Tk(25,`Utilize imagens que expressem a mensagem e estilo do produto, respeitando as diretrizes e guia da marca.`),Zg(),Jc(26,`li`),Tk(27,`Ao utilizar fotografias, é recomendável o uso de proporções de aspecto padrão, como 1:1, 3:1, 3:2, 16:9.`),Zg(),Jc(28,`li`),Tk(29,`Mantenha um ponto focal na imagem, pois isso influencia em como ela se comportará em diferentes formatos. Isso também ajuda a transmitir a mensagem de forma objetiva e consistente.`),Zg()(),Jc(30,`h5`),Tk(31,`Imagem como plano de fundo`),Zg(),Jc(32,`ul`)(33,`li`),Tk(34,`Avalie se é realmente necessário o uso de imagem como plano de fundo e evite sempre que possível, pois pode ocasionar em um baixo contraste entre texto e imagem.`),Zg(),Jc(35,`li`),Tk(36,`Caso utilize, redobre a atenção na escolha da imagem e certifique-se de que ela está adequada para a leitura do texto e não está sendo apenas um ruído.`),Zg(),Jc(37,`li`),Tk(38,`Tenha especial atenção em telas menores. Embora seja possível posicionar o texto em uma área mais vazia ou escurecida, o texto e imagem se ajustam aos diferentes espaços, de acordo com o dispositivo. Muitas vezes acaba resultando no comprometimento tanto da leitura do texto e quando na visualização da imagem.`),Zg(),Jc(39,`li`),Tk(40,`Verifique a taxa de contraste do texto em relação ao fundo. Deve ser suficiente para atender aos padrões de acessibilidade, sendo 4,5:1 para textos acima de 18pt ou bold e 7,1: 1 para textos menores que 18pt.`),Zg(),Jc(41,`li`),Tk(42,`Se não tiver controle sobre qual imagem será colocada por trás do texto, o recomendado é não utilizar nesse formato.`),Zg()(),Jc(43,`h4`),Tk(44,`Acessibilidade tratada no componente`),Zg(),Jc(45,`p`),Tk(46,`As boas práticas de acessibilidade variam de acordo com tipo da imagem, que podem ser divididas em:`),Zg(),Jc(47,`ul`)(48,`li`),Tk(49,`Imagem informativa simples, como por exemplo uma fotografia de um produto.`),Zg(),Jc(50,`li`),Tk(51,`Imagem complexa, como um gráfico, infográfico ou diagrama.`),Zg(),Jc(52,`li`),Tk(53,`Imagem decorativa, como um plano de fundo ou uma fotografia que ilustra um assunto, mas não é essencial para compreender a informação.`),Zg()()(),Jc(54,`div`,6)(55,`h4`,7),Tk(56,`Seletor`),Zg(),Jc(57,`pre`,8),Tk(58,`<po-image
    p-alt="string"
    p-height="number"
    p-loading="PoImageLoading"
    p-priority="boolean"
    p-src="string" >
</po-image>
`),Zg()(),Jc(59,`h4`,9),Tk(60,`Propriedades`),Zg(),Jc(61,`table`,10)(62,`tr`,11)(63,`th`,12),Tk(64,`Nome`),Zg(),Jc(65,`th`,12),Tk(66,`Tipo`),Zg(),Jc(67,`th`,12),Tk(68,`Padrão`),Zg(),Jc(69,`th`,12),Tk(70,`Descrição`),Zg()(),Jc(71,`tr`,13)(72,`td`,14)(73,`div`,15)(74,`span`,16),Tk(75,` p-alt`),_u(76,`br`),Zg()()(),Jc(77,`td`,17)(78,`code`,18),Tk(79,`string`),Zg()(),Jc(80,`td`,19),Tk(81,`-`),Zg(),Jc(82,`td`,20)(83,`em`)(84,`strong`),Tk(85,`(opcional)`),Zg()(),Jc(86,`p`),Tk(87,`Defini o texto alternativo descrevendo a imagem.`),Zg()()(),Jc(88,`tr`,13)(89,`td`,14)(90,`div`,15)(91,`span`,16),Tk(92,` p-height`),_u(93,`br`),Zg()()(),Jc(94,`td`,17)(95,`code`,21),Tk(96,`number`),Zg()(),Jc(97,`td`,19),Tk(98,`-`),Zg(),Jc(99,`td`,20)(100,`em`)(101,`strong`),Tk(102,`(opcional)`),Zg()(),Jc(103,`p`),Tk(104,`Define a altura da imagem em `),Jc(105,`em`),Tk(106,`pixels`),Zg(),Tk(107,`. Caso n\xE3o seja definida,
atribui o tamanho da imagem`),Zg()()(),Jc(108,`tr`,13)(109,`td`,14)(110,`div`,15)(111,`span`,16),Tk(112,` p-loading`),_u(113,`br`),Zg()()(),Jc(114,`td`,17)(115,`code`,22),Tk(116,`PoImageLoading`),Zg()(),Jc(117,`td`,19),Tk(118,`-`),Zg(),Jc(119,`td`,20)(120,`em`)(121,`strong`),Tk(122,`(opcional)`),Zg()(),Jc(123,`p`),Tk(124,`Defini o carregamento que pode ser dos tipo:`),Zg(),Jc(125,`p`),Tk(126,`\u2014 lazy
\u2014 eager
\u2014 auto`),Zg(),Jc(127,`blockquote`)(128,`p`),Tk(129,`Não é permitido definir esta propriedade em conjunto com a propriedade `),Jc(130,`code`),Tk(131,`p-priority`),Zg(),Tk(132,`.`),Zg()()()(),Jc(133,`tr`,13)(134,`td`,14)(135,`div`,15)(136,`span`,16),Tk(137,` p-priority`),_u(138,`br`),Zg()()(),Jc(139,`td`,17)(140,`code`,23),Tk(141,`boolean`),Zg()(),Jc(142,`td`,19)(143,`p`)(144,`code`),Tk(145,`false`),Zg()()(),Jc(146,`td`,20)(147,`em`)(148,`strong`),Tk(149,`(opcional)`),Zg()(),Jc(150,`p`),Tk(151,`Defini a prioridade de carregamento da imagem.`),Zg(),Jc(152,`blockquote`)(153,`p`),Tk(154,`Para as imagens com carregamento priorit\xE1tio ativo \xE9 necess\xE1rio incluir
uma tag link no head do arquivo index.html da sua aplica\xE7\xE3o.`),Zg()(),Jc(155,`pre`)(156,`code`),Tk(157,`<link rel="preconnect" href="<url_base_da_imagem>">
`),Zg()()()(),Jc(158,`tr`,13)(159,`td`,14)(160,`div`,15)(161,`span`,16),Tk(162,` p-src`),_u(163,`br`),Zg()()(),Jc(164,`td`,17)(165,`code`,18),Tk(166,`string`),Zg()(),Jc(167,`td`,19),Tk(168,`-`),Zg(),Jc(169,`td`,20)(170,`em`)(171,`strong`),Tk(172,`(opcional)`),Zg()(),Jc(173,`p`),Tk(174,`Fonte da imagem que pode ser um caminho local (`),Jc(175,`code`),Tk(176,`./assets/images/logo-black-small.png`),Zg(),Tk(177,`)
ou um servidor externo (`),Jc(178,`code`),Tk(179,`https://po-ui.io/assets/images/logo-black-small.png`),Zg(),Tk(180,`).`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function _e(n,Ie){if(n&1){let p=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){H_(p);let i=nk();return $_(i.changeTab(`web`))}),_u(1,`sample-po-image-basic-view`)(2,`sample-po-image-labs-view`)(3,`sample-po-image-travel-view`),Zg()}if(n&2){let p=nk();Ab(`p-active`,p.activeTab===`web`)}}var De=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Image`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,_e,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-image-doc`),Zg()()()),a&2&&(Ab(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Ab(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,le,pe,se,de],encapsulation:2,changeDetection:1})}return n})()}];var ue=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de$1({imports:[WV.forChild(De),WV]})}return n})();var $e=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de$1({imports:[M,ue]})}return n})();export{$e as DocPoImageModule};