import{m as P,p as M}from"./main-ZE6YMYJ4.js";import{Ba as q0,Br as Kb,Ci as U_,Dn as tre,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,I as Joe,Ia as p,Ii as Y,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,M as I4,Mi as WL,Na as ok,Oi as Vk,Pr as I,Q as P4,Qn as AZ,Tr as G0,Vr as Kg,W as Mze,Wr as LO,Ya as tk,_a as jO,_i as RZ,_n as q4,ca as ge$1,ea as de$1,er as Ab,fn as oi,gi as R,jn as w4,jr as H_,li as QL,no as we,nt as R4,qr as Mk,ri as PI,ro as wg,so as xZ,tn as j4,tr as An,vi as Rk,xa as jk,zr as KO}from"./chunk-CTJH0VS3.js";var Se=()=>({value:`disclaimer`});var Ee=o=>[o];var pe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-disclaimer-group-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-disclaimers`]],template:function(a,n){a&1&&_u(0,`po-disclaimer-group`,0),a&2&&Ab(`p-disclaimers`,jk(2,Ee,Vk(1,Se)))},dependencies:[P4],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-disclaimer-group-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-disclaimer-group-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Disclaimer Group Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-disclaimer-group-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-disclaimer-group [p-disclaimers]="[{ value: 'disclaimer' }]"></po-disclaimer-group>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-disclaimer-group-basic',
  templateUrl: './sample-po-disclaimer-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDisclaimerGroupBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,pe],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{disclaimer;disclaimers;event;properties=[];title;propertiesOptions=[{value:`hideRemoveAll`,label:`Hide remove all`}];ngOnInit(){this.restore()}addDisclaimer(){this.disclaimers=[...this.disclaimers,this.disclaimer],this.disclaimer={value:void 0}}changeEvent(r){this.event=r}restore(){this.disclaimer={value:void 0},this.disclaimers=[],this.event=``}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-disclaimer-group-labs`]],standalone:!1,decls:23,vars:12,consts:[[`disclaimerForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-change`,`p-disclaimers`,`p-hide-remove-all`,`p-title`],[1,`po-row`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`disclaimerLabel`,`p-label`,`Disclaimer Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerValue`,`p-label`,`Disclaimer Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerProperty`,`p-label`,`Disclaimer Property`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerHideClose`,`p-label`,`Disclaimer Hide Close`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Disclaimer`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,n){if(a&1){let s=KO();Jc(0,`po-disclaimer-group`,2),_t(`p-change`,function(){return n.changeEvent(`p-change`)}),Kg(),_u(1,`po-divider`),Jc(2,`div`,3),_u(3,`po-info`,4),Kg(),_u(4,`po-divider`),Jc(5,`form`,null,0)(7,`div`,3)(8,`po-input`,5),G0(),Zb(`ngModelChange`,function(m){return U_(s),Rk(n.disclaimer.label,m)||(n.disclaimer.label=m),H_(m)}),Kg(),Jc(9,`po-input`,6),G0(),Zb(`ngModelChange`,function(m){return U_(s),Rk(n.disclaimer.value,m)||(n.disclaimer.value=m),H_(m)}),Kg()(),Jc(10,`div`,3)(11,`po-input`,7),G0(),Zb(`ngModelChange`,function(m){return U_(s),Rk(n.disclaimer.property,m)||(n.disclaimer.property=m),H_(m)}),Kg(),Jc(12,`po-switch`,8),G0(),Zb(`ngModelChange`,function(m){return U_(s),Rk(n.disclaimer.hideClose,m)||(n.disclaimer.hideClose=m),H_(m)}),Kg()(),Jc(13,`div`,3)(14,`po-button`,9),_t(`p-click`,function(){return n.addDisclaimer()}),Kg()()(),_u(15,`po-divider`),Jc(16,`form`,null,1)(18,`div`,3)(19,`po-input`,10),G0(),Zb(`ngModelChange`,function(m){return U_(s),Rk(n.title,m)||(n.title=m),H_(m)}),Kg(),Jc(20,`po-checkbox-group`,11),G0(),Zb(`ngModelChange`,function(m){return U_(s),Rk(n.properties,m)||(n.properties=m),H_(m)}),Kg()(),Jc(21,`div`,3)(22,`po-button`,12),_t(`p-click`,function(){U_(s);let m=ok(6),ve=ok(17);return m.reset(),ve.reset(),H_(n.restore())}),Kg()()()}if(a&2){let s=ok(6);Ab(`p-disclaimers`,n.disclaimers)(`p-hide-remove-all`,n.properties?.includes(`hideRemoveAll`))(`p-title`,n.title),wg(3),Ab(`p-value`,n.event),wg(5),Kb(`ngModel`,n.disclaimer.label),q0(),wg(),Kb(`ngModel`,n.disclaimer.value),q0(),wg(2),Kb(`ngModel`,n.disclaimer.property),q0(),wg(),Kb(`ngModel`,n.disclaimer.hideClose),q0(),wg(2),Ab(`p-disabled`,s.invalid),wg(5),Kb(`ngModel`,n.title),q0(),wg(),Kb(`ngModel`,n.properties),Ab(`p-options`,n.propertiesOptions),q0()}},dependencies:[xZ,RZ,AZ,QL,WL,oi,P4,Nf,I4,j4,R4,Joe],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-disclaimer-group-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-disclaimer-group-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Disclaimer Group Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-disclaimer-group-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-disclaimer-group
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,de],encapsulation:2,changeDetection:1})}return o})();var H=(()=>{class o{http=p(PI);getClimates(){return[{value:`arid`,label:`Arid`},{value:`frozen`,label:`Frozen`},{value:`murky`,label:`Murky`},{value:`temperate`,label:`Temperate`},{value:`tropical`,label:`Tropical`}]}getColumns(){return[{property:`name`,label:`Planet Name`},{property:`climate`,label:`Climate`},{property:`terrain`,label:`Terrain`},{property:`surface_water`,label:`Surface Water`},{property:`gravity`,label:`Gravity`},{property:`population`,label:`Population`,type:`number`}]}getItems(){return this.http.get(`https://swapi.dev/api/planets/`).pipe(Y(r=>r.results))}getTerrains(){return[{value:`barren`,label:`Barren`},{value:`cityscape`,label:`Cityscape`},{value:`desert`,label:`Desert`},{value:`forests`,label:`Forests`},{value:`gas giant`,label:`Gas giant`},{value:`grasslands`,label:`Grasslands`},{value:`grassy hills`,label:`Grassy hills`},{value:`ice caves`,label:`Ice caves`},{value:`jungles`,label:`Jungles`},{value:`lakes`,label:`Lakes`},{value:`mountain ranges`,label:`Mountain ranges`},{value:`mountains`,label:`Mountains`},{value:`ocean`,label:`Ocean`},{value:`rainforests`,label:`Rainforests`},{value:`rock`,label:`Rock`},{value:`swamp`,label:`Swamp`},{value:`tundra`,label:`Tundra`}]}static ɵfac=function(a){return new(a||o)};static ɵprov=R({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var ue=(()=>{class o{disclaimerGroupSwPlanetsService=p(H);climate;columns;filteredItems=[];filters=[];items;name;terrain;climates;terrains;ngOnInit(){this.disclaimerGroupSwPlanetsService.getItems().subscribe(r=>{this.items=r,this.filteredItems=[...this.items]}),this.columns=this.disclaimerGroupSwPlanetsService.getColumns(),this.climates=this.disclaimerGroupSwPlanetsService.getClimates(),this.terrains=this.disclaimerGroupSwPlanetsService.getTerrains()}addFilter(r,a){let n=this.filters.find(s=>s.property===a);n?(this.filters.splice(this.filters.indexOf(n),1),n=Object.assign({},n)):n={property:a},n.value=r,n.label=`${a.charAt(0).toUpperCase()+a.slice(1)}: ${r}`,this.filters=[...this.filters,n]}changeFilters(r){r.length?this.filter(r):this.resetFilters(),this.clearFieldsIfNoFilter(`name`,`terrain`,`climate`)}clearFieldsIfNoFilter(...r){let a=s=>!this.filters.some(p=>p.property===s);r.filter(s=>this[s]&&a(s)).forEach(s=>this[s]=void 0)}filter(r){let a=(s,p)=>p[s.property].toLocaleLowerCase().includes(s.value.toLocaleLowerCase()),n=s=>r.every(p=>a(p,s));this.filteredItems=this.items.filter(n)}resetFilters(){this.filteredItems=[...this.items||[]]}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-disclaimer-group-sw-planets`]],standalone:!1,features:[we([H])],decls:8,vars:9,consts:[[1,`po-row`],[`name`,`name`,`p-help`,`Contains planet name`,`p-label`,`Planet Name`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`climate`,`p-help`,`Planet climate`,`p-label`,`Climate`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`terrain`,`p-help`,`Planet terrain`,`p-label`,`Terrain`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[3,`p-change`,`p-disclaimers`],[1,`po-md-12`,3,`p-columns`,`p-items`,`p-hide-table-search`]],template:function(a,n){a&1&&(Jc(0,`div`,0)(1,`po-input`,1),G0(),Zb(`ngModelChange`,function(p){return Rk(n.name,p)||(n.name=p),p}),_t(`p-change`,function(){return n.addFilter(n.name,`name`)}),Kg(),Jc(2,`po-combo`,2),G0(),Zb(`ngModelChange`,function(p){return Rk(n.climate,p)||(n.climate=p),p}),_t(`p-change`,function(){return n.addFilter(n.climate,`climate`)}),Kg(),Jc(3,`po-combo`,3),G0(),Zb(`ngModelChange`,function(p){return Rk(n.terrain,p)||(n.terrain=p),p}),_t(`p-change`,function(){return n.addFilter(n.terrain,`terrain`)}),Kg(),Jc(4,`po-disclaimer-group`,4),_t(`p-change`,function(){return n.changeFilters(n.filters)}),Kg()(),_u(5,`po-divider`),Jc(6,`div`,0),_u(7,`po-table`,5),Kg()),a&2&&(wg(),Kb(`ngModel`,n.name),q0(),wg(),Kb(`ngModel`,n.climate),Ab(`p-options`,n.climates),q0(),wg(),Kb(`ngModel`,n.terrain),Ab(`p-options`,n.terrains),q0(),wg(),Ab(`p-disclaimers`,n.filters),wg(3),Ab(`p-columns`,n.columns)(`p-items`,n.filteredItems)(`p-hide-table-search`,!1))},dependencies:[RZ,QL,P4,Nf,w4,j4,q4],encapsulation:2,changeDetection:1})}return o})();var ge=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-disclaimer-group-sw-planets-view`]],standalone:!1,decls:29,vars:0,consts:[[`id`,`sample-po-disclaimer-group-sw-planets`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.service.ts`,1,`docs-code-block`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Disclaimer Group - Star Wars Planets`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-disclaimer-group-sw-planets`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()(),Jc(23,`label`,7),Mk(24,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.service.ts`),Kg(),Jc(25,`div`,13)(26,`pre`,12),Mk(27,`import { Injectable, inject } from '@angular/core';
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
`),Kg()()()()()(),_u(28,`hr`))},dependencies:[P,tre,are,ue],encapsulation:2,changeDetection:1})}return o})();var be=(()=>{class o{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-disclaimer-group-doc`]],standalone:!1,decls:369,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-disclaimer-group-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-page-list`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-disclaimers`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimer[]`],[`id`,`prop-p-hide-remove-all`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`event-p-remove`,1,`docs-api-properties-row`],[`id`,`event-p-remove-all`,1,`docs-api-properties-row`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`interface-po-disclaimer`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-disclaimer-hide-close`,1,`docs-api-properties-row`],[`id`,`interface-po-disclaimer-label`,1,`docs-api-properties-row`],[`id`,`interface-po-disclaimer-property`,1,`docs-api-properties-row`],[`id`,`interface-po-disclaimer-value`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`any`],[`id`,`interface-po-disclaimer-group-remove-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-disclaimer-group-remove-action-current-disclaimers`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDisclaimer>`],[`id`,`interface-po-disclaimer-group-remove-action-removed-disclaimer`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimer`]],template:function(a,n){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoDisclaimerGroupModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-disclaimer-group.`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoDisclaimerGroupComponent`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,`O componente `),Jc(15,`code`),Mk(16,`po-disclaimer-group`),Kg(),Mk(17,` é recomendado para manipular palavras-chave de filtros aplicados em uma pesquisa.`),Kg(),Jc(18,`p`),Mk(19,`À partir de dois `),Jc(20,`em`),Mk(21,`disclaimers`),Kg(),Mk(22,` com o botão `),Jc(23,`strong`),Mk(24,`fechar`),Kg(),Mk(25,` habilitado, o componente renderiza de forma autom\xE1tica um novo e destacado
`),Jc(26,`em`),Mk(27,`disclaimer`),Kg(),Mk(28,` que possibilita `),Jc(29,`strong`),Mk(30,`remover todos`),Kg(),Mk(31,`, mas que também pode ser desabilitado.`),Kg(),Jc(32,`p`),Mk(33,`Também é possível navegar entre os `),Jc(34,`em`),Mk(35,`disclaimers`),Kg(),Mk(36,` através do teclado utilizando a tecla `),Jc(37,`em`),Mk(38,`tab`),Kg(),Mk(39,` e, para remoção do `),Jc(40,`em`),Mk(41,`disclaimer`),Kg(),Mk(42,` selecionado,
basta pressionar a tecla `),Jc(43,`em`),Mk(44,`enter`),Kg(),Mk(45,`. Esta funcionalidade não se aplica caso a propriedade `),Jc(46,`code`),Mk(47,`hideClose`),Kg(),Mk(48,` estiver habilitada.`),Kg(),Jc(49,`blockquote`)(50,`p`),Mk(51,`Veja a integração destas funcionalidade no componente `),Jc(52,`a`,6),Mk(53,`po-page-list`),Kg(),Mk(54,`. `),Kg()()(),Jc(55,`div`,7)(56,`h4`,8),Mk(57,`Seletor`),Kg(),Jc(58,`pre`,9),Mk(59,`<po-disclaimer-group
    (p-change)="EventEmitter"
    p-disclaimers="PoDisclaimer[]"
    p-hide-remove-all="boolean"
    (p-remove)="EventEmitter"
    (p-remove-all)="EventEmitter"
    p-title="string" >
</po-disclaimer-group>
`),Kg()(),Jc(60,`h4`,10),Mk(61,`Propriedades`),Kg(),Jc(62,`table`,11)(63,`tr`,12)(64,`th`,13),Mk(65,`Nome`),Kg(),Jc(66,`th`,13),Mk(67,`Tipo`),Kg(),Jc(68,`th`,13),Mk(69,`Padrão`),Kg(),Jc(70,`th`,13),Mk(71,`Descrição`),Kg()(),Jc(72,`tr`,14)(73,`td`,15)(74,`div`,16)(75,`span`,17),Mk(76,` (p-change)`),_u(77,`br`),Kg()()(),Jc(78,`td`,18)(79,`code`,19),Mk(80,`EventEmitter`),Kg()(),Jc(81,`td`,20),Mk(82,`-`),Kg(),Jc(83,`td`,21)(84,`em`)(85,`strong`),Mk(86,`(opcional)`),Kg()(),Jc(87,`p`),Mk(88,`Função que será disparada quando a lista de `),Jc(89,`em`),Mk(90,`disclaimers`),Kg(),Mk(91,` for modificada.`),Kg()()(),Jc(92,`tr`,22)(93,`td`,15)(94,`div`,23)(95,`span`,24),Mk(96,` p-disclaimers`),_u(97,`br`),Kg()()(),Jc(98,`td`,18)(99,`code`,25),Mk(100,`PoDisclaimer[]`),Kg()(),Jc(101,`td`,20),Mk(102,`-`),Kg(),Jc(103,`td`,21)(104,`p`),Mk(105,`Lista de `),Jc(106,`em`),Mk(107,`disclaimers`),Kg(),Mk(108,`.`),Kg(),Jc(109,`p`),Mk(110,`Para que a lista de `),Jc(111,`em`),Mk(112,`disclaimers`),Kg(),Mk(113,` seja atualizada dinamicamente deve-se passar uma nova referência do array de `),Jc(114,`code`),Mk(115,`PoDisclaimer`),Kg(),Mk(116,`.`),Kg(),Jc(117,`p`),Mk(118,`Exemplo adicionando um `),Jc(119,`em`),Mk(120,`disclaimer`),Kg(),Mk(121,` no array:`),Kg(),Jc(122,`pre`)(123,`code`),Mk(124,`this.disclaimers = [...this.disclaimers, disclaimer];
`),Kg()(),Jc(125,`p`),Mk(126,`ou`),Kg(),Jc(127,`pre`)(128,`code`),Mk(129,`this.disclaimers = this.disclaimers.concat(disclaimer);
`),Kg()()()(),Jc(130,`tr`,26)(131,`td`,15)(132,`div`,23)(133,`span`,24),Mk(134,` p-hide-remove-all`),_u(135,`br`),Kg()()(),Jc(136,`td`,18)(137,`code`,27),Mk(138,`boolean`),Kg()(),Jc(139,`td`,20)(140,`p`)(141,`code`),Mk(142,`false`),Kg()()(),Jc(143,`td`,21)(144,`em`)(145,`strong`),Mk(146,`(opcional)`),Kg()(),Jc(147,`p`),Mk(148,`Oculta o botão para remover todos os `),Jc(149,`em`),Mk(150,`disclaimers`),Kg(),Mk(151,` do grupo.`),Kg(),Jc(152,`blockquote`)(153,`p`),Mk(154,`Por padrão, o mesmo é exibido à partir de dois ou mais `),Jc(155,`em`),Mk(156,`disclaimers`),Kg(),Mk(157,` com a opção `),Jc(158,`code`),Mk(159,`hideClose`),Kg(),Mk(160,` habilitada.`),Kg()()()(),Jc(161,`tr`,28)(162,`td`,15)(163,`div`,16)(164,`span`,17),Mk(165,` (p-remove)`),_u(166,`br`),Kg()()(),Jc(167,`td`,18)(168,`code`,19),Mk(169,`EventEmitter`),Kg()(),Jc(170,`td`,20),Mk(171,`-`),Kg(),Jc(172,`td`,21)(173,`em`)(174,`strong`),Mk(175,`(opcional)`),Kg()(),Jc(176,`p`),Mk(177,`Função que será disparada quando um `),Jc(178,`em`),Mk(179,`disclaimer`),Kg(),Mk(180,` for removido da lista de `),Jc(181,`em`),Mk(182,`disclaimers`),Kg(),Mk(183,` pelo usuário.`),Kg(),Jc(184,`p`),Mk(185,`Recebe como parâmetro um objeto conforme a interface `),Jc(186,`code`),Mk(187,`PoDisclaimerGroupRemoveAction`),Kg(),Mk(188,`.`),Kg()()(),Jc(189,`tr`,29)(190,`td`,15)(191,`div`,16)(192,`span`,17),Mk(193,` (p-remove-all)`),_u(194,`br`),Kg()()(),Jc(195,`td`,18)(196,`code`,19),Mk(197,`EventEmitter`),Kg()(),Jc(198,`td`,20),Mk(199,`-`),Kg(),Jc(200,`td`,21)(201,`em`)(202,`strong`),Mk(203,`(opcional)`),Kg()(),Jc(204,`p`),Mk(205,`Função que será disparada quando todos os `),Jc(206,`em`),Mk(207,`disclaimers`),Kg(),Mk(208,` forem removidos da lista de `),Jc(209,`em`),Mk(210,`disclaimers`),Kg(),Mk(211,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),Kg(),Jc(212,`p`),Mk(213,`Recebe como parâmetro uma lista contendo todos os `),Jc(214,`code`),Mk(215,`disclaimers`),Kg(),Mk(216,` removidos.`),Kg()()(),Jc(217,`tr`,30)(218,`td`,15)(219,`div`,23)(220,`span`,24),Mk(221,` p-title`),_u(222,`br`),Kg()()(),Jc(223,`td`,18)(224,`code`,31),Mk(225,`string`),Kg()(),Jc(226,`td`,20),Mk(227,`-`),Kg(),Jc(228,`td`,21)(229,`em`)(230,`strong`),Mk(231,`(opcional)`),Kg()(),Jc(232,`p`),Mk(233,`Título do grupo de `),Jc(234,`em`),Mk(235,`disclaimers`),Kg(),Mk(236,`.`),Kg()()()(),Jc(237,`h3`),Mk(238,`Interfaces`),Kg(),Jc(239,`h4`,32)(240,`code`,5),Mk(241,`PoDisclaimer`),Kg()(),Jc(242,`div`,2)(243,`p`),Mk(244,`Interface que representa o objeto `),Jc(245,`code`),Mk(246,`po-disclaimer`),Kg(),Mk(247,`.`),Kg()(),Jc(248,`h4`,10),Mk(249,`Propriedades`),Kg(),Jc(250,`table`,11)(251,`tr`,12)(252,`th`,13),Mk(253,`Nome`),Kg(),Jc(254,`th`,13),Mk(255,`Tipo`),Kg(),Jc(256,`th`,13),Mk(257,`Descrição`),Kg()(),Jc(258,`tr`,33)(259,`td`,15)(260,`div`,23)(261,`span`,24),Mk(262,` hideClose`),_u(263,`br`),Kg()()(),Jc(264,`td`,18)(265,`code`,27),Mk(266,`boolean`),Kg()(),Jc(267,`td`,21)(268,`em`)(269,`strong`),Mk(270,`(opcional)`),Kg()(),Jc(271,`p`),Mk(272,`Se verdadeiro, oculta o botão para fechar o `),Jc(273,`em`),Mk(274,`disclaimer`),Kg(),Mk(275,`.`),Kg()()(),Jc(276,`tr`,34)(277,`td`,15)(278,`div`,23)(279,`span`,24),Mk(280,` label`),_u(281,`br`),Kg()()(),Jc(282,`td`,18)(283,`code`,31),Mk(284,`string`),Kg()(),Jc(285,`td`,21)(286,`em`)(287,`strong`),Mk(288,`(opcional)`),Kg()(),Jc(289,`p`),Mk(290,`Texto de exibição do objeto.`),Kg()()(),Jc(291,`tr`,35)(292,`td`,15)(293,`div`,23)(294,`span`,24),Mk(295,` property`),_u(296,`br`),Kg()()(),Jc(297,`td`,18)(298,`code`,31),Mk(299,`string`),Kg()(),Jc(300,`td`,21)(301,`em`)(302,`strong`),Mk(303,`(opcional)`),Kg()(),Jc(304,`p`),Mk(305,`Nome da propriedade vinculada ao objeto `),Jc(306,`em`),Mk(307,`disclaimer`),Kg(),Mk(308,`.`),Kg()()(),Jc(309,`tr`,36)(310,`td`,15)(311,`div`,23)(312,`span`,24),Mk(313,` value`),_u(314,`br`),Kg()()(),Jc(315,`td`,18)(316,`code`,37),Mk(317,`any`),Kg()(),Jc(318,`td`,21)(319,`p`),Mk(320,`Valor do objeto.`),Kg()()()(),Jc(321,`h4`,38)(322,`code`,5),Mk(323,`PoDisclaimerGroupRemoveAction`),Kg()(),Jc(324,`div`,2)(325,`p`),Mk(326,`Estrutura do objeto representando o estado dos `),Jc(327,`em`),Mk(328,`disclaimers`),Kg(),Mk(329,` após a remoção.`),Kg()(),Jc(330,`h4`,10),Mk(331,`Propriedades`),Kg(),Jc(332,`table`,11)(333,`tr`,12)(334,`th`,13),Mk(335,`Nome`),Kg(),Jc(336,`th`,13),Mk(337,`Tipo`),Kg(),Jc(338,`th`,13),Mk(339,`Descrição`),Kg()(),Jc(340,`tr`,39)(341,`td`,15)(342,`div`,23)(343,`span`,24),Mk(344,` currentDisclaimers`),_u(345,`br`),Kg()()(),Jc(346,`td`,18)(347,`code`,40),Mk(348,`Array<PoDisclaimer>`),Kg()(),Jc(349,`td`,21)(350,`p`),Mk(351,`Lista com os `),Jc(352,`em`),Mk(353,`disclaimers`),Kg(),Mk(354,` atuais (restantes).`),Kg()()(),Jc(355,`tr`,41)(356,`td`,15)(357,`div`,23)(358,`span`,24),Mk(359,` removedDisclaimer`),_u(360,`br`),Kg()()(),Jc(361,`td`,18)(362,`code`,42),Mk(363,`PoDisclaimer`),Kg()(),Jc(364,`td`,21)(365,`p`)(366,`em`),Mk(367,`Disclaimer`),Kg(),Mk(368,` que foi removido.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Me(o,Fe){if(o&1&&(Jc(0,`div`,1),_u(1,`sample-po-disclaimer-group-basic-view`)(2,`sample-po-disclaimer-group-labs-view`)(3,`sample-po-disclaimer-group-sw-planets-view`),Kg()),o&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var Te=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Disclaimer Group`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`,this.title=`Disclaimer Group · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(a,n){a&1&&(Jc(0,`po-page-default`,0),LO(1,Me,4,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-disclaimer-group-doc`),Kg()()),a&2&&(Ab(`p-title`,n.title)(`p-actions`,n.actions),wg(),jO(n.hidePoWebSample?-1:1),wg(),Ab(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,me,ce,ge,be],encapsulation:2,changeDetection:1})}return o})()}];var fe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[GV.forChild(Te),GV]})}return o})();var gt=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[M,fe]})}return o})();export{gt as DocPoDisclaimerGroupModule};