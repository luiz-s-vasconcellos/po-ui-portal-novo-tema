import{m as P,p as M}from"./main-5ZHUK4IE.js";import{$ as Pze,Ar as I,At as Zte,Bn as wae,Ci as UO,Da as kI,E as G4,F as Joe,G as Nf,Ii as WL,Ir as Kb,It as bae,Lr as Kg,Oi as VO,Or as HO,Ot as Zne,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Qr as OZ,Ti as U_,Ui as YO,Va as p,Vi as Xm,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,an as ia,ao as we,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,dn as l4,do as xo,ft as Tee,gi as Rb,go as z0,ha as i1,hr as Db,io as vu,j as I4,ji as Vk,k as Goe,li as Qc,lo as xe,na as de,oo as wg,pi as R,qi as ZL,ro as vt$1,rr as AZ,sa as ek,si as QL,sn as j4,sr as BO,ua as ge,uo as xk,vi as Sk,w as Fc,wn as q4,wr as GV,x as Eu,xi as Tk,xn as p5,xr as FO,yr as Du}from"./chunk-DtUf9FxZ.js";var qe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-basic`]],standalone:!1,decls:1,vars:0,template:function(o,i){o&1&&vu(0,`po-search`)},dependencies:[Zne],encapsulation:2,changeDetection:1})}return a})();var $e=a=>({"docs-sample-code-tabs":a});var Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-search-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Search Basic`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-search-basic/sample-po-search-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-search></po-search>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-search-basic/sample-po-search-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-search-basic',
  templateUrl: './sample-po-search-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-search-basic`),Kg(),vu(23,`hr`)),o&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,$e,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,qe],encapsulation:2,changeDetection:1})}return a})();var nt=[`poSearch`];function it(a,T){if(a&1&&(Qc(0,`div`)(1,`strong`),Sk(2),Kg(),Sk(3),Kg()),a&2){let r=T.$implicit,o=ek().$implicit;wg(2),tm(``,r,`: `),wg(),tm(` `,o[r],` \xA0 `)}}function at(a,T){if(a&1&&(Qc(0,`li`),UO(1,it,4,2,`div`,null,BO),Kg()),a&2){let r=T.$implicit,o=ek();wg(),HO(o.changeFilter(r))}}var Be=(()=>{class a{http=p(kI);poSearch;ariaLabel;customLiterals;literals;properties=[];search=``;event=``;service=`https://po-sample-api.onrender.com/v1/heroes`;items=[];filteredItems=[];fieldKeys=[];fieldSelect=[];tooltip;icon;filterMode=Eu.startsWith;searchMode=`action`;fieldKey;itemsModel;filterModel=`["name"]`;filterSelectModel;size=`medium`;customLocateSummary;locateSummary;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`showListbox`,label:`Show Listbox`},{value:`loading`,label:`Loading`}];iconsOptions=[{label:`fa-search`,value:`fa fa-search`},{label:`an-user`,value:`an an-user`},{label:`an-magnifying-glass`,value:`an an-magnifying-glass`}];filterModeOptions=[{label:`Starts With`,value:Eu.startsWith},{label:`Contains`,value:Eu.contains},{label:`Ends With`,value:Eu.endsWith}];searchModeOptions=[{label:`Action`,value:`action`},{label:`Execute`,value:`execute`},{label:`Locate`,value:`locate`},{label:`Trigger`,value:`trigger`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}ngOnChanges(r){r.items&&(this.filteredItems=this.items)}changeFilter(r){return Object.keys(r)}onChangeService(){this.http.get(this.service).subscribe(r=>{let o=r.items;Array.isArray(o)&&o.length>0&&(this.items=o,this.filteredItems=o,this.fieldKeys=[`name`])})}updateFilterKeys(r){this.fieldKeys=this.convertToArray(r)}updateFilterSelect(r){this.fieldSelect=this.convertToArray(r)}filter(r){this.filteredItems=r,this.event=r.length===0?`p-change-model`:`p-filtered-items-change`}changeItems(r){try{let o=JSON.parse(r);Array.isArray(o)&&(this.filteredItems=o,this.items=o)}catch(o){}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals??``)}catch(r){this.customLiterals=void 0}}changeEvent(r){setTimeout(()=>{this.event=r})}changeLocateSummary(){try{this.customLocateSummary=JSON.parse(this.locateSummary??``)}catch(r){this.customLocateSummary=void 0}}restore(){this.ariaLabel=``,this.search=``,this.event=``,this.icon=void 0,this.customLiterals=void 0,this.customLocateSummary=void 0,this.properties=[],this.filteredItems=void 0,this.items=void 0,this.itemsModel=void 0,this.filterModel=`["name"]`,this.filterSelectModel=``,this.fieldKeys=void 0,this.fieldSelect=void 0,this.filterMode=Eu.startsWith,this.searchMode=`action`,this.literals=void 0,this.locateSummary=void 0,this.size=`medium`,this.cleanInput(),this.onChangeService()}cleanInput(){try{this.poSearch.clearSearch()}catch(r){}}convertToArray(r){try{return JSON.parse(r)}catch(o){return}}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-labs`]],viewQuery:function(o,i){if(o&1&&Du(nt,7),o&2){let m;No(m=xo())&&(i.poSearch=m.first)}},standalone:!1,features:[xe],decls:32,vars:33,consts:[[`poSearch`,``],[`f`,`ngForm`],[1,`po-row`],[1,`po-md-12`,3,`p-blur`,`p-change-model`,`p-filtered-items-change`,`p-locate-next`,`p-locate-previous`,`p-aria-label`,`p-disabled`,`p-filter-keys`,`p-filter-type`,`p-filter-select`,`p-icon`,`p-items`,`p-literals`,`p-loading`,`p-locate-summary`,`p-search-type`,`p-show-listbox`,`p-size`],[1,`po-md-12`],[3,`p-label`],[1,`sample-list-search`,`po-md-12`,`row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`ariaLabel`,`p-label`,`Aria label`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`items`,`p-label`,`Items`,`p-help`,`Ex.: [{ "cidade": "São Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "Tóquio", "pais": "Japão" }]`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`searchMode`,`p-label`,`Search Mode`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-label`,`Filter Mode`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locateSummary`,`p-help`,`{ "currentIndex": 1000, "total": 1000 }`,`p-label`,`Locate Summary`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"search": "Search people"}`,`p-label`,`Literals`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`Filter Keys`,`p-label`,`Filter Keys`,`p-help`,`Ex.: ["cidade", "pais"]`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`Filter Select`,`p-label`,`Filter Select`,`p-help`,`Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(o,i){if(o&1){let m=YO();Qc(0,`div`,2)(1,`po-search`,3,0),vt$1(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-filtered-items-change`,function(d){return i.filter(d)})(`p-locate-next`,function(){return i.changeEvent(`p-locate-next`)})(`p-locate-previous`,function(){return i.changeEvent(`p-locate-previous`)}),Kg()(),vu(3,`po-divider`),Qc(4,`div`,2)(5,`po-accordion`,4)(6,`po-accordion-item`,5)(7,`po-widget`,4)(8,`ul`,6),UO(9,at,3,0,`li`,null,BO),Kg()()()()(),vu(11,`po-divider`),Qc(12,`div`,2),vu(13,`po-info`,7)(14,`po-info`,8),Kg(),vu(15,`po-divider`),Qc(16,`form`,null,1)(18,`po-input`,9),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(i.ariaLabel,d)||(i.ariaLabel=d),U_(d)}),Kg(),Qc(19,`po-input`,10),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(i.itemsModel,d)||(i.itemsModel=d),U_(d)}),vt$1(`p-change-model`,function(d){return i.changeItems(d)}),Kg(),Qc(20,`po-checkbox-group`,11),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(i.properties,d)||(i.properties=d),U_(d)}),Kg(),Qc(21,`po-radio-group`,12),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(i.icon,d)||(i.icon=d),U_(d)}),Kg(),Qc(22,`po-radio-group`,13),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(i.searchMode,d)||(i.searchMode=d),U_(d)}),Kg(),Qc(23,`po-radio-group`,14),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(i.filterMode,d)||(i.filterMode=d),U_(d)}),Kg(),Qc(24,`po-radio-group`,15),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(i.size,d)||(i.size=d),U_(d)}),Kg(),Qc(25,`po-input`,16),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(i.locateSummary,d)||(i.locateSummary=d),U_(d)}),vt$1(`p-change`,function(){return i.changeLocateSummary()}),Kg(),Qc(26,`po-input`,17),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(i.literals,d)||(i.literals=d),U_(d)}),vt$1(`p-change`,function(){return i.changeLiterals()}),Kg(),Qc(27,`po-input`,18),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(i.filterModel,d)||(i.filterModel=d),U_(d)}),vt$1(`p-change-model`,function(d){return i.updateFilterKeys(d)}),Kg(),Qc(28,`po-input`,19),z0(),Kb(`ngModelChange`,function(d){return B_(m),Tk(i.filterSelectModel,d)||(i.filterSelectModel=d),U_(d)}),vt$1(`p-change`,function(d){return i.updateFilterSelect(d)}),Kg(),vu(29,`po-divider`),Qc(30,`div`,2)(31,`po-button`,20),vt$1(`p-click`,function(){return i.restore()}),Kg()()()}o&2&&(wg(),Rb(`p-aria-label`,i.ariaLabel)(`p-disabled`,i.properties.includes(`disabled`))(`p-filter-keys`,i.fieldKeys)(`p-filter-type`,i.filterMode)(`p-filter-select`,i.fieldSelect)(`p-icon`,i.icon)(`p-items`,i.items)(`p-literals`,i.customLiterals)(`p-loading`,i.properties.includes(`loading`))(`p-locate-summary`,i.customLocateSummary)(`p-search-type`,i.searchMode)(`p-show-listbox`,i.properties.includes(`showListbox`))(`p-size`,i.size),wg(5),Rb(`p-label`,xk(`Itens encontrados: `,i.filteredItems?.length)),wg(3),HO(i.filteredItems),wg(4),Rb(`p-value`,i.search),wg(),Rb(`p-value`,i.event),wg(4),Yb(`ngModel`,i.ariaLabel),W0(),wg(),Yb(`ngModel`,i.itemsModel),W0(),wg(),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),W0(),wg(),Yb(`ngModel`,i.icon),Rb(`p-options`,i.iconsOptions),W0(),wg(),Yb(`ngModel`,i.searchMode),Rb(`p-options`,i.searchModeOptions),W0(),wg(),Yb(`ngModel`,i.filterMode),Rb(`p-options`,i.filterModeOptions),W0(),wg(),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),W0(),wg(),Yb(`ngModel`,i.locateSummary),W0(),wg(),Yb(`ngModel`,i.literals),W0(),wg(),Yb(`ngModel`,i.filterModel),W0(),wg(),Yb(`ngModel`,i.filterSelectModel),W0())},dependencies:[AZ,MZ,TZ,QL,WL,Tee,l4,oi,Nf,I4,j4,Zte,Joe,bae,Zne],styles:[`.sample-list-search[_ngcontent-%COMP%]{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem}.sample-list-search[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-transform:capitalize}`],changeDetection:1})}return a})();var rt=a=>({"docs-sample-code-tabs":a});var Ne=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[`id`,`sample-po-search-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Search Labs`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-search-labs/sample-po-search-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-search
    #poSearch
    class="po-md-12"
    [p-aria-label]="ariaLabel"
    [p-disabled]="properties.includes('disabled')"
    [p-filter-keys]="fieldKeys"
    [p-filter-type]="filterMode"
    [p-filter-select]="fieldSelect"
    [p-icon]="icon"
    [p-items]="items"
    [p-literals]="customLiterals"
    [p-loading]="properties.includes('loading')"
    [p-locate-summary]="customLocateSummary"
    [p-search-type]="searchMode"
    [p-show-listbox]="properties.includes('showListbox')"
    [p-size]="size"
    (p-blur)="changeEvent('p-blur')"
    (p-change-model)="changeEvent('p-change-model')"
    (p-filtered-items-change)="filter($event)"
    (p-locate-next)="changeEvent('p-locate-next')"
    (p-locate-previous)="changeEvent('p-locate-previous')"
  ></po-search>
</div>

<po-divider />
<div class="po-row">
  <po-accordion class="po-md-12">
    <po-accordion-item p-label="Itens encontrados: { { filteredItems?.length }}">
      <po-widget class="po-md-12">
        <ul class="sample-list-search po-md-12 row">
          @for (item of filteredItems; track item) {
            <li>
              @for (key of changeFilter(item); track key) {
                <div>
                  <strong>{ { key }}: </strong> { { item[key] }} &nbsp;
                </div>
              }
            </li>
          }
        </ul>
      </po-widget>
    </po-accordion-item>
  </po-accordion>
</div>
<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="search"> </po-info>

  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<po-divider />

<!-- Properties -->
<form #f="ngForm">
  <po-input class="po-lg-6" name="ariaLabel" p-label="Aria label" [(ngModel)]="ariaLabel"></po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="items"
    [(ngModel)]="itemsModel"
    p-label="Items"
    p-help='Ex.: [{ "cidade": "S\xE3o Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "T\xF3quio", "pais": "Jap\xE3o" }]'
    (p-change-model)="changeItems($event)"
  >
  </po-input>

  <po-checkbox-group
    class="po-lg-6 po-md-12"
    name="properties"
    [(ngModel)]="properties"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group class="po-lg-6 po-md-12" name="icon" [(ngModel)]="icon" p-label="Icon" [p-options]="iconsOptions">
  </po-radio-group>

  <po-radio-group
    class="po-lg-6 po-md-12"
    name="searchMode"
    [(ngModel)]="searchMode"
    p-label="Search Mode"
    [p-options]="searchModeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-6 po-md-12"
    name="filterMode"
    [(ngModel)]="filterMode"
    p-label="Filter Mode"
    [p-options]="filterModeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-6 po-md-12"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <po-input
    class="po-lg-6 po-md-12"
    name="locateSummary"
    [(ngModel)]="locateSummary"
    p-help='{ "currentIndex": 1000, "total": 1000 }'
    p-label="Locate Summary"
    (p-change)="changeLocateSummary()"
  >
  </po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"search": "Search people"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="Filter Keys"
    [(ngModel)]="filterModel"
    p-label="Filter Keys"
    p-help='Ex.: ["cidade", "pais"]'
    (p-change-model)="updateFilterKeys($event)"
  >
  </po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="Filter Select"
    [(ngModel)]="filterSelectModel"
    p-label="Filter Select"
    p-help='Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]'
    (p-change)="updateFilterSelect($event)"
  >
  </po-input>

  <po-divider />

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-search-labs/sample-po-search-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import {
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSearchComponent,
  PoSearchFilterMode,
  PoSearchLiterals
} from '@po-ui/ng-components';
import { PoSearchLocateSummary } from '@po-ui/ng-components/lib/components/po-search/interfaces/po-search-locate-summary.interface';

@Component({
  selector: 'sample-po-search-labs',
  templateUrl: './sample-po-search-labs.component.html',
  styleUrls: ['./sample-po-search-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchLabsComponent implements OnInit, OnChanges {
  protected http = inject(HttpClient);

  @ViewChild('poSearch', { static: true }) poSearch!: PoSearchComponent;

  ariaLabel?: any;
  customLiterals?: PoSearchLiterals;
  literals?: string;
  properties: Array<string> = [];
  search: string = '';
  event: string = '';
  service: string = 'https://po-sample-api.onrender.com/v1/heroes';
  items: Array<any> = [];
  filteredItems: Array<any> = [];
  fieldKeys?: Array<any> = [];
  fieldSelect?: Array<any> = [];
  tooltip?: string;
  icon?: string;
  filterMode: PoSearchFilterMode = PoSearchFilterMode.startsWith;
  searchMode: 'action' | 'trigger' | 'locate' | 'execute' = 'action';
  fieldKey?: any;
  itemsModel?: any;
  filterModel: any = '["name"]';
  filterSelectModel?: any;
  size: string = 'medium';
  customLocateSummary?: PoSearchLocateSummary;
  locateSummary?: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'showListbox', label: 'Show Listbox' },
    { value: 'loading', label: 'Loading' }
  ];

  public readonly iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'fa-search', value: 'fa fa-search' },
    { label: 'an-user', value: 'an an-user' },
    { label: 'an-magnifying-glass', value: 'an an-magnifying-glass' }
  ];

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: PoSearchFilterMode.startsWith },
    { label: 'Contains', value: PoSearchFilterMode.contains },
    { label: 'Ends With', value: PoSearchFilterMode.endsWith }
  ];

  public readonly searchModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Action', value: 'action' },
    { label: 'Execute', value: 'execute' },
    { label: 'Locate', value: 'locate' },
    { label: 'Trigger', value: 'trigger' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.filteredItems = this.items;
    }
  }

  changeFilter(item: any) {
    return Object.keys(item);
  }

  onChangeService() {
    this.http.get(this.service).subscribe((response: any) => {
      const items = response.items;
      if (Array.isArray(items) && items.length > 0) {
        this.items = items;
        this.filteredItems = items;
        this.fieldKeys = ['name'];
      }
    });
  }

  updateFilterKeys(event: string): void {
    this.fieldKeys = this.convertToArray(event);
  }

  updateFilterSelect(event: string): void {
    this.fieldSelect = this.convertToArray(event);
  }

  filter(event: Array<any>) {
    this.filteredItems = event;

    this.event = event.length === 0 ? 'p-change-model' : 'p-filtered-items-change';
  }

  changeItems(items: string): void {
    try {
      const newItems = JSON.parse(items);
      if (Array.isArray(newItems)) {
        this.filteredItems = newItems;
        this.items = newItems;
      }
    } catch {}
  }

  changeLiterals(): void {
    try {
      this.customLiterals = JSON.parse(this.literals ?? '');
    } catch {
      this.customLiterals = undefined;
    }
  }

  changeEvent(event: string): void {
    setTimeout(() => {
      this.event = event;
    });
  }

  changeLocateSummary(): void {
    try {
      this.customLocateSummary = JSON.parse(this.locateSummary ?? '');
    } catch {
      this.customLocateSummary = undefined;
    }
  }

  restore(): void {
    this.ariaLabel = '';
    this.search = '';
    this.event = '';
    this.icon = undefined;
    this.customLiterals = undefined;
    this.customLocateSummary = undefined;
    this.properties = [];
    this.filteredItems = undefined;
    this.items = undefined;
    this.itemsModel = undefined;
    this.filterModel = '["name"]';
    this.filterSelectModel = '';
    this.fieldKeys = undefined;
    this.fieldSelect = undefined;
    this.filterMode = PoSearchFilterMode.startsWith;
    this.searchMode = 'action';
    this.literals = undefined;
    this.locateSummary = undefined;
    this.size = 'medium';
    this.cleanInput();
    this.onChangeService();
  }

  cleanInput(): void {
    try {
      this.poSearch.clearSearch();
    } catch {}
  }

  private convertToArray(value: string): Array<any> | undefined {
    try {
      return JSON.parse(value);
    } catch {
      return undefined;
    }
  }
}
`),Kg()()(),Qc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Sk(24,`sample-po-search-labs/sample-po-search-labs.component.css`),Kg(),Qc(25,`pre`,11),Sk(26,`.sample-list-search {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.sample-list-search strong {
  text-transform: capitalize;
}
`),Kg()()()()(),Qc(27,`div`,12),vu(28,`sample-po-search-labs`),Kg(),vu(29,`hr`)),o&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,rt,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Be],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{getItems(){return[{id:`0348093615904`,name:`Leonardo Silveiras`,birthdate:`1995-07-15T00:00:00-00:00`,genre:`male`,city:`4209102`,status:`active`,nickname:`leo.silveira`,email:`leonardo.silveira@gmail.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`Joinville`,state:`Santa Catarina`,uf:`SC`,dependents:[]},{id:`0648093812893`,name:`João Severino`,birthdate:`1995-10-07T00:00:00-00:00`,genre:`male`,city:`4216206`,status:`active`,nickname:`jseverino`,email:`jseverino@yahoo.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Francisco do Sul`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109481,name:`Maria`,age:`10`,related:`Daughter`,birthdate:`2008-12-10`}]},{id:`0748093840433`,name:`José Marcos Cardoso`,birthdate:`1986-08-01T00:00:00-00:00`,genre:`male`,city:`4201307`,status:`inactive`,nickname:`jose`,email:`jose@outlook.com`,nationality:`Brazilian`,birthPlace:`3550308`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Inativo`,cityName:`Araquari`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109483,name:`Pedro`,age:`13`,related:`Son`,birthdate:`2008-12-10`},{id:109484,name:`Paulo`,age:`15`,related:`Son`,birthdate:`2008-12-10`},{id:109485,name:`José`,age:`19`,related:`Son`,birthdate:`2008-12-10`}]},{id:`0848094890811`,name:`Karlo Rodrigues`,birthdate:`1989-12-28T00:00:00-00:00`,genre:`male`,city:`3550308`,status:`active`,nickname:`krodrigues`,email:`krodrigues@uol.com.br`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Paulo`,state:`São Paulo`,uf:`SP`,dependents:[]}]}static ɵfac=function(o){return new(o||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function pt(a,T){if(a&1&&(Qc(0,`div`,0),vu(1,`po-info`,4)(2,`po-info`,5)(3,`po-info`,6),Kg()),a&2){let r=T.$implicit;wg(),Rb(`p-value`,r.name),wg(),Rb(`p-value`,r.nickname),wg(),Rb(`p-value`,r.email)}}function st(a,T){a&1&&vu(0,`div`)}function mt(a,T){if(a&1&&(Qc(0,`li`,7),Sk(1),FO(2,st,1,0,`div`),Kg(),Qc(3,`li`,7),Sk(4),Kg()),a&2){let r=T.$implicit,o=ek();wg(),tm(` Nickname: `,r.nickname,` `),wg(),VO(o.compareObjects(r)?2:-1),wg(2),tm(`Email: `,r.email)}}var Ve=(()=>{class a{service=p(se);items;filterKeys=[`name`,`nickname`,`email`];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems()}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[])}compareObjects(r){return!!this.peopleFiltered.includes(r)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-find-people`]],standalone:!1,features:[we([se])],decls:8,vars:3,consts:[[1,`po-row`],[`p-aria-label`,`Po Search`,1,`po-md-12`,3,`p-filtered-items-change`,`p-items`,`p-filter-keys`],[`p-property-title`,`name`,3,`p-items`],[`p-list-view-content-template`,``],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`],[1,`po-md-12`,`po-text-color-neutral-dark-40`]],template:function(o,i){o&1&&(Qc(0,`div`,0)(1,`po-search`,1),vt$1(`p-filtered-items-change`,function(h){return i.filtered(h)}),Kg()(),vu(2,`po-divider`),UO(3,pt,4,3,`div`,0,BO),vu(5,`po-divider`),Qc(6,`po-list-view`,2),Db(7,mt,5,3,`ng-template`,3),Kg()),o&2&&(wg(),Rb(`p-items`,i.items)(`p-filter-keys`,i.filterKeys),wg(2),HO(i.peopleFiltered),wg(3),Rb(`p-items`,i.items))},dependencies:[Nf,Joe,Pze,wae,Zne],styles:[`li[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center}li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:.75em;height:.75em;border-radius:50%;background-color:green;margin-left:10px}`],changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a});var ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-find-people-view`]],standalone:!1,decls:34,vars:6,consts:[[`id`,`sample-po-search-find-people`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Search Find People`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-search-find-people/sample-po-search-find-people.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    p-aria-label="Po Search"
    [p-items]="items"
    [p-filter-keys]="filterKeys"
    (p-filtered-items-change)="filtered($event)"
  ></po-search>
</div>

<po-divider />

@for (people of peopleFiltered; track people) {
  <div class="po-row">
    <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>
    <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>
    <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
  </div>
}

<po-divider />

<po-list-view p-property-title="name" [p-items]="items">
  <ng-template p-list-view-content-template let-item>
    <li class="po-md-12 po-text-color-neutral-dark-40">
      Nickname: { { item.nickname }}
      @if (compareObjects(item)) {
        <div></div>
      }
    </li>
    <li class="po-md-12 po-text-color-neutral-dark-40">Email: { { item.email }}</li>
  </ng-template>
</po-list-view>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-search-find-people/sample-po-search-find-people.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { SamplePoSearchFindPeopleService } from './sample-po-search-find-people.service';

@Component({
  selector: 'sample-po-search-find-people',
  templateUrl: './sample-po-search-find-people.component.html',
  styleUrls: ['./sample-po-search-find-people.component.css'],
  providers: [SamplePoSearchFindPeopleService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchFindPeopleComponent implements OnInit {
  private service = inject(SamplePoSearchFindPeopleService);

  items: any;
  filterKeys: Array<string> = ['name', 'nickname', 'email'];
  peopleFiltered: Array<any> = [];

  ngOnInit() {
    this.items = this.service.getItems();
  }

  filtered(event: Array<any>) {
    this.peopleFiltered = event;
    if (event.length === 4) {
      this.peopleFiltered = [];
    } else {
      try {
      } catch (error) {
        return undefined;
      }
    }
  }

  compareObjects(value: any) {
    return this.peopleFiltered.includes(value) ? true : false;
  }
}
`),Kg(),Qc(21,`label`,6),Sk(22,`sample-po-search-find-people/sample-po-search-find-people.service.ts`),Kg(),Qc(23,`pre`,9),Sk(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSearchFindPeopleService {
  getItems(): Array<any> {
    return [
      {
        'id': '0348093615904',
        'name': 'Leonardo Silveiras',
        'birthdate': '1995-07-15T00:00:00-00:00',
        'genre': 'male',
        'city': '4209102',
        'status': 'active',
        'nickname': 'leo.silveira',
        'email': 'leonardo.silveira@gmail.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'Joinville',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': []
      },
      {
        'id': '0648093812893',
        'name': 'Jo\xE3o Severino',
        'birthdate': '1995-10-07T00:00:00-00:00',
        'genre': 'male',
        'city': '4216206',
        'status': 'active',
        'nickname': 'jseverino',
        'email': 'jseverino@yahoo.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Francisco do Sul',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [{ 'id': 109481, 'name': 'Maria', 'age': '10', 'related': 'Daughter', 'birthdate': '2008-12-10' }]
      },
      {
        'id': '0748093840433',
        'name': 'Jos\xE9 Marcos Cardoso',
        'birthdate': '1986-08-01T00:00:00-00:00',
        'genre': 'male',
        'city': '4201307',
        'status': 'inactive',
        'nickname': 'jose',
        'email': 'jose@outlook.com',
        'nationality': 'Brazilian',
        'birthPlace': '3550308',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Inativo',
        'cityName': 'Araquari',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [
          { 'id': 109483, 'name': 'Pedro', 'age': '13', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109484, 'name': 'Paulo', 'age': '15', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109485, 'name': 'Jos\xE9', 'age': '19', 'related': 'Son', 'birthdate': '2008-12-10' }
        ]
      },
      {
        'id': '0848094890811',
        'name': 'Karlo Rodrigues',
        'birthdate': '1989-12-28T00:00:00-00:00',
        'genre': 'male',
        'city': '3550308',
        'status': 'active',
        'nickname': 'krodrigues',
        'email': 'krodrigues@uol.com.br',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Paulo',
        'state': 'S\xE3o Paulo',
        'uf': 'SP',
        'dependents': []
      }
    ];
  }
}
`),Kg()()(),Qc(25,`po-tab`,10)(26,`div`)(27,`label`,6),Sk(28,`sample-po-search-find-people/sample-po-search-find-people.component.css`),Kg(),Qc(29,`pre`,11),Sk(30,`li {
  list-style: none;
  display: flex;
  align-items: center;
}

li div {
  width: 0.75em;
  height: 0.75em;
  border-radius: 50%;
  background-color: green;
  margin-left: 10px;
}
`),Kg()()()()(),Qc(31,`div`,12),vu(32,`sample-po-search-find-people`),Kg(),vu(33,`hr`)),o&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ct,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ve],encapsulation:2,changeDetection:1})}return a})();var me=(()=>{class a{getItems(){return[{id:`0348093615904`,name:`Leonardo Silveiras`,birthdate:`1995-07-15T00:00:00-00:00`,genre:`male`,city:`4209102`,status:`active`,nickname:`leo.silveira`,email:`leonardo.silveira@gmail.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`Joinville`,state:`Santa Catarina`,uf:`SC`,dependents:[]},{id:`0648093812893`,name:`João Severino`,birthdate:`1995-10-07T00:00:00-00:00`,genre:`male`,city:`4216206`,status:`active`,nickname:`jseverino`,email:`jseverino@yahoo.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Francisco do Sul`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109481,name:`Maria`,age:`10`,related:`Daughter`,birthdate:`2008-12-10`}]},{id:`0748093840433`,name:`José Marcos Cardoso`,birthdate:`1986-08-01T00:00:00-00:00`,genre:`male`,city:`4201307`,status:`inactive`,nickname:`jose`,email:`jose@outlook.com`,nationality:`Brazilian`,birthPlace:`3550308`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Inativo`,cityName:`Araquari`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109483,name:`Pedro`,age:`13`,related:`Son`,birthdate:`2008-12-10`},{id:109484,name:`Paulo`,age:`15`,related:`Son`,birthdate:`2008-12-10`},{id:109485,name:`José`,age:`19`,related:`Son`,birthdate:`2008-12-10`}]},{id:`0848094890811`,name:`Karlo Rodrigues`,birthdate:`1989-12-28T00:00:00-00:00`,genre:`male`,city:`3550308`,status:`active`,nickname:`krodrigues`,email:`krodrigues@uol.com.br`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Paulo`,state:`São Paulo`,uf:`SP`,dependents:[]}]}static ɵfac=function(o){return new(o||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function ht(a,T){if(a&1&&(Qc(0,`div`,0),vu(1,`po-divider`)(2,`po-info`,2)(3,`po-info`,3)(4,`po-info`,4),Kg()),a&2){let r=T.$implicit;wg(2),Rb(`p-value`,r.name),wg(),Rb(`p-value`,r.nickname),wg(),Rb(`p-value`,r.email)}}var je=(()=>{class a{service=p(me);items;filterKeys=[`name`,`nickname`,`email`];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems()}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[])}compareObjects(r){return!!this.peopleFiltered.includes(r)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-listbox`]],standalone:!1,features:[we([me])],decls:4,vars:2,consts:[[1,`po-row`],[`p-aria-label`,`Po Search`,`p-show-listbox`,`true`,`p-search-type`,`trigger`,1,`po-md-12`,3,`p-filtered-items-change`,`p-items`,`p-filter-keys`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(o,i){o&1&&(Qc(0,`div`,0)(1,`po-search`,1),vt$1(`p-filtered-items-change`,function(h){return i.filtered(h)}),Kg()(),UO(2,ht,5,3,`div`,0,BO)),o&2&&(wg(),Rb(`p-items`,i.items)(`p-filter-keys`,i.filterKeys),wg(),HO(i.peopleFiltered))},dependencies:[Nf,Joe,Zne],encapsulation:2,changeDetection:1})}return a})();var ft=a=>({"docs-sample-code-tabs":a});var We=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-listbox-view`]],standalone:!1,decls:28,vars:6,consts:[[`id`,`sample-po-search-listbox`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Search With Listbox`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-search-listbox/sample-po-search-listbox.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    p-aria-label="Po Search"
    [p-items]="items"
    [p-filter-keys]="filterKeys"
    (p-filtered-items-change)="filtered($event)"
    p-show-listbox="true"
    p-search-type="trigger"
  ></po-search>
</div>

@for (people of peopleFiltered; track people) {
  <div class="po-row">
    <po-divider />
    <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>
    <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>
    <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
  </div>
}
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-search-listbox/sample-po-search-listbox.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { SamplePoSearchListboxService } from './sample-po-search-listbox.service';

@Component({
  selector: 'sample-po-search-listbox',
  templateUrl: './sample-po-search-listbox.component.html',
  providers: [SamplePoSearchListboxService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchListboxComponent implements OnInit {
  private service = inject(SamplePoSearchListboxService);

  items: any;
  filterKeys: Array<string> = ['name', 'nickname', 'email'];
  peopleFiltered: Array<any> = [];

  ngOnInit() {
    this.items = this.service.getItems();
  }

  filtered(event: Array<any>) {
    this.peopleFiltered = event;
    if (event.length === 4) {
      this.peopleFiltered = [];
    } else {
      try {
      } catch (error) {
        return undefined;
      }
    }
  }

  compareObjects(value: any) {
    return this.peopleFiltered.includes(value) ? true : false;
  }
}
`),Kg(),Qc(21,`label`,6),Sk(22,`sample-po-search-listbox/sample-po-search-listbox.service.ts`),Kg(),Qc(23,`pre`,9),Sk(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSearchListboxService {
  getItems(): Array<any> {
    return [
      {
        'id': '0348093615904',
        'name': 'Leonardo Silveiras',
        'birthdate': '1995-07-15T00:00:00-00:00',
        'genre': 'male',
        'city': '4209102',
        'status': 'active',
        'nickname': 'leo.silveira',
        'email': 'leonardo.silveira@gmail.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'Joinville',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': []
      },
      {
        'id': '0648093812893',
        'name': 'Jo\xE3o Severino',
        'birthdate': '1995-10-07T00:00:00-00:00',
        'genre': 'male',
        'city': '4216206',
        'status': 'active',
        'nickname': 'jseverino',
        'email': 'jseverino@yahoo.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Francisco do Sul',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [{ 'id': 109481, 'name': 'Maria', 'age': '10', 'related': 'Daughter', 'birthdate': '2008-12-10' }]
      },
      {
        'id': '0748093840433',
        'name': 'Jos\xE9 Marcos Cardoso',
        'birthdate': '1986-08-01T00:00:00-00:00',
        'genre': 'male',
        'city': '4201307',
        'status': 'inactive',
        'nickname': 'jose',
        'email': 'jose@outlook.com',
        'nationality': 'Brazilian',
        'birthPlace': '3550308',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Inativo',
        'cityName': 'Araquari',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [
          { 'id': 109483, 'name': 'Pedro', 'age': '13', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109484, 'name': 'Paulo', 'age': '15', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109485, 'name': 'Jos\xE9', 'age': '19', 'related': 'Son', 'birthdate': '2008-12-10' }
        ]
      },
      {
        'id': '0848094890811',
        'name': 'Karlo Rodrigues',
        'birthdate': '1989-12-28T00:00:00-00:00',
        'genre': 'male',
        'city': '3550308',
        'status': 'active',
        'nickname': 'krodrigues',
        'email': 'krodrigues@uol.com.br',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Paulo',
        'state': 'S\xE3o Paulo',
        'uf': 'SP',
        'dependents': []
      }
    ];
  }
}
`),Kg()()()()(),Qc(25,`div`,10),vu(26,`sample-po-search-listbox`),Kg(),vu(27,`hr`)),o&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ft,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,je],encapsulation:2,changeDetection:1})}return a})();function Et(a,T){if(a&1&&(Qc(0,`div`,0)(1,`po-container`,2),vu(2,`po-info`,3)(3,`po-info`,4)(4,`po-info`,5)(5,`po-info`,6),Kg()()),a&2){let r=T.$implicit;wg(2),Rb(`p-value`,r.name),wg(),Rb(`p-value`,r.gender),wg(),Rb(`p-value`,r.planet),wg(),Rb(`p-value`,r.father)}}var Re=(()=>{class a{items;filteredItems=[];filterSelect=[{label:`Personal`,value:[`name`,`gender`]},{label:`Planet`,value:[`planet`]},{label:`Family`,value:`father`}];ngOnInit(){this.items=[{name:`Anakin Skywalker`,gender:`male`,planet:`Tatooine`,father:`Darth Sidious`},{name:`Luke Skywalker`,gender:`male`,planet:`Tatooine`,father:`Anakin Skywalker`},{name:`Leia Organa`,gender:`female`,planet:`Alderaan`,father:`Anakin Skywalker`},{name:`Han Solo`,gender:`male`,planet:`Corellia`,father:`Ovan`}]}filtered(r){this.filteredItems=r}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-filter-select`]],standalone:!1,decls:4,vars:2,consts:[[1,`po-row`],[`p-aria-label`,`Po Search`,`p-search-type`,`trigger`,`p-show-listbox`,`true`,`p-disabled`,`false`,1,`po-md-12`,3,`p-filtered-items-change`,`p-items`,`p-filter-select`],[1,`po-row`,`po-mt-2`],[`p-label`,`Name`,1,`po-md-3`,3,`p-value`],[`p-label`,`Gender`,1,`po-md-3`,3,`p-value`],[`p-label`,`Planet`,1,`po-md-3`,3,`p-value`],[`p-label`,`Father`,1,`po-md-3`,3,`p-value`]],template:function(o,i){o&1&&(Qc(0,`div`,0)(1,`po-search`,1),vt$1(`p-filtered-items-change`,function(h){return i.filtered(h)}),Kg()(),UO(2,Et,6,4,`div`,0,BO)),o&2&&(wg(),Rb(`p-items`,i.items)(`p-filter-select`,i.filterSelect),wg(),HO(i.filteredItems))},dependencies:[Fc,Joe,Zne],encapsulation:2,changeDetection:1})}return a})();var vt=a=>({"docs-sample-code-tabs":a});var He=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-filter-select-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-search-filter-select`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Search With Filter Select + Listbox`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-search-filter-select/sample-po-search-filter-select.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    p-aria-label="Po Search"
    [p-items]="items"
    (p-filtered-items-change)="filtered($event)"
    p-search-type="trigger"
    [p-filter-select]="filterSelect"
    p-show-listbox="true"
    p-disabled="false"
  ></po-search>
</div>

@for (people of filteredItems; track people) {
  <div class="po-row">
    <po-container class="po-row po-mt-2">
      <po-info class="po-md-3" p-label="Name" [p-value]="people.name"> </po-info>
      <po-info class="po-md-3" p-label="Gender" [p-value]="people.gender"> </po-info>
      <po-info class="po-md-3" p-label="Planet" [p-value]="people.planet"> </po-info>
      <po-info class="po-md-3" p-label="Father" [p-value]="people.father"> </po-info>
    </po-container>
  </div>
}
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-search-filter-select/sample-po-search-filter-select.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-search-filter-select',
  templateUrl: './sample-po-search-filter-select.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchFilterSelectComponent implements OnInit {
  items: any;
  filteredItems: Array<any> = [];
  filterSelect = [
    { label: 'Personal', value: ['name', 'gender'] },
    { label: 'Planet', value: ['planet'] },
    { label: 'Family', value: 'father' }
  ];

  ngOnInit() {
    this.items = [
      { name: 'Anakin Skywalker', gender: 'male', planet: 'Tatooine', father: 'Darth Sidious' },
      { name: 'Luke Skywalker', gender: 'male', planet: 'Tatooine', father: 'Anakin Skywalker' },
      { name: 'Leia Organa', gender: 'female', planet: 'Alderaan', father: 'Anakin Skywalker' },
      { name: 'Han Solo', gender: 'male', planet: 'Corellia', father: 'Ovan' }
    ];
  }

  filtered(event: Array<any>) {
    this.filteredItems = event;
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-search-filter-select`),Kg(),vu(23,`hr`)),o&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,vt,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Re],encapsulation:2,changeDetection:1})}return a})();var Ke=(()=>{class a{poModal;filterType=Eu.contains;filterKeysAction=[`rotina`,`codigo`,`modulo`,`versao`];keysLabel=[`rotina`,`codigo`];itemsAction=[{rotina:`Contas a Pagar`,codigo:`MATA103`,modulo:`Adm`,versao:`1.2.3`,action:()=>alert(`Contas a Pagar`)},{rotina:`Cotação de Fornecedores`,codigo:`MATA140`,modulo:`Adm`,versao:`1.2.3`,action:()=>alert(`Cotação de Fornecedores`)},{rotina:`Meus Funcionarios`,codigo:`XPTO987`,modulo:`RH`,versao:`1.2.3`,url:`documentation/po-widget`}];columns=[{property:`rotina`,label:`Rotina`},{property:`codigo`,label:`Código`},{property:`modulo`,label:`Módulo`},{property:`versao`,label:`Versão`}];footerAction(){this.poModal.open()}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-execute`]],viewQuery:function(o,i){if(o&1&&Du(ia,7),o&2){let m;No(m=xo())&&(i.poModal=m.first)}},standalone:!1,decls:10,vars:9,consts:[[`modal`,``],[1,`po-row`],[`p-title`,`Pesquisar e executar`,`p-help`,`https://github.com/po-ui/po-angular/stargazers`,1,`po-lg-6`,`po-mt-2`,3,`p-height`],[`name`,`Po Search`,1,`po-mt-2`,`full`,3,`p-footer-action-listbox`,`p-search-type`,`p-items`,`p-filter-type`,`p-filter-keys`,`p-keys-label`],[`p-title`,`Rotinas`],[3,`p-columns`,`p-items`,`p-hide-columns-manager`]],template:function(o,i){o&1&&(Qc(0,`div`,1)(1,`po-widget`,2)(2,`div`,1)(3,`span`),Sk(4,`Entre com o nome ou código da rotina`),Kg()(),Qc(5,`div`,1)(6,`po-search`,3),vt$1(`p-footer-action-listbox`,function(){return i.footerAction()}),Kg()()()(),Qc(7,`po-modal`,4,0),vu(9,`po-table`,5),Kg()),o&2&&(wg(),Rb(`p-height`,180),wg(5),Rb(`p-search-type`,`execute`)(`p-items`,i.itemsAction)(`p-filter-type`,i.filterType)(`p-filter-keys`,i.filterKeysAction)(`p-keys-label`,i.keysLabel),wg(3),Rb(`p-columns`,i.columns)(`p-items`,i.itemsAction)(`p-hide-columns-manager`,!0))},dependencies:[ia,q4,bae,Zne],styles:[`.full[_ngcontent-%COMP%]{width:100%}`],changeDetection:1})}return a})();var Ct=a=>({"docs-sample-code-tabs":a});var Je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-execute-view`]],standalone:!1,decls:30,vars:6,consts:[[`id`,`sample-po-search-execute`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Search Form Fields with Execute`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-search-execute/sample-po-search-execute.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-widget
    class="po-lg-6 po-mt-2"
    p-title="Pesquisar e executar"
    p-help="https://github.com/po-ui/po-angular/stargazers"
    [p-height]="180"
  >
    <div class="po-row">
      <span>Entre com o nome ou c\xF3digo da rotina</span>
    </div>
    <div class="po-row">
      <po-search
        class="po-mt-2 full"
        name="Po Search"
        [p-search-type]="'execute'"
        [p-items]="itemsAction"
        [p-filter-type]="filterType"
        [p-filter-keys]="filterKeysAction"
        [p-keys-label]="keysLabel"
        (p-footer-action-listbox)="footerAction()"
      />
    </div>
  </po-widget>
</div>

<po-modal #modal p-title="Rotinas">
  <po-table [p-columns]="columns" [p-items]="itemsAction" [p-hide-columns-manager]="true"> </po-table>
</po-modal>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-search-execute/sample-po-search-execute.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoModalComponent, PoSearchFilterMode } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-execute',
  templateUrl: './sample-po-search-execute.component.html',
  styleUrls: ['./sample-po-search-execute.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchExecuteComponent {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  filterType = PoSearchFilterMode.contains;
  filterKeysAction: Array<string> = ['rotina', 'codigo', 'modulo', 'versao'];
  keysLabel: Array<string> = ['rotina', 'codigo'];

  itemsAction = [
    {
      rotina: 'Contas a Pagar',
      codigo: 'MATA103',
      modulo: 'Adm',
      versao: '1.2.3',
      action: () => alert(\`Contas a Pagar\`)
    },
    {
      rotina: 'Cota\xE7\xE3o de Fornecedores',
      codigo: 'MATA140',
      modulo: 'Adm',
      versao: '1.2.3',
      action: () => alert(\`Cota\xE7\xE3o de Fornecedores\`)
    },
    {
      rotina: 'Meus Funcionarios',
      codigo: 'XPTO987',
      modulo: 'RH',
      versao: '1.2.3',
      url: 'documentation/po-widget'
    }
  ];

  columns = [
    { property: 'rotina', label: 'Rotina' },
    { property: 'codigo', label: 'C\xF3digo' },
    { property: 'modulo', label: 'M\xF3dulo' },
    { property: 'versao', label: 'Vers\xE3o' }
  ];

  footerAction() {
    this.poModal.open();
  }
}
`),Kg()()(),Qc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Sk(24,`sample-po-search-execute/sample-po-search-execute.component.css`),Kg(),Qc(25,`pre`,11),Sk(26,`.full {
  width: 100%;
}
`),Kg()()()()(),Qc(27,`div`,12),vu(28,`sample-po-search-execute`),Kg(),vu(29,`hr`)),o&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ct,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ke],encapsulation:2,changeDetection:1})}return a})();var wt=[`nameInput`];var _t=[`cpfInput`];var Mt=[`addressInput`];var It=[`numberInput`];var Tt=[`emailInput`];var kt=[`websiteInput`];var Ft=[`reactiveFormData`];var Ue=(()=>{class a{fb=p(OZ);nameInput;cpfInput;addressInput;numberInput;emailInput;websiteInput;reactiveFormModal;reactiveForm;filterTargets=[];filteredIndexes=[];currentIndex=-1;firstSearch=!0;locateSummary={currentIndex:0,total:0};filterType=Eu.endsWith;searchLiterals={search:`Buscar campos`};modalPrimaryAction={label:`Close`,action:()=>this.reactiveFormModal.close()};constructor(){this.createForm()}ngAfterViewInit(){this.filterTargets=[{label:`Customer name`,index:0,focus:()=>this.nameInput.focus()},{label:`CPF`,index:1,focus:()=>this.cpfInput.focus()},{label:`Address`,index:2,focus:()=>this.addressInput.focus()},{label:`Number`,index:3,focus:()=>this.numberInput.focus()},{label:`Email`,index:4,focus:()=>this.emailInput.focus()},{label:`Website`,index:5,focus:()=>this.websiteInput.focus()}]}createForm(){this.reactiveForm=this.fb.group({name:[``,[Xm.required,Xm.minLength(5)]],cpf:[``,Xm.required],address:[``,Xm.required],number:[``,Xm.required],email:[``,Xm.required],website:[``,Xm.required]})}updateSearchTerm(r){console.log(`updateSearchTerm`);let o=r.toLowerCase();this.filteredIndexes=this.filterTargets.map((m,h)=>({i:h,t:m})).filter(({t:m})=>o&&m.label.toLowerCase().startsWith(o)).map(({i:m})=>m),this.currentIndex=-1;let i=this.filteredIndexes.length;this.locateSummary={currentIndex:0,total:i}}onNextOccurrenceClick(){console.log(`onNextOccurrenceClick`),this.goToNextOccurrence(),this.focusCurrent()}onPreviousOccurrenceClick(){console.log(`onPreviousOccurrenceClick`),this.goToPreviousOccurrence(),this.focusCurrent()}goToNextOccurrence(){this.filteredIndexes.length&&(this.currentIndex=(this.currentIndex+1)%this.filteredIndexes.length,this.updateSummary())}goToPreviousOccurrence(){this.filteredIndexes.length&&(this.currentIndex=this.currentIndex<=0?this.filteredIndexes.length-1:this.currentIndex-1,this.updateSummary())}updateSummary(){let r=this.filteredIndexes.length,o=r===0||this.currentIndex===-1?0:this.currentIndex+1;this.locateSummary={currentIndex:o,total:r}}focusCurrent(){let r=this.filteredIndexes[this.currentIndex];r!==void 0&&(document.activeElement?.blur(),this.filterTargets[r].focus())}getInputElementByIndex(r){switch(r){case 0:return this.nameInput?.inputEl?.nativeElement??null;case 1:return this.cpfInput?.inputEl?.nativeElement??null;case 2:return this.addressInput?.inputEl?.nativeElement??null;case 3:return this.numberInput?.inputEl?.nativeElement??null;case 4:return this.emailInput?.inputEl?.nativeElement??null;case 5:return this.websiteInput?.inputEl?.nativeElement??null;default:return null}}saveForm(){this.reactiveFormModal.open()}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-fields-locate`]],viewQuery:function(o,i){if(o&1&&Du(wt,7)(_t,7)(Mt,7)(It,7)(Tt,7)(kt,7)(Ft,7),o&2){let m;No(m=xo())&&(i.nameInput=m.first),No(m=xo())&&(i.cpfInput=m.first),No(m=xo())&&(i.addressInput=m.first),No(m=xo())&&(i.numberInput=m.first),No(m=xo())&&(i.emailInput=m.first),No(m=xo())&&(i.websiteInput=m.first),No(m=xo())&&(i.reactiveFormModal=m.first)}},standalone:!1,decls:35,vars:11,consts:[[`nameInput`,``],[`cpfInput`,``],[`addressInput`,``],[`numberInput`,``],[`emailInput`,``],[`websiteInput`,``],[`reactiveFormData`,``],[1,`po-row`],[1,`po-ml-1`,`po-mr-1`],[`p-search-type`,`locate`,3,`p-change-model`,`p-locate-next`,`p-locate-previous`,`p-literals`,`p-locate-summary`],[3,`formGroup`],[`formControlName`,`name`,`p-clean`,``,`p-icon`,`an an-user`,`p-label`,`Customer name`,1,`po-lg-9`],[`formControlName`,`cpf`,`p-label`,`CPF`,`p-mask`,`999.999.999-99`,`p-clean`,``,1,`po-lg-3`],[`formControlName`,`address`,`p-clean`,``,`p-icon`,`an an-map-pin`,`p-label`,`Address`,1,`po-lg-9`],[`formControlName`,`number`,`p-label`,`Number`,`p-clean`,``,1,`po-lg-3`],[`formControlName`,`email`,`p-label`,`Email`,`p-clean`,``,1,`po-lg-6`],[`formControlName`,`website`,`p-label`,`Website`,`p-clean`,``,1,`po-lg-6`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Save successful`,3,`p-primary-action`],[`p-label`,`Name`,1,`po-lg-6`,3,`p-value`],[`p-label`,`CPF`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Address`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Number`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Email`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Website`,1,`po-lg-6`,3,`p-value`]],template:function(o,i){o&1&&(Qc(0,`div`,7)(1,`div`,8)(2,`po-search`,9),vt$1(`p-change-model`,function(h){return i.updateSearchTerm(h)})(`p-locate-next`,function(){return i.onNextOccurrenceClick()})(`p-locate-previous`,function(){return i.onPreviousOccurrenceClick()}),Kg()()(),vu(3,`po-divider`),Qc(4,`form`,10)(5,`div`,7)(6,`po-input`,11,0),z0(),Kg(),Qc(8,`po-input`,12,1),z0(),Kg()(),Qc(10,`div`,7)(11,`po-input`,13,2),z0(),Kg(),Qc(13,`po-number`,14,3),z0(),Kg()(),Qc(15,`div`,7)(16,`po-email`,15,4),z0(),Kg(),Qc(18,`po-url`,16,5),z0(),Kg()(),Qc(20,`div`,7)(21,`po-button`,17),vt$1(`p-click`,function(){return i.saveForm()}),Kg()()(),Qc(22,`po-modal`,18,6)(24,`div`,7),vu(25,`po-info`,19)(26,`po-info`,20),Kg(),vu(27,`po-divider`),Qc(28,`div`,7),vu(29,`po-info`,21)(30,`po-info`,22),Kg(),vu(31,`po-divider`),Qc(32,`div`,7),vu(33,`po-info`,23)(34,`po-info`,24),Kg()()),o&2&&(wg(2),Rb(`p-literals`,i.searchLiterals)(`p-locate-summary`,i.locateSummary),wg(2),Rb(`formGroup`,i.reactiveForm),wg(2),W0(),wg(2),W0(),wg(3),W0(),wg(2),W0(),wg(3),W0(),wg(2),W0(),wg(3),Rb(`p-disabled`,!i.reactiveForm.valid),wg(),Rb(`p-primary-action`,i.modalPrimaryAction),wg(3),Rb(`p-value`,i.reactiveForm.controls.name.value),wg(),Rb(`p-value`,i.reactiveForm.controls.cpf.value),wg(3),Rb(`p-value`,i.reactiveForm.controls.address.value),wg(),Rb(`p-value`,i.reactiveForm.controls.number.value),wg(3),Rb(`p-value`,i.reactiveForm.controls.email.value),wg(),Rb(`p-value`,i.reactiveForm.controls.website.value))},dependencies:[AZ,MZ,TZ,ZL,i1,oi,Nf,p5,j4,Goe,G4,Joe,ia,Zne],encapsulation:2,changeDetection:1})}return a})();var Lt=a=>({"docs-sample-code-tabs":a});var Ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-fields-locate-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-search-fields-locate`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Search Form Fields with Locate`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-search-fields-locate/sample-po-search-fields-locate.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <div class="po-ml-1 po-mr-1">
    <po-search
      p-search-type="locate"
      [p-literals]="searchLiterals"
      [p-locate-summary]="locateSummary"
      (p-change-model)="updateSearchTerm($event)"
      (p-locate-next)="onNextOccurrenceClick()"
      (p-locate-previous)="onPreviousOccurrenceClick()"
    />
  </div>
</div>
<po-divider></po-divider>

<form [formGroup]="reactiveForm">
  <div class="po-row">
    <po-input #nameInput class="po-lg-9" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name">
    </po-input>

    <po-input #cpfInput class="po-lg-3" formControlName="cpf" p-label="CPF" p-mask="999.999.999-99" p-clean> </po-input>
  </div>

  <div class="po-row">
    <po-input #addressInput class="po-lg-9" formControlName="address" p-clean p-icon="an an-map-pin" p-label="Address">
    </po-input>

    <po-number #numberInput class="po-lg-3" formControlName="number" p-label="Number" p-clean> </po-number>
  </div>

  <div class="po-row">
    <po-email #emailInput class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>

    <po-url #websiteInput class="po-lg-6" formControlName="website" p-label="Website" p-clean> </po-url>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Save" [p-disabled]="!reactiveForm.valid" (p-click)="saveForm()"> </po-button>
  </div>
</form>

<po-modal #reactiveFormData p-title="Save successful" [p-primary-action]="modalPrimaryAction">
  <div class="po-row">
    <po-info class="po-lg-6" p-label="Name" [p-value]="reactiveForm.controls.name.value"> </po-info>

    <po-info class="po-lg-6" p-label="CPF" [p-value]="reactiveForm.controls.cpf.value"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-lg-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

    <po-info class="po-lg-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-lg-6" p-label="Email" [p-value]="reactiveForm.controls.email.value"> </po-info>

    <po-info class="po-lg-6" p-label="Website" [p-value]="reactiveForm.controls.website.value"> </po-info>
  </div>
</po-modal>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-search-fields-locate/sample-po-search-fields-locate.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { AfterViewInit, Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {
  PoEmailComponent,
  PoInputComponent,
  PoModalAction,
  PoModalComponent,
  PoNumberComponent,
  PoSearchFilterMode,
  PoSearchLiterals,
  PoUrlComponent
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-fields-locate',
  templateUrl: './sample-po-search-fields-locate.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchFieldsLocateComponent implements AfterViewInit {
  protected fb = inject(UntypedFormBuilder);

  @ViewChild('nameInput', { static: true }) nameInput!: PoInputComponent;
  @ViewChild('cpfInput', { static: true }) cpfInput!: PoInputComponent;
  @ViewChild('addressInput', { static: true }) addressInput!: PoInputComponent;
  @ViewChild('numberInput', { static: true }) numberInput!: PoNumberComponent;
  @ViewChild('emailInput', { static: true }) emailInput!: PoEmailComponent;
  @ViewChild('websiteInput', { static: true }) websiteInput!: PoUrlComponent;
  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal!: PoModalComponent;

  reactiveForm!: UntypedFormGroup;

  filterTargets: Array<{ label: string; index: number; focus: () => void }> = [];
  filteredIndexes: Array<number> = [];
  currentIndex: number = -1;
  firstSearch = true;

  locateSummary: { currentIndex: number; total: number } = { currentIndex: 0, total: 0 };
  filterType: PoSearchFilterMode = PoSearchFilterMode.endsWith;
  searchLiterals: PoSearchLiterals = { search: 'Buscar campos' };
  modalPrimaryAction: PoModalAction = {
    label: 'Close',
    action: () => this.reactiveFormModal.close()
  };

  constructor() {
    this.createForm();
  }

  ngAfterViewInit() {
    this.filterTargets = [
      { label: 'Customer name', index: 0, focus: () => this.nameInput.focus() },
      { label: 'CPF', index: 1, focus: () => this.cpfInput.focus() },
      { label: 'Address', index: 2, focus: () => this.addressInput.focus() },
      { label: 'Number', index: 3, focus: () => this.numberInput.focus() },
      { label: 'Email', index: 4, focus: () => this.emailInput.focus() },
      { label: 'Website', index: 5, focus: () => this.websiteInput.focus() }
    ];
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      cpf: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  // Atualiza os campos filtrados conforme o termo digitado
  updateSearchTerm(term: string) {
    console.log('updateSearchTerm');
    const value = term.toLowerCase();

    this.filteredIndexes = this.filterTargets
      .map((t, i) => ({ i, t }))
      .filter(({ t }) => value && t.label.toLowerCase().startsWith(value))
      .map(({ i }) => i);

    this.currentIndex = -1;

    const total = this.filteredIndexes.length;

    this.locateSummary = {
      currentIndex: 0,
      total: total
    };
  }

  // Navega\xE7\xE3o pelos bot\xF5es
  onNextOccurrenceClick() {
    console.log('onNextOccurrenceClick');
    this.goToNextOccurrence();
    this.focusCurrent();
  }

  onPreviousOccurrenceClick() {
    console.log('onPreviousOccurrenceClick');
    this.goToPreviousOccurrence();
    this.focusCurrent();
  }

  goToNextOccurrence() {
    if (!this.filteredIndexes.length) return;

    this.currentIndex = (this.currentIndex + 1) % this.filteredIndexes.length;
    this.updateSummary();
  }

  goToPreviousOccurrence() {
    if (!this.filteredIndexes.length) return;

    this.currentIndex = this.currentIndex <= 0 ? this.filteredIndexes.length - 1 : this.currentIndex - 1;
    this.updateSummary();
  }

  updateSummary() {
    const total = this.filteredIndexes.length;
    const current = total === 0 || this.currentIndex === -1 ? 0 : this.currentIndex + 1;

    this.locateSummary = {
      currentIndex: current,
      total: total
    };
  }

  // Foca o campo selecionado
  focusCurrent() {
    const index = this.filteredIndexes[this.currentIndex];
    if (index !== undefined) {
      (document.activeElement as HTMLElement)?.blur();
      this.filterTargets[index].focus();
    }
  }

  // Obt\xEAm o elemento real do campo
  getInputElementByIndex(index: number): HTMLElement | null {
    switch (index) {
      case 0:
        return this.nameInput?.inputEl?.nativeElement ?? null;
      case 1:
        return this.cpfInput?.inputEl?.nativeElement ?? null;
      case 2:
        return this.addressInput?.inputEl?.nativeElement ?? null;
      case 3:
        return this.numberInput?.inputEl?.nativeElement ?? null;
      case 4:
        return this.emailInput?.inputEl?.nativeElement ?? null;
      case 5:
        return this.websiteInput?.inputEl?.nativeElement ?? null;
      default:
        return null;
    }
  }

  saveForm() {
    this.reactiveFormModal.open();
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-search-fields-locate`),Kg(),vu(23,`hr`)),o&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Lt,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ue],encapsulation:2,changeDetection:1})}return a})();var Qe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-doc`]],standalone:!1,decls:1426,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-search-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-aria-label`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-blur`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`event-p-filter`,1,`docs-api-properties-row`],[`id`,`prop-p-filter-keys`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[1,`language-typescript`],[`id`,`prop-p-filter-select`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSearchFilterSelect[]`],[`id`,`prop-p-filter-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSearchFilterMode`],[`id`,`event-p-filtered-items-change`,1,`docs-api-properties-row`],[`id`,`event-p-focus`,1,`docs-api-properties-row`],[`id`,`event-p-footer-action-listbox`,1,`docs-api-properties-row`],[`id`,`prop-p-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`prop-p-items`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-keys-label`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[1,`language-ts`],[`id`,`event-p-listbox-onclick`,1,`docs-api-properties-row`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSearchLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`event-p-locate-next`,1,`docs-api-properties-row`],[`id`,`event-p-locate-previous`,1,`docs-api-properties-row`],[`id`,`prop-p-locate-summary`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSearchLocateSummary`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`prop-p-no-autocomplete`,1,`docs-api-properties-row`],[`id`,`prop-p-show-listbox`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-search-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`searchMode`],[`id`,`interface-po-search-filter-select`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-search-filter-select-label`,1,`docs-api-properties-row`],[`id`,`interface-po-search-filter-select-value`,1,`docs-api-properties-row`],[`id`,`interface-po-search-locate-summary`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-search-locate-summary-current-index`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`interface-po-search-locate-summary-total`,1,`docs-api-properties-row`],[`id`,`interface-po-search-option`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-search-option-label`,1,`docs-api-properties-row`],[`id`,`interface-po-search-option-value`,1,`docs-api-properties-row`],[`id`,`interface-po-search-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-search-literals-all`,1,`docs-api-properties-row`],[`id`,`interface-po-search-literals-clean`,1,`docs-api-properties-row`],[`id`,`interface-po-search-literals-footer-action-listbox`,1,`docs-api-properties-row`],[`id`,`interface-po-search-literals-next`,1,`docs-api-properties-row`],[`id`,`interface-po-search-literals-of`,1,`docs-api-properties-row`],[`id`,`interface-po-search-literals-placeholder-listbox`,1,`docs-api-properties-row`],[`id`,`interface-po-search-literals-previous`,1,`docs-api-properties-row`],[`id`,`interface-po-search-literals-result`,1,`docs-api-properties-row`],[`id`,`interface-po-search-literals-search`,1,`docs-api-properties-row`],[`id`,`enum-po-search-filter-mode`,1,`docs-api-class-name`],[`id`,`enum-po-search-filter-mode-starts-with`,1,`docs-api-properties-row`],[`id`,`enum-po-search-filter-mode-contains`,1,`docs-api-properties-row`],[`id`,`enum-po-search-filter-mode-ends-with`,1,`docs-api-properties-row`]],template:function(o,i){o&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoSearchModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-search.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoSearchComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`O componente search, também conhecido como barra de pesquisa, é utilizado para ajudar os usuários a localizar um determinado conteúdo.`),Kg(),Qc(15,`p`),Sk(16,`Normalmente localizado no canto superior direito, junto com o ícone de lupa, uma vez que este ícone é amplamente reconhecido.`),Kg(),Qc(17,`h4`),Sk(18,`Boas práticas`),Kg(),Qc(19,`p`),Sk(20,`Foram estruturados os padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia
aos usu\xE1rios. Portanto, \xE9 de extrema import\xE2ncia que, ao utilizar este componente, as pessoas respons\xE1veis por seu
desenvolvimento considerem os seguintes crit\xE9rios:`),Kg(),Qc(21,`ul`)(22,`li`),Sk(23,`Utilize labels para apresentar resultados que est\xE3o sendo exibidos e apresente os resultados mais relevantes
primeiro.`),Kg(),Qc(24,`li`),Sk(25,`Exiba uma mensagem clara quando n\xE3o forem encontrados resultados para busca e sempre que poss\xEDvel ofere\xE7a outras
sugest\xF5es de busca.`),Kg(),Qc(26,`li`),Sk(27,`Mantenha o texto original no campo de input, que facilita a a\xE7\xE3o do usu\xE1rio caso queira fazer uma nova busca com
alguma modifica\xE7\xE3o na pesquisa.`),Kg(),Qc(28,`li`),Sk(29,`Caso seja poss\xEDvel detectar um erro de digita\xE7\xE3o, mostre os resultados para a palavra "corrigida", isso evita a
frustra\xE7\xE3o de n\xE3o obter resultados e n\xE3o for\xE7a o usu\xE1rio a realizar uma nova busca.`),Kg(),Qc(30,`li`),Sk(31,`Quando apropriado, destaque os termos da busca nos resultados.`),Kg(),Qc(32,`li`),Sk(33,`A entrada do campo de pesquisa deve caber em uma linha. Não use entradas de pesquisa de várias linhas.`),Kg(),Qc(34,`li`),Sk(35,`Recomenda-se ter apenas uma pesquisa por p\xE1gina. Se voc\xEA precisar de v\xE1rias pesquisas, rotule-as claramente para
indicar sua finalidade.`),Kg(),Qc(36,`li`),Sk(37,`Se poss\xEDvel, forne\xE7a sugest\xF5es de pesquisa, seja em um helptext ou sugest\xE3o de pesquisa que \xE9 um autocomplete. Isso
ajuda os usu\xE1rios a encontrar o que est\xE3o procurando, especialmente se os itens pesquis\xE1veis forem complexos.`),Kg()(),Qc(38,`h4`),Sk(39,`Acessibilidade tratada no componente`),Kg(),Qc(40,`p`),Sk(41,` Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo
propriet\xE1rio do conte\xFAdo. S\xE3o elas:`),Kg(),Qc(42,`ul`)(43,`li`),Sk(44,`Permitir a interação via teclado (2.1.1: Keyboard (A));`),Kg(),Qc(45,`li`),Sk(46,`Alteração entre os estados precisa ser indicada por mais de um elemento além da cor (1.4.1: Use of Color);`),Kg()(),Qc(47,`h4`),Sk(48,`Tokens customizáveis`),Kg(),Qc(49,`p`),Sk(50,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(51,`blockquote`)(52,`p`),Sk(53,`Para maiores informações, acesse o guia `),Qc(54,`a`,6),Sk(55,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(56,`.`),Kg()(),Qc(57,`table`)(58,`thead`)(59,`tr`)(60,`th`),Sk(61,`Propriedade`),Kg(),Qc(62,`th`),Sk(63,`Descrição`),Kg(),Qc(64,`th`),Sk(65,`Valor Padrão`),Kg()()(),Qc(66,`tbody`)(67,`tr`)(68,`td`)(69,`strong`),Sk(70,`Default Values`),Kg()(),vu(71,`td`)(72,`td`),Kg(),Qc(73,`tr`)(74,`td`)(75,`code`),Sk(76,`--font-family`),Kg()(),Qc(77,`td`),Sk(78,`Família tipográfica do campo`),Kg(),Qc(79,`td`)(80,`code`),Sk(81,`var(--font-family-theme)`),Kg()()(),Qc(82,`tr`)(83,`td`)(84,`code`),Sk(85,`--font-size`),Kg()(),Qc(86,`td`),Sk(87,`Tamanho da fonte do campo`),Kg(),Qc(88,`td`)(89,`code`),Sk(90,`var(--font-size-default)`),Kg()()(),Qc(91,`tr`)(92,`td`)(93,`code`),Sk(94,`--text-color-placeholder`),Kg()(),Qc(95,`td`),Sk(96,`Cor do texto no placeholder`),Kg(),Qc(97,`td`)(98,`code`),Sk(99,`var(--color-neutral-light-30)`),Kg()()(),Qc(100,`tr`)(101,`td`)(102,`code`),Sk(103,`--color`),Kg()(),Qc(104,`td`),Sk(105,`Cor das bordas`),Kg(),Qc(106,`td`)(107,`code`),Sk(108,`var(--color-neutral-dark-70)`),Kg()()(),Qc(109,`tr`)(110,`td`)(111,`code`),Sk(112,`--border-radius`),Kg()(),Qc(113,`td`),Sk(114,`Raio das bordas`),Kg(),Qc(115,`td`)(116,`code`),Sk(117,`var(--border-radius-md)`),Kg()()(),Qc(118,`tr`)(119,`td`)(120,`code`),Sk(121,`--background`),Kg()(),Qc(122,`td`),Sk(123,`Cor de background`),Kg(),Qc(124,`td`)(125,`code`),Sk(126,`var(--color-neutral-light-05)`),Kg()()(),Qc(127,`tr`)(128,`td`)(129,`code`),Sk(130,`--text-color`),Kg()(),Qc(131,`td`),Sk(132,`Cor do texto editável`),Kg(),Qc(133,`td`)(134,`code`),Sk(135,`var(--color-neutral-dark-90)`),Kg()()(),Qc(136,`tr`)(137,`td`)(138,`code`),Sk(139,`--color-clear`),Kg()(),Qc(140,`td`),Sk(141,`Cor do ícone close`),Kg(),Qc(142,`td`)(143,`code`),Sk(144,`var(--color-action-default)`),Kg()()(),Qc(145,`tr`)(146,`td`)(147,`code`),Sk(148,`--color-controls`),Kg()(),Qc(149,`td`),Sk(150,`Cor dos ícones de controle do mode location`),Kg(),Qc(151,`td`)(152,`code`),Sk(153,`var(--color-action-default)`),Kg()()(),Qc(154,`tr`)(155,`td`)(156,`code`),Sk(157,`--transition-property`),Kg()(),Qc(158,`td`),Sk(159,`Atributo da transição`),Kg(),Qc(160,`td`)(161,`code`),Sk(162,`all`),Kg()()(),Qc(163,`tr`)(164,`td`)(165,`code`),Sk(166,`--transition-duration`),Kg()(),Qc(167,`td`),Sk(168,`Duração da transição`),Kg(),Qc(169,`td`)(170,`code`),Sk(171,`var(--duration-extra-fast)`),Kg()()(),Qc(172,`tr`)(173,`td`)(174,`code`),Sk(175,`--transition-timing`),Kg()(),Qc(176,`td`),Sk(177,`Duração da transição com o tipo de transição`),Kg(),Qc(178,`td`)(179,`code`),Sk(180,`var(--timing-standart)`),Kg()()(),Qc(181,`tr`)(182,`td`)(183,`strong`),Sk(184,`Icon`),Kg()(),vu(185,`td`)(186,`td`),Kg(),Qc(187,`tr`)(188,`td`)(189,`code`),Sk(190,`--color-icon-read`),Kg()(),Qc(191,`td`),Sk(192,`Cor do ícone de busca no modo action`),Kg(),Qc(193,`td`)(194,`code`),Sk(195,`var(--color-neutral-dark-70)`),Kg()()(),Qc(196,`tr`)(197,`td`)(198,`code`),Sk(199,`--color-icon`),Kg()(),Qc(200,`td`),Sk(201,`Cor do ícone de busca no modo trigger`),Kg(),Qc(202,`td`)(203,`code`),Sk(204,`var(--color-action-default)`),Kg()()(),Qc(205,`tr`)(206,`td`)(207,`strong`),Sk(208,`Hover`),Kg()(),vu(209,`td`)(210,`td`),Kg(),Qc(211,`tr`)(212,`td`)(213,`code`),Sk(214,`--color-hover`),Kg()(),Qc(215,`td`),Sk(216,`Cor das bordas no estado hover`),Kg(),Qc(217,`td`)(218,`code`),Sk(219,`var(--color-action-hover)`),Kg()()(),Qc(220,`tr`)(221,`td`)(222,`code`),Sk(223,`--background-hover`),Kg()(),Qc(224,`td`),Sk(225,`Cor de background no estado hover`),Kg(),Qc(226,`td`)(227,`code`),Sk(228,`var(--color-brand-01-lightest)`),Kg()()(),Qc(229,`tr`)(230,`td`)(231,`strong`),Sk(232,`Focused`),Kg()(),vu(233,`td`)(234,`td`),Kg(),Qc(235,`tr`)(236,`td`)(237,`code`),Sk(238,`--color-focused`),Kg()(),Qc(239,`td`),Sk(240,`Cor das bordas no estado de focus`),Kg(),Qc(241,`td`)(242,`code`),Sk(243,`var(--color-action-default)`),Kg()()(),Qc(244,`tr`)(245,`td`)(246,`code`),Sk(247,`--outline-color-focused`),Kg()(),Qc(248,`td`),Sk(249,`Cor do outline no estado de focus`),Kg(),Qc(250,`td`)(251,`code`),Sk(252,`var(--color-action-focus)`),Kg()()(),Qc(253,`tr`)(254,`td`)(255,`strong`),Sk(256,`Disabled`),Kg()(),vu(257,`td`)(258,`td`),Kg(),Qc(259,`tr`)(260,`td`)(261,`code`),Sk(262,`--color-disabled`),Kg()(),Qc(263,`td`),Sk(264,`Cor principal no estado disabled`),Kg(),Qc(265,`td`)(266,`code`),Sk(267,`var(--color-action-disabled)`),Kg()()(),Qc(268,`tr`)(269,`td`)(270,`code`),Sk(271,`--background-disabled`),Kg()(),Qc(272,`td`),Sk(273,`Cor de background no estado disabled`),Kg(),Qc(274,`td`)(275,`code`),Sk(276,`var(--color-neutral-light-20)`),Kg()()()()()(),Qc(277,`div`,7)(278,`h4`,8),Sk(279,`Seletor`),Kg(),Qc(280,`pre`,9),Sk(281,`<po-search
    p-aria-label="string"
    (p-blur)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-disabled="boolean"
    (p-filter)="EventEmitter"
    p-filter-keys="Array<any>"
    p-filter-select="PoSearchFilterSelect[]"
    p-filter-type="PoSearchFilterMode"
    (p-filtered-items-change)="EventEmitter"
    (p-focus)="EventEmitter"
    (p-footer-action-listbox)="EventEmitter"
    p-icon="string | TemplateRef<void>"
    p-items="Array<any>"
    (p-keydown)="EventEmitter"
    p-keys-label="Array<string>"
    (p-listbox-onclick)="EventEmitter"
    p-literals="PoSearchLiterals"
    p-loading="boolean"
    (p-locate-next)="EventEmitter"
    (p-locate-previous)="EventEmitter"
    p-locate-summary="PoSearchLocateSummary"
    name="string"
    p-no-autocomplete="boolean"
    p-show-listbox="boolean"
    p-size="string"
    p-search-type="searchMode" >
</po-search>
`),Kg()(),Qc(282,`h4`,10),Sk(283,`Propriedades`),Kg(),Qc(284,`table`,11)(285,`tr`,12)(286,`th`,13),Sk(287,`Nome`),Kg(),Qc(288,`th`,13),Sk(289,`Tipo`),Kg(),Qc(290,`th`,13),Sk(291,`Padrão`),Kg(),Qc(292,`th`,13),Sk(293,`Descrição`),Kg()(),Qc(294,`tr`,14)(295,`td`,15)(296,`div`,16)(297,`span`,17),Sk(298,` p-aria-label`),vu(299,`br`),Kg()()(),Qc(300,`td`,18)(301,`code`,19),Sk(302,`string`),Kg()(),Qc(303,`td`,20),Sk(304,`-`),Kg(),Qc(305,`td`,21)(306,`em`)(307,`strong`),Sk(308,`(opcional)`),Kg()(),Qc(309,`p`),Sk(310,`Define um aria-label para o po-search.`),Kg(),Qc(311,`blockquote`)(312,`p`),Sk(313,`Devido o componente não possuir uma label assim como outros campos de texto, o `),Qc(314,`code`),Sk(315,`aria-label`),Kg(),Sk(316,` \xE9 utilizado para
acessibilidade.`),Kg()()()(),Qc(317,`tr`,22)(318,`td`,15)(319,`div`,23)(320,`span`,24),Sk(321,` (p-blur)`),vu(322,`br`),Kg()()(),Qc(323,`td`,18)(324,`code`,25),Sk(325,`EventEmitter`),Kg()(),Qc(326,`td`,20),Sk(327,`-`),Kg(),Qc(328,`td`,21)(329,`em`)(330,`strong`),Sk(331,`(opcional)`),Kg()(),Qc(332,`p`),Sk(333,`Evento disparado ao sair do campo.`),Kg()()(),Qc(334,`tr`,26)(335,`td`,15)(336,`div`,23)(337,`span`,24),Sk(338,` (p-change-model)`),vu(339,`br`),Kg()()(),Qc(340,`td`,18)(341,`code`,25),Sk(342,`EventEmitter`),Kg()(),Qc(343,`td`,20),Sk(344,`-`),Kg(),Qc(345,`td`,21)(346,`em`)(347,`strong`),Sk(348,`(opcional)`),Kg()(),Qc(349,`p`),Sk(350,`Evento disparado ao alterar valor do model.`),Kg()()(),Qc(351,`tr`,27)(352,`td`,15)(353,`div`,16)(354,`span`,17),Sk(355,` p-disabled`),vu(356,`br`),Kg()()(),Qc(357,`td`,18)(358,`code`,28),Sk(359,`boolean`),Kg()(),Qc(360,`td`,20)(361,`p`)(362,`code`),Sk(363,`false`),Kg()()(),Qc(364,`td`,21)(365,`em`)(366,`strong`),Sk(367,`(opcional)`),Kg()(),Qc(368,`p`),Sk(369,`Desabilita o po-search e não permite que o usuário interaja com o mesmo.`),Kg()()(),Qc(370,`tr`,29)(371,`td`,15)(372,`div`,23)(373,`span`,24),Sk(374,` (p-filter)`),vu(375,`br`),Kg()()(),Qc(376,`td`,18)(377,`code`,25),Sk(378,`EventEmitter`),Kg()(),Qc(379,`td`,20),Sk(380,`-`),Kg(),Qc(381,`td`,21)(382,`em`)(383,`strong`),Sk(384,`(opcional)`),Kg()(),Qc(385,`p`),Sk(386,`Pode ser informada uma função que será disparada quando houver alterações nos filtros.`),Kg(),Qc(387,`blockquote`)(388,`p`),Sk(389,`Incompatível com a propriedade `),Qc(390,`code`),Sk(391,`p-search-type`),Kg(),Sk(392,` do tipo `),Qc(393,`code`),Sk(394,`locate`),Kg(),Sk(395,`.`),Kg()()()(),Qc(396,`tr`,30)(397,`td`,15)(398,`div`,16)(399,`span`,17),Sk(400,` p-filter-keys`),vu(401,`br`),Kg()()(),Qc(402,`td`,18)(403,`code`,31),Sk(404,`Array<any>`),Kg()(),Qc(405,`td`,20),Sk(406,`-`),Kg(),Qc(407,`td`,21)(408,`p`),Sk(409,`Define os nomes das propriedades do objeto que serão utilizados para busca em `),Qc(410,`code`),Sk(411,`p-items`),Kg(),Sk(412,`. Cada valor definido no
array ser\xE1 considerado durante a apresenta\xE7\xE3o e filtragem dos itens.
Exemplo de uso:`),Kg(),Qc(413,`pre`)(414,`code`,32),Sk(415,`const filterKeys: Array<string> = ['name', 'gender', 'planet', 'father'];
`),Kg()(),Qc(416,`blockquote`)(417,`p`),Sk(418,`Esta propriedade é ignorada quando utilizado com `),Qc(419,`code`),Sk(420,`p-filter-select`),Kg(),Sk(421,` e incompat\xEDvel com a propriedade
`),Qc(422,`code`),Sk(423,`p-search-type`),Kg(),Sk(424,` do tipo `),Qc(425,`code`),Sk(426,`locate`),Kg(),Sk(427,`.`),Kg()()()(),Qc(428,`tr`,33)(429,`td`,15)(430,`div`,16)(431,`span`,17),Sk(432,` p-filter-select`),vu(433,`br`),Kg()()(),Qc(434,`td`,18)(435,`code`,34),Sk(436,`PoSearchFilterSelect[]`),Kg()(),Qc(437,`td`,20),Sk(438,`-`),Kg(),Qc(439,`td`,21)(440,`p`),Sk(441,`Habilita um seletor de filtros \xE0 esquerda do campo, permitindo a aplica\xE7\xE3o de filtros agrupados na busca ou sobre
os itens fornecidos em `),Qc(442,`code`),Sk(443,`p-items`),Kg(),Sk(444,`. Automaticamente adiciona a opção `),Qc(445,`strong`),Sk(446,`Todos`),Kg(),Sk(447,`, com um mapeamento de todas as opções passadas.`),Kg(),Qc(448,`p`),Sk(449,`Exemplo de uso:`),Kg(),Qc(450,`pre`)(451,`code`,32),Sk(452,`const filterSelect = [
  { label: 'personal', value: ['name', 'email', 'nickname'] },
  { label: 'address', value: ['country', 'state', 'city', 'street'] },
  { label: 'family', value: ['father', 'mother', 'dependents'] }
];
`),Kg()(),Qc(453,`blockquote`)(454,`p`),Sk(455,`Ao ser habilitada, a propriedade `),Qc(456,`code`),Sk(457,`p-filter-keys`),Kg(),Sk(458,` ser\xE1 ignorada. Esta propriedade \xE9 incompat\xEDvel com a propriedade
`),Qc(459,`code`),Sk(460,`p-search-type`),Kg(),Sk(461,` do tipo `),Qc(462,`code`),Sk(463,`locate`),Kg(),Sk(464,`.`),Kg()()()(),Qc(465,`tr`,35)(466,`td`,15)(467,`div`,16)(468,`span`,17),Sk(469,` p-filter-type`),vu(470,`br`),Kg()()(),Qc(471,`td`,18)(472,`code`,36),Sk(473,`PoSearchFilterMode`),Kg()(),Qc(474,`td`,20)(475,`p`)(476,`code`),Sk(477,`startsWith`),Kg()()(),Qc(478,`td`,21)(479,`em`)(480,`strong`),Sk(481,`(opcional)`),Kg()(),Qc(482,`p`),Sk(483,`Define o modo de pesquisa utilizado no campo de busca. Os valores permitidos s\xE3o definidos pelo enum
`),Qc(484,`strong`),Sk(485,`PoSearchFilterMode`),Kg(),Sk(486,`.`),Kg(),Qc(487,`blockquote`)(488,`p`),Sk(489,`Incompatível com a propriedade `),Qc(490,`code`),Sk(491,`p-search-type`),Kg(),Sk(492,` do tipo `),Qc(493,`code`),Sk(494,`locate`),Kg(),Sk(495,`.`),Kg()()()(),Qc(496,`tr`,37)(497,`td`,15)(498,`div`,23)(499,`span`,24),Sk(500,` (p-filtered-items-change)`),vu(501,`br`),Kg()()(),Qc(502,`td`,18)(503,`code`,25),Sk(504,`EventEmitter`),Kg()(),Qc(505,`td`,20),Sk(506,`-`),Kg(),Qc(507,`td`,21)(508,`em`)(509,`strong`),Sk(510,`(opcional)`),Kg()(),Qc(511,`p`),Sk(512,`Pode ser informada uma função que será disparada quando houver alterações no input.`),Kg(),Qc(513,`blockquote`)(514,`p`),Sk(515,`Incompatível com a propriedade `),Qc(516,`code`),Sk(517,`p-search-type`),Kg(),Sk(518,` do tipo `),Qc(519,`code`),Sk(520,`locate`),Kg(),Sk(521,`.`),Kg()()()(),Qc(522,`tr`,38)(523,`td`,15)(524,`div`,23)(525,`span`,24),Sk(526,` (p-focus)`),vu(527,`br`),Kg()()(),Qc(528,`td`,18)(529,`code`,25),Sk(530,`EventEmitter`),Kg()(),Qc(531,`td`,20),Sk(532,`-`),Kg(),Qc(533,`td`,21)(534,`em`)(535,`strong`),Sk(536,`(opcional)`),Kg()(),Qc(537,`p`),Sk(538,`Evento emitido quando o campo de entrada (input) recebe foco.`),Kg()()(),Qc(539,`tr`,39)(540,`td`,15)(541,`div`,23)(542,`span`,24),Sk(543,` (p-footer-action-listbox)`),vu(544,`br`),Kg()()(),Qc(545,`td`,18)(546,`code`,25),Sk(547,`EventEmitter`),Kg()(),Qc(548,`td`,20),Sk(549,`-`),Kg(),Qc(550,`td`,21)(551,`em`)(552,`strong`),Sk(553,`(opcional)`),Kg()(),Qc(554,`p`),Sk(555,`Evento disparado ao clicar no botão de ação exibido no rodapé do `),Qc(556,`code`),Sk(557,`listbox`),Kg(),Sk(558,`.
O texto exibido pode ser configurado por meio do literal `),Qc(559,`code`),Sk(560,`footerActionListbox`),Kg(),Sk(561,`.`),Kg()()(),Qc(562,`tr`,40)(563,`td`,15)(564,`div`,16)(565,`span`,17),Sk(566,` p-icon`),vu(567,`br`),Kg()()(),Qc(568,`td`,18)(569,`code`,19),Sk(570,`string `),Kg(),Qc(571,`code`,41),Sk(572,` TemplateRef<void>`),Kg()(),Qc(573,`td`,20),Sk(574,`-`),Kg(),Qc(575,`td`,21)(576,`em`)(577,`strong`),Sk(578,`(opcional)`),Kg()(),Qc(579,`p`),Sk(580,`Permite customizar o ícone de busca que acompanha o campo.`),Kg(),Qc(581,`p`),Sk(582,`É possível usar qualquer um dos ícones da `),Qc(583,`a`,42),Sk(584,`Biblioteca de ícones PO UI`),Kg(),Sk(585,`, conforme exemplo:`),Kg(),Qc(586,`pre`)(587,`code`),Sk(588,`<po-search p-icon="an an-user"></po-search>
`),Kg()(),Qc(589,`p`),Sk(590,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Qc(591,`em`),Sk(592,`Font Awesome`),Kg(),Sk(593,`, desde que a biblioteca
esteja carregada no projeto:`),Kg(),Qc(594,`pre`)(595,`code`),Sk(596,`<po-search p-icon="fa fa-podcast"></po-search>
`),Kg()(),Qc(597,`p`),Sk(598,`Outra opção seria a customização do ícone através do `),Qc(599,`code`),Sk(600,`TemplateRef`),Kg(),Sk(601,`, conforme exemplo abaixo:`),Kg(),Qc(602,`pre`)(603,`code`),Sk(604,`<po-search [p-icon]="template"></po-search>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),Kg()()()(),Qc(605,`tr`,43)(606,`td`,15)(607,`div`,16)(608,`span`,17),Sk(609,` p-items`),vu(610,`br`),Kg()()(),Qc(611,`td`,18)(612,`code`,31),Sk(613,`Array<any>`),Kg()(),Qc(614,`td`,20),Sk(615,`-`),Kg(),Qc(616,`td`,21)(617,`em`)(618,`strong`),Sk(619,`(opcional)`),Kg()(),Qc(620,`p`),Sk(621,`Lista de itens que serão utilizados para pesquisa.`),Kg(),Qc(622,`blockquote`)(623,`p`),Sk(624,`Incompatível com a propriedade `),Qc(625,`code`),Sk(626,`p-search-type`),Kg(),Sk(627,` do tipo `),Qc(628,`code`),Sk(629,`locate`),Kg(),Sk(630,`.`),Kg()()()(),Qc(631,`tr`,44)(632,`td`,15)(633,`div`,23)(634,`span`,24),Sk(635,` (p-keydown)`),vu(636,`br`),Kg()()(),Qc(637,`td`,18)(638,`code`,25),Sk(639,`EventEmitter`),Kg()(),Qc(640,`td`,20),Sk(641,`-`),Kg(),Qc(642,`td`,21)(643,`em`)(644,`strong`),Sk(645,`(opcional)`),Kg()(),Qc(646,`p`),Sk(647,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Qc(648,`code`),Sk(649,`KeyboardEvent`),Kg(),Sk(650,` com informações sobre a tecla.`),Kg()()(),Qc(651,`tr`,45)(652,`td`,15)(653,`div`,16)(654,`span`,17),Sk(655,` p-keys-label`),vu(656,`br`),Kg()()(),Qc(657,`td`,18)(658,`code`,46),Sk(659,`Array<string>`),Kg()(),Qc(660,`td`,20),Sk(661,`-`),Kg(),Qc(662,`td`,21)(663,`em`)(664,`strong`),Sk(665,`(opcional)`),Kg()(),Qc(666,`p`),Sk(667,`Define os nomes das propriedades do objeto que serão exibidos como rótulos (labels) no `),Qc(668,`code`),Sk(669,`listbox`),Kg(),Sk(670,` quando a propriedade
`),Qc(671,`code`),Sk(672,`p-show-listbox`),Kg(),Sk(673,` estiver habilitada.`),Kg(),Qc(674,`p`),Sk(675,`Deve ser informado um array de strings contendo até `),Qc(676,`strong`),Sk(677,`3 propriedades`),Kg(),Sk(678,`.`),Kg(),Qc(679,`p`),Sk(680,`Exemplo de uso:`),Kg(),Qc(681,`pre`)(682,`code`,47),Sk(683,`keysLabel: Array<string> = ['nome', 'email', 'country'];
`),Kg()()()(),Qc(684,`tr`,48)(685,`td`,15)(686,`div`,23)(687,`span`,24),Sk(688,` (p-listbox-onclick)`),vu(689,`br`),Kg()()(),Qc(690,`td`,18)(691,`code`,25),Sk(692,`EventEmitter`),Kg()(),Qc(693,`td`,20),Sk(694,`-`),Kg(),Qc(695,`td`,21)(696,`em`)(697,`strong`),Sk(698,`(opcional)`),Kg()(),Qc(699,`p`),Sk(700,`Pode ser informada uma função que será disparada quando houver click no listbox.`),Kg(),Qc(701,`blockquote`)(702,`p`),Sk(703,`Incompatível com a propriedade `),Qc(704,`code`),Sk(705,`p-search-type`),Kg(),Sk(706,` do tipo `),Qc(707,`code`),Sk(708,`locate`),Kg(),Sk(709,`.`),Kg()()()(),Qc(710,`tr`,49)(711,`td`,15)(712,`div`,16)(713,`span`,17),Sk(714,` p-literals`),vu(715,`br`),Kg()()(),Qc(716,`td`,18)(717,`code`,50),Sk(718,`PoSearchLiterals`),Kg()(),Qc(719,`td`,20),Sk(720,`-`),Kg(),Qc(721,`td`,21)(722,`em`)(723,`strong`),Sk(724,`(opcional)`),Kg()(),Qc(725,`p`),Sk(726,`Objeto com as literais usadas no `),Qc(727,`code`),Sk(728,`po-search`),Kg(),Sk(729,`, permitindo personalizar os textos exibidos no componente.`),Kg(),Qc(730,`p`),Sk(731,`Para utilizar basta passar a literal que deseja customizar:`),Kg(),Qc(732,`pre`)(733,`code`),Sk(734,`const customLiterals: PoSearchLiterals = {
  search: 'Pesquisar',
  clean: 'Limpar',
};
`),Kg()(),Qc(735,`p`),Sk(736,`E para carregar a literal customizada, basta apenas passar o objeto para o componente.`),Kg(),Qc(737,`pre`)(738,`code`),Sk(739,`<po-search
  [p-literals]="customLiterals">
</po-search>
`),Kg()(),Qc(740,`blockquote`)(741,`p`),Sk(742,`O objeto padrão de literais será traduzido de acordo com o idioma do `),Qc(743,`a`,51)(744,`code`),Sk(745,`PoI18nService`),Kg()(),Sk(746,` ou
do browser.`),Kg()()()(),Qc(747,`tr`,52)(748,`td`,15)(749,`div`,16)(750,`span`,17),Sk(751,` p-loading`),vu(752,`br`),Kg()()(),Qc(753,`td`,18)(754,`code`,28),Sk(755,`boolean`),Kg()(),Qc(756,`td`,20)(757,`p`)(758,`code`),Sk(759,`false`),Kg()()(),Qc(760,`td`,21)(761,`em`)(762,`strong`),Sk(763,`(opcional)`),Kg()(),Qc(764,`p`),Sk(765,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Kg(),Qc(766,`blockquote`)(767,`p`),Sk(768,`Incompatível com a propriedade `),Qc(769,`code`),Sk(770,`p-search-type`),Kg(),Sk(771,` do tipo `),Qc(772,`code`),Sk(773,`locate`),Kg(),Sk(774,`.`),Kg()()()(),Qc(775,`tr`,53)(776,`td`,15)(777,`div`,23)(778,`span`,24),Sk(779,` (p-locate-next)`),vu(780,`br`),Kg()()(),Qc(781,`td`,18)(782,`code`,25),Sk(783,`EventEmitter`),Kg()(),Qc(784,`td`,20),Sk(785,`-`),Kg(),Qc(786,`td`,21)(787,`em`)(788,`strong`),Sk(789,`(opcional)`),Kg()(),Qc(790,`p`),Sk(791,`Evento disparado ao clicar no controle "Próximo resultado".`),Kg(),Qc(792,`blockquote`)(793,`p`),Sk(794,`Compatível com a propriedade `),Qc(795,`code`),Sk(796,`p-search-type`),Kg(),Sk(797,` do tipo `),Qc(798,`code`),Sk(799,`locate`),Kg(),Sk(800,`.`),Kg()()()(),Qc(801,`tr`,54)(802,`td`,15)(803,`div`,23)(804,`span`,24),Sk(805,` (p-locate-previous)`),vu(806,`br`),Kg()()(),Qc(807,`td`,18)(808,`code`,25),Sk(809,`EventEmitter`),Kg()(),Qc(810,`td`,20),Sk(811,`-`),Kg(),Qc(812,`td`,21)(813,`em`)(814,`strong`),Sk(815,`(opcional)`),Kg()(),Qc(816,`p`),Sk(817,`Evento disparado ao clicar no controle "Resultado anterior".`),Kg(),Qc(818,`blockquote`)(819,`p`),Sk(820,`Compatível com a propriedade `),Qc(821,`code`),Sk(822,`p-search-type`),Kg(),Sk(823,` do tipo `),Qc(824,`code`),Sk(825,`locate`),Kg(),Sk(826,`.`),Kg()()()(),Qc(827,`tr`,55)(828,`td`,15)(829,`div`,16)(830,`span`,17),Sk(831,` p-locate-summary`),vu(832,`br`),Kg()()(),Qc(833,`td`,18)(834,`code`,56),Sk(835,`PoSearchLocateSummary`),Kg()(),Qc(836,`td`,20),Sk(837,`-`),Kg(),Qc(838,`td`,21)(839,`em`)(840,`strong`),Sk(841,`(opcional)`),Kg()(),Qc(842,`p`),Sk(843,`Define os valores do contador exibido ao usar a propriedade `),Qc(844,`code`),Sk(845,`p-search-type`),Kg(),Sk(846,` do tipo `),Qc(847,`code`),Sk(848,`locate`),Kg(),Sk(849,`, indicando a posi\xE7\xE3o
atual e o total de ocorr\xEAncias encontradas.
Exemplo de uso:`),Kg(),Qc(850,`pre`)(851,`code`,47),Sk(852,`locateSummary: PoSearchLocateSummary = { currentIndex: 0, total: 5 };
`),Kg()(),Qc(853,`blockquote`)(854,`p`),Sk(855,`Compatível com a propriedade `),Qc(856,`code`),Sk(857,`p-search-type`),Kg(),Sk(858,` do tipo `),Qc(859,`code`),Sk(860,`locate`),Kg(),Sk(861,`.`),Kg()()()(),Qc(862,`tr`,57)(863,`td`,15)(864,`div`,16)(865,`span`,17),Sk(866,` name`),vu(867,`br`),Kg()()(),Qc(868,`td`,18)(869,`code`,19),Sk(870,`string`),Kg()(),Qc(871,`td`,20),Sk(872,`-`),Kg(),Qc(873,`td`,21)(874,`em`)(875,`strong`),Sk(876,`(opcional)`),Kg()(),Qc(877,`p`),Sk(878,`Nome e identificador do campo.`),Kg()()(),Qc(879,`tr`,58)(880,`td`,15)(881,`div`,16)(882,`span`,17),Sk(883,` p-no-autocomplete`),vu(884,`br`),Kg()()(),Qc(885,`td`,18)(886,`code`,28),Sk(887,`boolean`),Kg()(),Qc(888,`td`,20)(889,`p`)(890,`code`),Sk(891,`false`),Kg()()(),Qc(892,`td`,21)(893,`em`)(894,`strong`),Sk(895,`(opcional)`),Kg()(),Qc(896,`p`),Sk(897,`Define a propriedade nativa `),Qc(898,`code`),Sk(899,`autocomplete`),Kg(),Sk(900,` do campo como `),Qc(901,`code`),Sk(902,`off`),Kg(),Sk(903,`.`),Kg()()(),Qc(904,`tr`,59)(905,`td`,15)(906,`div`,16)(907,`span`,17),Sk(908,` p-show-listbox`),vu(909,`br`),Kg()()(),Qc(910,`td`,18)(911,`code`,28),Sk(912,`boolean`),Kg()(),Qc(913,`td`,20)(914,`p`)(915,`code`),Sk(916,`false`),Kg()()(),Qc(917,`td`,21)(918,`em`)(919,`strong`),Sk(920,`(opcional)`),Kg()(),Qc(921,`p`),Sk(922,`Exibe uma lista (auto-complete) com as opções definidas em `),Qc(923,`code`),Sk(924,`p-filter-keys`),Kg(),Sk(925,` ou `),Qc(926,`code`),Sk(927,`p-filter-select`),Kg(),Sk(928,` enquanto realiza
uma busca, respeitando o `),Qc(929,`code`),Sk(930,`p-filter-type`),Kg(),Sk(931,` como modo de pesquisa.`),Kg(),Qc(932,`blockquote`)(933,`p`),Sk(934,`Incompatível com a propriedade `),Qc(935,`code`),Sk(936,`p-search-type`),Kg(),Sk(937,` do tipo `),Qc(938,`code`),Sk(939,`locate`),Kg(),Sk(940,`.`),Kg()()()(),Qc(941,`tr`,60)(942,`td`,15)(943,`div`,16)(944,`span`,17),Sk(945,` p-size`),vu(946,`br`),Kg()()(),Qc(947,`td`,18)(948,`code`,19),Sk(949,`string`),Kg()(),Qc(950,`td`,20)(951,`p`)(952,`code`),Sk(953,`medium`),Kg()()(),Qc(954,`td`,21)(955,`em`)(956,`strong`),Sk(957,`(opcional)`),Kg()(),Qc(958,`p`),Sk(959,`Define o tamanho do componente:`),Kg(),Qc(960,`ul`)(961,`li`)(962,`code`),Sk(963,`small`),Kg(),Sk(964,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Kg(),Qc(965,`li`)(966,`code`),Sk(967,`medium`),Kg(),Sk(968,`: altura do input como 44px.`),Kg()(),Qc(969,`blockquote`)(970,`p`),Sk(971,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(972,`code`),Sk(973,`medium`),Kg(),Sk(974,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(975,`a`,61),Sk(976,`po-theme`),Kg(),Sk(977,`.`),Kg()()()(),Qc(978,`tr`,62)(979,`td`,15)(980,`div`,16)(981,`span`,17),Sk(982,` p-search-type`),vu(983,`br`),Kg()()(),Qc(984,`td`,18)(985,`code`,63),Sk(986,`searchMode`),Kg()(),Qc(987,`td`,20)(988,`p`)(989,`code`),Sk(990,`action`),Kg()()(),Qc(991,`td`,21)(992,`em`)(993,`strong`),Sk(994,`(opcional)`),Kg()(),Qc(995,`p`),Sk(996,`Determina a forma de realizar a pesquisa no componente. Valores aceitos:`),Kg(),Qc(997,`ul`)(998,`li`)(999,`code`),Sk(1e3,`action`),Kg(),Sk(1001,`: Realiza a busca a cada caractere digitado.`),Kg(),Qc(1002,`li`)(1003,`code`),Sk(1004,`trigger`),Kg(),Sk(1005,`: Realiza a busca ao pressionar `),Qc(1006,`code`),Sk(1007,`enter`),Kg(),Sk(1008,` ou clicar no ícone de busca.`),Kg(),Qc(1009,`li`)(1010,`code`),Sk(1011,`locate`),Kg(),Sk(1012,`: Modo manual. Exibe botões e contador, mas não executa buscas — controle é do desenvolvedor.`),Kg(),Qc(1013,`li`)(1014,`code`),Sk(1015,`execute`),Kg(),Sk(1016,`: Executa uma ação ou realiza um redirecionamento ao selecionar um item no `),Qc(1017,`code`),Sk(1018,`listbox`),Kg(),Sk(1019,`. Para este tipo, é necessário informar as propriedades `),Qc(1020,`code`),Sk(1021,`action`),Kg(),Sk(1022,` ou `),Qc(1023,`code`),Sk(1024,`url`),Kg(),Sk(1025,` nos itens definidos em `),Qc(1026,`code`),Sk(1027,`p-items`),Kg(),Sk(1028,`.`),Kg()()()()(),Qc(1029,`h3`),Sk(1030,`Interfaces`),Kg(),Qc(1031,`h4`,64)(1032,`code`,5),Sk(1033,`PoSearchFilterSelect`),Kg()(),Qc(1034,`div`,2)(1035,`p`),Sk(1036,`Interface que define as opções que serão exibidas no dropdown do `),Qc(1037,`code`),Sk(1038,`po-search`),Kg(),Sk(1039,`, ao usar a propriedade `),Qc(1040,`code`),Sk(1041,`p-filter-select`),Kg(),Sk(1042,`.`),Kg()(),Qc(1043,`h4`,10),Sk(1044,`Propriedades`),Kg(),Qc(1045,`table`,11)(1046,`tr`,12)(1047,`th`,13),Sk(1048,`Nome`),Kg(),Qc(1049,`th`,13),Sk(1050,`Tipo`),Kg(),Qc(1051,`th`,13),Sk(1052,`Descrição`),Kg()(),Qc(1053,`tr`,65)(1054,`td`,15)(1055,`div`,16)(1056,`span`,17),Sk(1057,` label`),vu(1058,`br`),Kg()()(),Qc(1059,`td`,18)(1060,`code`,19),Sk(1061,`string`),Kg()(),Qc(1062,`td`,21)(1063,`p`),Sk(1064,`Descrição exibida nas opções da lista.`),Kg()()(),Qc(1065,`tr`,66)(1066,`td`,15)(1067,`div`,16)(1068,`span`,17),Sk(1069,` value`),vu(1070,`br`),Kg()()(),Qc(1071,`td`,18)(1072,`code`,46),Sk(1073,`Array<string> `),Kg(),Qc(1074,`code`,19),Sk(1075,` string`),Kg()(),Qc(1076,`td`,21)(1077,`p`),Sk(1078,`Valores que serão atribuídos ao `),Qc(1079,`code`),Sk(1080,`p-filter-keys`),Kg()()()()(),Qc(1081,`h4`,67)(1082,`code`,5),Sk(1083,`PoSearchLocateSummary`),Kg()(),Qc(1084,`div`,2)(1085,`p`),Sk(1086,`Interface que define o resumo de localização do filtro `),Qc(1087,`code`),Sk(1088,`p-filter-locate`),Kg(),Sk(1089,`.`),Kg()(),Qc(1090,`h4`,10),Sk(1091,`Propriedades`),Kg(),Qc(1092,`table`,11)(1093,`tr`,12)(1094,`th`,13),Sk(1095,`Nome`),Kg(),Qc(1096,`th`,13),Sk(1097,`Tipo`),Kg(),Qc(1098,`th`,13),Sk(1099,`Descrição`),Kg()(),Qc(1100,`tr`,68)(1101,`td`,15)(1102,`div`,16)(1103,`span`,17),Sk(1104,` currentIndex`),vu(1105,`br`),Kg()()(),Qc(1106,`td`,18)(1107,`code`,69),Sk(1108,`number`),Kg()(),Qc(1109,`td`,21)(1110,`p`),Sk(1111,`Índice atual da ocorrência localizada.`),Kg()()(),Qc(1112,`tr`,70)(1113,`td`,15)(1114,`div`,16)(1115,`span`,17),Sk(1116,` total`),vu(1117,`br`),Kg()()(),Qc(1118,`td`,18)(1119,`code`,69),Sk(1120,`number`),Kg()(),Qc(1121,`td`,21)(1122,`p`),Sk(1123,`Total de ocorrências encontradas.`),Kg()()()(),Qc(1124,`h4`,71)(1125,`code`,5),Sk(1126,`PoSearchOption`),Kg()(),Qc(1127,`div`,2)(1128,`p`),Sk(1129,`Interface que define as opções que serão exibidas na lista ao procurar do `),Qc(1130,`code`),Sk(1131,`po-search`),Kg(),Sk(1132,`.`),Kg()(),Qc(1133,`h4`,10),Sk(1134,`Propriedades`),Kg(),Qc(1135,`table`,11)(1136,`tr`,12)(1137,`th`,13),Sk(1138,`Nome`),Kg(),Qc(1139,`th`,13),Sk(1140,`Tipo`),Kg(),Qc(1141,`th`,13),Sk(1142,`Descrição`),Kg()(),Qc(1143,`tr`,72)(1144,`td`,15)(1145,`div`,16)(1146,`span`,17),Sk(1147,` label`),vu(1148,`br`),Kg()()(),Qc(1149,`td`,18)(1150,`code`,19),Sk(1151,`string`),Kg()(),Qc(1152,`td`,21)(1153,`em`)(1154,`strong`),Sk(1155,`(opcional)`),Kg()(),Qc(1156,`p`),Sk(1157,`Descrição exibida nas opções da lista.`),Kg(),Qc(1158,`blockquote`)(1159,`p`),Sk(1160,`Caso não seja definida será assumido o valor definido na propriedade `),Qc(1161,`code`),Sk(1162,`value`),Kg(),Sk(1163,`.`),Kg()()()(),Qc(1164,`tr`,73)(1165,`td`,15)(1166,`div`,16)(1167,`span`,17),Sk(1168,` value`),vu(1169,`br`),Kg()()(),Qc(1170,`td`,18)(1171,`code`,19),Sk(1172,`string `),Kg(),Qc(1173,`code`,69),Sk(1174,` number`),Kg()(),Qc(1175,`td`,21)(1176,`p`),Sk(1177,`Valor do objeto que será atribuído ao `),Qc(1178,`em`),Sk(1179,`model`),Kg(),Sk(1180,`.`),Kg()()()(),Qc(1181,`h4`,74)(1182,`code`,5),Sk(1183,`PoSearchLiterals`),Kg()(),Qc(1184,`div`,2)(1185,`p`),Sk(1186,`Interface para definição das literais usadas no `),Qc(1187,`code`),Sk(1188,`po-search`),Kg(),Sk(1189,`.`),Kg()(),Qc(1190,`h4`,10),Sk(1191,`Propriedades`),Kg(),Qc(1192,`table`,11)(1193,`tr`,12)(1194,`th`,13),Sk(1195,`Nome`),Kg(),Qc(1196,`th`,13),Sk(1197,`Tipo`),Kg(),Qc(1198,`th`,13),Sk(1199,`Descrição`),Kg()(),Qc(1200,`tr`,75)(1201,`td`,15)(1202,`div`,16)(1203,`span`,17),Sk(1204,` all`),vu(1205,`br`),Kg()()(),Qc(1206,`td`,18)(1207,`code`,19),Sk(1208,`string`),Kg()(),Qc(1209,`td`,21)(1210,`em`)(1211,`strong`),Sk(1212,`(opcional)`),Kg()(),Qc(1213,`p`),Sk(1214,`Texto exibido no dropdown de tipo de filtro, representando todos os tipos disponíveis.`),Kg(),Qc(1215,`blockquote`)(1216,`p`),Sk(1217,`Exibido apenas quando a propriedade `),Qc(1218,`code`),Sk(1219,`p-filter-select`),Kg(),Sk(1220,` estiver habilitada.`),Kg()()()(),Qc(1221,`tr`,76)(1222,`td`,15)(1223,`div`,16)(1224,`span`,17),Sk(1225,` clean`),vu(1226,`br`),Kg()()(),Qc(1227,`td`,18)(1228,`code`,19),Sk(1229,`string`),Kg()(),Qc(1230,`td`,21)(1231,`em`)(1232,`strong`),Sk(1233,`(opcional)`),Kg()(),Qc(1234,`p`),Sk(1235,`Texto alternativo (aria-label) para o botão de limpar o campo de busca, usado por leitores de tela.`),Kg()()(),Qc(1236,`tr`,77)(1237,`td`,15)(1238,`div`,16)(1239,`span`,17),Sk(1240,` footerActionListbox`),vu(1241,`br`),Kg()()(),Qc(1242,`td`,18)(1243,`code`,19),Sk(1244,`string`),Kg()(),Qc(1245,`td`,21)(1246,`em`)(1247,`strong`),Sk(1248,`(opcional)`),Kg()(),Qc(1249,`p`),Sk(1250,`Texto exibido na ação do rodapé da lista de resultados.`),Kg()()(),Qc(1251,`tr`,78)(1252,`td`,15)(1253,`div`,16)(1254,`span`,17),Sk(1255,` next`),vu(1256,`br`),Kg()()(),Qc(1257,`td`,18)(1258,`code`,19),Sk(1259,`string`),Kg()(),Qc(1260,`td`,21)(1261,`em`)(1262,`strong`),Sk(1263,`(opcional)`),Kg()(),Qc(1264,`p`),Sk(1265,`Texto alternativo (aria-label) para navegação até o próximo resultado da busca.`),Kg(),Qc(1266,`blockquote`)(1267,`p`),Sk(1268,`Exibido apenas quando a propriedade `),Qc(1269,`code`),Sk(1270,`p-filter-locate`),Kg(),Sk(1271,` estiver habilitada.`),Kg()()()(),Qc(1272,`tr`,79)(1273,`td`,15)(1274,`div`,16)(1275,`span`,17),Sk(1276,` of`),vu(1277,`br`),Kg()()(),Qc(1278,`td`,18)(1279,`code`,19),Sk(1280,`string`),Kg()(),Qc(1281,`td`,21)(1282,`em`)(1283,`strong`),Sk(1284,`(opcional)`),Kg()(),Qc(1285,`p`),Sk(1286,`Texto alternativo (aria-label) para a palavra "de" no contador de resultados (ex: "Resultado 1 de 4").`),Kg(),Qc(1287,`blockquote`)(1288,`p`),Sk(1289,`Exibido apenas quando a propriedade `),Qc(1290,`code`),Sk(1291,`p-filter-locate`),Kg(),Sk(1292,` estiver habilitada.`),Kg()()()(),Qc(1293,`tr`,80)(1294,`td`,15)(1295,`div`,16)(1296,`span`,17),Sk(1297,` placeholderListbox`),vu(1298,`br`),Kg()()(),Qc(1299,`td`,18)(1300,`code`,19),Sk(1301,`string`),Kg()(),Qc(1302,`td`,21)(1303,`em`)(1304,`strong`),Sk(1305,`(opcional)`),Kg()(),Qc(1306,`p`),Sk(1307,`Texto exibido como `),Qc(1308,`em`),Sk(1309,`placeholder`),Kg(),Sk(1310,` na lista de resultados.`),Kg()()(),Qc(1311,`tr`,81)(1312,`td`,15)(1313,`div`,16)(1314,`span`,17),Sk(1315,` previous`),vu(1316,`br`),Kg()()(),Qc(1317,`td`,18)(1318,`code`,19),Sk(1319,`string`),Kg()(),Qc(1320,`td`,21)(1321,`em`)(1322,`strong`),Sk(1323,`(opcional)`),Kg()(),Qc(1324,`p`),Sk(1325,`Texto alternativo (aria-label) para navegação até o resultado anterior da busca.`),Kg(),Qc(1326,`blockquote`)(1327,`p`),Sk(1328,`Exibido apenas quando a propriedade `),Qc(1329,`code`),Sk(1330,`p-filter-locate`),Kg(),Sk(1331,` estiver habilitada.`),Kg()()()(),Qc(1332,`tr`,82)(1333,`td`,15)(1334,`div`,16)(1335,`span`,17),Sk(1336,` result`),vu(1337,`br`),Kg()()(),Qc(1338,`td`,18)(1339,`code`,19),Sk(1340,`string`),Kg()(),Qc(1341,`td`,21)(1342,`em`)(1343,`strong`),Sk(1344,`(opcional)`),Kg()(),Qc(1345,`p`),Sk(1346,`Texto alternativo (aria-label) para a label "Resultado" que acompanha o contador.`),Kg(),Qc(1347,`blockquote`)(1348,`p`),Sk(1349,`Exibido apenas quando a propriedade `),Qc(1350,`code`),Sk(1351,`p-filter-locate`),Kg(),Sk(1352,` estiver habilitada.`),Kg()()()(),Qc(1353,`tr`,83)(1354,`td`,15)(1355,`div`,16)(1356,`span`,17),Sk(1357,` search`),vu(1358,`br`),Kg()()(),Qc(1359,`td`,18)(1360,`code`,19),Sk(1361,`string`),Kg()(),Qc(1362,`td`,21)(1363,`em`)(1364,`strong`),Sk(1365,`(opcional)`),Kg()(),Qc(1366,`p`),Sk(1367,`Texto exibido como `),Qc(1368,`em`),Sk(1369,`placeholder`),Kg(),Sk(1370,` no campo de busca.`),Kg()()()(),Qc(1371,`h3`),Sk(1372,`Enums`),Kg(),Qc(1373,`h4`,84)(1374,`code`,5),Sk(1375,`PoSearchFilterMode`),Kg()(),Qc(1376,`div`,2)(1377,`p`),Sk(1378,`Define o tipo de busca usado no `),Qc(1379,`code`),Sk(1380,`po-search`),Kg(),Sk(1381,`.`),Kg()(),Qc(1382,`h4`,10),Sk(1383,`Propriedades`),Kg(),Qc(1384,`table`,11)(1385,`tr`,12)(1386,`th`,13),Sk(1387,`Nome`),Kg(),Qc(1388,`th`,13),Sk(1389,`Descrição`),Kg()(),Qc(1390,`tr`,85)(1391,`td`,15)(1392,`div`,16)(1393,`span`,17),Sk(1394,` startsWith`),vu(1395,`br`),Kg()()(),Qc(1396,`td`,21)(1397,`p`),Sk(1398,`Verifica se o texto `),Qc(1399,`em`),Sk(1400,`inicia`),Kg(),Sk(1401,` com o valor pesquisado.`),Kg()()(),Qc(1402,`tr`,86)(1403,`td`,15)(1404,`div`,16)(1405,`span`,17),Sk(1406,` contains`),vu(1407,`br`),Kg()()(),Qc(1408,`td`,21)(1409,`p`),Sk(1410,`Verifica se o texto `),Qc(1411,`em`),Sk(1412,`contém`),Kg(),Sk(1413,` o valor pesquisado.`),Kg()()(),Qc(1414,`tr`,87)(1415,`td`,15)(1416,`div`,16)(1417,`span`,17),Sk(1418,` endsWith`),vu(1419,`br`),Kg()()(),Qc(1420,`td`,21)(1421,`p`),Sk(1422,`Verifica se o texto `),Qc(1423,`em`),Sk(1424,`finaliza`),Kg(),Sk(1425,` com o valor pesquisado.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Ot(a,T){if(a&1){let r=YO();Qc(0,`po-tab`,4),vt$1(`p-click`,function(){B_(r);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-search-basic-view`)(2,`sample-po-search-labs-view`)(3,`sample-po-search-find-people-view`)(4,`sample-po-search-listbox-view`)(5,`sample-po-search-filter-select-view`)(6,`sample-po-search-execute-view`)(7,`sample-po-search-fields-locate-view`),Kg()}if(a&2){let r=ek();Rb(`p-active`,r.activeTab===`web`)}}var Bt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:o||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Search`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,i){o&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Ot,8,1,`po-tab`,2),Qc(3,`po-tab`,3),vt$1(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-search-doc`),Kg()()()),o&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,Oe,Ne,ze,We,He,Je,Ge,Qe],encapsulation:2,changeDetection:1})}return a})()}];var Ye=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[GV.forChild(Bt),GV]})}return a})();var Un=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,Ye]})}return a})();export{Un as DocPoSearchModule};