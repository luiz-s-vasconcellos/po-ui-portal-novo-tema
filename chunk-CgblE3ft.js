import{m as P,p as M}from"./main-DMA7KEAR.js";import{Ar as I,Da as kI,F as Joe,G as Nf,Hi as Y,Hr as Lk,Ii as WL,Ir as Kb,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Z as P4,Zi as ar,ao as we$1,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,io as vu,j as I4,ji as Vk,li as Qc,na as de,oo as wg,pi as R,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,tt as R4,ua as ge$1,va as ik,vi as Sk,wn as q4,wr as GV,xi as Tk,xr as FO,zn as w4}from"./chunk-DtUf9FxZ.js";var Pe=()=>({value:`disclaimer`});var we=o=>[o];var ce=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-disclaimer-group-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-disclaimers`]],template:function(a,n){a&1&&vu(0,`po-disclaimer-group`,0),a&2&&Rb(`p-disclaimers`,Vk(2,we,Lk(1,Pe)))},dependencies:[P4],encapsulation:2,changeDetection:1})}return o})();var xe=o=>({"docs-sample-code-tabs":o});var ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-disclaimer-group-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-disclaimer-group-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Disclaimer Group Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-disclaimer-group [p-disclaimers]="[{ value: 'disclaimer' }]"></po-disclaimer-group>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-disclaimer-group-basic',
  templateUrl: './sample-po-disclaimer-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDisclaimerGroupBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-disclaimer-group-basic`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,xe,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ce],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{disclaimer;disclaimers;event;properties=[];title;propertiesOptions=[{value:`hideRemoveAll`,label:`Hide remove all`}];ngOnInit(){this.restore()}addDisclaimer(){this.disclaimers=[...this.disclaimers,this.disclaimer],this.disclaimer={value:void 0}}changeEvent(l){this.event=l}restore(){this.disclaimer={value:void 0},this.disclaimers=[],this.event=``}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-disclaimer-group-labs`]],standalone:!1,decls:23,vars:12,consts:[[`disclaimerForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-change`,`p-disclaimers`,`p-hide-remove-all`,`p-title`],[1,`po-row`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`disclaimerLabel`,`p-label`,`Disclaimer Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerValue`,`p-label`,`Disclaimer Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerProperty`,`p-label`,`Disclaimer Property`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerHideClose`,`p-label`,`Disclaimer Hide Close`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Disclaimer`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,n){if(a&1){let s=YO();Qc(0,`po-disclaimer-group`,2),vt(`p-change`,function(){return n.changeEvent(`p-change`)}),Kg(),vu(1,`po-divider`),Qc(2,`div`,3),vu(3,`po-info`,4),Kg(),vu(4,`po-divider`),Qc(5,`form`,null,0)(7,`div`,3)(8,`po-input`,5),z0(),Kb(`ngModelChange`,function(d){return B_(s),Tk(n.disclaimer.label,d)||(n.disclaimer.label=d),U_(d)}),Kg(),Qc(9,`po-input`,6),z0(),Kb(`ngModelChange`,function(d){return B_(s),Tk(n.disclaimer.value,d)||(n.disclaimer.value=d),U_(d)}),Kg()(),Qc(10,`div`,3)(11,`po-input`,7),z0(),Kb(`ngModelChange`,function(d){return B_(s),Tk(n.disclaimer.property,d)||(n.disclaimer.property=d),U_(d)}),Kg(),Qc(12,`po-switch`,8),z0(),Kb(`ngModelChange`,function(d){return B_(s),Tk(n.disclaimer.hideClose,d)||(n.disclaimer.hideClose=d),U_(d)}),Kg()(),Qc(13,`div`,3)(14,`po-button`,9),vt(`p-click`,function(){return n.addDisclaimer()}),Kg()()(),vu(15,`po-divider`),Qc(16,`form`,null,1)(18,`div`,3)(19,`po-input`,10),z0(),Kb(`ngModelChange`,function(d){return B_(s),Tk(n.title,d)||(n.title=d),U_(d)}),Kg(),Qc(20,`po-checkbox-group`,11),z0(),Kb(`ngModelChange`,function(d){return B_(s),Tk(n.properties,d)||(n.properties=d),U_(d)}),Kg()(),Qc(21,`div`,3)(22,`po-button`,12),vt(`p-click`,function(){B_(s);let d=ik(6),ye=ik(17);return d.reset(),ye.reset(),U_(n.restore())}),Kg()()()}if(a&2){let s=ik(6);Rb(`p-disclaimers`,n.disclaimers)(`p-hide-remove-all`,n.properties?.includes(`hideRemoveAll`))(`p-title`,n.title),wg(3),Rb(`p-value`,n.event),wg(5),Yb(`ngModel`,n.disclaimer.label),W0(),wg(),Yb(`ngModel`,n.disclaimer.value),W0(),wg(2),Yb(`ngModel`,n.disclaimer.property),W0(),wg(),Yb(`ngModel`,n.disclaimer.hideClose),W0(),wg(2),Rb(`p-disabled`,s.invalid),wg(5),Yb(`ngModel`,n.title),W0(),wg(),Yb(`ngModel`,n.properties),Rb(`p-options`,n.propertiesOptions),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,oi,P4,Nf,I4,j4,R4,Joe],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o});var be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-disclaimer-group-labs-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-disclaimer-group-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Disclaimer Group Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-disclaimer-group
  [p-disclaimers]="disclaimers"
  [p-hide-remove-all]="properties?.includes('hideRemoveAll')"
  [p-title]="title"
  (p-change)="changeEvent('p-change')"
>
</po-disclaimer-group>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #disclaimerForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="disclaimerLabel" [(ngModel)]="disclaimer.label" p-label="Disclaimer Label">
    </po-input>

    <po-input
      class="po-md-6"
      name="disclaimerValue"
      [(ngModel)]="disclaimer.value"
      p-label="Disclaimer Value"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="disclaimerProperty" [(ngModel)]="disclaimer.property" p-label="Disclaimer Property">
    </po-input>

    <po-switch
      class="po-md-6"
      name="disclaimerHideClose"
      [(ngModel)]="disclaimer.hideClose"
      p-label="Disclaimer Hide Close"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6 po-lg-3"
      p-label="Add Disclaimer"
      [p-disabled]="disclaimerForm.invalid"
      (p-click)="addDisclaimer()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #propertiesForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-clean p-label="Title"> </po-input>

    <po-checkbox-group
      class="po-md-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Sample Restore"
      (p-click)="disclaimerForm.reset(); propertiesForm.reset(); restore()"
    >
    </po-button>
  </div>
</form>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoDisclaimer } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-disclaimer-group-labs',
  templateUrl: './sample-po-disclaimer-group-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDisclaimerGroupLabsComponent implements OnInit {
  disclaimer: PoDisclaimer;
  disclaimers: Array<PoDisclaimer>;
  event: string;
  properties: Array<string> = [];
  title: string;

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'hideRemoveAll', label: 'Hide remove all' }];

  ngOnInit() {
    this.restore();
  }

  addDisclaimer() {
    this.disclaimers = [...this.disclaimers, this.disclaimer];

    this.disclaimer = { value: undefined };
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.disclaimer = { value: undefined };
    this.disclaimers = [];

    this.event = '';
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-disclaimer-group-labs`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Me,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,he],encapsulation:2,changeDetection:1})}return o})();var U=(()=>{class o{http=p(kI);getClimates(){return[{value:`arid`,label:`Arid`},{value:`frozen`,label:`Frozen`},{value:`murky`,label:`Murky`},{value:`temperate`,label:`Temperate`},{value:`tropical`,label:`Tropical`}]}getColumns(){return[{property:`name`,label:`Planet Name`},{property:`climate`,label:`Climate`},{property:`terrain`,label:`Terrain`},{property:`surface_water`,label:`Surface Water`},{property:`gravity`,label:`Gravity`},{property:`population`,label:`Population`,type:`number`}]}getItems(){return this.http.get(`https://swapi.dev/api/planets/`).pipe(Y(l=>l.results))}getTerrains(){return[{value:`barren`,label:`Barren`},{value:`cityscape`,label:`Cityscape`},{value:`desert`,label:`Desert`},{value:`forests`,label:`Forests`},{value:`gas giant`,label:`Gas giant`},{value:`grasslands`,label:`Grasslands`},{value:`grassy hills`,label:`Grassy hills`},{value:`ice caves`,label:`Ice caves`},{value:`jungles`,label:`Jungles`},{value:`lakes`,label:`Lakes`},{value:`mountain ranges`,label:`Mountain ranges`},{value:`mountains`,label:`Mountains`},{value:`ocean`,label:`Ocean`},{value:`rainforests`,label:`Rainforests`},{value:`rock`,label:`Rock`},{value:`swamp`,label:`Swamp`},{value:`tundra`,label:`Tundra`}]}static ɵfac=function(a){return new(a||o)};static ɵprov=R({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var fe=(()=>{class o{disclaimerGroupSwPlanetsService=p(U);climate;columns;filteredItems=[];filters=[];items;name;terrain;climates;terrains;ngOnInit(){this.disclaimerGroupSwPlanetsService.getItems().subscribe(l=>{this.items=l,this.filteredItems=[...this.items]}),this.columns=this.disclaimerGroupSwPlanetsService.getColumns(),this.climates=this.disclaimerGroupSwPlanetsService.getClimates(),this.terrains=this.disclaimerGroupSwPlanetsService.getTerrains()}addFilter(l,a){let n=this.filters.find(s=>s.property===a);n?(this.filters.splice(this.filters.indexOf(n),1),n=Object.assign({},n)):n={property:a},n.value=l,n.label=`${a.charAt(0).toUpperCase()+a.slice(1)}: ${l}`,this.filters=[...this.filters,n]}changeFilters(l){l.length?this.filter(l):this.resetFilters(),this.clearFieldsIfNoFilter(`name`,`terrain`,`climate`)}clearFieldsIfNoFilter(...l){let a=s=>!this.filters.some(m=>m.property===s);l.filter(s=>this[s]&&a(s)).forEach(s=>this[s]=void 0)}filter(l){let a=(s,m)=>m[s.property].toLocaleLowerCase().includes(s.value.toLocaleLowerCase()),n=s=>l.every(m=>a(m,s));this.filteredItems=this.items.filter(n)}resetFilters(){this.filteredItems=[...this.items||[]]}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-disclaimer-group-sw-planets`]],standalone:!1,features:[we$1([U])],decls:8,vars:9,consts:[[1,`po-row`],[`name`,`name`,`p-help`,`Contains planet name`,`p-label`,`Planet Name`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`climate`,`p-help`,`Planet climate`,`p-label`,`Climate`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`terrain`,`p-help`,`Planet terrain`,`p-label`,`Terrain`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[3,`p-change`,`p-disclaimers`],[1,`po-md-12`,3,`p-columns`,`p-items`,`p-hide-table-search`]],template:function(a,n){a&1&&(Qc(0,`div`,0)(1,`po-input`,1),z0(),Kb(`ngModelChange`,function(m){return Tk(n.name,m)||(n.name=m),m}),vt(`p-change`,function(){return n.addFilter(n.name,`name`)}),Kg(),Qc(2,`po-combo`,2),z0(),Kb(`ngModelChange`,function(m){return Tk(n.climate,m)||(n.climate=m),m}),vt(`p-change`,function(){return n.addFilter(n.climate,`climate`)}),Kg(),Qc(3,`po-combo`,3),z0(),Kb(`ngModelChange`,function(m){return Tk(n.terrain,m)||(n.terrain=m),m}),vt(`p-change`,function(){return n.addFilter(n.terrain,`terrain`)}),Kg(),Qc(4,`po-disclaimer-group`,4),vt(`p-change`,function(){return n.changeFilters(n.filters)}),Kg()(),vu(5,`po-divider`),Qc(6,`div`,0),vu(7,`po-table`,5),Kg()),a&2&&(wg(),Yb(`ngModel`,n.name),W0(),wg(),Yb(`ngModel`,n.climate),Rb(`p-options`,n.climates),W0(),wg(),Yb(`ngModel`,n.terrain),Rb(`p-options`,n.terrains),W0(),wg(),Rb(`p-disclaimers`,n.filters),wg(3),Rb(`p-columns`,n.columns)(`p-items`,n.filteredItems)(`p-hide-table-search`,!1))},dependencies:[MZ,QL,P4,Nf,w4,j4,q4],encapsulation:2,changeDetection:1})}return o})();var Ie=o=>({"docs-sample-code-tabs":o});var ve=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-disclaimer-group-sw-planets-view`]],standalone:!1,decls:31,vars:6,consts:[[`id`,`sample-po-disclaimer-group-sw-planets`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.service.ts`,1,`docs-code-block`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Disclaimer Group - Star Wars Planets`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
  <po-input
    class="po-md-4"
    name="name"
    [(ngModel)]="name"
    p-help="Contains planet name"
    p-label="Planet Name"
    (p-change)="addFilter(name, 'name')"
  >
  </po-input>

  <po-combo
    class="po-md-4"
    name="climate"
    [(ngModel)]="climate"
    p-help="Planet climate"
    p-label="Climate"
    [p-options]="climates"
    (p-change)="addFilter(climate, 'climate')"
  >
  </po-combo>

  <po-combo
    class="po-md-4"
    [(ngModel)]="terrain"
    name="terrain"
    p-help="Planet terrain"
    p-label="Terrain"
    [p-options]="terrains"
    (p-change)="addFilter(terrain, 'terrain')"
  >
  </po-combo>

  <po-disclaimer-group [p-disclaimers]="filters" (p-change)="changeFilters(filters)"> </po-disclaimer-group>
</div>

<po-divider />

<div class="po-row">
  <po-table class="po-md-12" [p-columns]="columns" [p-items]="filteredItems" [p-hide-table-search]="false"> </po-table>
</div>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoComboOption, PoDisclaimer, PoTableColumn } from '@po-ui/ng-components';

import { SamplePoDisclaimerGroupSwPlanetsService } from './sample-po-disclaimer-group-sw-planets.service';

@Component({
  selector: 'sample-po-disclaimer-group-sw-planets',
  templateUrl: './sample-po-disclaimer-group-sw-planets.component.html',
  providers: [SamplePoDisclaimerGroupSwPlanetsService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDisclaimerGroupSwPlanetsComponent implements OnInit {
  disclaimerGroupSwPlanetsService = inject(SamplePoDisclaimerGroupSwPlanetsService);

  climate: string;
  columns: Array<PoTableColumn>;
  filteredItems: Array<any> = [];
  filters: Array<PoDisclaimer> = [];
  items: Array<any>;
  name: string;
  terrain: string;

  public climates: Array<PoComboOption>;
  public terrains: Array<PoComboOption>;

  ngOnInit() {
    this.disclaimerGroupSwPlanetsService.getItems().subscribe(items => {
      this.items = items;
      this.filteredItems = [...this.items];
    });
    this.columns = this.disclaimerGroupSwPlanetsService.getColumns();
    this.climates = this.disclaimerGroupSwPlanetsService.getClimates();
    this.terrains = this.disclaimerGroupSwPlanetsService.getTerrains();
  }

  addFilter(value: any, property: string) {
    let filter = this.filters.find(item => item.property === property);

    if (!filter) {
      filter = <any>{ property: property };
    } else {
      this.filters.splice(this.filters.indexOf(filter), 1);
      filter = Object.assign({}, filter);
    }

    filter.value = value;
    filter.label = \`\${property.charAt(0).toUpperCase() + property.slice(1)}: \${value}\`;
    this.filters = [...this.filters, filter];
  }

  changeFilters(filters: Array<PoDisclaimer>) {
    filters.length ? this.filter(filters) : this.resetFilters();
    this.clearFieldsIfNoFilter('name', 'terrain', 'climate');
  }

  private clearFieldsIfNoFilter(...fields: Array<string>) {
    const fieldHaveNoFilter = field => !this.filters.some(filter => filter.property === field);

    const fieldsWithoutFilter = fields.filter(field => this[field] && fieldHaveNoFilter(field));

    fieldsWithoutFilter.forEach(field => (this[field] = undefined));
  }

  private filter(filters: Array<PoDisclaimer>) {
    const filterCondition = (filter, item) =>
      item[filter.property].toLocaleLowerCase().includes(filter.value.toLocaleLowerCase());
    const filterItems = item => filters.every(filter => filterCondition(filter, item));

    this.filteredItems = this.items.filter(filterItems);
  }

  private resetFilters() {
    this.filteredItems = [...(this.items || [])];
  }
}
`),Kg()(),Qc(23,`label`,6),Sk(24,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.service.ts`),Kg(),Qc(25,`div`,12)(26,`pre`,11),Sk(27,`import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PoComboOption, PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoDisclaimerGroupSwPlanetsService {
  private http = inject(HttpClient);

  getClimates(): Array<PoComboOption> {
    return [
      { value: 'arid', label: 'Arid' },
      { value: 'frozen', label: 'Frozen' },
      { value: 'murky', label: 'Murky' },
      { value: 'temperate', label: 'Temperate' },
      { value: 'tropical', label: 'Tropical' }
    ];
  }

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'name', label: 'Planet Name' },
      { property: 'climate', label: 'Climate' },
      { property: 'terrain', label: 'Terrain' },
      { property: 'surface_water', label: 'Surface Water' },
      { property: 'gravity', label: 'Gravity' },
      { property: 'population', label: 'Population', type: 'number' }
    ];
  }

  getItems(): Observable<Array<any>> {
    return this.http.get('https://swapi.dev/api/planets/').pipe(map((response: any) => response.results));
  }

  getTerrains(): Array<PoComboOption> {
    return [
      { value: 'barren', label: 'Barren' },
      { value: 'cityscape', label: 'Cityscape' },
      { value: 'desert', label: 'Desert' },
      { value: 'forests', label: 'Forests' },
      { value: 'gas giant', label: 'Gas giant' },
      { value: 'grasslands', label: 'Grasslands' },
      { value: 'grassy hills', label: 'Grassy hills' },
      { value: 'ice caves', label: 'Ice caves' },
      { value: 'jungles', label: 'Jungles' },
      { value: 'lakes', label: 'Lakes' },
      { value: 'mountain ranges', label: 'Mountain ranges' },
      { value: 'mountains', label: 'Mountains' },
      { value: 'ocean', label: 'Ocean' },
      { value: 'rainforests', label: 'Rainforests' },
      { value: 'rock', label: 'Rock' },
      { value: 'swamp', label: 'Swamp' },
      { value: 'tundra', label: 'Tundra' }
    ];
  }
}
`),Kg()()()()()(),Qc(28,`div`,13),vu(29,`sample-po-disclaimer-group-sw-planets`),Kg(),vu(30,`hr`)),a&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ie,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,fe],encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-disclaimer-group-doc`]],standalone:!1,decls:369,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-disclaimer-group-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-page-list`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-disclaimers`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimer[]`],[`id`,`prop-p-hide-remove-all`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`event-p-remove`,1,`docs-api-properties-row`],[`id`,`event-p-remove-all`,1,`docs-api-properties-row`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`interface-po-disclaimer`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-disclaimer-hide-close`,1,`docs-api-properties-row`],[`id`,`interface-po-disclaimer-label`,1,`docs-api-properties-row`],[`id`,`interface-po-disclaimer-property`,1,`docs-api-properties-row`],[`id`,`interface-po-disclaimer-value`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`any`],[`id`,`interface-po-disclaimer-group-remove-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-disclaimer-group-remove-action-current-disclaimers`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDisclaimer>`],[`id`,`interface-po-disclaimer-group-remove-action-removed-disclaimer`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimer`]],template:function(a,n){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoDisclaimerGroupModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-disclaimer-group.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoDisclaimerGroupComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`O componente `),Qc(15,`code`),Sk(16,`po-disclaimer-group`),Kg(),Sk(17,` é recomendado para manipular palavras-chave de filtros aplicados em uma pesquisa.`),Kg(),Qc(18,`p`),Sk(19,`À partir de dois `),Qc(20,`em`),Sk(21,`disclaimers`),Kg(),Sk(22,` com o botão `),Qc(23,`strong`),Sk(24,`fechar`),Kg(),Sk(25,` habilitado, o componente renderiza de forma autom\xE1tica um novo e destacado
`),Qc(26,`em`),Sk(27,`disclaimer`),Kg(),Sk(28,` que possibilita `),Qc(29,`strong`),Sk(30,`remover todos`),Kg(),Sk(31,`, mas que também pode ser desabilitado.`),Kg(),Qc(32,`p`),Sk(33,`Também é possível navegar entre os `),Qc(34,`em`),Sk(35,`disclaimers`),Kg(),Sk(36,` através do teclado utilizando a tecla `),Qc(37,`em`),Sk(38,`tab`),Kg(),Sk(39,` e, para remoção do `),Qc(40,`em`),Sk(41,`disclaimer`),Kg(),Sk(42,` selecionado,
basta pressionar a tecla `),Qc(43,`em`),Sk(44,`enter`),Kg(),Sk(45,`. Esta funcionalidade não se aplica caso a propriedade `),Qc(46,`code`),Sk(47,`hideClose`),Kg(),Sk(48,` estiver habilitada.`),Kg(),Qc(49,`blockquote`)(50,`p`),Sk(51,`Veja a integração destas funcionalidade no componente `),Qc(52,`a`,6),Sk(53,`po-page-list`),Kg(),Sk(54,`. `),Kg()()(),Qc(55,`div`,7)(56,`h4`,8),Sk(57,`Seletor`),Kg(),Qc(58,`pre`,9),Sk(59,`<po-disclaimer-group
    (p-change)="EventEmitter"
    p-disclaimers="PoDisclaimer[]"
    p-hide-remove-all="boolean"
    (p-remove)="EventEmitter"
    (p-remove-all)="EventEmitter"
    p-title="string" >
</po-disclaimer-group>
`),Kg()(),Qc(60,`h4`,10),Sk(61,`Propriedades`),Kg(),Qc(62,`table`,11)(63,`tr`,12)(64,`th`,13),Sk(65,`Nome`),Kg(),Qc(66,`th`,13),Sk(67,`Tipo`),Kg(),Qc(68,`th`,13),Sk(69,`Padrão`),Kg(),Qc(70,`th`,13),Sk(71,`Descrição`),Kg()(),Qc(72,`tr`,14)(73,`td`,15)(74,`div`,16)(75,`span`,17),Sk(76,` (p-change)`),vu(77,`br`),Kg()()(),Qc(78,`td`,18)(79,`code`,19),Sk(80,`EventEmitter`),Kg()(),Qc(81,`td`,20),Sk(82,`-`),Kg(),Qc(83,`td`,21)(84,`em`)(85,`strong`),Sk(86,`(opcional)`),Kg()(),Qc(87,`p`),Sk(88,`Função que será disparada quando a lista de `),Qc(89,`em`),Sk(90,`disclaimers`),Kg(),Sk(91,` for modificada.`),Kg()()(),Qc(92,`tr`,22)(93,`td`,15)(94,`div`,23)(95,`span`,24),Sk(96,` p-disclaimers`),vu(97,`br`),Kg()()(),Qc(98,`td`,18)(99,`code`,25),Sk(100,`PoDisclaimer[]`),Kg()(),Qc(101,`td`,20),Sk(102,`-`),Kg(),Qc(103,`td`,21)(104,`p`),Sk(105,`Lista de `),Qc(106,`em`),Sk(107,`disclaimers`),Kg(),Sk(108,`.`),Kg(),Qc(109,`p`),Sk(110,`Para que a lista de `),Qc(111,`em`),Sk(112,`disclaimers`),Kg(),Sk(113,` seja atualizada dinamicamente deve-se passar uma nova referência do array de `),Qc(114,`code`),Sk(115,`PoDisclaimer`),Kg(),Sk(116,`.`),Kg(),Qc(117,`p`),Sk(118,`Exemplo adicionando um `),Qc(119,`em`),Sk(120,`disclaimer`),Kg(),Sk(121,` no array:`),Kg(),Qc(122,`pre`)(123,`code`),Sk(124,`this.disclaimers = [...this.disclaimers, disclaimer];
`),Kg()(),Qc(125,`p`),Sk(126,`ou`),Kg(),Qc(127,`pre`)(128,`code`),Sk(129,`this.disclaimers = this.disclaimers.concat(disclaimer);
`),Kg()()()(),Qc(130,`tr`,26)(131,`td`,15)(132,`div`,23)(133,`span`,24),Sk(134,` p-hide-remove-all`),vu(135,`br`),Kg()()(),Qc(136,`td`,18)(137,`code`,27),Sk(138,`boolean`),Kg()(),Qc(139,`td`,20)(140,`p`)(141,`code`),Sk(142,`false`),Kg()()(),Qc(143,`td`,21)(144,`em`)(145,`strong`),Sk(146,`(opcional)`),Kg()(),Qc(147,`p`),Sk(148,`Oculta o botão para remover todos os `),Qc(149,`em`),Sk(150,`disclaimers`),Kg(),Sk(151,` do grupo.`),Kg(),Qc(152,`blockquote`)(153,`p`),Sk(154,`Por padrão, o mesmo é exibido à partir de dois ou mais `),Qc(155,`em`),Sk(156,`disclaimers`),Kg(),Sk(157,` com a opção `),Qc(158,`code`),Sk(159,`hideClose`),Kg(),Sk(160,` habilitada.`),Kg()()()(),Qc(161,`tr`,28)(162,`td`,15)(163,`div`,16)(164,`span`,17),Sk(165,` (p-remove)`),vu(166,`br`),Kg()()(),Qc(167,`td`,18)(168,`code`,19),Sk(169,`EventEmitter`),Kg()(),Qc(170,`td`,20),Sk(171,`-`),Kg(),Qc(172,`td`,21)(173,`em`)(174,`strong`),Sk(175,`(opcional)`),Kg()(),Qc(176,`p`),Sk(177,`Função que será disparada quando um `),Qc(178,`em`),Sk(179,`disclaimer`),Kg(),Sk(180,` for removido da lista de `),Qc(181,`em`),Sk(182,`disclaimers`),Kg(),Sk(183,` pelo usuário.`),Kg(),Qc(184,`p`),Sk(185,`Recebe como parâmetro um objeto conforme a interface `),Qc(186,`code`),Sk(187,`PoDisclaimerGroupRemoveAction`),Kg(),Sk(188,`.`),Kg()()(),Qc(189,`tr`,29)(190,`td`,15)(191,`div`,16)(192,`span`,17),Sk(193,` (p-remove-all)`),vu(194,`br`),Kg()()(),Qc(195,`td`,18)(196,`code`,19),Sk(197,`EventEmitter`),Kg()(),Qc(198,`td`,20),Sk(199,`-`),Kg(),Qc(200,`td`,21)(201,`em`)(202,`strong`),Sk(203,`(opcional)`),Kg()(),Qc(204,`p`),Sk(205,`Função que será disparada quando todos os `),Qc(206,`em`),Sk(207,`disclaimers`),Kg(),Sk(208,` forem removidos da lista de `),Qc(209,`em`),Sk(210,`disclaimers`),Kg(),Sk(211,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),Kg(),Qc(212,`p`),Sk(213,`Recebe como parâmetro uma lista contendo todos os `),Qc(214,`code`),Sk(215,`disclaimers`),Kg(),Sk(216,` removidos.`),Kg()()(),Qc(217,`tr`,30)(218,`td`,15)(219,`div`,23)(220,`span`,24),Sk(221,` p-title`),vu(222,`br`),Kg()()(),Qc(223,`td`,18)(224,`code`,31),Sk(225,`string`),Kg()(),Qc(226,`td`,20),Sk(227,`-`),Kg(),Qc(228,`td`,21)(229,`em`)(230,`strong`),Sk(231,`(opcional)`),Kg()(),Qc(232,`p`),Sk(233,`Título do grupo de `),Qc(234,`em`),Sk(235,`disclaimers`),Kg(),Sk(236,`.`),Kg()()()(),Qc(237,`h3`),Sk(238,`Interfaces`),Kg(),Qc(239,`h4`,32)(240,`code`,5),Sk(241,`PoDisclaimer`),Kg()(),Qc(242,`div`,2)(243,`p`),Sk(244,`Interface que representa o objeto `),Qc(245,`code`),Sk(246,`po-disclaimer`),Kg(),Sk(247,`.`),Kg()(),Qc(248,`h4`,10),Sk(249,`Propriedades`),Kg(),Qc(250,`table`,11)(251,`tr`,12)(252,`th`,13),Sk(253,`Nome`),Kg(),Qc(254,`th`,13),Sk(255,`Tipo`),Kg(),Qc(256,`th`,13),Sk(257,`Descrição`),Kg()(),Qc(258,`tr`,33)(259,`td`,15)(260,`div`,23)(261,`span`,24),Sk(262,` hideClose`),vu(263,`br`),Kg()()(),Qc(264,`td`,18)(265,`code`,27),Sk(266,`boolean`),Kg()(),Qc(267,`td`,21)(268,`em`)(269,`strong`),Sk(270,`(opcional)`),Kg()(),Qc(271,`p`),Sk(272,`Se verdadeiro, oculta o botão para fechar o `),Qc(273,`em`),Sk(274,`disclaimer`),Kg(),Sk(275,`.`),Kg()()(),Qc(276,`tr`,34)(277,`td`,15)(278,`div`,23)(279,`span`,24),Sk(280,` label`),vu(281,`br`),Kg()()(),Qc(282,`td`,18)(283,`code`,31),Sk(284,`string`),Kg()(),Qc(285,`td`,21)(286,`em`)(287,`strong`),Sk(288,`(opcional)`),Kg()(),Qc(289,`p`),Sk(290,`Texto de exibição do objeto.`),Kg()()(),Qc(291,`tr`,35)(292,`td`,15)(293,`div`,23)(294,`span`,24),Sk(295,` property`),vu(296,`br`),Kg()()(),Qc(297,`td`,18)(298,`code`,31),Sk(299,`string`),Kg()(),Qc(300,`td`,21)(301,`em`)(302,`strong`),Sk(303,`(opcional)`),Kg()(),Qc(304,`p`),Sk(305,`Nome da propriedade vinculada ao objeto `),Qc(306,`em`),Sk(307,`disclaimer`),Kg(),Sk(308,`.`),Kg()()(),Qc(309,`tr`,36)(310,`td`,15)(311,`div`,23)(312,`span`,24),Sk(313,` value`),vu(314,`br`),Kg()()(),Qc(315,`td`,18)(316,`code`,37),Sk(317,`any`),Kg()(),Qc(318,`td`,21)(319,`p`),Sk(320,`Valor do objeto.`),Kg()()()(),Qc(321,`h4`,38)(322,`code`,5),Sk(323,`PoDisclaimerGroupRemoveAction`),Kg()(),Qc(324,`div`,2)(325,`p`),Sk(326,`Estrutura do objeto representando o estado dos `),Qc(327,`em`),Sk(328,`disclaimers`),Kg(),Sk(329,` após a remoção.`),Kg()(),Qc(330,`h4`,10),Sk(331,`Propriedades`),Kg(),Qc(332,`table`,11)(333,`tr`,12)(334,`th`,13),Sk(335,`Nome`),Kg(),Qc(336,`th`,13),Sk(337,`Tipo`),Kg(),Qc(338,`th`,13),Sk(339,`Descrição`),Kg()(),Qc(340,`tr`,39)(341,`td`,15)(342,`div`,23)(343,`span`,24),Sk(344,` currentDisclaimers`),vu(345,`br`),Kg()()(),Qc(346,`td`,18)(347,`code`,40),Sk(348,`Array<PoDisclaimer>`),Kg()(),Qc(349,`td`,21)(350,`p`),Sk(351,`Lista com os `),Qc(352,`em`),Sk(353,`disclaimers`),Kg(),Sk(354,` atuais (restantes).`),Kg()()(),Qc(355,`tr`,41)(356,`td`,15)(357,`div`,23)(358,`span`,24),Sk(359,` removedDisclaimer`),vu(360,`br`),Kg()()(),Qc(361,`td`,18)(362,`code`,42),Sk(363,`PoDisclaimer`),Kg()(),Qc(364,`td`,21)(365,`p`)(366,`em`),Sk(367,`Disclaimer`),Kg(),Sk(368,` que foi removido.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Ve(o,We){if(o&1){let l=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(l);let n=ek();return U_(n.changeTab(`web`))}),vu(1,`sample-po-disclaimer-group-basic-view`)(2,`sample-po-disclaimer-group-labs-view`)(3,`sample-po-disclaimer-group-sw-planets-view`),Kg()}if(o&2){let l=ek();Rb(`p-active`,l.activeTab===`web`)}}var Oe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Disclaimer Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,n){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Ve,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),vu(4,`sample-po-disclaimer-group-doc`),Kg()()()),a&2&&(Rb(`p-actions`,n.actions),wg(2),VO(n.hidePoWebSample?-1:2),wg(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Mze,tre,are,ge,be,ve,Se],encapsulation:2,changeDetection:1})}return o})()}];var Ee=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[GV.forChild(Oe),GV]})}return o})();var Et=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[M,Ee]})}return o})();export{Et as DocPoDisclaimerGroupModule};