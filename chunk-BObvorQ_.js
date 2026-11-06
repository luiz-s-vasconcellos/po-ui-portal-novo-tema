import{$a as xe,$n as Ak,A as Hoe,Ai as XL,Ar as Ig,C as Gne,Cn as oi,Ct as Yoe,E as H4,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Hr as Me,Ja as vt$1,Li as ZO,Ln as w4,Mr as Jc,N as Iu,Ni as Y0,Ot as _ae,Pr as Jm,Ri as Zg,Rr as Kb,T as Gte,Ti as W0,Un as xze,Vi as _u,Vt as bee,Xn as $O,Xr as No,Xt as ere,Yi as eF,Yt as ea,Zt as fae,at as R4,ba as o1,bn as o5,da as kI,di as RZ,dr as Cu,ea as ge,eo as xo,er as An,fa as kZ,fi as Rb,fr as Db,gi as Tk,gn as n4,hi as TZ,ht as U4,i as Ac,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,oo as zO,or as Bk,pa as kk,qi as de,qr as NZ,rt as Qae,ui as R,va as nk,wa as p,wr as HO,xi as VO,ya as nm,yi as U_}from"./chunk-BQaN6dko.js";import{n as P,t as M}from"./main-SRPMFWZC.js";var qe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-basic`]],standalone:!1,decls:1,vars:0,template:function(o,i){o&1&&_u(0,`po-search`)},dependencies:[Gne],encapsulation:2,changeDetection:1})}return a})();var $e=a=>({"docs-sample-code-tabs":a});var Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Search Basic`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-search-basic/sample-po-search-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-search></po-search>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-search-basic/sample-po-search-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-search-basic',
  templateUrl: './sample-po-search-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-search-basic`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,$e,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,qe],encapsulation:2,changeDetection:1})}return a})();var nt=[`poSearch`];function it(a,T){if(a&1&&(Jc(0,`div`)(1,`strong`),Tk(2),Zg(),Tk(3),Zg()),a&2){let l=T.$implicit,o=nk().$implicit;Ig(2),nm(``,l,`: `),Ig(),nm(` `,o[l],` \xA0 `)}}function at(a,T){if(a&1&&(Jc(0,`li`),$O(1,it,4,2,`div`,null,HO),Zg()),a&2){let l=T.$implicit,o=nk();Ig(),zO(o.changeFilter(l))}}var Be=(()=>{class a{http=p(kI);poSearch;ariaLabel;customLiterals;literals;properties=[];search=``;event=``;service=`https://po-sample-api.onrender.com/v1/heroes`;items=[];filteredItems=[];fieldKeys=[];fieldSelect=[];tooltip;icon;filterMode=Iu.startsWith;searchMode=`action`;fieldKey;itemsModel;filterModel=`["name"]`;filterSelectModel;size=`medium`;customLocateSummary;locateSummary;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`showListbox`,label:`Show Listbox`},{value:`loading`,label:`Loading`}];iconsOptions=[{label:`fa-search`,value:`fa fa-search`},{label:`an-user`,value:`an an-user`},{label:`an-magnifying-glass`,value:`an an-magnifying-glass`}];filterModeOptions=[{label:`Starts With`,value:Iu.startsWith},{label:`Contains`,value:Iu.contains},{label:`Ends With`,value:Iu.endsWith}];searchModeOptions=[{label:`Action`,value:`action`},{label:`Execute`,value:`execute`},{label:`Locate`,value:`locate`},{label:`Trigger`,value:`trigger`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}ngOnChanges(l){l.items&&(this.filteredItems=this.items)}changeFilter(l){return Object.keys(l)}onChangeService(){this.http.get(this.service).subscribe(l=>{let o=l.items;Array.isArray(o)&&o.length>0&&(this.items=o,this.filteredItems=o,this.fieldKeys=[`name`])})}updateFilterKeys(l){this.fieldKeys=this.convertToArray(l)}updateFilterSelect(l){this.fieldSelect=this.convertToArray(l)}filter(l){this.filteredItems=l,this.event=l.length===0?`p-change-model`:`p-filtered-items-change`}changeItems(l){try{let o=JSON.parse(l);Array.isArray(o)&&(this.filteredItems=o,this.items=o)}catch(o){}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals??``)}catch(l){this.customLiterals=void 0}}changeEvent(l){setTimeout(()=>{this.event=l})}changeLocateSummary(){try{this.customLocateSummary=JSON.parse(this.locateSummary??``)}catch(l){this.customLocateSummary=void 0}}restore(){this.ariaLabel=``,this.search=``,this.event=``,this.icon=void 0,this.customLiterals=void 0,this.customLocateSummary=void 0,this.properties=[],this.filteredItems=void 0,this.items=void 0,this.itemsModel=void 0,this.filterModel=`["name"]`,this.filterSelectModel=``,this.fieldKeys=void 0,this.fieldSelect=void 0,this.filterMode=Iu.startsWith,this.searchMode=`action`,this.literals=void 0,this.locateSummary=void 0,this.size=`medium`,this.cleanInput(),this.onChangeService()}cleanInput(){try{this.poSearch.clearSearch()}catch(l){}}convertToArray(l){try{return JSON.parse(l)}catch(o){return}}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-labs`]],viewQuery:function(o,i){if(o&1&&Cu(nt,7),o&2){let p;No(p=xo())&&(i.poSearch=p.first)}},standalone:!1,features:[xe],decls:32,vars:33,consts:[[`poSearch`,``],[`f`,`ngForm`],[1,`po-row`],[1,`po-md-12`,3,`p-blur`,`p-change-model`,`p-filtered-items-change`,`p-locate-next`,`p-locate-previous`,`p-aria-label`,`p-disabled`,`p-filter-keys`,`p-filter-type`,`p-filter-select`,`p-icon`,`p-items`,`p-literals`,`p-loading`,`p-locate-summary`,`p-search-type`,`p-show-listbox`,`p-size`],[1,`po-md-12`],[3,`p-label`],[1,`sample-list-search`,`po-md-12`,`row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`ariaLabel`,`p-label`,`Aria label`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`items`,`p-label`,`Items`,`p-help`,`Ex.: [{ "cidade": "São Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "Tóquio", "pais": "Japão" }]`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`searchMode`,`p-label`,`Search Mode`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-label`,`Filter Mode`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locateSummary`,`p-help`,`{ "currentIndex": 1000, "total": 1000 }`,`p-label`,`Locate Summary`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"search": "Search people"}`,`p-label`,`Literals`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`Filter Keys`,`p-label`,`Filter Keys`,`p-help`,`Ex.: ["cidade", "pais"]`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`Filter Select`,`p-label`,`Filter Select`,`p-help`,`Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(o,i){if(o&1){let p=ZO();Jc(0,`div`,2)(1,`po-search`,3,0),vt$1(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-filtered-items-change`,function(d){return i.filter(d)})(`p-locate-next`,function(){return i.changeEvent(`p-locate-next`)})(`p-locate-previous`,function(){return i.changeEvent(`p-locate-previous`)}),Zg()(),_u(3,`po-divider`),Jc(4,`div`,2)(5,`po-accordion`,4)(6,`po-accordion-item`,5)(7,`po-widget`,4)(8,`ul`,6),$O(9,at,3,0,`li`,null,HO),Zg()()()()(),_u(11,`po-divider`),Jc(12,`div`,2),_u(13,`po-info`,7)(14,`po-info`,8),Zg(),_u(15,`po-divider`),Jc(16,`form`,null,1)(18,`po-input`,9),W0(),Kb(`ngModelChange`,function(d){return U_(p),Ak(i.ariaLabel,d)||(i.ariaLabel=d),H_(d)}),Zg(),Jc(19,`po-input`,10),W0(),Kb(`ngModelChange`,function(d){return U_(p),Ak(i.itemsModel,d)||(i.itemsModel=d),H_(d)}),vt$1(`p-change-model`,function(d){return i.changeItems(d)}),Zg(),Jc(20,`po-checkbox-group`,11),W0(),Kb(`ngModelChange`,function(d){return U_(p),Ak(i.properties,d)||(i.properties=d),H_(d)}),Zg(),Jc(21,`po-radio-group`,12),W0(),Kb(`ngModelChange`,function(d){return U_(p),Ak(i.icon,d)||(i.icon=d),H_(d)}),Zg(),Jc(22,`po-radio-group`,13),W0(),Kb(`ngModelChange`,function(d){return U_(p),Ak(i.searchMode,d)||(i.searchMode=d),H_(d)}),Zg(),Jc(23,`po-radio-group`,14),W0(),Kb(`ngModelChange`,function(d){return U_(p),Ak(i.filterMode,d)||(i.filterMode=d),H_(d)}),Zg(),Jc(24,`po-radio-group`,15),W0(),Kb(`ngModelChange`,function(d){return U_(p),Ak(i.size,d)||(i.size=d),H_(d)}),Zg(),Jc(25,`po-input`,16),W0(),Kb(`ngModelChange`,function(d){return U_(p),Ak(i.locateSummary,d)||(i.locateSummary=d),H_(d)}),vt$1(`p-change`,function(){return i.changeLocateSummary()}),Zg(),Jc(26,`po-input`,17),W0(),Kb(`ngModelChange`,function(d){return U_(p),Ak(i.literals,d)||(i.literals=d),H_(d)}),vt$1(`p-change`,function(){return i.changeLiterals()}),Zg(),Jc(27,`po-input`,18),W0(),Kb(`ngModelChange`,function(d){return U_(p),Ak(i.filterModel,d)||(i.filterModel=d),H_(d)}),vt$1(`p-change-model`,function(d){return i.updateFilterKeys(d)}),Zg(),Jc(28,`po-input`,19),W0(),Kb(`ngModelChange`,function(d){return U_(p),Ak(i.filterSelectModel,d)||(i.filterSelectModel=d),H_(d)}),vt$1(`p-change`,function(d){return i.updateFilterSelect(d)}),Zg(),_u(29,`po-divider`),Jc(30,`div`,2)(31,`po-button`,20),vt$1(`p-click`,function(){return i.restore()}),Zg()()()}o&2&&(Ig(),Rb(`p-aria-label`,i.ariaLabel)(`p-disabled`,i.properties.includes(`disabled`))(`p-filter-keys`,i.fieldKeys)(`p-filter-type`,i.filterMode)(`p-filter-select`,i.fieldSelect)(`p-icon`,i.icon)(`p-items`,i.items)(`p-literals`,i.customLiterals)(`p-loading`,i.properties.includes(`loading`))(`p-locate-summary`,i.customLocateSummary)(`p-search-type`,i.searchMode)(`p-show-listbox`,i.properties.includes(`showListbox`))(`p-size`,i.size),Ig(5),Rb(`p-label`,kk(`Itens encontrados: `,i.filteredItems?.length)),Ig(3),zO(i.filteredItems),Ig(4),Rb(`p-value`,i.search),Ig(),Rb(`p-value`,i.event),Ig(4),Yb(`ngModel`,i.ariaLabel),Y0(),Ig(),Yb(`ngModel`,i.itemsModel),Y0(),Ig(),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,i.icon),Rb(`p-options`,i.iconsOptions),Y0(),Ig(),Yb(`ngModel`,i.searchMode),Rb(`p-options`,i.searchModeOptions),Y0(),Ig(),Yb(`ngModel`,i.filterMode),Rb(`p-options`,i.filterModeOptions),Y0(),Ig(),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),Y0(),Ig(),Yb(`ngModel`,i.locateSummary),Y0(),Ig(),Yb(`ngModel`,i.literals),Y0(),Ig(),Yb(`ngModel`,i.filterModel),Y0(),Ig(),Yb(`ngModel`,i.filterSelectModel),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,bee,n4,oi,Lf,w4,U4,Gte,Yoe,fae,Gne],styles:[`.sample-list-search[_ngcontent-%COMP%]{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem}.sample-list-search[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-transform:capitalize}`],changeDetection:1})}return a})();var lt=a=>({"docs-sample-code-tabs":a});var Ne=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Search Labs`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-search-labs/sample-po-search-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-search-labs/sample-po-search-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { HttpClient } from '@angular/common/http';
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
`),Zg()()(),Jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Tk(24,`sample-po-search-labs/sample-po-search-labs.component.css`),Zg(),Jc(25,`pre`,11),Tk(26,`.sample-list-search {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.sample-list-search strong {
  text-transform: capitalize;
}
`),Zg()()()()(),Jc(27,`div`,12),_u(28,`sample-po-search-labs`),Zg(),_u(29,`hr`)),o&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,lt,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Be],encapsulation:2,changeDetection:1})}return a})();var me=(()=>{class a{getItems(){return[{id:`0348093615904`,name:`Leonardo Silveiras`,birthdate:`1995-07-15T00:00:00-00:00`,genre:`male`,city:`4209102`,status:`active`,nickname:`leo.silveira`,email:`leonardo.silveira@gmail.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`Joinville`,state:`Santa Catarina`,uf:`SC`,dependents:[]},{id:`0648093812893`,name:`João Severino`,birthdate:`1995-10-07T00:00:00-00:00`,genre:`male`,city:`4216206`,status:`active`,nickname:`jseverino`,email:`jseverino@yahoo.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Francisco do Sul`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109481,name:`Maria`,age:`10`,related:`Daughter`,birthdate:`2008-12-10`}]},{id:`0748093840433`,name:`José Marcos Cardoso`,birthdate:`1986-08-01T00:00:00-00:00`,genre:`male`,city:`4201307`,status:`inactive`,nickname:`jose`,email:`jose@outlook.com`,nationality:`Brazilian`,birthPlace:`3550308`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Inativo`,cityName:`Araquari`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109483,name:`Pedro`,age:`13`,related:`Son`,birthdate:`2008-12-10`},{id:109484,name:`Paulo`,age:`15`,related:`Son`,birthdate:`2008-12-10`},{id:109485,name:`José`,age:`19`,related:`Son`,birthdate:`2008-12-10`}]},{id:`0848094890811`,name:`Karlo Rodrigues`,birthdate:`1989-12-28T00:00:00-00:00`,genre:`male`,city:`3550308`,status:`active`,nickname:`krodrigues`,email:`krodrigues@uol.com.br`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Paulo`,state:`São Paulo`,uf:`SP`,dependents:[]}]}static ɵfac=function(o){return new(o||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function st(a,T){if(a&1&&(Jc(0,`div`,0),_u(1,`po-info`,4)(2,`po-info`,5)(3,`po-info`,6),Zg()),a&2){let l=T.$implicit;Ig(),Rb(`p-value`,l.name),Ig(),Rb(`p-value`,l.nickname),Ig(),Rb(`p-value`,l.email)}}function mt(a,T){a&1&&_u(0,`div`)}function pt(a,T){if(a&1&&(Jc(0,`li`,7),Tk(1),VO(2,mt,1,0,`div`),Zg(),Jc(3,`li`,7),Tk(4),Zg()),a&2){let l=T.$implicit,o=nk();Ig(),nm(` Nickname: `,l.nickname,` `),Ig(),BO(o.compareObjects(l)?2:-1),Ig(2),nm(`Email: `,l.email)}}var Ve=(()=>{class a{service=p(me);items;filterKeys=[`name`,`nickname`,`email`];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems()}filtered(l){this.peopleFiltered=l,l.length===4&&(this.peopleFiltered=[])}compareObjects(l){return!!this.peopleFiltered.includes(l)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-find-people`]],standalone:!1,features:[Me([me])],decls:8,vars:3,consts:[[1,`po-row`],[`p-aria-label`,`Po Search`,1,`po-md-12`,3,`p-filtered-items-change`,`p-items`,`p-filter-keys`],[`p-property-title`,`name`,3,`p-items`],[`p-list-view-content-template`,``],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`],[1,`po-md-12`,`po-text-color-neutral-dark-40`]],template:function(o,i){o&1&&(Jc(0,`div`,0)(1,`po-search`,1),vt$1(`p-filtered-items-change`,function(h){return i.filtered(h)}),Zg()(),_u(2,`po-divider`),$O(3,st,4,3,`div`,0,HO),_u(5,`po-divider`),Jc(6,`po-list-view`,2),Db(7,pt,5,3,`ng-template`,3),Zg()),o&2&&(Ig(),Rb(`p-items`,i.items)(`p-filter-keys`,i.filterKeys),Ig(2),zO(i.peopleFiltered),Ig(3),Rb(`p-items`,i.items))},dependencies:[Lf,Yoe,xze,_ae,Gne],styles:[`li[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center}li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:.75em;height:.75em;border-radius:50%;background-color:green;margin-left:10px}`],changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a});var ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-find-people-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Search Find People`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-search-find-people/sample-po-search-find-people.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-search-find-people/sample-po-search-find-people.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-search-find-people/sample-po-search-find-people.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { Injectable } from '@angular/core';

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
`),Zg()()(),Jc(25,`po-tab`,10)(26,`div`)(27,`label`,6),Tk(28,`sample-po-search-find-people/sample-po-search-find-people.component.css`),Zg(),Jc(29,`pre`,11),Tk(30,`li {
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
`),Zg()()()()(),Jc(31,`div`,12),_u(32,`sample-po-search-find-people`),Zg(),_u(33,`hr`)),o&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ct,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Ve],encapsulation:2,changeDetection:1})}return a})();var pe=(()=>{class a{getItems(){return[{id:`0348093615904`,name:`Leonardo Silveiras`,birthdate:`1995-07-15T00:00:00-00:00`,genre:`male`,city:`4209102`,status:`active`,nickname:`leo.silveira`,email:`leonardo.silveira@gmail.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`Joinville`,state:`Santa Catarina`,uf:`SC`,dependents:[]},{id:`0648093812893`,name:`João Severino`,birthdate:`1995-10-07T00:00:00-00:00`,genre:`male`,city:`4216206`,status:`active`,nickname:`jseverino`,email:`jseverino@yahoo.com`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Francisco do Sul`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109481,name:`Maria`,age:`10`,related:`Daughter`,birthdate:`2008-12-10`}]},{id:`0748093840433`,name:`José Marcos Cardoso`,birthdate:`1986-08-01T00:00:00-00:00`,genre:`male`,city:`4201307`,status:`inactive`,nickname:`jose`,email:`jose@outlook.com`,nationality:`Brazilian`,birthPlace:`3550308`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Inativo`,cityName:`Araquari`,state:`Santa Catarina`,uf:`SC`,dependents:[{id:109483,name:`Pedro`,age:`13`,related:`Son`,birthdate:`2008-12-10`},{id:109484,name:`Paulo`,age:`15`,related:`Son`,birthdate:`2008-12-10`},{id:109485,name:`José`,age:`19`,related:`Son`,birthdate:`2008-12-10`}]},{id:`0848094890811`,name:`Karlo Rodrigues`,birthdate:`1989-12-28T00:00:00-00:00`,genre:`male`,city:`3550308`,status:`active`,nickname:`krodrigues`,email:`krodrigues@uol.com.br`,nationality:`Brazilian`,birthPlace:`São Paulo`,graduation:`College`,father:`Papai`,mother:`Mamãe`,street:`Santos Dumont`,country:`Brasil`,genreDescription:`Masculino`,statusDescription:`Ativo`,cityName:`São Paulo`,state:`São Paulo`,uf:`SP`,dependents:[]}]}static ɵfac=function(o){return new(o||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function ht(a,T){if(a&1&&(Jc(0,`div`,0),_u(1,`po-divider`)(2,`po-info`,2)(3,`po-info`,3)(4,`po-info`,4),Zg()),a&2){let l=T.$implicit;Ig(2),Rb(`p-value`,l.name),Ig(),Rb(`p-value`,l.nickname),Ig(),Rb(`p-value`,l.email)}}var je=(()=>{class a{service=p(pe);items;filterKeys=[`name`,`nickname`,`email`];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems()}filtered(l){this.peopleFiltered=l,l.length===4&&(this.peopleFiltered=[])}compareObjects(l){return!!this.peopleFiltered.includes(l)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-listbox`]],standalone:!1,features:[Me([pe])],decls:4,vars:2,consts:[[1,`po-row`],[`p-aria-label`,`Po Search`,`p-show-listbox`,`true`,`p-search-type`,`trigger`,1,`po-md-12`,3,`p-filtered-items-change`,`p-items`,`p-filter-keys`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(o,i){o&1&&(Jc(0,`div`,0)(1,`po-search`,1),vt$1(`p-filtered-items-change`,function(h){return i.filtered(h)}),Zg()(),$O(2,ht,5,3,`div`,0,HO)),o&2&&(Ig(),Rb(`p-items`,i.items)(`p-filter-keys`,i.filterKeys),Ig(),zO(i.peopleFiltered))},dependencies:[Lf,Yoe,Gne],encapsulation:2,changeDetection:1})}return a})();var ft=a=>({"docs-sample-code-tabs":a});var We=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-listbox-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Search With Listbox`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-search-listbox/sample-po-search-listbox.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-search-listbox/sample-po-search-listbox.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-search-listbox/sample-po-search-listbox.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { Injectable } from '@angular/core';

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
`),Zg()()()()(),Jc(25,`div`,10),_u(26,`sample-po-search-listbox`),Zg(),_u(27,`hr`)),o&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ft,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,je],encapsulation:2,changeDetection:1})}return a})();function Et(a,T){if(a&1&&(Jc(0,`div`,0)(1,`po-container`,2),_u(2,`po-info`,3)(3,`po-info`,4)(4,`po-info`,5)(5,`po-info`,6),Zg()()),a&2){let l=T.$implicit;Ig(2),Rb(`p-value`,l.name),Ig(),Rb(`p-value`,l.gender),Ig(),Rb(`p-value`,l.planet),Ig(),Rb(`p-value`,l.father)}}var Re=(()=>{class a{items;filteredItems=[];filterSelect=[{label:`Personal`,value:[`name`,`gender`]},{label:`Planet`,value:[`planet`]},{label:`Family`,value:`father`}];ngOnInit(){this.items=[{name:`Anakin Skywalker`,gender:`male`,planet:`Tatooine`,father:`Darth Sidious`},{name:`Luke Skywalker`,gender:`male`,planet:`Tatooine`,father:`Anakin Skywalker`},{name:`Leia Organa`,gender:`female`,planet:`Alderaan`,father:`Anakin Skywalker`},{name:`Han Solo`,gender:`male`,planet:`Corellia`,father:`Ovan`}]}filtered(l){this.filteredItems=l}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-filter-select`]],standalone:!1,decls:4,vars:2,consts:[[1,`po-row`],[`p-aria-label`,`Po Search`,`p-search-type`,`trigger`,`p-show-listbox`,`true`,`p-disabled`,`false`,1,`po-md-12`,3,`p-filtered-items-change`,`p-items`,`p-filter-select`],[1,`po-row`,`po-mt-2`],[`p-label`,`Name`,1,`po-md-3`,3,`p-value`],[`p-label`,`Gender`,1,`po-md-3`,3,`p-value`],[`p-label`,`Planet`,1,`po-md-3`,3,`p-value`],[`p-label`,`Father`,1,`po-md-3`,3,`p-value`]],template:function(o,i){o&1&&(Jc(0,`div`,0)(1,`po-search`,1),vt$1(`p-filtered-items-change`,function(h){return i.filtered(h)}),Zg()(),$O(2,Et,6,4,`div`,0,HO)),o&2&&(Ig(),Rb(`p-items`,i.items)(`p-filter-select`,i.filterSelect),Ig(),zO(i.filteredItems))},dependencies:[Ac,Yoe,Gne],encapsulation:2,changeDetection:1})}return a})();var vt=a=>({"docs-sample-code-tabs":a});var He=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-filter-select-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Search With Filter Select + Listbox`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-search-filter-select/sample-po-search-filter-select.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-search-filter-select/sample-po-search-filter-select.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-search-filter-select`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,vt,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Re],encapsulation:2,changeDetection:1})}return a})();var Ke=(()=>{class a{poModal;filterType=Iu.contains;filterKeysAction=[`rotina`,`codigo`,`modulo`,`versao`];keysLabel=[`rotina`,`codigo`];itemsAction=[{rotina:`Contas a Pagar`,codigo:`MATA103`,modulo:`Adm`,versao:`1.2.3`,action:()=>alert(`Contas a Pagar`)},{rotina:`Cotação de Fornecedores`,codigo:`MATA140`,modulo:`Adm`,versao:`1.2.3`,action:()=>alert(`Cotação de Fornecedores`)},{rotina:`Meus Funcionarios`,codigo:`XPTO987`,modulo:`RH`,versao:`1.2.3`,url:`documentation/po-widget`}];columns=[{property:`rotina`,label:`Rotina`},{property:`codigo`,label:`Código`},{property:`modulo`,label:`Módulo`},{property:`versao`,label:`Versão`}];footerAction(){this.poModal.open()}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-execute`]],viewQuery:function(o,i){if(o&1&&Cu(ea,7),o&2){let p;No(p=xo())&&(i.poModal=p.first)}},standalone:!1,decls:10,vars:9,consts:[[`modal`,``],[1,`po-row`],[`p-title`,`Pesquisar e executar`,`p-help`,`https://github.com/po-ui/po-angular/stargazers`,1,`po-lg-6`,`po-mt-2`,3,`p-height`],[`name`,`Po Search`,1,`po-mt-2`,`full`,3,`p-footer-action-listbox`,`p-search-type`,`p-items`,`p-filter-type`,`p-filter-keys`,`p-keys-label`],[`p-title`,`Rotinas`],[3,`p-columns`,`p-items`,`p-hide-columns-manager`]],template:function(o,i){o&1&&(Jc(0,`div`,1)(1,`po-widget`,2)(2,`div`,1)(3,`span`),Tk(4,`Entre com o nome ou código da rotina`),Zg()(),Jc(5,`div`,1)(6,`po-search`,3),vt$1(`p-footer-action-listbox`,function(){return i.footerAction()}),Zg()()()(),Jc(7,`po-modal`,4,0),_u(9,`po-table`,5),Zg()),o&2&&(Ig(),Rb(`p-height`,180),Ig(5),Rb(`p-search-type`,`execute`)(`p-items`,i.itemsAction)(`p-filter-type`,i.filterType)(`p-filter-keys`,i.filterKeysAction)(`p-keys-label`,i.keysLabel),Ig(3),Rb(`p-columns`,i.columns)(`p-items`,i.itemsAction)(`p-hide-columns-manager`,!0))},dependencies:[ea,R4,fae,Gne],styles:[`.full[_ngcontent-%COMP%]{width:100%}`],changeDetection:1})}return a})();var Ct=a=>({"docs-sample-code-tabs":a});var Je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-execute-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Search Form Fields with Execute`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-search-execute/sample-po-search-execute.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-search-execute/sample-po-search-execute.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()(),Jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Tk(24,`sample-po-search-execute/sample-po-search-execute.component.css`),Zg(),Jc(25,`pre`,11),Tk(26,`.full {
  width: 100%;
}
`),Zg()()()()(),Jc(27,`div`,12),_u(28,`sample-po-search-execute`),Zg(),_u(29,`hr`)),o&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ct,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Ke],encapsulation:2,changeDetection:1})}return a})();var _t=[`nameInput`];var wt=[`cpfInput`];var Mt=[`addressInput`];var It=[`numberInput`];var Tt=[`emailInput`];var kt=[`websiteInput`];var Ft=[`reactiveFormData`];var Ue=(()=>{class a{fb=p(kZ);nameInput;cpfInput;addressInput;numberInput;emailInput;websiteInput;reactiveFormModal;reactiveForm;filterTargets=[];filteredIndexes=[];currentIndex=-1;firstSearch=!0;locateSummary={currentIndex:0,total:0};filterType=Iu.endsWith;searchLiterals={search:`Buscar campos`};modalPrimaryAction={label:`Close`,action:()=>this.reactiveFormModal.close()};constructor(){this.createForm()}ngAfterViewInit(){this.filterTargets=[{label:`Customer name`,index:0,focus:()=>this.nameInput.focus()},{label:`CPF`,index:1,focus:()=>this.cpfInput.focus()},{label:`Address`,index:2,focus:()=>this.addressInput.focus()},{label:`Number`,index:3,focus:()=>this.numberInput.focus()},{label:`Email`,index:4,focus:()=>this.emailInput.focus()},{label:`Website`,index:5,focus:()=>this.websiteInput.focus()}]}createForm(){this.reactiveForm=this.fb.group({name:[``,[Jm.required,Jm.minLength(5)]],cpf:[``,Jm.required],address:[``,Jm.required],number:[``,Jm.required],email:[``,Jm.required],website:[``,Jm.required]})}updateSearchTerm(l){console.log(`updateSearchTerm`);let o=l.toLowerCase();this.filteredIndexes=this.filterTargets.map((p,h)=>({i:h,t:p})).filter(({t:p})=>o&&p.label.toLowerCase().startsWith(o)).map(({i:p})=>p),this.currentIndex=-1;let i=this.filteredIndexes.length;this.locateSummary={currentIndex:0,total:i}}onNextOccurrenceClick(){console.log(`onNextOccurrenceClick`),this.goToNextOccurrence(),this.focusCurrent()}onPreviousOccurrenceClick(){console.log(`onPreviousOccurrenceClick`),this.goToPreviousOccurrence(),this.focusCurrent()}goToNextOccurrence(){this.filteredIndexes.length&&(this.currentIndex=(this.currentIndex+1)%this.filteredIndexes.length,this.updateSummary())}goToPreviousOccurrence(){this.filteredIndexes.length&&(this.currentIndex=this.currentIndex<=0?this.filteredIndexes.length-1:this.currentIndex-1,this.updateSummary())}updateSummary(){let l=this.filteredIndexes.length,o=l===0||this.currentIndex===-1?0:this.currentIndex+1;this.locateSummary={currentIndex:o,total:l}}focusCurrent(){let l=this.filteredIndexes[this.currentIndex];l!==void 0&&(document.activeElement?.blur(),this.filterTargets[l].focus())}getInputElementByIndex(l){switch(l){case 0:return this.nameInput?.inputEl?.nativeElement??null;case 1:return this.cpfInput?.inputEl?.nativeElement??null;case 2:return this.addressInput?.inputEl?.nativeElement??null;case 3:return this.numberInput?.inputEl?.nativeElement??null;case 4:return this.emailInput?.inputEl?.nativeElement??null;case 5:return this.websiteInput?.inputEl?.nativeElement??null;default:return null}}saveForm(){this.reactiveFormModal.open()}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-fields-locate`]],viewQuery:function(o,i){if(o&1&&Cu(_t,7)(wt,7)(Mt,7)(It,7)(Tt,7)(kt,7)(Ft,7),o&2){let p;No(p=xo())&&(i.nameInput=p.first),No(p=xo())&&(i.cpfInput=p.first),No(p=xo())&&(i.addressInput=p.first),No(p=xo())&&(i.numberInput=p.first),No(p=xo())&&(i.emailInput=p.first),No(p=xo())&&(i.websiteInput=p.first),No(p=xo())&&(i.reactiveFormModal=p.first)}},standalone:!1,decls:35,vars:11,consts:[[`nameInput`,``],[`cpfInput`,``],[`addressInput`,``],[`numberInput`,``],[`emailInput`,``],[`websiteInput`,``],[`reactiveFormData`,``],[1,`po-row`],[1,`po-ml-1`,`po-mr-1`],[`p-search-type`,`locate`,3,`p-change-model`,`p-locate-next`,`p-locate-previous`,`p-literals`,`p-locate-summary`],[3,`formGroup`],[`formControlName`,`name`,`p-clean`,``,`p-icon`,`an an-user`,`p-label`,`Customer name`,1,`po-lg-9`],[`formControlName`,`cpf`,`p-label`,`CPF`,`p-mask`,`999.999.999-99`,`p-clean`,``,1,`po-lg-3`],[`formControlName`,`address`,`p-clean`,``,`p-icon`,`an an-map-pin`,`p-label`,`Address`,1,`po-lg-9`],[`formControlName`,`number`,`p-label`,`Number`,`p-clean`,``,1,`po-lg-3`],[`formControlName`,`email`,`p-label`,`Email`,`p-clean`,``,1,`po-lg-6`],[`formControlName`,`website`,`p-label`,`Website`,`p-clean`,``,1,`po-lg-6`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Save successful`,3,`p-primary-action`],[`p-label`,`Name`,1,`po-lg-6`,3,`p-value`],[`p-label`,`CPF`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Address`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Number`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Email`,1,`po-lg-6`,3,`p-value`],[`p-label`,`Website`,1,`po-lg-6`,3,`p-value`]],template:function(o,i){o&1&&(Jc(0,`div`,7)(1,`div`,8)(2,`po-search`,9),vt$1(`p-change-model`,function(h){return i.updateSearchTerm(h)})(`p-locate-next`,function(){return i.onNextOccurrenceClick()})(`p-locate-previous`,function(){return i.onPreviousOccurrenceClick()}),Zg()()(),_u(3,`po-divider`),Jc(4,`form`,10)(5,`div`,7)(6,`po-input`,11,0),W0(),Zg(),Jc(8,`po-input`,12,1),W0(),Zg()(),Jc(10,`div`,7)(11,`po-input`,13,2),W0(),Zg(),Jc(13,`po-number`,14,3),W0(),Zg()(),Jc(15,`div`,7)(16,`po-email`,15,4),W0(),Zg(),Jc(18,`po-url`,16,5),W0(),Zg()(),Jc(20,`div`,7)(21,`po-button`,17),vt$1(`p-click`,function(){return i.saveForm()}),Zg()()(),Jc(22,`po-modal`,18,6)(24,`div`,7),_u(25,`po-info`,19)(26,`po-info`,20),Zg(),_u(27,`po-divider`),Jc(28,`div`,7),_u(29,`po-info`,21)(30,`po-info`,22),Zg(),_u(31,`po-divider`),Jc(32,`div`,7),_u(33,`po-info`,23)(34,`po-info`,24),Zg()()),o&2&&(Ig(2),Rb(`p-literals`,i.searchLiterals)(`p-locate-summary`,i.locateSummary),Ig(2),Rb(`formGroup`,i.reactiveForm),Ig(2),Y0(),Ig(2),Y0(),Ig(3),Y0(),Ig(2),Y0(),Ig(3),Y0(),Ig(2),Y0(),Ig(3),Rb(`p-disabled`,!i.reactiveForm.valid),Ig(),Rb(`p-primary-action`,i.modalPrimaryAction),Ig(3),Rb(`p-value`,i.reactiveForm.controls.name.value),Ig(),Rb(`p-value`,i.reactiveForm.controls.cpf.value),Ig(3),Rb(`p-value`,i.reactiveForm.controls.address.value),Ig(),Rb(`p-value`,i.reactiveForm.controls.number.value),Ig(3),Rb(`p-value`,i.reactiveForm.controls.email.value),Ig(),Rb(`p-value`,i.reactiveForm.controls.website.value))},dependencies:[NZ,TZ,RZ,XL,o1,oi,Lf,o5,U4,Hoe,H4,Yoe,ea,Gne],encapsulation:2,changeDetection:1})}return a})();var Lt=a=>({"docs-sample-code-tabs":a});var Ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-fields-locate-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Search Form Fields with Locate`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-search-fields-locate/sample-po-search-fields-locate.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-search-fields-locate/sample-po-search-fields-locate.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { AfterViewInit, Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-search-fields-locate`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Lt,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Ue],encapsulation:2,changeDetection:1})}return a})();var Qe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-search-doc`]],standalone:!1,decls:1426,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`PoSearchFilterSelect[]`],[`pan`,``,1,`docs-api-property-type`,`PoSearchFilterMode`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[1,`language-ts`],[`pan`,``,1,`docs-api-property-type`,`PoSearchLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoSearchLocateSummary`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`searchMode`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(o,i){o&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoSearchModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-search.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoSearchComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O componente search, também conhecido como barra de pesquisa, é utilizado para ajudar os usuários a localizar um determinado conteúdo.`),Zg(),Jc(15,`p`),Tk(16,`Normalmente localizado no canto superior direito, junto com o ícone de lupa, uma vez que este ícone é amplamente reconhecido.`),Zg(),Jc(17,`h4`),Tk(18,`Boas práticas`),Zg(),Jc(19,`p`),Tk(20,`Foram estruturados os padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia
aos usu\xE1rios. Portanto, \xE9 de extrema import\xE2ncia que, ao utilizar este componente, as pessoas respons\xE1veis por seu
desenvolvimento considerem os seguintes crit\xE9rios:`),Zg(),Jc(21,`ul`)(22,`li`),Tk(23,`Utilize labels para apresentar resultados que est\xE3o sendo exibidos e apresente os resultados mais relevantes
primeiro.`),Zg(),Jc(24,`li`),Tk(25,`Exiba uma mensagem clara quando n\xE3o forem encontrados resultados para busca e sempre que poss\xEDvel ofere\xE7a outras
sugest\xF5es de busca.`),Zg(),Jc(26,`li`),Tk(27,`Mantenha o texto original no campo de input, que facilita a a\xE7\xE3o do usu\xE1rio caso queira fazer uma nova busca com
alguma modifica\xE7\xE3o na pesquisa.`),Zg(),Jc(28,`li`),Tk(29,`Caso seja poss\xEDvel detectar um erro de digita\xE7\xE3o, mostre os resultados para a palavra "corrigida", isso evita a
frustra\xE7\xE3o de n\xE3o obter resultados e n\xE3o for\xE7a o usu\xE1rio a realizar uma nova busca.`),Zg(),Jc(30,`li`),Tk(31,`Quando apropriado, destaque os termos da busca nos resultados.`),Zg(),Jc(32,`li`),Tk(33,`A entrada do campo de pesquisa deve caber em uma linha. Não use entradas de pesquisa de várias linhas.`),Zg(),Jc(34,`li`),Tk(35,`Recomenda-se ter apenas uma pesquisa por p\xE1gina. Se voc\xEA precisar de v\xE1rias pesquisas, rotule-as claramente para
indicar sua finalidade.`),Zg(),Jc(36,`li`),Tk(37,`Se poss\xEDvel, forne\xE7a sugest\xF5es de pesquisa, seja em um helptext ou sugest\xE3o de pesquisa que \xE9 um autocomplete. Isso
ajuda os usu\xE1rios a encontrar o que est\xE3o procurando, especialmente se os itens pesquis\xE1veis forem complexos.`),Zg()(),Jc(38,`h4`),Tk(39,`Acessibilidade tratada no componente`),Zg(),Jc(40,`p`),Tk(41,` Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo
propriet\xE1rio do conte\xFAdo. S\xE3o elas:`),Zg(),Jc(42,`ul`)(43,`li`),Tk(44,`Permitir a interação via teclado (2.1.1: Keyboard (A));`),Zg(),Jc(45,`li`),Tk(46,`Alteração entre os estados precisa ser indicada por mais de um elemento além da cor (1.4.1: Use of Color);`),Zg()(),Jc(47,`h4`),Tk(48,`Tokens customizáveis`),Zg(),Jc(49,`p`),Tk(50,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(51,`blockquote`)(52,`p`),Tk(53,`Para maiores informações, acesse o guia `),Jc(54,`a`,6),Tk(55,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(56,`.`),Zg()(),Jc(57,`table`)(58,`thead`)(59,`tr`)(60,`th`),Tk(61,`Propriedade`),Zg(),Jc(62,`th`),Tk(63,`Descrição`),Zg(),Jc(64,`th`),Tk(65,`Valor Padrão`),Zg()()(),Jc(66,`tbody`)(67,`tr`)(68,`td`)(69,`strong`),Tk(70,`Default Values`),Zg()(),_u(71,`td`)(72,`td`),Zg(),Jc(73,`tr`)(74,`td`)(75,`code`),Tk(76,`--font-family`),Zg()(),Jc(77,`td`),Tk(78,`Família tipográfica do campo`),Zg(),Jc(79,`td`)(80,`code`),Tk(81,`var(--font-family-theme)`),Zg()()(),Jc(82,`tr`)(83,`td`)(84,`code`),Tk(85,`--font-size`),Zg()(),Jc(86,`td`),Tk(87,`Tamanho da fonte do campo`),Zg(),Jc(88,`td`)(89,`code`),Tk(90,`var(--font-size-default)`),Zg()()(),Jc(91,`tr`)(92,`td`)(93,`code`),Tk(94,`--text-color-placeholder`),Zg()(),Jc(95,`td`),Tk(96,`Cor do texto no placeholder`),Zg(),Jc(97,`td`)(98,`code`),Tk(99,`var(--color-neutral-light-30)`),Zg()()(),Jc(100,`tr`)(101,`td`)(102,`code`),Tk(103,`--color`),Zg()(),Jc(104,`td`),Tk(105,`Cor das bordas`),Zg(),Jc(106,`td`)(107,`code`),Tk(108,`var(--color-neutral-dark-70)`),Zg()()(),Jc(109,`tr`)(110,`td`)(111,`code`),Tk(112,`--border-radius`),Zg()(),Jc(113,`td`),Tk(114,`Raio das bordas`),Zg(),Jc(115,`td`)(116,`code`),Tk(117,`var(--border-radius-md)`),Zg()()(),Jc(118,`tr`)(119,`td`)(120,`code`),Tk(121,`--background`),Zg()(),Jc(122,`td`),Tk(123,`Cor de background`),Zg(),Jc(124,`td`)(125,`code`),Tk(126,`var(--color-neutral-light-05)`),Zg()()(),Jc(127,`tr`)(128,`td`)(129,`code`),Tk(130,`--text-color`),Zg()(),Jc(131,`td`),Tk(132,`Cor do texto editável`),Zg(),Jc(133,`td`)(134,`code`),Tk(135,`var(--color-neutral-dark-90)`),Zg()()(),Jc(136,`tr`)(137,`td`)(138,`code`),Tk(139,`--color-clear`),Zg()(),Jc(140,`td`),Tk(141,`Cor do ícone close`),Zg(),Jc(142,`td`)(143,`code`),Tk(144,`var(--color-action-default)`),Zg()()(),Jc(145,`tr`)(146,`td`)(147,`code`),Tk(148,`--color-controls`),Zg()(),Jc(149,`td`),Tk(150,`Cor dos ícones de controle do mode location`),Zg(),Jc(151,`td`)(152,`code`),Tk(153,`var(--color-action-default)`),Zg()()(),Jc(154,`tr`)(155,`td`)(156,`code`),Tk(157,`--transition-property`),Zg()(),Jc(158,`td`),Tk(159,`Atributo da transição`),Zg(),Jc(160,`td`)(161,`code`),Tk(162,`all`),Zg()()(),Jc(163,`tr`)(164,`td`)(165,`code`),Tk(166,`--transition-duration`),Zg()(),Jc(167,`td`),Tk(168,`Duração da transição`),Zg(),Jc(169,`td`)(170,`code`),Tk(171,`var(--duration-extra-fast)`),Zg()()(),Jc(172,`tr`)(173,`td`)(174,`code`),Tk(175,`--transition-timing`),Zg()(),Jc(176,`td`),Tk(177,`Duração da transição com o tipo de transição`),Zg(),Jc(178,`td`)(179,`code`),Tk(180,`var(--timing-standart)`),Zg()()(),Jc(181,`tr`)(182,`td`)(183,`strong`),Tk(184,`Icon`),Zg()(),_u(185,`td`)(186,`td`),Zg(),Jc(187,`tr`)(188,`td`)(189,`code`),Tk(190,`--color-icon-read`),Zg()(),Jc(191,`td`),Tk(192,`Cor do ícone de busca no modo action`),Zg(),Jc(193,`td`)(194,`code`),Tk(195,`var(--color-neutral-dark-70)`),Zg()()(),Jc(196,`tr`)(197,`td`)(198,`code`),Tk(199,`--color-icon`),Zg()(),Jc(200,`td`),Tk(201,`Cor do ícone de busca no modo trigger`),Zg(),Jc(202,`td`)(203,`code`),Tk(204,`var(--color-action-default)`),Zg()()(),Jc(205,`tr`)(206,`td`)(207,`strong`),Tk(208,`Hover`),Zg()(),_u(209,`td`)(210,`td`),Zg(),Jc(211,`tr`)(212,`td`)(213,`code`),Tk(214,`--color-hover`),Zg()(),Jc(215,`td`),Tk(216,`Cor das bordas no estado hover`),Zg(),Jc(217,`td`)(218,`code`),Tk(219,`var(--color-action-hover)`),Zg()()(),Jc(220,`tr`)(221,`td`)(222,`code`),Tk(223,`--background-hover`),Zg()(),Jc(224,`td`),Tk(225,`Cor de background no estado hover`),Zg(),Jc(226,`td`)(227,`code`),Tk(228,`var(--color-brand-01-lightest)`),Zg()()(),Jc(229,`tr`)(230,`td`)(231,`strong`),Tk(232,`Focused`),Zg()(),_u(233,`td`)(234,`td`),Zg(),Jc(235,`tr`)(236,`td`)(237,`code`),Tk(238,`--color-focused`),Zg()(),Jc(239,`td`),Tk(240,`Cor das bordas no estado de focus`),Zg(),Jc(241,`td`)(242,`code`),Tk(243,`var(--color-action-default)`),Zg()()(),Jc(244,`tr`)(245,`td`)(246,`code`),Tk(247,`--outline-color-focused`),Zg()(),Jc(248,`td`),Tk(249,`Cor do outline no estado de focus`),Zg(),Jc(250,`td`)(251,`code`),Tk(252,`var(--color-action-focus)`),Zg()()(),Jc(253,`tr`)(254,`td`)(255,`strong`),Tk(256,`Disabled`),Zg()(),_u(257,`td`)(258,`td`),Zg(),Jc(259,`tr`)(260,`td`)(261,`code`),Tk(262,`--color-disabled`),Zg()(),Jc(263,`td`),Tk(264,`Cor principal no estado disabled`),Zg(),Jc(265,`td`)(266,`code`),Tk(267,`var(--color-action-disabled)`),Zg()()(),Jc(268,`tr`)(269,`td`)(270,`code`),Tk(271,`--background-disabled`),Zg()(),Jc(272,`td`),Tk(273,`Cor de background no estado disabled`),Zg(),Jc(274,`td`)(275,`code`),Tk(276,`var(--color-neutral-light-20)`),Zg()()()()()(),Jc(277,`div`,7)(278,`h4`,8),Tk(279,`Seletor`),Zg(),Jc(280,`pre`,9),Tk(281,`<po-search
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
`),Zg()(),Jc(282,`h4`,10),Tk(283,`Propriedades`),Zg(),Jc(284,`table`,11)(285,`tr`,12)(286,`th`,13),Tk(287,`Nome`),Zg(),Jc(288,`th`,13),Tk(289,`Tipo`),Zg(),Jc(290,`th`,13),Tk(291,`Padrão`),Zg(),Jc(292,`th`,13),Tk(293,`Descrição`),Zg()(),Jc(294,`tr`,14)(295,`td`,15)(296,`div`,16)(297,`span`,17),Tk(298,` p-aria-label`),_u(299,`br`),Zg()()(),Jc(300,`td`,18)(301,`code`,19),Tk(302,`string`),Zg()(),Jc(303,`td`,20),Tk(304,`-`),Zg(),Jc(305,`td`,21)(306,`em`)(307,`strong`),Tk(308,`(opcional)`),Zg()(),Jc(309,`p`),Tk(310,`Define um aria-label para o po-search.`),Zg(),Jc(311,`blockquote`)(312,`p`),Tk(313,`Devido o componente não possuir uma label assim como outros campos de texto, o `),Jc(314,`code`),Tk(315,`aria-label`),Zg(),Tk(316,` \xE9 utilizado para
acessibilidade.`),Zg()()()(),Jc(317,`tr`,14)(318,`td`,15)(319,`div`,22)(320,`span`,23),Tk(321,` (p-blur)`),_u(322,`br`),Zg()()(),Jc(323,`td`,18)(324,`code`,24),Tk(325,`EventEmitter`),Zg()(),Jc(326,`td`,20),Tk(327,`-`),Zg(),Jc(328,`td`,21)(329,`em`)(330,`strong`),Tk(331,`(opcional)`),Zg()(),Jc(332,`p`),Tk(333,`Evento disparado ao sair do campo.`),Zg()()(),Jc(334,`tr`,14)(335,`td`,15)(336,`div`,22)(337,`span`,23),Tk(338,` (p-change-model)`),_u(339,`br`),Zg()()(),Jc(340,`td`,18)(341,`code`,24),Tk(342,`EventEmitter`),Zg()(),Jc(343,`td`,20),Tk(344,`-`),Zg(),Jc(345,`td`,21)(346,`em`)(347,`strong`),Tk(348,`(opcional)`),Zg()(),Jc(349,`p`),Tk(350,`Evento disparado ao alterar valor do model.`),Zg()()(),Jc(351,`tr`,14)(352,`td`,15)(353,`div`,16)(354,`span`,17),Tk(355,` p-disabled`),_u(356,`br`),Zg()()(),Jc(357,`td`,18)(358,`code`,25),Tk(359,`boolean`),Zg()(),Jc(360,`td`,20)(361,`p`)(362,`code`),Tk(363,`false`),Zg()()(),Jc(364,`td`,21)(365,`em`)(366,`strong`),Tk(367,`(opcional)`),Zg()(),Jc(368,`p`),Tk(369,`Desabilita o po-search e não permite que o usuário interaja com o mesmo.`),Zg()()(),Jc(370,`tr`,14)(371,`td`,15)(372,`div`,22)(373,`span`,23),Tk(374,` (p-filter)`),_u(375,`br`),Zg()()(),Jc(376,`td`,18)(377,`code`,24),Tk(378,`EventEmitter`),Zg()(),Jc(379,`td`,20),Tk(380,`-`),Zg(),Jc(381,`td`,21)(382,`em`)(383,`strong`),Tk(384,`(opcional)`),Zg()(),Jc(385,`p`),Tk(386,`Pode ser informada uma função que será disparada quando houver alterações nos filtros.`),Zg(),Jc(387,`blockquote`)(388,`p`),Tk(389,`Incompatível com a propriedade `),Jc(390,`code`),Tk(391,`p-search-type`),Zg(),Tk(392,` do tipo `),Jc(393,`code`),Tk(394,`locate`),Zg(),Tk(395,`.`),Zg()()()(),Jc(396,`tr`,14)(397,`td`,15)(398,`div`,16)(399,`span`,17),Tk(400,` p-filter-keys`),_u(401,`br`),Zg()()(),Jc(402,`td`,18)(403,`code`,26),Tk(404,`Array<any>`),Zg()(),Jc(405,`td`,20),Tk(406,`-`),Zg(),Jc(407,`td`,21)(408,`p`),Tk(409,`Define os nomes das propriedades do objeto que serão utilizados para busca em `),Jc(410,`code`),Tk(411,`p-items`),Zg(),Tk(412,`. Cada valor definido no
array ser\xE1 considerado durante a apresenta\xE7\xE3o e filtragem dos itens.
Exemplo de uso:`),Zg(),Jc(413,`pre`)(414,`code`,27),Tk(415,`const filterKeys: Array<string> = ['name', 'gender', 'planet', 'father'];
`),Zg()(),Jc(416,`blockquote`)(417,`p`),Tk(418,`Esta propriedade é ignorada quando utilizado com `),Jc(419,`code`),Tk(420,`p-filter-select`),Zg(),Tk(421,` e incompat\xEDvel com a propriedade
`),Jc(422,`code`),Tk(423,`p-search-type`),Zg(),Tk(424,` do tipo `),Jc(425,`code`),Tk(426,`locate`),Zg(),Tk(427,`.`),Zg()()()(),Jc(428,`tr`,14)(429,`td`,15)(430,`div`,16)(431,`span`,17),Tk(432,` p-filter-select`),_u(433,`br`),Zg()()(),Jc(434,`td`,18)(435,`code`,28),Tk(436,`PoSearchFilterSelect[]`),Zg()(),Jc(437,`td`,20),Tk(438,`-`),Zg(),Jc(439,`td`,21)(440,`p`),Tk(441,`Habilita um seletor de filtros \xE0 esquerda do campo, permitindo a aplica\xE7\xE3o de filtros agrupados na busca ou sobre
os itens fornecidos em `),Jc(442,`code`),Tk(443,`p-items`),Zg(),Tk(444,`. Automaticamente adiciona a opção `),Jc(445,`strong`),Tk(446,`Todos`),Zg(),Tk(447,`, com um mapeamento de todas as opções passadas.`),Zg(),Jc(448,`p`),Tk(449,`Exemplo de uso:`),Zg(),Jc(450,`pre`)(451,`code`,27),Tk(452,`const filterSelect = [
  { label: 'personal', value: ['name', 'email', 'nickname'] },
  { label: 'address', value: ['country', 'state', 'city', 'street'] },
  { label: 'family', value: ['father', 'mother', 'dependents'] }
];
`),Zg()(),Jc(453,`blockquote`)(454,`p`),Tk(455,`Ao ser habilitada, a propriedade `),Jc(456,`code`),Tk(457,`p-filter-keys`),Zg(),Tk(458,` ser\xE1 ignorada. Esta propriedade \xE9 incompat\xEDvel com a propriedade
`),Jc(459,`code`),Tk(460,`p-search-type`),Zg(),Tk(461,` do tipo `),Jc(462,`code`),Tk(463,`locate`),Zg(),Tk(464,`.`),Zg()()()(),Jc(465,`tr`,14)(466,`td`,15)(467,`div`,16)(468,`span`,17),Tk(469,` p-filter-type`),_u(470,`br`),Zg()()(),Jc(471,`td`,18)(472,`code`,29),Tk(473,`PoSearchFilterMode`),Zg()(),Jc(474,`td`,20)(475,`p`)(476,`code`),Tk(477,`startsWith`),Zg()()(),Jc(478,`td`,21)(479,`em`)(480,`strong`),Tk(481,`(opcional)`),Zg()(),Jc(482,`p`),Tk(483,`Define o modo de pesquisa utilizado no campo de busca. Os valores permitidos s\xE3o definidos pelo enum
`),Jc(484,`strong`),Tk(485,`PoSearchFilterMode`),Zg(),Tk(486,`.`),Zg(),Jc(487,`blockquote`)(488,`p`),Tk(489,`Incompatível com a propriedade `),Jc(490,`code`),Tk(491,`p-search-type`),Zg(),Tk(492,` do tipo `),Jc(493,`code`),Tk(494,`locate`),Zg(),Tk(495,`.`),Zg()()()(),Jc(496,`tr`,14)(497,`td`,15)(498,`div`,22)(499,`span`,23),Tk(500,` (p-filtered-items-change)`),_u(501,`br`),Zg()()(),Jc(502,`td`,18)(503,`code`,24),Tk(504,`EventEmitter`),Zg()(),Jc(505,`td`,20),Tk(506,`-`),Zg(),Jc(507,`td`,21)(508,`em`)(509,`strong`),Tk(510,`(opcional)`),Zg()(),Jc(511,`p`),Tk(512,`Pode ser informada uma função que será disparada quando houver alterações no input.`),Zg(),Jc(513,`blockquote`)(514,`p`),Tk(515,`Incompatível com a propriedade `),Jc(516,`code`),Tk(517,`p-search-type`),Zg(),Tk(518,` do tipo `),Jc(519,`code`),Tk(520,`locate`),Zg(),Tk(521,`.`),Zg()()()(),Jc(522,`tr`,14)(523,`td`,15)(524,`div`,22)(525,`span`,23),Tk(526,` (p-focus)`),_u(527,`br`),Zg()()(),Jc(528,`td`,18)(529,`code`,24),Tk(530,`EventEmitter`),Zg()(),Jc(531,`td`,20),Tk(532,`-`),Zg(),Jc(533,`td`,21)(534,`em`)(535,`strong`),Tk(536,`(opcional)`),Zg()(),Jc(537,`p`),Tk(538,`Evento emitido quando o campo de entrada (input) recebe foco.`),Zg()()(),Jc(539,`tr`,14)(540,`td`,15)(541,`div`,22)(542,`span`,23),Tk(543,` (p-footer-action-listbox)`),_u(544,`br`),Zg()()(),Jc(545,`td`,18)(546,`code`,24),Tk(547,`EventEmitter`),Zg()(),Jc(548,`td`,20),Tk(549,`-`),Zg(),Jc(550,`td`,21)(551,`em`)(552,`strong`),Tk(553,`(opcional)`),Zg()(),Jc(554,`p`),Tk(555,`Evento disparado ao clicar no botão de ação exibido no rodapé do `),Jc(556,`code`),Tk(557,`listbox`),Zg(),Tk(558,`.
O texto exibido pode ser configurado por meio do literal `),Jc(559,`code`),Tk(560,`footerActionListbox`),Zg(),Tk(561,`.`),Zg()()(),Jc(562,`tr`,14)(563,`td`,15)(564,`div`,16)(565,`span`,17),Tk(566,` p-icon`),_u(567,`br`),Zg()()(),Jc(568,`td`,18)(569,`code`,19),Tk(570,`string `),Zg(),Jc(571,`code`,30),Tk(572,` TemplateRef<void>`),Zg()(),Jc(573,`td`,20),Tk(574,`-`),Zg(),Jc(575,`td`,21)(576,`em`)(577,`strong`),Tk(578,`(opcional)`),Zg()(),Jc(579,`p`),Tk(580,`Permite customizar o ícone de busca que acompanha o campo.`),Zg(),Jc(581,`p`),Tk(582,`É possível usar qualquer um dos ícones da `),Jc(583,`a`,31),Tk(584,`Biblioteca de ícones PO UI`),Zg(),Tk(585,`, conforme exemplo:`),Zg(),Jc(586,`pre`)(587,`code`),Tk(588,`<po-search p-icon="an an-user"></po-search>
`),Zg()(),Jc(589,`p`),Tk(590,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(591,`em`),Tk(592,`Font Awesome`),Zg(),Tk(593,`, desde que a biblioteca
esteja carregada no projeto:`),Zg(),Jc(594,`pre`)(595,`code`),Tk(596,`<po-search p-icon="fa fa-podcast"></po-search>
`),Zg()(),Jc(597,`p`),Tk(598,`Outra opção seria a customização do ícone através do `),Jc(599,`code`),Tk(600,`TemplateRef`),Zg(),Tk(601,`, conforme exemplo abaixo:`),Zg(),Jc(602,`pre`)(603,`code`),Tk(604,`<po-search [p-icon]="template"></po-search>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),Zg()()()(),Jc(605,`tr`,14)(606,`td`,15)(607,`div`,16)(608,`span`,17),Tk(609,` p-items`),_u(610,`br`),Zg()()(),Jc(611,`td`,18)(612,`code`,26),Tk(613,`Array<any>`),Zg()(),Jc(614,`td`,20),Tk(615,`-`),Zg(),Jc(616,`td`,21)(617,`em`)(618,`strong`),Tk(619,`(opcional)`),Zg()(),Jc(620,`p`),Tk(621,`Lista de itens que serão utilizados para pesquisa.`),Zg(),Jc(622,`blockquote`)(623,`p`),Tk(624,`Incompatível com a propriedade `),Jc(625,`code`),Tk(626,`p-search-type`),Zg(),Tk(627,` do tipo `),Jc(628,`code`),Tk(629,`locate`),Zg(),Tk(630,`.`),Zg()()()(),Jc(631,`tr`,14)(632,`td`,15)(633,`div`,22)(634,`span`,23),Tk(635,` (p-keydown)`),_u(636,`br`),Zg()()(),Jc(637,`td`,18)(638,`code`,24),Tk(639,`EventEmitter`),Zg()(),Jc(640,`td`,20),Tk(641,`-`),Zg(),Jc(642,`td`,21)(643,`em`)(644,`strong`),Tk(645,`(opcional)`),Zg()(),Jc(646,`p`),Tk(647,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(648,`code`),Tk(649,`KeyboardEvent`),Zg(),Tk(650,` com informações sobre a tecla.`),Zg()()(),Jc(651,`tr`,14)(652,`td`,15)(653,`div`,16)(654,`span`,17),Tk(655,` p-keys-label`),_u(656,`br`),Zg()()(),Jc(657,`td`,18)(658,`code`,32),Tk(659,`Array<string>`),Zg()(),Jc(660,`td`,20),Tk(661,`-`),Zg(),Jc(662,`td`,21)(663,`em`)(664,`strong`),Tk(665,`(opcional)`),Zg()(),Jc(666,`p`),Tk(667,`Define os nomes das propriedades do objeto que serão exibidos como rótulos (labels) no `),Jc(668,`code`),Tk(669,`listbox`),Zg(),Tk(670,` quando a propriedade
`),Jc(671,`code`),Tk(672,`p-show-listbox`),Zg(),Tk(673,` estiver habilitada.`),Zg(),Jc(674,`p`),Tk(675,`Deve ser informado um array de strings contendo até `),Jc(676,`strong`),Tk(677,`3 propriedades`),Zg(),Tk(678,`.`),Zg(),Jc(679,`p`),Tk(680,`Exemplo de uso:`),Zg(),Jc(681,`pre`)(682,`code`,33),Tk(683,`keysLabel: Array<string> = ['nome', 'email', 'country'];
`),Zg()()()(),Jc(684,`tr`,14)(685,`td`,15)(686,`div`,22)(687,`span`,23),Tk(688,` (p-listbox-onclick)`),_u(689,`br`),Zg()()(),Jc(690,`td`,18)(691,`code`,24),Tk(692,`EventEmitter`),Zg()(),Jc(693,`td`,20),Tk(694,`-`),Zg(),Jc(695,`td`,21)(696,`em`)(697,`strong`),Tk(698,`(opcional)`),Zg()(),Jc(699,`p`),Tk(700,`Pode ser informada uma função que será disparada quando houver click no listbox.`),Zg(),Jc(701,`blockquote`)(702,`p`),Tk(703,`Incompatível com a propriedade `),Jc(704,`code`),Tk(705,`p-search-type`),Zg(),Tk(706,` do tipo `),Jc(707,`code`),Tk(708,`locate`),Zg(),Tk(709,`.`),Zg()()()(),Jc(710,`tr`,14)(711,`td`,15)(712,`div`,16)(713,`span`,17),Tk(714,` p-literals`),_u(715,`br`),Zg()()(),Jc(716,`td`,18)(717,`code`,34),Tk(718,`PoSearchLiterals`),Zg()(),Jc(719,`td`,20),Tk(720,`-`),Zg(),Jc(721,`td`,21)(722,`em`)(723,`strong`),Tk(724,`(opcional)`),Zg()(),Jc(725,`p`),Tk(726,`Objeto com as literais usadas no `),Jc(727,`code`),Tk(728,`po-search`),Zg(),Tk(729,`, permitindo personalizar os textos exibidos no componente.`),Zg(),Jc(730,`p`),Tk(731,`Para utilizar basta passar a literal que deseja customizar:`),Zg(),Jc(732,`pre`)(733,`code`),Tk(734,`const customLiterals: PoSearchLiterals = {
  search: 'Pesquisar',
  clean: 'Limpar',
};
`),Zg()(),Jc(735,`p`),Tk(736,`E para carregar a literal customizada, basta apenas passar o objeto para o componente.`),Zg(),Jc(737,`pre`)(738,`code`),Tk(739,`<po-search
  [p-literals]="customLiterals">
</po-search>
`),Zg()(),Jc(740,`blockquote`)(741,`p`),Tk(742,`O objeto padrão de literais será traduzido de acordo com o idioma do `),Jc(743,`a`,35)(744,`code`),Tk(745,`PoI18nService`),Zg()(),Tk(746,` ou
do browser.`),Zg()()()(),Jc(747,`tr`,14)(748,`td`,15)(749,`div`,16)(750,`span`,17),Tk(751,` p-loading`),_u(752,`br`),Zg()()(),Jc(753,`td`,18)(754,`code`,25),Tk(755,`boolean`),Zg()(),Jc(756,`td`,20)(757,`p`)(758,`code`),Tk(759,`false`),Zg()()(),Jc(760,`td`,21)(761,`em`)(762,`strong`),Tk(763,`(opcional)`),Zg()(),Jc(764,`p`),Tk(765,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),Zg(),Jc(766,`blockquote`)(767,`p`),Tk(768,`Incompatível com a propriedade `),Jc(769,`code`),Tk(770,`p-search-type`),Zg(),Tk(771,` do tipo `),Jc(772,`code`),Tk(773,`locate`),Zg(),Tk(774,`.`),Zg()()()(),Jc(775,`tr`,14)(776,`td`,15)(777,`div`,22)(778,`span`,23),Tk(779,` (p-locate-next)`),_u(780,`br`),Zg()()(),Jc(781,`td`,18)(782,`code`,24),Tk(783,`EventEmitter`),Zg()(),Jc(784,`td`,20),Tk(785,`-`),Zg(),Jc(786,`td`,21)(787,`em`)(788,`strong`),Tk(789,`(opcional)`),Zg()(),Jc(790,`p`),Tk(791,`Evento disparado ao clicar no controle "Próximo resultado".`),Zg(),Jc(792,`blockquote`)(793,`p`),Tk(794,`Compatível com a propriedade `),Jc(795,`code`),Tk(796,`p-search-type`),Zg(),Tk(797,` do tipo `),Jc(798,`code`),Tk(799,`locate`),Zg(),Tk(800,`.`),Zg()()()(),Jc(801,`tr`,14)(802,`td`,15)(803,`div`,22)(804,`span`,23),Tk(805,` (p-locate-previous)`),_u(806,`br`),Zg()()(),Jc(807,`td`,18)(808,`code`,24),Tk(809,`EventEmitter`),Zg()(),Jc(810,`td`,20),Tk(811,`-`),Zg(),Jc(812,`td`,21)(813,`em`)(814,`strong`),Tk(815,`(opcional)`),Zg()(),Jc(816,`p`),Tk(817,`Evento disparado ao clicar no controle "Resultado anterior".`),Zg(),Jc(818,`blockquote`)(819,`p`),Tk(820,`Compatível com a propriedade `),Jc(821,`code`),Tk(822,`p-search-type`),Zg(),Tk(823,` do tipo `),Jc(824,`code`),Tk(825,`locate`),Zg(),Tk(826,`.`),Zg()()()(),Jc(827,`tr`,14)(828,`td`,15)(829,`div`,16)(830,`span`,17),Tk(831,` p-locate-summary`),_u(832,`br`),Zg()()(),Jc(833,`td`,18)(834,`code`,36),Tk(835,`PoSearchLocateSummary`),Zg()(),Jc(836,`td`,20),Tk(837,`-`),Zg(),Jc(838,`td`,21)(839,`em`)(840,`strong`),Tk(841,`(opcional)`),Zg()(),Jc(842,`p`),Tk(843,`Define os valores do contador exibido ao usar a propriedade `),Jc(844,`code`),Tk(845,`p-search-type`),Zg(),Tk(846,` do tipo `),Jc(847,`code`),Tk(848,`locate`),Zg(),Tk(849,`, indicando a posi\xE7\xE3o
atual e o total de ocorr\xEAncias encontradas.
Exemplo de uso:`),Zg(),Jc(850,`pre`)(851,`code`,33),Tk(852,`locateSummary: PoSearchLocateSummary = { currentIndex: 0, total: 5 };
`),Zg()(),Jc(853,`blockquote`)(854,`p`),Tk(855,`Compatível com a propriedade `),Jc(856,`code`),Tk(857,`p-search-type`),Zg(),Tk(858,` do tipo `),Jc(859,`code`),Tk(860,`locate`),Zg(),Tk(861,`.`),Zg()()()(),Jc(862,`tr`,14)(863,`td`,15)(864,`div`,16)(865,`span`,17),Tk(866,` name`),_u(867,`br`),Zg()()(),Jc(868,`td`,18)(869,`code`,19),Tk(870,`string`),Zg()(),Jc(871,`td`,20),Tk(872,`-`),Zg(),Jc(873,`td`,21)(874,`em`)(875,`strong`),Tk(876,`(opcional)`),Zg()(),Jc(877,`p`),Tk(878,`Nome e identificador do campo.`),Zg()()(),Jc(879,`tr`,14)(880,`td`,15)(881,`div`,16)(882,`span`,17),Tk(883,` p-no-autocomplete`),_u(884,`br`),Zg()()(),Jc(885,`td`,18)(886,`code`,25),Tk(887,`boolean`),Zg()(),Jc(888,`td`,20)(889,`p`)(890,`code`),Tk(891,`false`),Zg()()(),Jc(892,`td`,21)(893,`em`)(894,`strong`),Tk(895,`(opcional)`),Zg()(),Jc(896,`p`),Tk(897,`Define a propriedade nativa `),Jc(898,`code`),Tk(899,`autocomplete`),Zg(),Tk(900,` do campo como `),Jc(901,`code`),Tk(902,`off`),Zg(),Tk(903,`.`),Zg()()(),Jc(904,`tr`,14)(905,`td`,15)(906,`div`,16)(907,`span`,17),Tk(908,` p-show-listbox`),_u(909,`br`),Zg()()(),Jc(910,`td`,18)(911,`code`,25),Tk(912,`boolean`),Zg()(),Jc(913,`td`,20)(914,`p`)(915,`code`),Tk(916,`false`),Zg()()(),Jc(917,`td`,21)(918,`em`)(919,`strong`),Tk(920,`(opcional)`),Zg()(),Jc(921,`p`),Tk(922,`Exibe uma lista (auto-complete) com as opções definidas em `),Jc(923,`code`),Tk(924,`p-filter-keys`),Zg(),Tk(925,` ou `),Jc(926,`code`),Tk(927,`p-filter-select`),Zg(),Tk(928,` enquanto realiza
uma busca, respeitando o `),Jc(929,`code`),Tk(930,`p-filter-type`),Zg(),Tk(931,` como modo de pesquisa.`),Zg(),Jc(932,`blockquote`)(933,`p`),Tk(934,`Incompatível com a propriedade `),Jc(935,`code`),Tk(936,`p-search-type`),Zg(),Tk(937,` do tipo `),Jc(938,`code`),Tk(939,`locate`),Zg(),Tk(940,`.`),Zg()()()(),Jc(941,`tr`,14)(942,`td`,15)(943,`div`,16)(944,`span`,17),Tk(945,` p-size`),_u(946,`br`),Zg()()(),Jc(947,`td`,18)(948,`code`,19),Tk(949,`string`),Zg()(),Jc(950,`td`,20)(951,`p`)(952,`code`),Tk(953,`medium`),Zg()()(),Jc(954,`td`,21)(955,`em`)(956,`strong`),Tk(957,`(opcional)`),Zg()(),Jc(958,`p`),Tk(959,`Define o tamanho do componente:`),Zg(),Jc(960,`ul`)(961,`li`)(962,`code`),Tk(963,`small`),Zg(),Tk(964,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),Zg(),Jc(965,`li`)(966,`code`),Tk(967,`medium`),Zg(),Tk(968,`: altura do input como 44px.`),Zg()(),Jc(969,`blockquote`)(970,`p`),Tk(971,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(972,`code`),Tk(973,`medium`),Zg(),Tk(974,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(975,`a`,37),Tk(976,`po-theme`),Zg(),Tk(977,`.`),Zg()()()(),Jc(978,`tr`,14)(979,`td`,15)(980,`div`,16)(981,`span`,17),Tk(982,` p-search-type`),_u(983,`br`),Zg()()(),Jc(984,`td`,18)(985,`code`,38),Tk(986,`searchMode`),Zg()(),Jc(987,`td`,20)(988,`p`)(989,`code`),Tk(990,`action`),Zg()()(),Jc(991,`td`,21)(992,`em`)(993,`strong`),Tk(994,`(opcional)`),Zg()(),Jc(995,`p`),Tk(996,`Determina a forma de realizar a pesquisa no componente. Valores aceitos:`),Zg(),Jc(997,`ul`)(998,`li`)(999,`code`),Tk(1e3,`action`),Zg(),Tk(1001,`: Realiza a busca a cada caractere digitado.`),Zg(),Jc(1002,`li`)(1003,`code`),Tk(1004,`trigger`),Zg(),Tk(1005,`: Realiza a busca ao pressionar `),Jc(1006,`code`),Tk(1007,`enter`),Zg(),Tk(1008,` ou clicar no ícone de busca.`),Zg(),Jc(1009,`li`)(1010,`code`),Tk(1011,`locate`),Zg(),Tk(1012,`: Modo manual. Exibe botões e contador, mas não executa buscas — controle é do desenvolvedor.`),Zg(),Jc(1013,`li`)(1014,`code`),Tk(1015,`execute`),Zg(),Tk(1016,`: Executa uma ação ou realiza um redirecionamento ao selecionar um item no `),Jc(1017,`code`),Tk(1018,`listbox`),Zg(),Tk(1019,`. Para este tipo, é necessário informar as propriedades `),Jc(1020,`code`),Tk(1021,`action`),Zg(),Tk(1022,` ou `),Jc(1023,`code`),Tk(1024,`url`),Zg(),Tk(1025,` nos itens definidos em `),Jc(1026,`code`),Tk(1027,`p-items`),Zg(),Tk(1028,`.`),Zg()()()()(),Jc(1029,`h3`),Tk(1030,`Interfaces`),Zg(),Jc(1031,`h4`,39)(1032,`code`,5),Tk(1033,`PoSearchFilterSelect`),Zg()(),Jc(1034,`div`,2)(1035,`p`),Tk(1036,`Interface que define as opções que serão exibidas no dropdown do `),Jc(1037,`code`),Tk(1038,`po-search`),Zg(),Tk(1039,`, ao usar a propriedade `),Jc(1040,`code`),Tk(1041,`p-filter-select`),Zg(),Tk(1042,`.`),Zg()(),Jc(1043,`h4`,10),Tk(1044,`Propriedades`),Zg(),Jc(1045,`table`,11)(1046,`tr`,12)(1047,`th`,13),Tk(1048,`Nome`),Zg(),Jc(1049,`th`,13),Tk(1050,`Tipo`),Zg(),Jc(1051,`th`,13),Tk(1052,`Descrição`),Zg()(),Jc(1053,`tr`,14)(1054,`td`,15)(1055,`div`,16)(1056,`span`,17),Tk(1057,` label`),_u(1058,`br`),Zg()()(),Jc(1059,`td`,18)(1060,`code`,19),Tk(1061,`string`),Zg()(),Jc(1062,`td`,21)(1063,`p`),Tk(1064,`Descrição exibida nas opções da lista.`),Zg()()(),Jc(1065,`tr`,14)(1066,`td`,15)(1067,`div`,16)(1068,`span`,17),Tk(1069,` value`),_u(1070,`br`),Zg()()(),Jc(1071,`td`,18)(1072,`code`,32),Tk(1073,`Array<string> `),Zg(),Jc(1074,`code`,19),Tk(1075,` string`),Zg()(),Jc(1076,`td`,21)(1077,`p`),Tk(1078,`Valores que serão atribuídos ao `),Jc(1079,`code`),Tk(1080,`p-filter-keys`),Zg()()()()(),Jc(1081,`h4`,39)(1082,`code`,5),Tk(1083,`PoSearchLocateSummary`),Zg()(),Jc(1084,`div`,2)(1085,`p`),Tk(1086,`Interface que define o resumo de localização do filtro `),Jc(1087,`code`),Tk(1088,`p-filter-locate`),Zg(),Tk(1089,`.`),Zg()(),Jc(1090,`h4`,10),Tk(1091,`Propriedades`),Zg(),Jc(1092,`table`,11)(1093,`tr`,12)(1094,`th`,13),Tk(1095,`Nome`),Zg(),Jc(1096,`th`,13),Tk(1097,`Tipo`),Zg(),Jc(1098,`th`,13),Tk(1099,`Descrição`),Zg()(),Jc(1100,`tr`,14)(1101,`td`,15)(1102,`div`,16)(1103,`span`,17),Tk(1104,` currentIndex`),_u(1105,`br`),Zg()()(),Jc(1106,`td`,18)(1107,`code`,40),Tk(1108,`number`),Zg()(),Jc(1109,`td`,21)(1110,`p`),Tk(1111,`Índice atual da ocorrência localizada.`),Zg()()(),Jc(1112,`tr`,14)(1113,`td`,15)(1114,`div`,16)(1115,`span`,17),Tk(1116,` total`),_u(1117,`br`),Zg()()(),Jc(1118,`td`,18)(1119,`code`,40),Tk(1120,`number`),Zg()(),Jc(1121,`td`,21)(1122,`p`),Tk(1123,`Total de ocorrências encontradas.`),Zg()()()(),Jc(1124,`h4`,39)(1125,`code`,5),Tk(1126,`PoSearchOption`),Zg()(),Jc(1127,`div`,2)(1128,`p`),Tk(1129,`Interface que define as opções que serão exibidas na lista ao procurar do `),Jc(1130,`code`),Tk(1131,`po-search`),Zg(),Tk(1132,`.`),Zg()(),Jc(1133,`h4`,10),Tk(1134,`Propriedades`),Zg(),Jc(1135,`table`,11)(1136,`tr`,12)(1137,`th`,13),Tk(1138,`Nome`),Zg(),Jc(1139,`th`,13),Tk(1140,`Tipo`),Zg(),Jc(1141,`th`,13),Tk(1142,`Descrição`),Zg()(),Jc(1143,`tr`,14)(1144,`td`,15)(1145,`div`,16)(1146,`span`,17),Tk(1147,` label`),_u(1148,`br`),Zg()()(),Jc(1149,`td`,18)(1150,`code`,19),Tk(1151,`string`),Zg()(),Jc(1152,`td`,21)(1153,`em`)(1154,`strong`),Tk(1155,`(opcional)`),Zg()(),Jc(1156,`p`),Tk(1157,`Descrição exibida nas opções da lista.`),Zg(),Jc(1158,`blockquote`)(1159,`p`),Tk(1160,`Caso não seja definida será assumido o valor definido na propriedade `),Jc(1161,`code`),Tk(1162,`value`),Zg(),Tk(1163,`.`),Zg()()()(),Jc(1164,`tr`,14)(1165,`td`,15)(1166,`div`,16)(1167,`span`,17),Tk(1168,` value`),_u(1169,`br`),Zg()()(),Jc(1170,`td`,18)(1171,`code`,19),Tk(1172,`string `),Zg(),Jc(1173,`code`,40),Tk(1174,` number`),Zg()(),Jc(1175,`td`,21)(1176,`p`),Tk(1177,`Valor do objeto que será atribuído ao `),Jc(1178,`em`),Tk(1179,`model`),Zg(),Tk(1180,`.`),Zg()()()(),Jc(1181,`h4`,39)(1182,`code`,5),Tk(1183,`PoSearchLiterals`),Zg()(),Jc(1184,`div`,2)(1185,`p`),Tk(1186,`Interface para definição das literais usadas no `),Jc(1187,`code`),Tk(1188,`po-search`),Zg(),Tk(1189,`.`),Zg()(),Jc(1190,`h4`,10),Tk(1191,`Propriedades`),Zg(),Jc(1192,`table`,11)(1193,`tr`,12)(1194,`th`,13),Tk(1195,`Nome`),Zg(),Jc(1196,`th`,13),Tk(1197,`Tipo`),Zg(),Jc(1198,`th`,13),Tk(1199,`Descrição`),Zg()(),Jc(1200,`tr`,14)(1201,`td`,15)(1202,`div`,16)(1203,`span`,17),Tk(1204,` all`),_u(1205,`br`),Zg()()(),Jc(1206,`td`,18)(1207,`code`,19),Tk(1208,`string`),Zg()(),Jc(1209,`td`,21)(1210,`em`)(1211,`strong`),Tk(1212,`(opcional)`),Zg()(),Jc(1213,`p`),Tk(1214,`Texto exibido no dropdown de tipo de filtro, representando todos os tipos disponíveis.`),Zg(),Jc(1215,`blockquote`)(1216,`p`),Tk(1217,`Exibido apenas quando a propriedade `),Jc(1218,`code`),Tk(1219,`p-filter-select`),Zg(),Tk(1220,` estiver habilitada.`),Zg()()()(),Jc(1221,`tr`,14)(1222,`td`,15)(1223,`div`,16)(1224,`span`,17),Tk(1225,` clean`),_u(1226,`br`),Zg()()(),Jc(1227,`td`,18)(1228,`code`,19),Tk(1229,`string`),Zg()(),Jc(1230,`td`,21)(1231,`em`)(1232,`strong`),Tk(1233,`(opcional)`),Zg()(),Jc(1234,`p`),Tk(1235,`Texto alternativo (aria-label) para o botão de limpar o campo de busca, usado por leitores de tela.`),Zg()()(),Jc(1236,`tr`,14)(1237,`td`,15)(1238,`div`,16)(1239,`span`,17),Tk(1240,` footerActionListbox`),_u(1241,`br`),Zg()()(),Jc(1242,`td`,18)(1243,`code`,19),Tk(1244,`string`),Zg()(),Jc(1245,`td`,21)(1246,`em`)(1247,`strong`),Tk(1248,`(opcional)`),Zg()(),Jc(1249,`p`),Tk(1250,`Texto exibido na ação do rodapé da lista de resultados.`),Zg()()(),Jc(1251,`tr`,14)(1252,`td`,15)(1253,`div`,16)(1254,`span`,17),Tk(1255,` next`),_u(1256,`br`),Zg()()(),Jc(1257,`td`,18)(1258,`code`,19),Tk(1259,`string`),Zg()(),Jc(1260,`td`,21)(1261,`em`)(1262,`strong`),Tk(1263,`(opcional)`),Zg()(),Jc(1264,`p`),Tk(1265,`Texto alternativo (aria-label) para navegação até o próximo resultado da busca.`),Zg(),Jc(1266,`blockquote`)(1267,`p`),Tk(1268,`Exibido apenas quando a propriedade `),Jc(1269,`code`),Tk(1270,`p-filter-locate`),Zg(),Tk(1271,` estiver habilitada.`),Zg()()()(),Jc(1272,`tr`,14)(1273,`td`,15)(1274,`div`,16)(1275,`span`,17),Tk(1276,` of`),_u(1277,`br`),Zg()()(),Jc(1278,`td`,18)(1279,`code`,19),Tk(1280,`string`),Zg()(),Jc(1281,`td`,21)(1282,`em`)(1283,`strong`),Tk(1284,`(opcional)`),Zg()(),Jc(1285,`p`),Tk(1286,`Texto alternativo (aria-label) para a palavra "de" no contador de resultados (ex: "Resultado 1 de 4").`),Zg(),Jc(1287,`blockquote`)(1288,`p`),Tk(1289,`Exibido apenas quando a propriedade `),Jc(1290,`code`),Tk(1291,`p-filter-locate`),Zg(),Tk(1292,` estiver habilitada.`),Zg()()()(),Jc(1293,`tr`,14)(1294,`td`,15)(1295,`div`,16)(1296,`span`,17),Tk(1297,` placeholderListbox`),_u(1298,`br`),Zg()()(),Jc(1299,`td`,18)(1300,`code`,19),Tk(1301,`string`),Zg()(),Jc(1302,`td`,21)(1303,`em`)(1304,`strong`),Tk(1305,`(opcional)`),Zg()(),Jc(1306,`p`),Tk(1307,`Texto exibido como `),Jc(1308,`em`),Tk(1309,`placeholder`),Zg(),Tk(1310,` na lista de resultados.`),Zg()()(),Jc(1311,`tr`,14)(1312,`td`,15)(1313,`div`,16)(1314,`span`,17),Tk(1315,` previous`),_u(1316,`br`),Zg()()(),Jc(1317,`td`,18)(1318,`code`,19),Tk(1319,`string`),Zg()(),Jc(1320,`td`,21)(1321,`em`)(1322,`strong`),Tk(1323,`(opcional)`),Zg()(),Jc(1324,`p`),Tk(1325,`Texto alternativo (aria-label) para navegação até o resultado anterior da busca.`),Zg(),Jc(1326,`blockquote`)(1327,`p`),Tk(1328,`Exibido apenas quando a propriedade `),Jc(1329,`code`),Tk(1330,`p-filter-locate`),Zg(),Tk(1331,` estiver habilitada.`),Zg()()()(),Jc(1332,`tr`,14)(1333,`td`,15)(1334,`div`,16)(1335,`span`,17),Tk(1336,` result`),_u(1337,`br`),Zg()()(),Jc(1338,`td`,18)(1339,`code`,19),Tk(1340,`string`),Zg()(),Jc(1341,`td`,21)(1342,`em`)(1343,`strong`),Tk(1344,`(opcional)`),Zg()(),Jc(1345,`p`),Tk(1346,`Texto alternativo (aria-label) para a label "Resultado" que acompanha o contador.`),Zg(),Jc(1347,`blockquote`)(1348,`p`),Tk(1349,`Exibido apenas quando a propriedade `),Jc(1350,`code`),Tk(1351,`p-filter-locate`),Zg(),Tk(1352,` estiver habilitada.`),Zg()()()(),Jc(1353,`tr`,14)(1354,`td`,15)(1355,`div`,16)(1356,`span`,17),Tk(1357,` search`),_u(1358,`br`),Zg()()(),Jc(1359,`td`,18)(1360,`code`,19),Tk(1361,`string`),Zg()(),Jc(1362,`td`,21)(1363,`em`)(1364,`strong`),Tk(1365,`(opcional)`),Zg()(),Jc(1366,`p`),Tk(1367,`Texto exibido como `),Jc(1368,`em`),Tk(1369,`placeholder`),Zg(),Tk(1370,` no campo de busca.`),Zg()()()(),Jc(1371,`h3`),Tk(1372,`Enums`),Zg(),Jc(1373,`h4`,4)(1374,`code`,5),Tk(1375,`PoSearchFilterMode`),Zg()(),Jc(1376,`div`,2)(1377,`p`),Tk(1378,`Define o tipo de busca usado no `),Jc(1379,`code`),Tk(1380,`po-search`),Zg(),Tk(1381,`.`),Zg()(),Jc(1382,`h4`,10),Tk(1383,`Propriedades`),Zg(),Jc(1384,`table`,11)(1385,`tr`,12)(1386,`th`,13),Tk(1387,`Nome`),Zg(),Jc(1388,`th`,13),Tk(1389,`Descrição`),Zg()(),Jc(1390,`tr`,14)(1391,`td`,15)(1392,`div`,16)(1393,`span`,17),Tk(1394,` startsWith`),_u(1395,`br`),Zg()()(),Jc(1396,`td`,21)(1397,`p`),Tk(1398,`Verifica se o texto `),Jc(1399,`em`),Tk(1400,`inicia`),Zg(),Tk(1401,` com o valor pesquisado.`),Zg()()(),Jc(1402,`tr`,14)(1403,`td`,15)(1404,`div`,16)(1405,`span`,17),Tk(1406,` contains`),_u(1407,`br`),Zg()()(),Jc(1408,`td`,21)(1409,`p`),Tk(1410,`Verifica se o texto `),Jc(1411,`em`),Tk(1412,`contém`),Zg(),Tk(1413,` o valor pesquisado.`),Zg()()(),Jc(1414,`tr`,14)(1415,`td`,15)(1416,`div`,16)(1417,`span`,17),Tk(1418,` endsWith`),_u(1419,`br`),Zg()()(),Jc(1420,`td`,21)(1421,`p`),Tk(1422,`Verifica se o texto `),Jc(1423,`em`),Tk(1424,`finaliza`),Zg(),Tk(1425,` com o valor pesquisado.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Ot(a,T){if(a&1){let l=ZO();Jc(0,`po-tab`,4),vt$1(`p-click`,function(){U_(l);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-search-basic-view`)(2,`sample-po-search-labs-view`)(3,`sample-po-search-find-people-view`)(4,`sample-po-search-listbox-view`)(5,`sample-po-search-filter-select-view`)(6,`sample-po-search-execute-view`)(7,`sample-po-search-fields-locate-view`),Zg()}if(a&2){let l=nk();Rb(`p-active`,l.activeTab===`web`)}}var Bt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Search`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,i){o&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Ot,8,1,`po-tab`,2),Jc(3,`po-tab`,3),vt$1(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-search-doc`),Zg()()()),o&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,Oe,Ne,ze,We,He,Je,Ge,Qe],encapsulation:2,changeDetection:1})}return a})()}];var Ye=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[WV.forChild(Bt),WV]})}return a})();var Un=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,Ye]})}return a})();export{Un as DocPoSearchModule};