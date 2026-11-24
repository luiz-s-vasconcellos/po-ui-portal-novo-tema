import{m as P,p as M}from"./main-5NWS7DIP.js";import{$ as Pze,$i as ar,Ar as G0,At as Zte,Ca as j_,Ci as Rk,Di as UO,E as G4,F as Joe,Fn as tre,Ga as q0,Gr as Kb,Hr as Jn,Ia as nm,Ir as H_,It as bae,Ki as ZL,Kr as Kg,Li as WL,Oi as U_,Ot as Zne,Pr as HO,Pt as are,Qr as Mk,Sa as jO,Si as RZ,Tn as q4,U as Mze,Va as p,Vn as wae,Vr as Jc,W as Nf,Wr as KO,Xi as _t$1,Yr as LO,Zi as _u,_r as Cu,aa as de,an as ia,ar as Ab,bn as oi,ci as PI,co as wg,dn as l4,eo as tk,er as $O,fo as xZ,ft as Tee,go as xo,hr as Cb,ii as No,j as I4,jr as GV,k as Goe,li as PZ,mi as QL,mo as xe,oi as Ok,or as An,pa as ge,qi as Zb,rr as AZ,sn as j4,so as we,ur as B_,va as i1,w as Fc,x as Eu,xi as R,xn as p5,yi as Qm,zr as I}from"./chunk-DdK63a0t.js";var Te=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-basic`]],standalone:!1,decls:1,vars:0,template:function(a,i){a&1&&_u(0,`po-search`)},dependencies:[Zne],encapsulation:2,changeDetection:1})}return o})();var Ae=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-search-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-search-basic/sample-po-search-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-search-basic/sample-po-search-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Search Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-search-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-search-basic/sample-po-search-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-search></po-search>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-search-basic/sample-po-search-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-search-basic',
  templateUrl: './sample-po-search-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Te],encapsulation:2,changeDetection:1})}return o})();var $e=[`poSearch`];function et(o,C){if(o&1&&(Jc(0,`div`)(1,`strong`),Mk(2),Kg(),Mk(3),Kg()),o&2){let r=C.$implicit,a=tk().$implicit;wg(2),nm(``,r,`: `),wg(),nm(` `,a[r],` \xA0 `)}}function tt(o,C){if(o&1&&(Jc(0,`li`),HO(1,et,4,2,`div`,null,UO),Kg()),o&2){let r=C.$implicit,a=tk();wg(),$O(a.changeFilter(r))}}var qe=(()=>{class o{http=p(PI);poSearch;ariaLabel;customLiterals;literals;properties=[];search=``;event=``;service=`https://po-sample-api.onrender.com/v1/heroes`;items=[];filteredItems=[];fieldKeys=[];fieldSelect=[];tooltip;icon;filterMode=Eu.startsWith;searchMode=`action`;fieldKey;itemsModel;filterModel=`["name"]`;filterSelectModel;size=`medium`;customLocateSummary;locateSummary;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`showListbox`,label:`Show Listbox`},{value:`loading`,label:`Loading`}];iconsOptions=[{label:`fa-search`,value:`fa fa-search`},{label:`an-user`,value:`an an-user`},{label:`an-magnifying-glass`,value:`an an-magnifying-glass`}];filterModeOptions=[{label:`Starts With`,value:Eu.startsWith},{label:`Contains`,value:Eu.contains},{label:`Ends With`,value:Eu.endsWith}];searchModeOptions=[{label:`Action`,value:`action`},{label:`Execute`,value:`execute`},{label:`Locate`,value:`locate`},{label:`Trigger`,value:`trigger`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}ngOnChanges(r){r.items&&(this.filteredItems=this.items)}changeFilter(r){return Object.keys(r)}onChangeService(){this.http.get(this.service).subscribe(r=>{let a=r.items;Array.isArray(a)&&a.length>0&&(this.items=a,this.filteredItems=a,this.fieldKeys=[`name`])})}updateFilterKeys(r){this.fieldKeys=this.convertToArray(r)}updateFilterSelect(r){this.fieldSelect=this.convertToArray(r)}filter(r){this.filteredItems=r,this.event=r.length===0?`p-change-model`:`p-filtered-items-change`}changeItems(r){try{let a=JSON.parse(r);Array.isArray(a)&&(this.filteredItems=a,this.items=a)}catch(a){}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals??``)}catch(r){this.customLiterals=void 0}}changeEvent(r){setTimeout(()=>{this.event=r})}changeLocateSummary(){try{this.customLocateSummary=JSON.parse(this.locateSummary??``)}catch(r){this.customLocateSummary=void 0}}restore(){this.ariaLabel=``,this.search=``,this.event=``,this.icon=void 0,this.customLiterals=void 0,this.customLocateSummary=void 0,this.properties=[],this.filteredItems=void 0,this.items=void 0,this.itemsModel=void 0,this.filterModel=`["name"]`,this.filterSelectModel=``,this.fieldKeys=void 0,this.fieldSelect=void 0,this.filterMode=Eu.startsWith,this.searchMode=`action`,this.literals=void 0,this.locateSummary=void 0,this.size=`medium`,this.cleanInput(),this.onChangeService()}cleanInput(){try{this.poSearch.clearSearch()}catch(r){}}convertToArray(r){try{return JSON.parse(r)}catch(a){return}}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-labs`]],viewQuery:function(a,i){if(a&1&&Cu($e,7),a&2){let m;No(m=xo())&&(i.poSearch=m.first)}},standalone:!1,features:[xe],decls:32,vars:33,consts:[[`poSearch`,``],[`f`,`ngForm`],[1,`po-row`],[1,`po-md-12`,3,`p-blur`,`p-change-model`,`p-filtered-items-change`,`p-locate-next`,`p-locate-previous`,`p-aria-label`,`p-disabled`,`p-filter-keys`,`p-filter-type`,`p-filter-select`,`p-icon`,`p-items`,`p-literals`,`p-loading`,`p-locate-summary`,`p-search-type`,`p-show-listbox`,`p-size`],[1,`po-md-12`],[3,`p-label`],[1,`sample-list-search`,`po-md-12`,`row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`ariaLabel`,`p-label`,`Aria label`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`items`,`p-label`,`Items`,`p-help`,`Ex.: [{ "cidade": "São Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "Tóquio", "pais": "Japão" }]`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`searchMode`,`p-label`,`Search Mode`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-label`,`Filter Mode`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locateSummary`,`p-help`,`{ "currentIndex": 1000, "total": 1000 }`,`p-label`,`Locate Summary`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"search": "Search people"}`,`p-label`,`Literals`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`Filter Keys`,`p-label`,`Filter Keys`,`p-help`,`Ex.: ["cidade", "pais"]`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`Filter Select`,`p-label`,`Filter Select`,`p-help`,`Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,i){if(a&1){let m=KO();Jc(0,`div`,2)(1,`po-search`,3,0),_t$1(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-filtered-items-change`,function(s){return i.filter(s)})(`p-locate-next`,function(){return i.changeEvent(`p-locate-next`)})(`p-locate-previous`,function(){return i.changeEvent(`p-locate-previous`)}),Kg()(),_u(3,`po-divider`),Jc(4,`div`,2)(5,`po-accordion`,4)(6,`po-accordion-item`,5)(7,`po-widget`,4)(8,`ul`,6),HO(9,tt,3,0,`li`,null,UO),Kg()()()()(),_u(11,`po-divider`),Jc(12,`div`,2),_u(13,`po-info`,7)(14,`po-info`,8),Kg(),_u(15,`po-divider`),Jc(16,`form`,null,1)(18,`po-input`,9),G0(),Zb(`ngModelChange`,function(s){return U_(m),Rk(i.ariaLabel,s)||(i.ariaLabel=s),H_(s)}),Kg(),Jc(19,`po-input`,10),G0(),Zb(`ngModelChange`,function(s){return U_(m),Rk(i.itemsModel,s)||(i.itemsModel=s),H_(s)}),_t$1(`p-change-model`,function(s){return i.changeItems(s)}),Kg(),Jc(20,`po-checkbox-group`,11),G0(),Zb(`ngModelChange`,function(s){return U_(m),Rk(i.properties,s)||(i.properties=s),H_(s)}),Kg(),Jc(21,`po-radio-group`,12),G0(),Zb(`ngModelChange`,function(s){return U_(m),Rk(i.icon,s)||(i.icon=s),H_(s)}),Kg(),Jc(22,`po-radio-group`,13),G0(),Zb(`ngModelChange`,function(s){return U_(m),Rk(i.searchMode,s)||(i.searchMode=s),H_(s)}),Kg(),Jc(23,`po-radio-group`,14),G0(),Zb(`ngModelChange`,function(s){return U_(m),Rk(i.filterMode,s)||(i.filterMode=s),H_(s)}),Kg(),Jc(24,`po-radio-group`,15),G0(),Zb(`ngModelChange`,function(s){return U_(m),Rk(i.size,s)||(i.size=s),H_(s)}),Kg(),Jc(25,`po-input`,16),G0(),Zb(`ngModelChange`,function(s){return U_(m),Rk(i.locateSummary,s)||(i.locateSummary=s),H_(s)}),_t$1(`p-change`,function(){return i.changeLocateSummary()}),Kg(),Jc(26,`po-input`,17),G0(),Zb(`ngModelChange`,function(s){return U_(m),Rk(i.literals,s)||(i.literals=s),H_(s)}),_t$1(`p-change`,function(){return i.changeLiterals()}),Kg(),Jc(27,`po-input`,18),G0(),Zb(`ngModelChange`,function(s){return U_(m),Rk(i.filterModel,s)||(i.filterModel=s),H_(s)}),_t$1(`p-change-model`,function(s){return i.updateFilterKeys(s)}),Kg(),Jc(28,`po-input`,19),G0(),Zb(`ngModelChange`,function(s){return U_(m),Rk(i.filterSelectModel,s)||(i.filterSelectModel=s),H_(s)}),_t$1(`p-change`,function(s){return i.updateFilterSelect(s)}),Kg(),_u(29,`po-divider`),Jc(30,`div`,2)(31,`po-button`,20),_t$1(`p-click`,function(){return i.restore()}),Kg()()()}a&2&&(wg(),Ab(`p-aria-label`,i.ariaLabel)(`p-disabled`,i.properties.includes(`disabled`))(`p-filter-keys`,i.fieldKeys)(`p-filter-type`,i.filterMode)(`p-filter-select`,i.fieldSelect)(`p-icon`,i.icon)(`p-items`,i.items)(`p-literals`,i.customLiterals)(`p-loading`,i.properties.includes(`loading`))(`p-locate-summary`,i.customLocateSummary)(`p-search-type`,i.searchMode)(`p-show-listbox`,i.properties.includes(`showListbox`))(`p-size`,i.size),wg(5),Ab(`p-label`,Ok(`Itens encontrados: `,i.filteredItems?.length)),wg(3),$O(i.filteredItems),wg(4),Ab(`p-value`,i.search),wg(),Ab(`p-value`,i.event),wg(4),Kb(`ngModel`,i.ariaLabel),q0(),wg(),Kb(`ngModel`,i.itemsModel),q0(),wg(),Kb(`ngModel`,i.properties),Ab(`p-options`,i.propertiesOptions),q0(),wg(),Kb(`ngModel`,i.icon),Ab(`p-options`,i.iconsOptions),q0(),wg(),Kb(`ngModel`,i.searchMode),Ab(`p-options`,i.searchModeOptions),q0(),wg(),Kb(`ngModel`,i.filterMode),Ab(`p-options`,i.filterModeOptions),q0(),wg(),Kb(`ngModel`,i.size),Ab(`p-options`,i.sizeOptions),q0(),wg(),Kb(`ngModel`,i.locateSummary),q0(),wg(),Kb(`ngModel`,i.literals),q0(),wg(),Kb(`ngModel`,i.filterModel),q0(),wg(),Kb(`ngModel`,i.filterSelectModel),q0())},dependencies:[xZ,RZ,AZ,QL,WL,Tee,l4,oi,Nf,I4,j4,Zte,Joe,bae,Zne],styles:[`.sample-list-search[_ngcontent-%COMP%]{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem}.sample-list-search[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-transform:capitalize}`],changeDetection:1})}return o})();var Oe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-labs-view`]],standalone:!1,decls:49,vars:0,consts:[[`id`,`sample-po-search-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-search-labs/sample-po-search-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-search-labs/sample-po-search-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`data-file`,`sample-po-search-labs/sample-po-search-labs.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Search Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-search-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-search-labs/sample-po-search-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
    <po-accordion-item p-label="Itens encontrados: `),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` filteredItems?.length `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`">
      <po-widget class="po-md-12">
        <ul class="sample-list-search po-md-12 row">
          @for (item of filteredItems; track item) {
            <li>
              @for (key of changeFilter(item); track key) {
                <div>
                  <strong>`),Jc(22,`span`),B_(),Mk(23,`{{`),j_(),Kg(),Mk(24,` key `),Jc(25,`span`),B_(),Mk(26,`}}`),j_(),Kg(),Mk(27,`: </strong> `),Jc(28,`span`),B_(),Mk(29,`{{`),j_(),Kg(),Mk(30,` item[key] `),Jc(31,`span`),B_(),Mk(32,`}}`),j_(),Kg(),Mk(33,` &nbsp;
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
`),Kg()()()(),Jc(34,`po-tab`,10)(35,`div`)(36,`label`,7),Mk(37,`sample-po-search-labs/sample-po-search-labs.component.ts`),Kg(),Jc(38,`div`,11)(39,`pre`,12),Mk(40,`import { HttpClient } from '@angular/common/http';
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
`),Kg()()()(),Jc(41,`po-tab`,13)(42,`div`)(43,`label`,7),Mk(44,`sample-po-search-labs/sample-po-search-labs.component.css`),Kg(),Jc(45,`div`,14)(46,`pre`,15),Mk(47,`.sample-list-search {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.sample-list-search strong {
  text-transform: capitalize;
}
`),Kg()()()()()(),_u(48,`hr`))},dependencies:[P,tre,are,qe],encapsulation:2,changeDetection:1})}return o})();var le=(()=>{class o{getItems(){return[{id:`0348093615904`,name:`Leonardo Silveiras`,birthdate:`1995-07-15T00:00:00-00:00`,genre:`male`,city:`4209102`,status:`active`,nickname:`leo.silveira`,email:`leonardo.silveira@gmail.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`Joinville`,state:`Santa Catarina`,uf:`SC`,dependents:[]},{id:`0648093812893`,name:`João Severino`,birthdate:`1995-10-07T00:00:00-00:00`,genre:`male`,city:`4216206`,status:`active`,nickname:`jseverino`,email:`jseverino@yahoo.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Francisco do Sul`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109481,name:`Maria`,age:`10`,related:`Daughter`,birthdate:`2008-12-10`}]},{id:`0748093840433`,name:`José Marcos Cardoso`,birthdate:`1986-08-01T00:00:00-00:00`,genre:`male`,city:`4201307`,status:`inactive`,nickname:`jose`,email:`jose@outlook.com`,nationality:`Brazilian`,birthPlace:`3550308`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Inativo`,cityName:`Araquari`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109483,name:`Pedro`,age:`13`,related:`Son`,birthdate:`2008-12-10`},{id:109484,name:`Paulo`,age:`15`,related:`Son`,birthdate:`2008-12-10`},{id:109485,name:`José`,age:`19`,related:`Son`,birthdate:`2008-12-10`}]},{id:`0848094890811`,name:`Karlo Rodrigues`,birthdate:`1989-12-28T00:00:00-00:00`,genre:`male`,city:`3550308`,status:`active`,nickname:`krodrigues`,email:`krodrigues@uol.com.br`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Paulo`,state:`São Paulo`,uf:`SP`,dependents:[]}]}static ɵfac=function(a){return new(a||o)};static ɵprov=R({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();function ot(o,C){if(o&1&&(Jc(0,`div`,0),_u(1,`po-info`,4)(2,`po-info`,5)(3,`po-info`,6),Kg()),o&2){let r=C.$implicit;wg(),Ab(`p-value`,r.name),wg(),Ab(`p-value`,r.nickname),wg(),Ab(`p-value`,r.email)}}function at(o,C){o&1&&_u(0,`div`)}function rt(o,C){if(o&1&&(Jc(0,`li`,7),Mk(1),LO(2,at,1,0,`div`),Kg(),Jc(3,`li`,7),Mk(4),Kg()),o&2){let r=C.$implicit,a=tk();wg(),nm(` Nickname: `,r.nickname,` `),wg(),jO(a.compareObjects(r)?2:-1),wg(2),nm(`Email: `,r.email)}}var Ne=(()=>{class o{service=p(le);items;filterKeys=[`name`,`nickname`,`email`];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems()}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[])}compareObjects(r){return!!this.peopleFiltered.includes(r)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-find-people`]],standalone:!1,features:[we([le])],decls:8,vars:3,consts:[[1,`po-row`],[`p-aria-label`,`Po Search`,1,`po-md-12`,3,`p-filtered-items-change`,`p-items`,`p-filter-keys`],[`p-property-title`,`name`,3,`p-items`],[`p-list-view-content-template`,``],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`],[1,`po-md-12`,`po-text-color-neutral-dark-40`]],template:function(a,i){a&1&&(Jc(0,`div`,0)(1,`po-search`,1),_t$1(`p-filtered-items-change`,function(u){return i.filtered(u)}),Kg()(),_u(2,`po-divider`),HO(3,ot,4,3,`div`,0,UO),_u(5,`po-divider`),Jc(6,`po-list-view`,2),Cb(7,rt,5,3,`ng-template`,3),Kg()),a&2&&(wg(),Ab(`p-items`,i.items)(`p-filter-keys`,i.filterKeys),wg(2),$O(i.peopleFiltered),wg(3),Ab(`p-items`,i.items))},dependencies:[Nf,Joe,Pze,wae,Zne],styles:[`li[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center}li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:.75em;height:.75em;border-radius:50%;background-color:green;margin-left:10px}`],changeDetection:1})}return o})();var Ve=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-find-people-view`]],standalone:!1,decls:48,vars:0,consts:[[`id`,`sample-po-search-find-people`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-search-find-people/sample-po-search-find-people.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-search-find-people/sample-po-search-find-people.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-search-find-people/sample-po-search-find-people.service.ts`,1,`docs-code-block`],[`p-label`,`CSS`],[`data-file`,`sample-po-search-find-people/sample-po-search-find-people.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Search Find People`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-search-find-people`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-search-find-people/sample-po-search-find-people.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
      Nickname: `),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` item.nickname `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`
      @if (compareObjects(item)) {
        <div></div>
      }
    </li>
    <li class="po-md-12 po-text-color-neutral-dark-40">Email: `),Jc(22,`span`),B_(),Mk(23,`{{`),j_(),Kg(),Mk(24,` item.email `),Jc(25,`span`),B_(),Mk(26,`}}`),j_(),Kg(),Mk(27,`</li>
  </ng-template>
</po-list-view>
`),Kg()()()(),Jc(28,`po-tab`,10)(29,`div`)(30,`label`,7),Mk(31,`sample-po-search-find-people/sample-po-search-find-people.component.ts`),Kg(),Jc(32,`div`,11)(33,`pre`,12),Mk(34,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()(),Jc(35,`label`,7),Mk(36,`sample-po-search-find-people/sample-po-search-find-people.service.ts`),Kg(),Jc(37,`div`,13)(38,`pre`,12),Mk(39,`import { Injectable } from '@angular/core';

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
`),Kg()()()(),Jc(40,`po-tab`,14)(41,`div`)(42,`label`,7),Mk(43,`sample-po-search-find-people/sample-po-search-find-people.component.css`),Kg(),Jc(44,`div`,15)(45,`pre`,16),Mk(46,`li {
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
`),Kg()()()()()(),_u(47,`hr`))},dependencies:[P,tre,are,Ne],encapsulation:2,changeDetection:1})}return o})();var pe=(()=>{class o{getItems(){return[{id:`0348093615904`,name:`Leonardo Silveiras`,birthdate:`1995-07-15T00:00:00-00:00`,genre:`male`,city:`4209102`,status:`active`,nickname:`leo.silveira`,email:`leonardo.silveira@gmail.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`Joinville`,state:`Santa Catarina`,uf:`SC`,dependents:[]},{id:`0648093812893`,name:`João Severino`,birthdate:`1995-10-07T00:00:00-00:00`,genre:`male`,city:`4216206`,status:`active`,nickname:`jseverino`,email:`jseverino@yahoo.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Francisco do Sul`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109481,name:`Maria`,age:`10`,related:`Daughter`,birthdate:`2008-12-10`}]},{id:`0748093840433`,name:`José Marcos Cardoso`,birthdate:`1986-08-01T00:00:00-00:00`,genre:`male`,city:`4201307`,status:`inactive`,nickname:`jose`,email:`jose@outlook.com`,nationality:`Brazilian`,birthPlace:`3550308`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Inativo`,cityName:`Araquari`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109483,name:`Pedro`,age:`13`,related:`Son`,birthdate:`2008-12-10`},{id:109484,name:`Paulo`,age:`15`,related:`Son`,birthdate:`2008-12-10`},{id:109485,name:`José`,age:`19`,related:`Son`,birthdate:`2008-12-10`}]},{id:`0848094890811`,name:`Karlo Rodrigues`,birthdate:`1989-12-28T00:00:00-00:00`,genre:`male`,city:`3550308`,status:`active`,nickname:`krodrigues`,email:`krodrigues@uol.com.br`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Paulo`,state:`São Paulo`,uf:`SP`,dependents:[]}]}static ɵfac=function(a){return new(a||o)};static ɵprov=R({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();function st(o,C){if(o&1&&(Jc(0,`div`,0),_u(1,`po-divider`)(2,`po-info`,2)(3,`po-info`,3)(4,`po-info`,4),Kg()),o&2){let r=C.$implicit;wg(2),Ab(`p-value`,r.name),wg(),Ab(`p-value`,r.nickname),wg(),Ab(`p-value`,r.email)}}var Be=(()=>{class o{service=p(pe);items;filterKeys=[`name`,`nickname`,`email`];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems()}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[])}compareObjects(r){return!!this.peopleFiltered.includes(r)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-listbox`]],standalone:!1,features:[we([pe])],decls:4,vars:2,consts:[[1,`po-row`],[`p-aria-label`,`Po Search`,`p-show-listbox`,`true`,`p-search-type`,`trigger`,1,`po-md-12`,3,`p-filtered-items-change`,`p-items`,`p-filter-keys`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(a,i){a&1&&(Jc(0,`div`,0)(1,`po-search`,1),_t$1(`p-filtered-items-change`,function(u){return i.filtered(u)}),Kg()(),HO(2,st,5,3,`div`,0,UO)),a&2&&(wg(),Ab(`p-items`,i.items)(`p-filter-keys`,i.filterKeys),wg(),$O(i.peopleFiltered))},dependencies:[Nf,Joe,Zne],encapsulation:2,changeDetection:1})}return o})();var ze=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-listbox-view`]],standalone:!1,decls:29,vars:0,consts:[[`id`,`sample-po-search-listbox`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-search-listbox/sample-po-search-listbox.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-search-listbox/sample-po-search-listbox.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-search-listbox/sample-po-search-listbox.service.ts`,1,`docs-code-block`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Search With Listbox`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-search-listbox`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-search-listbox/sample-po-search-listbox.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-search-listbox/sample-po-search-listbox.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()(),Jc(23,`label`,7),Mk(24,`sample-po-search-listbox/sample-po-search-listbox.service.ts`),Kg(),Jc(25,`div`,13)(26,`pre`,12),Mk(27,`import { Injectable } from '@angular/core';

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
`),Kg()()()()()(),_u(28,`hr`))},dependencies:[P,tre,are,Be],encapsulation:2,changeDetection:1})}return o})();function ct(o,C){if(o&1&&(Jc(0,`div`,0)(1,`po-container`,2),_u(2,`po-info`,3)(3,`po-info`,4)(4,`po-info`,5)(5,`po-info`,6),Kg()()),o&2){let r=C.$implicit;wg(2),Ab(`p-value`,r.name),wg(),Ab(`p-value`,r.gender),wg(),Ab(`p-value`,r.planet),wg(),Ab(`p-value`,r.father)}}var je=(()=>{class o{items;filteredItems=[];filterSelect=[{label:`Personal`,value:[`name`,`gender`]},{label:`Planet`,value:[`planet`]},{label:`Family`,value:`father`}];ngOnInit(){this.items=[{name:`Anakin Skywalker`,gender:`male`,planet:`Tatooine`,father:`Darth Sidious`},{name:`Luke Skywalker`,gender:`male`,planet:`Tatooine`,father:`Anakin Skywalker`},{name:`Leia Organa`,gender:`female`,planet:`Alderaan`,father:`Anakin Skywalker`},{name:`Han Solo`,gender:`male`,planet:`Corellia`,father:`Ovan`}]}filtered(r){this.filteredItems=r}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-filter-select`]],standalone:!1,decls:4,vars:2,consts:[[1,`po-row`],[`p-aria-label`,`Po Search`,`p-search-type`,`trigger`,`p-show-listbox`,`true`,`p-disabled`,`false`,1,`po-md-12`,3,`p-filtered-items-change`,`p-items`,`p-filter-select`],[1,`po-row`,`po-mt-2`],[`p-label`,`Name`,1,`po-md-3`,3,`p-value`],[`p-label`,`Gender`,1,`po-md-3`,3,`p-value`],[`p-label`,`Planet`,1,`po-md-3`,3,`p-value`],[`p-label`,`Father`,1,`po-md-3`,3,`p-value`]],template:function(a,i){a&1&&(Jc(0,`div`,0)(1,`po-search`,1),_t$1(`p-filtered-items-change`,function(u){return i.filtered(u)}),Kg()(),HO(2,ct,6,4,`div`,0,UO)),a&2&&(wg(),Ab(`p-items`,i.items)(`p-filter-select`,i.filterSelect),wg(),$O(i.filteredItems))},dependencies:[Fc,Joe,Zne],encapsulation:2,changeDetection:1})}return o})();var We=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-filter-select-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-search-filter-select`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-search-filter-select/sample-po-search-filter-select.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-search-filter-select/sample-po-search-filter-select.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Search With Filter Select + Listbox`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-search-filter-select`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-search-filter-select/sample-po-search-filter-select.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-search-filter-select/sample-po-search-filter-select.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,je],encapsulation:2,changeDetection:1})}return o})();var Re=(()=>{class o{poModal;filterType=Eu.contains;filterKeysAction=[`rotina`,`codigo`,`modulo`,`versao`];keysLabel=[`rotina`,`codigo`];itemsAction=[{rotina:`Contas a Pagar`,codigo:`MATA103`,modulo:`Adm`,versao:`1.2.3`,action:()=>alert(`Contas a Pagar`)},{rotina:`Cotação de Fornecedores`,codigo:`MATA140`,modulo:`Adm`,versao:`1.2.3`,action:()=>alert(`Cotação de Fornecedores`)},{rotina:`Meus Funcionarios`,codigo:`XPTO987`,modulo:`RH`,versao:`1.2.3`,url:`documentation/po-widget`}];columns=[{property:`rotina`,label:`Rotina`},{property:`codigo`,label:`Código`},{property:`modulo`,label:`Módulo`},{property:`versao`,label:`Versão`}];footerAction(){this.poModal.open()}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-execute`]],viewQuery:function(a,i){if(a&1&&Cu(ia,7),a&2){let m;No(m=xo())&&(i.poModal=m.first)}},standalone:!1,decls:10,vars:9,consts:[[`modal`,``],[1,`po-row`],[`p-title`,`Pesquisar e executar`,`p-help`,`https://github.com/po-ui/po-angular/stargazers`,1,`po-lg-6`,`po-mt-2`,3,`p-height`],[`name`,`Po Search`,1,`po-mt-2`,`full`,3,`p-footer-action-listbox`,`p-search-type`,`p-items`,`p-filter-type`,`p-filter-keys`,`p-keys-label`],[`p-title`,`Rotinas`],[3,`p-columns`,`p-items`,`p-hide-columns-manager`]],template:function(a,i){a&1&&(Jc(0,`div`,1)(1,`po-widget`,2)(2,`div`,1)(3,`span`),Mk(4,`Entre com o nome ou código da rotina`),Kg()(),Jc(5,`div`,1)(6,`po-search`,3),_t$1(`p-footer-action-listbox`,function(){return i.footerAction()}),Kg()()()(),Jc(7,`po-modal`,4,0),_u(9,`po-table`,5),Kg()),a&2&&(wg(),Ab(`p-height`,180),wg(5),Ab(`p-search-type`,`execute`)(`p-items`,i.itemsAction)(`p-filter-type`,i.filterType)(`p-filter-keys`,i.filterKeysAction)(`p-keys-label`,i.keysLabel),wg(3),Ab(`p-columns`,i.columns)(`p-items`,i.itemsAction)(`p-hide-columns-manager`,!0))},dependencies:[ia,q4,bae,Zne],styles:[`.full[_ngcontent-%COMP%]{width:100%}`],changeDetection:1})}return o})();var He=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-execute-view`]],standalone:!1,decls:31,vars:0,consts:[[`id`,`sample-po-search-execute`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-search-execute/sample-po-search-execute.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-search-execute/sample-po-search-execute.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`data-file`,`sample-po-search-execute/sample-po-search-execute.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Search Form Fields with Execute`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-search-execute`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-search-execute/sample-po-search-execute.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-search-execute/sample-po-search-execute.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()(),Jc(23,`po-tab`,13)(24,`div`)(25,`label`,7),Mk(26,`sample-po-search-execute/sample-po-search-execute.component.css`),Kg(),Jc(27,`div`,14)(28,`pre`,15),Mk(29,`.full {
  width: 100%;
}
`),Kg()()()()()(),_u(30,`hr`))},dependencies:[P,tre,are,Re],encapsulation:2,changeDetection:1})}return o})();var gt=[`nameInput`];var Et=[`cpfInput`];var bt=[`addressInput`];var vt=[`numberInput`];var xt=[`emailInput`];var yt=[`websiteInput`];var Ct=[`reactiveFormData`];var Ke=(()=>{class o{fb=p(PZ);nameInput;cpfInput;addressInput;numberInput;emailInput;websiteInput;reactiveFormModal;reactiveForm;filterTargets=[];filteredIndexes=[];currentIndex=-1;firstSearch=!0;locateSummary={currentIndex:0,total:0};filterType=Eu.endsWith;searchLiterals={search:`Buscar campos`};modalPrimaryAction={label:`Close`,action:()=>this.reactiveFormModal.close()};constructor(){this.createForm()}ngAfterViewInit(){this.filterTargets=[{label:`Customer name`,index:0,focus:()=>this.nameInput.focus()},{label:`CPF`,index:1,focus:()=>this.cpfInput.focus()},{label:`Address`,index:2,focus:()=>this.addressInput.focus()},{label:`Number`,index:3,focus:()=>this.numberInput.focus()},{label:`Email`,index:4,focus:()=>this.emailInput.focus()},{label:`Website`,index:5,focus:()=>this.websiteInput.focus()}]}createForm(){this.reactiveForm=this.fb.group({name:[``,[Qm.required,Qm.minLength(5)]],cpf:[``,Qm.required],address:[``,Qm.required],number:[``,Qm.required],email:[``,Qm.required],website:[``,Qm.required]})}updateSearchTerm(r){console.log(`updateSearchTerm`);let a=r.toLowerCase();this.filteredIndexes=this.filterTargets.map((m,u)=>({i:u,t:m})).filter(({t:m})=>a&&m.label.toLowerCase().startsWith(a)).map(({i:m})=>m),this.currentIndex=-1;let i=this.filteredIndexes.length;this.locateSummary={currentIndex:0,total:i}}onNextOccurrenceClick(){console.log(`onNextOccurrenceClick`),this.goToNextOccurrence(),this.focusCurrent()}onPreviousOccurrenceClick(){console.log(`onPreviousOccurrenceClick`),this.goToPreviousOccurrence(),this.focusCurrent()}goToNextOccurrence(){this.filteredIndexes.length&&(this.currentIndex=(this.currentIndex+1)%this.filteredIndexes.length,this.updateSummary())}goToPreviousOccurrence(){this.filteredIndexes.length&&(this.currentIndex=this.currentIndex<=0?this.filteredIndexes.length-1:this.currentIndex-1,this.updateSummary())}updateSummary(){let r=this.filteredIndexes.length,a=r===0||this.currentIndex===-1?0:this.currentIndex+1;this.locateSummary={currentIndex:a,total:r}}focusCurrent(){let r=this.filteredIndexes[this.currentIndex];r!==void 0&&(document.activeElement?.blur(),this.filterTargets[r].focus())}getInputElementByIndex(r){switch(r){case 0:return this.nameInput?.inputEl?.nativeElement??null;case 1:return this.cpfInput?.inputEl?.nativeElement??null;case 2:return this.addressInput?.inputEl?.nativeElement??null;case 3:return this.numberInput?.inputEl?.nativeElement??null;case 4:return this.emailInput?.inputEl?.nativeElement??null;case 5:return this.websiteInput?.inputEl?.nativeElement??null;default:return null}}saveForm(){this.reactiveFormModal.open()}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-fields-locate`]],viewQuery:function(a,i){if(a&1&&Cu(gt,7)(Et,7)(bt,7)(vt,7)(xt,7)(yt,7)(Ct,7),a&2){let m;No(m=xo())&&(i.nameInput=m.first),No(m=xo())&&(i.cpfInput=m.first),No(m=xo())&&(i.addressInput=m.first),No(m=xo())&&(i.numberInput=m.first),No(m=xo())&&(i.emailInput=m.first),No(m=xo())&&(i.websiteInput=m.first),No(m=xo())&&(i.reactiveFormModal=m.first)}},standalone:!1,decls:35,vars:11,consts:[[`nameInput`,``],[`cpfInput`,``],[`addressInput`,``],[`numberInput`,``],[`emailInput`,``],[`websiteInput`,``],[`reactiveFormData`,``],[1,`po-row`],[1,`po-ml-1`,`po-mr-1`],[`p-search-type`,`locate`,3,`p-change-model`,`p-locate-next`,`p-locate-previous`,`p-literals`,`p-locate-summary`],[3,`formGroup`],[`formControlName`,`name`,`p-clean`,``,`p-icon`,`an an-user`,`p-label`,`Customer name`,1,`po-lg-9`],[`formControlName`,`cpf`,`p-label`,`CPF`,`p-mask`,`999.999.999-99`,`p-clean`,``,1,`po-lg-3`],[`formControlName`,`address`,`p-clean`,``,`p-icon`,`an an-map-pin`,`p-label`,`Address`,1,`po-lg-9`],[`formControlName`,`number`,`p-label`,`Number`,`p-clean`,``,1,`po-lg-3`],[`formControlName`,`email`,`p-label`,`Email`,`p-clean`,``,1,`po-lg-6`],[`formControlName`,`website`,`p-label`,`Website`,`p-clean`,``,1,`po-lg-6`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Save successful`,3,`p-primary-action`],[`p-label`,`Name`,1,`po-lg-6`,3,`p-value`],[`p-label`,`CPF`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Address`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Number`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Email`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Website`,1,`po-lg-6`,3,`p-value`]],template:function(a,i){a&1&&(Jc(0,`div`,7)(1,`div`,8)(2,`po-search`,9),_t$1(`p-change-model`,function(u){return i.updateSearchTerm(u)})(`p-locate-next`,function(){return i.onNextOccurrenceClick()})(`p-locate-previous`,function(){return i.onPreviousOccurrenceClick()}),Kg()()(),_u(3,`po-divider`),Jc(4,`form`,10)(5,`div`,7)(6,`po-input`,11,0),G0(),Kg(),Jc(8,`po-input`,12,1),G0(),Kg()(),Jc(10,`div`,7)(11,`po-input`,13,2),G0(),Kg(),Jc(13,`po-number`,14,3),G0(),Kg()(),Jc(15,`div`,7)(16,`po-email`,15,4),G0(),Kg(),Jc(18,`po-url`,16,5),G0(),Kg()(),Jc(20,`div`,7)(21,`po-button`,17),_t$1(`p-click`,function(){return i.saveForm()}),Kg()()(),Jc(22,`po-modal`,18,6)(24,`div`,7),_u(25,`po-info`,19)(26,`po-info`,20),Kg(),_u(27,`po-divider`),Jc(28,`div`,7),_u(29,`po-info`,21)(30,`po-info`,22),Kg(),_u(31,`po-divider`),Jc(32,`div`,7),_u(33,`po-info`,23)(34,`po-info`,24),Kg()()),a&2&&(wg(2),Ab(`p-literals`,i.searchLiterals)(`p-locate-summary`,i.locateSummary),wg(2),Ab(`formGroup`,i.reactiveForm),wg(2),q0(),wg(2),q0(),wg(3),q0(),wg(2),q0(),wg(3),q0(),wg(2),q0(),wg(3),Ab(`p-disabled`,!i.reactiveForm.valid),wg(),Ab(`p-primary-action`,i.modalPrimaryAction),wg(3),Ab(`p-value`,i.reactiveForm.controls.name.value),wg(),Ab(`p-value`,i.reactiveForm.controls.cpf.value),wg(3),Ab(`p-value`,i.reactiveForm.controls.address.value),wg(),Ab(`p-value`,i.reactiveForm.controls.number.value),wg(3),Ab(`p-value`,i.reactiveForm.controls.email.value),wg(),Ab(`p-value`,i.reactiveForm.controls.website.value))},dependencies:[xZ,RZ,AZ,ZL,i1,oi,Nf,p5,j4,Goe,G4,Joe,ia,Zne],encapsulation:2,changeDetection:1})}return o})();var Je=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-fields-locate-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-search-fields-locate`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-search-fields-locate/sample-po-search-fields-locate.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-search-fields-locate/sample-po-search-fields-locate.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Search Form Fields with Locate`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-search-fields-locate`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-search-fields-locate/sample-po-search-fields-locate.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-search-fields-locate/sample-po-search-fields-locate.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { AfterViewInit, Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Ke],encapsulation:2,changeDetection:1})}return o})();var Ue=(()=>{class o{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-search-doc`]],standalone:!1,decls:1426,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-search-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-aria-label`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-blur`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`event-p-filter`,1,`docs-api-properties-row`],[`id`,`prop-p-filter-keys`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[1,`language-typescript`],[`id`,`prop-p-filter-select`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSearchFilterSelect[]`],[`id`,`prop-p-filter-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSearchFilterMode`],[`id`,`event-p-filtered-items-change`,1,`docs-api-properties-row`],[`id`,`event-p-focus`,1,`docs-api-properties-row`],[`id`,`event-p-footer-action-listbox`,1,`docs-api-properties-row`],[`id`,`prop-p-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`prop-p-items`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-keys-label`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[1,`language-ts`],[`id`,`event-p-listbox-onclick`,1,`docs-api-properties-row`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSearchLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`event-p-locate-next`,1,`docs-api-properties-row`],[`id`,`event-p-locate-previous`,1,`docs-api-properties-row`],[`id`,`prop-p-locate-summary`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoSearchLocateSummary`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`prop-p-no-autocomplete`,1,`docs-api-properties-row`],[`id`,`prop-p-show-listbox`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-search-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`searchMode`],[`id`,`interface-po-search-filter-select`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-search-filter-select-label`,1,`docs-api-properties-row`],[`id`,`interface-po-search-filter-select-value`,1,`docs-api-properties-row`],[`id`,`interface-po-search-locate-summary`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-search-locate-summary-current-index`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`interface-po-search-locate-summary-total`,1,`docs-api-properties-row`],[`id`,`interface-po-search-option`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-search-option-label`,1,`docs-api-properties-row`],[`id`,`interface-po-search-option-value`,1,`docs-api-properties-row`],[`id`,`interface-po-search-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-search-literals-all`,1,`docs-api-properties-row`],[`id`,`interface-po-search-literals-clean`,1,`docs-api-properties-row`],[`id`,`interface-po-search-literals-footer-action-listbox`,1,`docs-api-properties-row`],[`id`,`interface-po-search-literals-next`,1,`docs-api-properties-row`],[`id`,`interface-po-search-literals-of`,1,`docs-api-properties-row`],[`id`,`interface-po-search-literals-placeholder-listbox`,1,`docs-api-properties-row`],[`id`,`interface-po-search-literals-previous`,1,`docs-api-properties-row`],[`id`,`interface-po-search-literals-result`,1,`docs-api-properties-row`],[`id`,`interface-po-search-literals-search`,1,`docs-api-properties-row`],[`id`,`enum-po-search-filter-mode`,1,`docs-api-class-name`],[`id`,`enum-po-search-filter-mode-starts-with`,1,`docs-api-properties-row`],[`id`,`enum-po-search-filter-mode-contains`,1,`docs-api-properties-row`],[`id`,`enum-po-search-filter-mode-ends-with`,1,`docs-api-properties-row`]],template:function(a,i){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoSearchModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-search.`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoSearchComponent`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,`O componente search, também conhecido como barra de pesquisa, é utilizado para ajudar os usuários a localizar um determinado conteúdo.`),Kg(),Jc(15,`p`),Mk(16,`Normalmente localizado no canto superior direito, junto com o ícone de lupa, uma vez que este ícone é amplamente reconhecido.`),Kg(),Jc(17,`h4`),Mk(18,`Boas práticas`),Kg(),Jc(19,`p`),Mk(20,`Foram estruturados os padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia
aos usu\xE1rios. Portanto, \xE9 de extrema import\xE2ncia que, ao utilizar este componente, as pessoas respons\xE1veis por seu
desenvolvimento considerem os seguintes crit\xE9rios:`),Kg(),Jc(21,`ul`)(22,`li`),Mk(23,`Utilize labels para apresentar resultados que est\xE3o sendo exibidos e apresente os resultados mais relevantes
primeiro.`),Kg(),Jc(24,`li`),Mk(25,`Exiba uma mensagem clara quando n\xE3o forem encontrados resultados para busca e sempre que poss\xEDvel ofere\xE7a outras
sugest\xF5es de busca.`),Kg(),Jc(26,`li`),Mk(27,`Mantenha o texto original no campo de input, que facilita a a\xE7\xE3o do usu\xE1rio caso queira fazer uma nova busca com
alguma modifica\xE7\xE3o na pesquisa.`),Kg(),Jc(28,`li`),Mk(29,`Caso seja poss\xEDvel detectar um erro de digita\xE7\xE3o, mostre os resultados para a palavra "corrigida", isso evita a
frustra\xE7\xE3o de n\xE3o obter resultados e n\xE3o for\xE7a o usu\xE1rio a realizar uma nova busca.`),Kg(),Jc(30,`li`),Mk(31,`Quando apropriado, destaque os termos da busca nos resultados.`),Kg(),Jc(32,`li`),Mk(33,`A entrada do campo de pesquisa deve caber em uma linha. Não use entradas de pesquisa de várias linhas.`),Kg(),Jc(34,`li`),Mk(35,`Recomenda-se ter apenas uma pesquisa por p\xE1gina. Se voc\xEA precisar de v\xE1rias pesquisas, rotule-as claramente para
indicar sua finalidade.`),Kg(),Jc(36,`li`),Mk(37,`Se poss\xEDvel, forne\xE7a sugest\xF5es de pesquisa, seja em um helptext ou sugest\xE3o de pesquisa que \xE9 um autocomplete. Isso
ajuda os usu\xE1rios a encontrar o que est\xE3o procurando, especialmente se os itens pesquis\xE1veis forem complexos.`),Kg()(),Jc(38,`h4`),Mk(39,`Acessibilidade tratada no componente`),Kg(),Jc(40,`p`),Mk(41,` Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo
propriet\xE1rio do conte\xFAdo. S\xE3o elas:`),Kg(),Jc(42,`ul`)(43,`li`),Mk(44,`Permitir a interação via teclado (2.1.1: Keyboard (A));`),Kg(),Jc(45,`li`),Mk(46,`Alteração entre os estados precisa ser indicada por mais de um elemento além da cor (1.4.1: Use of Color);`),Kg()(),Jc(47,`h4`),Mk(48,`Tokens customizáveis`),Kg(),Jc(49,`p`),Mk(50,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(51,`blockquote`)(52,`p`),Mk(53,`Para maiores informações, acesse o guia `),Jc(54,`a`,6),Mk(55,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(56,`.`),Kg()(),Jc(57,`table`)(58,`thead`)(59,`tr`)(60,`th`),Mk(61,`Propriedade`),Kg(),Jc(62,`th`),Mk(63,`Descrição`),Kg(),Jc(64,`th`),Mk(65,`Valor Padrão`),Kg()()(),Jc(66,`tbody`)(67,`tr`)(68,`td`)(69,`strong`),Mk(70,`Default Values`),Kg()(),_u(71,`td`)(72,`td`),Kg(),Jc(73,`tr`)(74,`td`)(75,`code`),Mk(76,`--font-family`),Kg()(),Jc(77,`td`),Mk(78,`Família tipográfica do campo`),Kg(),Jc(79,`td`)(80,`code`),Mk(81,`var(--font-family-theme)`),Kg()()(),Jc(82,`tr`)(83,`td`)(84,`code`),Mk(85,`--font-size`),Kg()(),Jc(86,`td`),Mk(87,`Tamanho da fonte do campo`),Kg(),Jc(88,`td`)(89,`code`),Mk(90,`var(--font-size-default)`),Kg()()(),Jc(91,`tr`)(92,`td`)(93,`code`),Mk(94,`--text-color-placeholder`),Kg()(),Jc(95,`td`),Mk(96,`Cor do texto no placeholder`),Kg(),Jc(97,`td`)(98,`code`),Mk(99,`var(--color-neutral-light-30)`),Kg()()(),Jc(100,`tr`)(101,`td`)(102,`code`),Mk(103,`--color`),Kg()(),Jc(104,`td`),Mk(105,`Cor das bordas`),Kg(),Jc(106,`td`)(107,`code`),Mk(108,`var(--color-neutral-dark-70)`),Kg()()(),Jc(109,`tr`)(110,`td`)(111,`code`),Mk(112,`--border-radius`),Kg()(),Jc(113,`td`),Mk(114,`Raio das bordas`),Kg(),Jc(115,`td`)(116,`code`),Mk(117,`var(--border-radius-md)`),Kg()()(),Jc(118,`tr`)(119,`td`)(120,`code`),Mk(121,`--background`),Kg()(),Jc(122,`td`),Mk(123,`Cor de background`),Kg(),Jc(124,`td`)(125,`code`),Mk(126,`var(--color-neutral-light-05)`),Kg()()(),Jc(127,`tr`)(128,`td`)(129,`code`),Mk(130,`--text-color`),Kg()(),Jc(131,`td`),Mk(132,`Cor do texto editável`),Kg(),Jc(133,`td`)(134,`code`),Mk(135,`var(--color-neutral-dark-90)`),Kg()()(),Jc(136,`tr`)(137,`td`)(138,`code`),Mk(139,`--color-clear`),Kg()(),Jc(140,`td`),Mk(141,`Cor do ícone close`),Kg(),Jc(142,`td`)(143,`code`),Mk(144,`var(--color-action-default)`),Kg()()(),Jc(145,`tr`)(146,`td`)(147,`code`),Mk(148,`--color-controls`),Kg()(),Jc(149,`td`),Mk(150,`Cor dos ícones de controle do mode location`),Kg(),Jc(151,`td`)(152,`code`),Mk(153,`var(--color-action-default)`),Kg()()(),Jc(154,`tr`)(155,`td`)(156,`code`),Mk(157,`--transition-property`),Kg()(),Jc(158,`td`),Mk(159,`Atributo da transição`),Kg(),Jc(160,`td`)(161,`code`),Mk(162,`all`),Kg()()(),Jc(163,`tr`)(164,`td`)(165,`code`),Mk(166,`--transition-duration`),Kg()(),Jc(167,`td`),Mk(168,`Duração da transição`),Kg(),Jc(169,`td`)(170,`code`),Mk(171,`var(--duration-extra-fast)`),Kg()()(),Jc(172,`tr`)(173,`td`)(174,`code`),Mk(175,`--transition-timing`),Kg()(),Jc(176,`td`),Mk(177,`Duração da transição com o tipo de transição`),Kg(),Jc(178,`td`)(179,`code`),Mk(180,`var(--timing-standart)`),Kg()()(),Jc(181,`tr`)(182,`td`)(183,`strong`),Mk(184,`Icon`),Kg()(),_u(185,`td`)(186,`td`),Kg(),Jc(187,`tr`)(188,`td`)(189,`code`),Mk(190,`--color-icon-read`),Kg()(),Jc(191,`td`),Mk(192,`Cor do ícone de busca no modo action`),Kg(),Jc(193,`td`)(194,`code`),Mk(195,`var(--color-neutral-dark-70)`),Kg()()(),Jc(196,`tr`)(197,`td`)(198,`code`),Mk(199,`--color-icon`),Kg()(),Jc(200,`td`),Mk(201,`Cor do ícone de busca no modo trigger`),Kg(),Jc(202,`td`)(203,`code`),Mk(204,`var(--color-action-default)`),Kg()()(),Jc(205,`tr`)(206,`td`)(207,`strong`),Mk(208,`Hover`),Kg()(),_u(209,`td`)(210,`td`),Kg(),Jc(211,`tr`)(212,`td`)(213,`code`),Mk(214,`--color-hover`),Kg()(),Jc(215,`td`),Mk(216,`Cor das bordas no estado hover`),Kg(),Jc(217,`td`)(218,`code`),Mk(219,`var(--color-action-hover)`),Kg()()(),Jc(220,`tr`)(221,`td`)(222,`code`),Mk(223,`--background-hover`),Kg()(),Jc(224,`td`),Mk(225,`Cor de background no estado hover`),Kg(),Jc(226,`td`)(227,`code`),Mk(228,`var(--color-brand-01-lightest)`),Kg()()(),Jc(229,`tr`)(230,`td`)(231,`strong`),Mk(232,`Focused`),Kg()(),_u(233,`td`)(234,`td`),Kg(),Jc(235,`tr`)(236,`td`)(237,`code`),Mk(238,`--color-focused`),Kg()(),Jc(239,`td`),Mk(240,`Cor das bordas no estado de focus`),Kg(),Jc(241,`td`)(242,`code`),Mk(243,`var(--color-action-default)`),Kg()()(),Jc(244,`tr`)(245,`td`)(246,`code`),Mk(247,`--outline-color-focused`),Kg()(),Jc(248,`td`),Mk(249,`Cor do outline no estado de focus`),Kg(),Jc(250,`td`)(251,`code`),Mk(252,`var(--color-action-focus)`),Kg()()(),Jc(253,`tr`)(254,`td`)(255,`strong`),Mk(256,`Disabled`),Kg()(),_u(257,`td`)(258,`td`),Kg(),Jc(259,`tr`)(260,`td`)(261,`code`),Mk(262,`--color-disabled`),Kg()(),Jc(263,`td`),Mk(264,`Cor principal no estado disabled`),Kg(),Jc(265,`td`)(266,`code`),Mk(267,`var(--color-action-disabled)`),Kg()()(),Jc(268,`tr`)(269,`td`)(270,`code`),Mk(271,`--background-disabled`),Kg()(),Jc(272,`td`),Mk(273,`Cor de background no estado disabled`),Kg(),Jc(274,`td`)(275,`code`),Mk(276,`var(--color-neutral-light-20)`),Kg()()()()()(),Jc(277,`div`,7)(278,`h4`,8),Mk(279,`Seletor`),Kg(),Jc(280,`pre`,9),Mk(281,`<po-search
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
`),Kg()(),Jc(282,`h4`,10),Mk(283,`Propriedades`),Kg(),Jc(284,`table`,11)(285,`tr`,12)(286,`th`,13),Mk(287,`Nome`),Kg(),Jc(288,`th`,13),Mk(289,`Tipo`),Kg(),Jc(290,`th`,13),Mk(291,`Padrão`),Kg(),Jc(292,`th`,13),Mk(293,`Descrição`),Kg()(),Jc(294,`tr`,14)(295,`td`,15)(296,`div`,16)(297,`span`,17),Mk(298,` p-aria-label`),_u(299,`br`),Kg()()(),Jc(300,`td`,18)(301,`code`,19),Mk(302,`string`),Kg()(),Jc(303,`td`,20),Mk(304,`-`),Kg(),Jc(305,`td`,21)(306,`em`)(307,`strong`),Mk(308,`(opcional)`),Kg()(),Jc(309,`p`),Mk(310,`Define um aria-label para o po-search.`),Kg(),Jc(311,`blockquote`)(312,`p`),Mk(313,`Devido o componente não possuir uma label assim como outros campos de texto, o `),Jc(314,`code`),Mk(315,`aria-label`),Kg(),Mk(316,` \xE9 utilizado para
acessibilidade.`),Kg()()()(),Jc(317,`tr`,22)(318,`td`,15)(319,`div`,23)(320,`span`,24),Mk(321,` (p-blur)`),_u(322,`br`),Kg()()(),Jc(323,`td`,18)(324,`code`,25),Mk(325,`EventEmitter`),Kg()(),Jc(326,`td`,20),Mk(327,`-`),Kg(),Jc(328,`td`,21)(329,`em`)(330,`strong`),Mk(331,`(opcional)`),Kg()(),Jc(332,`p`),Mk(333,`Evento disparado ao sair do campo.`),Kg()()(),Jc(334,`tr`,26)(335,`td`,15)(336,`div`,23)(337,`span`,24),Mk(338,` (p-change-model)`),_u(339,`br`),Kg()()(),Jc(340,`td`,18)(341,`code`,25),Mk(342,`EventEmitter`),Kg()(),Jc(343,`td`,20),Mk(344,`-`),Kg(),Jc(345,`td`,21)(346,`em`)(347,`strong`),Mk(348,`(opcional)`),Kg()(),Jc(349,`p`),Mk(350,`Evento disparado ao alterar valor do model.`),Kg()()(),Jc(351,`tr`,27)(352,`td`,15)(353,`div`,16)(354,`span`,17),Mk(355,` p-disabled`),_u(356,`br`),Kg()()(),Jc(357,`td`,18)(358,`code`,28),Mk(359,`boolean`),Kg()(),Jc(360,`td`,20)(361,`p`)(362,`code`),Mk(363,`false`),Kg()()(),Jc(364,`td`,21)(365,`em`)(366,`strong`),Mk(367,`(opcional)`),Kg()(),Jc(368,`p`),Mk(369,`Desabilita o po-search e não permite que o usuário interaja com o mesmo.`),Kg()()(),Jc(370,`tr`,29)(371,`td`,15)(372,`div`,23)(373,`span`,24),Mk(374,` (p-filter)`),_u(375,`br`),Kg()()(),Jc(376,`td`,18)(377,`code`,25),Mk(378,`EventEmitter`),Kg()(),Jc(379,`td`,20),Mk(380,`-`),Kg(),Jc(381,`td`,21)(382,`em`)(383,`strong`),Mk(384,`(opcional)`),Kg()(),Jc(385,`p`),Mk(386,`Pode ser informada uma função que será disparada quando houver alterações nos filtros.`),Kg(),Jc(387,`blockquote`)(388,`p`),Mk(389,`Incompatível com a propriedade `),Jc(390,`code`),Mk(391,`p-search-type`),Kg(),Mk(392,` do tipo `),Jc(393,`code`),Mk(394,`locate`),Kg(),Mk(395,`.`),Kg()()()(),Jc(396,`tr`,30)(397,`td`,15)(398,`div`,16)(399,`span`,17),Mk(400,` p-filter-keys`),_u(401,`br`),Kg()()(),Jc(402,`td`,18)(403,`code`,31),Mk(404,`Array<any>`),Kg()(),Jc(405,`td`,20),Mk(406,`-`),Kg(),Jc(407,`td`,21)(408,`p`),Mk(409,`Define os nomes das propriedades do objeto que serão utilizados para busca em `),Jc(410,`code`),Mk(411,`p-items`),Kg(),Mk(412,`. Cada valor definido no
array ser\xE1 considerado durante a apresenta\xE7\xE3o e filtragem dos itens.
Exemplo de uso:`),Kg(),Jc(413,`pre`)(414,`code`,32),Mk(415,`const filterKeys: Array<string> = ['name', 'gender', 'planet', 'father'];
`),Kg()(),Jc(416,`blockquote`)(417,`p`),Mk(418,`Esta propriedade é ignorada quando utilizado com `),Jc(419,`code`),Mk(420,`p-filter-select`),Kg(),Mk(421,` e incompat\xEDvel com a propriedade
`),Jc(422,`code`),Mk(423,`p-search-type`),Kg(),Mk(424,` do tipo `),Jc(425,`code`),Mk(426,`locate`),Kg(),Mk(427,`.`),Kg()()()(),Jc(428,`tr`,33)(429,`td`,15)(430,`div`,16)(431,`span`,17),Mk(432,` p-filter-select`),_u(433,`br`),Kg()()(),Jc(434,`td`,18)(435,`code`,34),Mk(436,`PoSearchFilterSelect[]`),Kg()(),Jc(437,`td`,20),Mk(438,`-`),Kg(),Jc(439,`td`,21)(440,`p`),Mk(441,`Habilita um seletor de filtros \xE0 esquerda do campo, permitindo a aplica\xE7\xE3o de filtros agrupados na busca ou sobre
os itens fornecidos em `),Jc(442,`code`),Mk(443,`p-items`),Kg(),Mk(444,`. Automaticamente adiciona a opção `),Jc(445,`strong`),Mk(446,`Todos`),Kg(),Mk(447,`, com um mapeamento de todas as opções passadas.`),Kg(),Jc(448,`p`),Mk(449,`Exemplo de uso:`),Kg(),Jc(450,`pre`)(451,`code`,32),Mk(452,`const filterSelect = [
  { label: 'personal', value: ['name', 'email', 'nickname'] },
  { label: 'address', value: ['country', 'state', 'city', 'street'] },
  { label: 'family', value: ['father', 'mother', 'dependents'] }
];
`),Kg()(),Jc(453,`blockquote`)(454,`p`),Mk(455,`Ao ser habilitada, a propriedade `),Jc(456,`code`),Mk(457,`p-filter-keys`),Kg(),Mk(458,` ser\xE1 ignorada. Esta propriedade \xE9 incompat\xEDvel com a propriedade
`),Jc(459,`code`),Mk(460,`p-search-type`),Kg(),Mk(461,` do tipo `),Jc(462,`code`),Mk(463,`locate`),Kg(),Mk(464,`.`),Kg()()()(),Jc(465,`tr`,35)(466,`td`,15)(467,`div`,16)(468,`span`,17),Mk(469,` p-filter-type`),_u(470,`br`),Kg()()(),Jc(471,`td`,18)(472,`code`,36),Mk(473,`PoSearchFilterMode`),Kg()(),Jc(474,`td`,20)(475,`p`)(476,`code`),Mk(477,`startsWith`),Kg()()(),Jc(478,`td`,21)(479,`em`)(480,`strong`),Mk(481,`(opcional)`),Kg()(),Jc(482,`p`),Mk(483,`Define o modo de pesquisa utilizado no campo de busca. Os valores permitidos s\xE3o definidos pelo enum
`),Jc(484,`strong`),Mk(485,`PoSearchFilterMode`),Kg(),Mk(486,`.`),Kg(),Jc(487,`blockquote`)(488,`p`),Mk(489,`Incompatível com a propriedade `),Jc(490,`code`),Mk(491,`p-search-type`),Kg(),Mk(492,` do tipo `),Jc(493,`code`),Mk(494,`locate`),Kg(),Mk(495,`.`),Kg()()()(),Jc(496,`tr`,37)(497,`td`,15)(498,`div`,23)(499,`span`,24),Mk(500,` (p-filtered-items-change)`),_u(501,`br`),Kg()()(),Jc(502,`td`,18)(503,`code`,25),Mk(504,`EventEmitter`),Kg()(),Jc(505,`td`,20),Mk(506,`-`),Kg(),Jc(507,`td`,21)(508,`em`)(509,`strong`),Mk(510,`(opcional)`),Kg()(),Jc(511,`p`),Mk(512,`Pode ser informada uma função que será disparada quando houver alterações no input.`),Kg(),Jc(513,`blockquote`)(514,`p`),Mk(515,`Incompatível com a propriedade `),Jc(516,`code`),Mk(517,`p-search-type`),Kg(),Mk(518,` do tipo `),Jc(519,`code`),Mk(520,`locate`),Kg(),Mk(521,`.`),Kg()()()(),Jc(522,`tr`,38)(523,`td`,15)(524,`div`,23)(525,`span`,24),Mk(526,` (p-focus)`),_u(527,`br`),Kg()()(),Jc(528,`td`,18)(529,`code`,25),Mk(530,`EventEmitter`),Kg()(),Jc(531,`td`,20),Mk(532,`-`),Kg(),Jc(533,`td`,21)(534,`em`)(535,`strong`),Mk(536,`(opcional)`),Kg()(),Jc(537,`p`),Mk(538,`Evento emitido quando o campo de entrada (input) recebe foco.`),Kg()()(),Jc(539,`tr`,39)(540,`td`,15)(541,`div`,23)(542,`span`,24),Mk(543,` (p-footer-action-listbox)`),_u(544,`br`),Kg()()(),Jc(545,`td`,18)(546,`code`,25),Mk(547,`EventEmitter`),Kg()(),Jc(548,`td`,20),Mk(549,`-`),Kg(),Jc(550,`td`,21)(551,`em`)(552,`strong`),Mk(553,`(opcional)`),Kg()(),Jc(554,`p`),Mk(555,`Evento disparado ao clicar no botão de ação exibido no rodapé do `),Jc(556,`code`),Mk(557,`listbox`),Kg(),Mk(558,`.
O texto exibido pode ser configurado por meio do literal `),Jc(559,`code`),Mk(560,`footerActionListbox`),Kg(),Mk(561,`.`),Kg()()(),Jc(562,`tr`,40)(563,`td`,15)(564,`div`,16)(565,`span`,17),Mk(566,` p-icon`),_u(567,`br`),Kg()()(),Jc(568,`td`,18)(569,`code`,19),Mk(570,`string `),Kg(),Jc(571,`code`,41),Mk(572,` TemplateRef<void>`),Kg()(),Jc(573,`td`,20),Mk(574,`-`),Kg(),Jc(575,`td`,21)(576,`em`)(577,`strong`),Mk(578,`(opcional)`),Kg()(),Jc(579,`p`),Mk(580,`Permite customizar o ícone de busca que acompanha o campo.`),Kg(),Jc(581,`p`),Mk(582,`É possível usar qualquer um dos ícones da `),Jc(583,`a`,42),Mk(584,`Biblioteca de ícones PO UI`),Kg(),Mk(585,`, conforme exemplo:`),Kg(),Jc(586,`pre`)(587,`code`),Mk(588,`<po-search p-icon="an an-user"></po-search>
`),Kg()(),Jc(589,`p`),Mk(590,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(591,`em`),Mk(592,`Font Awesome`),Kg(),Mk(593,`, desde que a biblioteca
esteja carregada no projeto:`),Kg(),Jc(594,`pre`)(595,`code`),Mk(596,`<po-search p-icon="fa fa-podcast"></po-search>
`),Kg()(),Jc(597,`p`),Mk(598,`Outra opção seria a customização do ícone através do `),Jc(599,`code`),Mk(600,`TemplateRef`),Kg(),Mk(601,`, conforme exemplo abaixo:`),Kg(),Jc(602,`pre`)(603,`code`),Mk(604,`<po-search [p-icon]="template"></po-search>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),Kg()()()(),Jc(605,`tr`,43)(606,`td`,15)(607,`div`,16)(608,`span`,17),Mk(609,` p-items`),_u(610,`br`),Kg()()(),Jc(611,`td`,18)(612,`code`,31),Mk(613,`Array<any>`),Kg()(),Jc(614,`td`,20),Mk(615,`-`),Kg(),Jc(616,`td`,21)(617,`em`)(618,`strong`),Mk(619,`(opcional)`),Kg()(),Jc(620,`p`),Mk(621,`Lista de itens que serão utilizados para pesquisa.`),Kg(),Jc(622,`blockquote`)(623,`p`),Mk(624,`Incompatível com a propriedade `),Jc(625,`code`),Mk(626,`p-search-type`),Kg(),Mk(627,` do tipo `),Jc(628,`code`),Mk(629,`locate`),Kg(),Mk(630,`.`),Kg()()()(),Jc(631,`tr`,44)(632,`td`,15)(633,`div`,23)(634,`span`,24),Mk(635,` (p-keydown)`),_u(636,`br`),Kg()()(),Jc(637,`td`,18)(638,`code`,25),Mk(639,`EventEmitter`),Kg()(),Jc(640,`td`,20),Mk(641,`-`),Kg(),Jc(642,`td`,21)(643,`em`)(644,`strong`),Mk(645,`(opcional)`),Kg()(),Jc(646,`p`),Mk(647,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(648,`code`),Mk(649,`KeyboardEvent`),Kg(),Mk(650,` com informações sobre a tecla.`),Kg()()(),Jc(651,`tr`,45)(652,`td`,15)(653,`div`,16)(654,`span`,17),Mk(655,` p-keys-label`),_u(656,`br`),Kg()()(),Jc(657,`td`,18)(658,`code`,46),Mk(659,`Array<string>`),Kg()(),Jc(660,`td`,20),Mk(661,`-`),Kg(),Jc(662,`td`,21)(663,`em`)(664,`strong`),Mk(665,`(opcional)`),Kg()(),Jc(666,`p`),Mk(667,`Define os nomes das propriedades do objeto que serão exibidos como rótulos (labels) no `),Jc(668,`code`),Mk(669,`listbox`),Kg(),Mk(670,` quando a propriedade
`),Jc(671,`code`),Mk(672,`p-show-listbox`),Kg(),Mk(673,` estiver habilitada.`),Kg(),Jc(674,`p`),Mk(675,`Deve ser informado um array de strings contendo até `),Jc(676,`strong`),Mk(677,`3 propriedades`),Kg(),Mk(678,`.`),Kg(),Jc(679,`p`),Mk(680,`Exemplo de uso:`),Kg(),Jc(681,`pre`)(682,`code`,47),Mk(683,`keysLabel: Array<string> = ['nome', 'email', 'country'];
`),Kg()()()(),Jc(684,`tr`,48)(685,`td`,15)(686,`div`,23)(687,`span`,24),Mk(688,` (p-listbox-onclick)`),_u(689,`br`),Kg()()(),Jc(690,`td`,18)(691,`code`,25),Mk(692,`EventEmitter`),Kg()(),Jc(693,`td`,20),Mk(694,`-`),Kg(),Jc(695,`td`,21)(696,`em`)(697,`strong`),Mk(698,`(opcional)`),Kg()(),Jc(699,`p`),Mk(700,`Pode ser informada uma função que será disparada quando houver click no listbox.`),Kg(),Jc(701,`blockquote`)(702,`p`),Mk(703,`Incompatível com a propriedade `),Jc(704,`code`),Mk(705,`p-search-type`),Kg(),Mk(706,` do tipo `),Jc(707,`code`),Mk(708,`locate`),Kg(),Mk(709,`.`),Kg()()()(),Jc(710,`tr`,49)(711,`td`,15)(712,`div`,16)(713,`span`,17),Mk(714,` p-literals`),_u(715,`br`),Kg()()(),Jc(716,`td`,18)(717,`code`,50),Mk(718,`PoSearchLiterals`),Kg()(),Jc(719,`td`,20),Mk(720,`-`),Kg(),Jc(721,`td`,21)(722,`em`)(723,`strong`),Mk(724,`(opcional)`),Kg()(),Jc(725,`p`),Mk(726,`Objeto com as literais usadas no `),Jc(727,`code`),Mk(728,`po-search`),Kg(),Mk(729,`, permitindo personalizar os textos exibidos no componente.`),Kg(),Jc(730,`p`),Mk(731,`Para utilizar basta passar a literal que deseja customizar:`),Kg(),Jc(732,`pre`)(733,`code`),Mk(734,`const customLiterals: PoSearchLiterals = {
  search: 'Pesquisar',
  clean: 'Limpar',
};
`),Kg()(),Jc(735,`p`),Mk(736,`E para carregar a literal customizada, basta apenas passar o objeto para o componente.`),Kg(),Jc(737,`pre`)(738,`code`),Mk(739,`<po-search
  [p-literals]="customLiterals">
</po-search>
`),Kg()(),Jc(740,`blockquote`)(741,`p`),Mk(742,`O objeto padrão de literais será traduzido de acordo com o idioma do `),Jc(743,`a`,51)(744,`code`),Mk(745,`PoI18nService`),Kg()(),Mk(746,` ou
do browser.`),Kg()()()(),Jc(747,`tr`,52)(748,`td`,15)(749,`div`,16)(750,`span`,17),Mk(751,` p-loading`),_u(752,`br`),Kg()()(),Jc(753,`td`,18)(754,`code`,28),Mk(755,`boolean`),Kg()(),Jc(756,`td`,20)(757,`p`)(758,`code`),Mk(759,`false`),Kg()()(),Jc(760,`td`,21)(761,`em`)(762,`strong`),Mk(763,`(opcional)`),Kg()(),Jc(764,`p`),Mk(765,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Kg(),Jc(766,`blockquote`)(767,`p`),Mk(768,`Incompatível com a propriedade `),Jc(769,`code`),Mk(770,`p-search-type`),Kg(),Mk(771,` do tipo `),Jc(772,`code`),Mk(773,`locate`),Kg(),Mk(774,`.`),Kg()()()(),Jc(775,`tr`,53)(776,`td`,15)(777,`div`,23)(778,`span`,24),Mk(779,` (p-locate-next)`),_u(780,`br`),Kg()()(),Jc(781,`td`,18)(782,`code`,25),Mk(783,`EventEmitter`),Kg()(),Jc(784,`td`,20),Mk(785,`-`),Kg(),Jc(786,`td`,21)(787,`em`)(788,`strong`),Mk(789,`(opcional)`),Kg()(),Jc(790,`p`),Mk(791,`Evento disparado ao clicar no controle "Próximo resultado".`),Kg(),Jc(792,`blockquote`)(793,`p`),Mk(794,`Compatível com a propriedade `),Jc(795,`code`),Mk(796,`p-search-type`),Kg(),Mk(797,` do tipo `),Jc(798,`code`),Mk(799,`locate`),Kg(),Mk(800,`.`),Kg()()()(),Jc(801,`tr`,54)(802,`td`,15)(803,`div`,23)(804,`span`,24),Mk(805,` (p-locate-previous)`),_u(806,`br`),Kg()()(),Jc(807,`td`,18)(808,`code`,25),Mk(809,`EventEmitter`),Kg()(),Jc(810,`td`,20),Mk(811,`-`),Kg(),Jc(812,`td`,21)(813,`em`)(814,`strong`),Mk(815,`(opcional)`),Kg()(),Jc(816,`p`),Mk(817,`Evento disparado ao clicar no controle "Resultado anterior".`),Kg(),Jc(818,`blockquote`)(819,`p`),Mk(820,`Compatível com a propriedade `),Jc(821,`code`),Mk(822,`p-search-type`),Kg(),Mk(823,` do tipo `),Jc(824,`code`),Mk(825,`locate`),Kg(),Mk(826,`.`),Kg()()()(),Jc(827,`tr`,55)(828,`td`,15)(829,`div`,16)(830,`span`,17),Mk(831,` p-locate-summary`),_u(832,`br`),Kg()()(),Jc(833,`td`,18)(834,`code`,56),Mk(835,`PoSearchLocateSummary`),Kg()(),Jc(836,`td`,20),Mk(837,`-`),Kg(),Jc(838,`td`,21)(839,`em`)(840,`strong`),Mk(841,`(opcional)`),Kg()(),Jc(842,`p`),Mk(843,`Define os valores do contador exibido ao usar a propriedade `),Jc(844,`code`),Mk(845,`p-search-type`),Kg(),Mk(846,` do tipo `),Jc(847,`code`),Mk(848,`locate`),Kg(),Mk(849,`, indicando a posi\xE7\xE3o
atual e o total de ocorr\xEAncias encontradas.
Exemplo de uso:`),Kg(),Jc(850,`pre`)(851,`code`,47),Mk(852,`locateSummary: PoSearchLocateSummary = { currentIndex: 0, total: 5 };
`),Kg()(),Jc(853,`blockquote`)(854,`p`),Mk(855,`Compatível com a propriedade `),Jc(856,`code`),Mk(857,`p-search-type`),Kg(),Mk(858,` do tipo `),Jc(859,`code`),Mk(860,`locate`),Kg(),Mk(861,`.`),Kg()()()(),Jc(862,`tr`,57)(863,`td`,15)(864,`div`,16)(865,`span`,17),Mk(866,` name`),_u(867,`br`),Kg()()(),Jc(868,`td`,18)(869,`code`,19),Mk(870,`string`),Kg()(),Jc(871,`td`,20),Mk(872,`-`),Kg(),Jc(873,`td`,21)(874,`em`)(875,`strong`),Mk(876,`(opcional)`),Kg()(),Jc(877,`p`),Mk(878,`Nome e identificador do campo.`),Kg()()(),Jc(879,`tr`,58)(880,`td`,15)(881,`div`,16)(882,`span`,17),Mk(883,` p-no-autocomplete`),_u(884,`br`),Kg()()(),Jc(885,`td`,18)(886,`code`,28),Mk(887,`boolean`),Kg()(),Jc(888,`td`,20)(889,`p`)(890,`code`),Mk(891,`false`),Kg()()(),Jc(892,`td`,21)(893,`em`)(894,`strong`),Mk(895,`(opcional)`),Kg()(),Jc(896,`p`),Mk(897,`Define a propriedade nativa `),Jc(898,`code`),Mk(899,`autocomplete`),Kg(),Mk(900,` do campo como `),Jc(901,`code`),Mk(902,`off`),Kg(),Mk(903,`.`),Kg()()(),Jc(904,`tr`,59)(905,`td`,15)(906,`div`,16)(907,`span`,17),Mk(908,` p-show-listbox`),_u(909,`br`),Kg()()(),Jc(910,`td`,18)(911,`code`,28),Mk(912,`boolean`),Kg()(),Jc(913,`td`,20)(914,`p`)(915,`code`),Mk(916,`false`),Kg()()(),Jc(917,`td`,21)(918,`em`)(919,`strong`),Mk(920,`(opcional)`),Kg()(),Jc(921,`p`),Mk(922,`Exibe uma lista (auto-complete) com as opções definidas em `),Jc(923,`code`),Mk(924,`p-filter-keys`),Kg(),Mk(925,` ou `),Jc(926,`code`),Mk(927,`p-filter-select`),Kg(),Mk(928,` enquanto realiza
uma busca, respeitando o `),Jc(929,`code`),Mk(930,`p-filter-type`),Kg(),Mk(931,` como modo de pesquisa.`),Kg(),Jc(932,`blockquote`)(933,`p`),Mk(934,`Incompatível com a propriedade `),Jc(935,`code`),Mk(936,`p-search-type`),Kg(),Mk(937,` do tipo `),Jc(938,`code`),Mk(939,`locate`),Kg(),Mk(940,`.`),Kg()()()(),Jc(941,`tr`,60)(942,`td`,15)(943,`div`,16)(944,`span`,17),Mk(945,` p-size`),_u(946,`br`),Kg()()(),Jc(947,`td`,18)(948,`code`,19),Mk(949,`string`),Kg()(),Jc(950,`td`,20)(951,`p`)(952,`code`),Mk(953,`medium`),Kg()()(),Jc(954,`td`,21)(955,`em`)(956,`strong`),Mk(957,`(opcional)`),Kg()(),Jc(958,`p`),Mk(959,`Define o tamanho do componente:`),Kg(),Jc(960,`ul`)(961,`li`)(962,`code`),Mk(963,`small`),Kg(),Mk(964,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Kg(),Jc(965,`li`)(966,`code`),Mk(967,`medium`),Kg(),Mk(968,`: altura do input como 44px.`),Kg()(),Jc(969,`blockquote`)(970,`p`),Mk(971,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(972,`code`),Mk(973,`medium`),Kg(),Mk(974,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(975,`a`,61),Mk(976,`po-theme`),Kg(),Mk(977,`.`),Kg()()()(),Jc(978,`tr`,62)(979,`td`,15)(980,`div`,16)(981,`span`,17),Mk(982,` p-search-type`),_u(983,`br`),Kg()()(),Jc(984,`td`,18)(985,`code`,63),Mk(986,`searchMode`),Kg()(),Jc(987,`td`,20)(988,`p`)(989,`code`),Mk(990,`action`),Kg()()(),Jc(991,`td`,21)(992,`em`)(993,`strong`),Mk(994,`(opcional)`),Kg()(),Jc(995,`p`),Mk(996,`Determina a forma de realizar a pesquisa no componente. Valores aceitos:`),Kg(),Jc(997,`ul`)(998,`li`)(999,`code`),Mk(1e3,`action`),Kg(),Mk(1001,`: Realiza a busca a cada caractere digitado.`),Kg(),Jc(1002,`li`)(1003,`code`),Mk(1004,`trigger`),Kg(),Mk(1005,`: Realiza a busca ao pressionar `),Jc(1006,`code`),Mk(1007,`enter`),Kg(),Mk(1008,` ou clicar no ícone de busca.`),Kg(),Jc(1009,`li`)(1010,`code`),Mk(1011,`locate`),Kg(),Mk(1012,`: Modo manual. Exibe botões e contador, mas não executa buscas — controle é do desenvolvedor.`),Kg(),Jc(1013,`li`)(1014,`code`),Mk(1015,`execute`),Kg(),Mk(1016,`: Executa uma ação ou realiza um redirecionamento ao selecionar um item no `),Jc(1017,`code`),Mk(1018,`listbox`),Kg(),Mk(1019,`. Para este tipo, é necessário informar as propriedades `),Jc(1020,`code`),Mk(1021,`action`),Kg(),Mk(1022,` ou `),Jc(1023,`code`),Mk(1024,`url`),Kg(),Mk(1025,` nos itens definidos em `),Jc(1026,`code`),Mk(1027,`p-items`),Kg(),Mk(1028,`.`),Kg()()()()(),Jc(1029,`h3`),Mk(1030,`Interfaces`),Kg(),Jc(1031,`h4`,64)(1032,`code`,5),Mk(1033,`PoSearchFilterSelect`),Kg()(),Jc(1034,`div`,2)(1035,`p`),Mk(1036,`Interface que define as opções que serão exibidas no dropdown do `),Jc(1037,`code`),Mk(1038,`po-search`),Kg(),Mk(1039,`, ao usar a propriedade `),Jc(1040,`code`),Mk(1041,`p-filter-select`),Kg(),Mk(1042,`.`),Kg()(),Jc(1043,`h4`,10),Mk(1044,`Propriedades`),Kg(),Jc(1045,`table`,11)(1046,`tr`,12)(1047,`th`,13),Mk(1048,`Nome`),Kg(),Jc(1049,`th`,13),Mk(1050,`Tipo`),Kg(),Jc(1051,`th`,13),Mk(1052,`Descrição`),Kg()(),Jc(1053,`tr`,65)(1054,`td`,15)(1055,`div`,16)(1056,`span`,17),Mk(1057,` label`),_u(1058,`br`),Kg()()(),Jc(1059,`td`,18)(1060,`code`,19),Mk(1061,`string`),Kg()(),Jc(1062,`td`,21)(1063,`p`),Mk(1064,`Descrição exibida nas opções da lista.`),Kg()()(),Jc(1065,`tr`,66)(1066,`td`,15)(1067,`div`,16)(1068,`span`,17),Mk(1069,` value`),_u(1070,`br`),Kg()()(),Jc(1071,`td`,18)(1072,`code`,46),Mk(1073,`Array<string> `),Kg(),Jc(1074,`code`,19),Mk(1075,` string`),Kg()(),Jc(1076,`td`,21)(1077,`p`),Mk(1078,`Valores que serão atribuídos ao `),Jc(1079,`code`),Mk(1080,`p-filter-keys`),Kg()()()()(),Jc(1081,`h4`,67)(1082,`code`,5),Mk(1083,`PoSearchLocateSummary`),Kg()(),Jc(1084,`div`,2)(1085,`p`),Mk(1086,`Interface que define o resumo de localização do filtro `),Jc(1087,`code`),Mk(1088,`p-filter-locate`),Kg(),Mk(1089,`.`),Kg()(),Jc(1090,`h4`,10),Mk(1091,`Propriedades`),Kg(),Jc(1092,`table`,11)(1093,`tr`,12)(1094,`th`,13),Mk(1095,`Nome`),Kg(),Jc(1096,`th`,13),Mk(1097,`Tipo`),Kg(),Jc(1098,`th`,13),Mk(1099,`Descrição`),Kg()(),Jc(1100,`tr`,68)(1101,`td`,15)(1102,`div`,16)(1103,`span`,17),Mk(1104,` currentIndex`),_u(1105,`br`),Kg()()(),Jc(1106,`td`,18)(1107,`code`,69),Mk(1108,`number`),Kg()(),Jc(1109,`td`,21)(1110,`p`),Mk(1111,`Índice atual da ocorrência localizada.`),Kg()()(),Jc(1112,`tr`,70)(1113,`td`,15)(1114,`div`,16)(1115,`span`,17),Mk(1116,` total`),_u(1117,`br`),Kg()()(),Jc(1118,`td`,18)(1119,`code`,69),Mk(1120,`number`),Kg()(),Jc(1121,`td`,21)(1122,`p`),Mk(1123,`Total de ocorrências encontradas.`),Kg()()()(),Jc(1124,`h4`,71)(1125,`code`,5),Mk(1126,`PoSearchOption`),Kg()(),Jc(1127,`div`,2)(1128,`p`),Mk(1129,`Interface que define as opções que serão exibidas na lista ao procurar do `),Jc(1130,`code`),Mk(1131,`po-search`),Kg(),Mk(1132,`.`),Kg()(),Jc(1133,`h4`,10),Mk(1134,`Propriedades`),Kg(),Jc(1135,`table`,11)(1136,`tr`,12)(1137,`th`,13),Mk(1138,`Nome`),Kg(),Jc(1139,`th`,13),Mk(1140,`Tipo`),Kg(),Jc(1141,`th`,13),Mk(1142,`Descrição`),Kg()(),Jc(1143,`tr`,72)(1144,`td`,15)(1145,`div`,16)(1146,`span`,17),Mk(1147,` label`),_u(1148,`br`),Kg()()(),Jc(1149,`td`,18)(1150,`code`,19),Mk(1151,`string`),Kg()(),Jc(1152,`td`,21)(1153,`em`)(1154,`strong`),Mk(1155,`(opcional)`),Kg()(),Jc(1156,`p`),Mk(1157,`Descrição exibida nas opções da lista.`),Kg(),Jc(1158,`blockquote`)(1159,`p`),Mk(1160,`Caso não seja definida será assumido o valor definido na propriedade `),Jc(1161,`code`),Mk(1162,`value`),Kg(),Mk(1163,`.`),Kg()()()(),Jc(1164,`tr`,73)(1165,`td`,15)(1166,`div`,16)(1167,`span`,17),Mk(1168,` value`),_u(1169,`br`),Kg()()(),Jc(1170,`td`,18)(1171,`code`,19),Mk(1172,`string `),Kg(),Jc(1173,`code`,69),Mk(1174,` number`),Kg()(),Jc(1175,`td`,21)(1176,`p`),Mk(1177,`Valor do objeto que será atribuído ao `),Jc(1178,`em`),Mk(1179,`model`),Kg(),Mk(1180,`.`),Kg()()()(),Jc(1181,`h4`,74)(1182,`code`,5),Mk(1183,`PoSearchLiterals`),Kg()(),Jc(1184,`div`,2)(1185,`p`),Mk(1186,`Interface para definição das literais usadas no `),Jc(1187,`code`),Mk(1188,`po-search`),Kg(),Mk(1189,`.`),Kg()(),Jc(1190,`h4`,10),Mk(1191,`Propriedades`),Kg(),Jc(1192,`table`,11)(1193,`tr`,12)(1194,`th`,13),Mk(1195,`Nome`),Kg(),Jc(1196,`th`,13),Mk(1197,`Tipo`),Kg(),Jc(1198,`th`,13),Mk(1199,`Descrição`),Kg()(),Jc(1200,`tr`,75)(1201,`td`,15)(1202,`div`,16)(1203,`span`,17),Mk(1204,` all`),_u(1205,`br`),Kg()()(),Jc(1206,`td`,18)(1207,`code`,19),Mk(1208,`string`),Kg()(),Jc(1209,`td`,21)(1210,`em`)(1211,`strong`),Mk(1212,`(opcional)`),Kg()(),Jc(1213,`p`),Mk(1214,`Texto exibido no dropdown de tipo de filtro, representando todos os tipos disponíveis.`),Kg(),Jc(1215,`blockquote`)(1216,`p`),Mk(1217,`Exibido apenas quando a propriedade `),Jc(1218,`code`),Mk(1219,`p-filter-select`),Kg(),Mk(1220,` estiver habilitada.`),Kg()()()(),Jc(1221,`tr`,76)(1222,`td`,15)(1223,`div`,16)(1224,`span`,17),Mk(1225,` clean`),_u(1226,`br`),Kg()()(),Jc(1227,`td`,18)(1228,`code`,19),Mk(1229,`string`),Kg()(),Jc(1230,`td`,21)(1231,`em`)(1232,`strong`),Mk(1233,`(opcional)`),Kg()(),Jc(1234,`p`),Mk(1235,`Texto alternativo (aria-label) para o botão de limpar o campo de busca, usado por leitores de tela.`),Kg()()(),Jc(1236,`tr`,77)(1237,`td`,15)(1238,`div`,16)(1239,`span`,17),Mk(1240,` footerActionListbox`),_u(1241,`br`),Kg()()(),Jc(1242,`td`,18)(1243,`code`,19),Mk(1244,`string`),Kg()(),Jc(1245,`td`,21)(1246,`em`)(1247,`strong`),Mk(1248,`(opcional)`),Kg()(),Jc(1249,`p`),Mk(1250,`Texto exibido na ação do rodapé da lista de resultados.`),Kg()()(),Jc(1251,`tr`,78)(1252,`td`,15)(1253,`div`,16)(1254,`span`,17),Mk(1255,` next`),_u(1256,`br`),Kg()()(),Jc(1257,`td`,18)(1258,`code`,19),Mk(1259,`string`),Kg()(),Jc(1260,`td`,21)(1261,`em`)(1262,`strong`),Mk(1263,`(opcional)`),Kg()(),Jc(1264,`p`),Mk(1265,`Texto alternativo (aria-label) para navegação até o próximo resultado da busca.`),Kg(),Jc(1266,`blockquote`)(1267,`p`),Mk(1268,`Exibido apenas quando a propriedade `),Jc(1269,`code`),Mk(1270,`p-filter-locate`),Kg(),Mk(1271,` estiver habilitada.`),Kg()()()(),Jc(1272,`tr`,79)(1273,`td`,15)(1274,`div`,16)(1275,`span`,17),Mk(1276,` of`),_u(1277,`br`),Kg()()(),Jc(1278,`td`,18)(1279,`code`,19),Mk(1280,`string`),Kg()(),Jc(1281,`td`,21)(1282,`em`)(1283,`strong`),Mk(1284,`(opcional)`),Kg()(),Jc(1285,`p`),Mk(1286,`Texto alternativo (aria-label) para a palavra "de" no contador de resultados (ex: "Resultado 1 de 4").`),Kg(),Jc(1287,`blockquote`)(1288,`p`),Mk(1289,`Exibido apenas quando a propriedade `),Jc(1290,`code`),Mk(1291,`p-filter-locate`),Kg(),Mk(1292,` estiver habilitada.`),Kg()()()(),Jc(1293,`tr`,80)(1294,`td`,15)(1295,`div`,16)(1296,`span`,17),Mk(1297,` placeholderListbox`),_u(1298,`br`),Kg()()(),Jc(1299,`td`,18)(1300,`code`,19),Mk(1301,`string`),Kg()(),Jc(1302,`td`,21)(1303,`em`)(1304,`strong`),Mk(1305,`(opcional)`),Kg()(),Jc(1306,`p`),Mk(1307,`Texto exibido como `),Jc(1308,`em`),Mk(1309,`placeholder`),Kg(),Mk(1310,` na lista de resultados.`),Kg()()(),Jc(1311,`tr`,81)(1312,`td`,15)(1313,`div`,16)(1314,`span`,17),Mk(1315,` previous`),_u(1316,`br`),Kg()()(),Jc(1317,`td`,18)(1318,`code`,19),Mk(1319,`string`),Kg()(),Jc(1320,`td`,21)(1321,`em`)(1322,`strong`),Mk(1323,`(opcional)`),Kg()(),Jc(1324,`p`),Mk(1325,`Texto alternativo (aria-label) para navegação até o resultado anterior da busca.`),Kg(),Jc(1326,`blockquote`)(1327,`p`),Mk(1328,`Exibido apenas quando a propriedade `),Jc(1329,`code`),Mk(1330,`p-filter-locate`),Kg(),Mk(1331,` estiver habilitada.`),Kg()()()(),Jc(1332,`tr`,82)(1333,`td`,15)(1334,`div`,16)(1335,`span`,17),Mk(1336,` result`),_u(1337,`br`),Kg()()(),Jc(1338,`td`,18)(1339,`code`,19),Mk(1340,`string`),Kg()(),Jc(1341,`td`,21)(1342,`em`)(1343,`strong`),Mk(1344,`(opcional)`),Kg()(),Jc(1345,`p`),Mk(1346,`Texto alternativo (aria-label) para a label "Resultado" que acompanha o contador.`),Kg(),Jc(1347,`blockquote`)(1348,`p`),Mk(1349,`Exibido apenas quando a propriedade `),Jc(1350,`code`),Mk(1351,`p-filter-locate`),Kg(),Mk(1352,` estiver habilitada.`),Kg()()()(),Jc(1353,`tr`,83)(1354,`td`,15)(1355,`div`,16)(1356,`span`,17),Mk(1357,` search`),_u(1358,`br`),Kg()()(),Jc(1359,`td`,18)(1360,`code`,19),Mk(1361,`string`),Kg()(),Jc(1362,`td`,21)(1363,`em`)(1364,`strong`),Mk(1365,`(opcional)`),Kg()(),Jc(1366,`p`),Mk(1367,`Texto exibido como `),Jc(1368,`em`),Mk(1369,`placeholder`),Kg(),Mk(1370,` no campo de busca.`),Kg()()()(),Jc(1371,`h3`),Mk(1372,`Enums`),Kg(),Jc(1373,`h4`,84)(1374,`code`,5),Mk(1375,`PoSearchFilterMode`),Kg()(),Jc(1376,`div`,2)(1377,`p`),Mk(1378,`Define o tipo de busca usado no `),Jc(1379,`code`),Mk(1380,`po-search`),Kg(),Mk(1381,`.`),Kg()(),Jc(1382,`h4`,10),Mk(1383,`Propriedades`),Kg(),Jc(1384,`table`,11)(1385,`tr`,12)(1386,`th`,13),Mk(1387,`Nome`),Kg(),Jc(1388,`th`,13),Mk(1389,`Descrição`),Kg()(),Jc(1390,`tr`,85)(1391,`td`,15)(1392,`div`,16)(1393,`span`,17),Mk(1394,` startsWith`),_u(1395,`br`),Kg()()(),Jc(1396,`td`,21)(1397,`p`),Mk(1398,`Verifica se o texto `),Jc(1399,`em`),Mk(1400,`inicia`),Kg(),Mk(1401,` com o valor pesquisado.`),Kg()()(),Jc(1402,`tr`,86)(1403,`td`,15)(1404,`div`,16)(1405,`span`,17),Mk(1406,` contains`),_u(1407,`br`),Kg()()(),Jc(1408,`td`,21)(1409,`p`),Mk(1410,`Verifica se o texto `),Jc(1411,`em`),Mk(1412,`contém`),Kg(),Mk(1413,` o valor pesquisado.`),Kg()()(),Jc(1414,`tr`,87)(1415,`td`,15)(1416,`div`,16)(1417,`span`,17),Mk(1418,` endsWith`),_u(1419,`br`),Kg()()(),Jc(1420,`td`,21)(1421,`p`),Mk(1422,`Verifica se o texto `),Jc(1423,`em`),Mk(1424,`finaliza`),Kg(),Mk(1425,` com o valor pesquisado.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function _t(o,C){if(o&1&&(Jc(0,`div`,1),_u(1,`sample-po-search-basic-view`)(2,`sample-po-search-labs-view`)(3,`sample-po-search-find-people-view`)(4,`sample-po-search-listbox-view`)(5,`sample-po-search-filter-select-view`)(6,`sample-po-search-execute-view`)(7,`sample-po-search-fields-locate-view`),Kg()),o&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var It=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;title=`Search`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`,this.title=`Search · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[3,`hidden`]],template:function(a,i){a&1&&(Jc(0,`po-page-default`,0),LO(1,_t,8,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-search-doc`),Kg()()),a&2&&(Ab(`p-title`,i.title)(`p-actions`,i.actions),wg(),jO(i.hidePoWebSample?-1:1),wg(),Ab(`hidden`,i.activeTab!==`doc`))},dependencies:[Mze,Ae,Oe,Ve,ze,We,He,Je,Ue],encapsulation:2,changeDetection:1})}return o})()}];var Qe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[GV.forChild(It),GV]})}return o})();var Wn=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,Qe]})}return o})();export{Wn as DocPoSearchModule};