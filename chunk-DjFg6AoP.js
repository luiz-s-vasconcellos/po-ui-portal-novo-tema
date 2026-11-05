import{$r as RK,Ai as Zn,Br as MK,C as G4,Ca as o0,Ci as Xx,Ia as rg,Ii as ab,Jr as Ok,Ka as vx,La as sb,Li as b,Mi as __,Mn as ure,Nr as I1,Oa as pe,Pa as r0,Qa as xF,Ra as uO,Sa as nu,Si as Ww,Sn as ri,Tr as Fx,Ua as v_,Xa as wg,Ya as we,Z as P4,_ as D4,_r as Dx,_t as Vze,aa as ir,ca as jc,ci as T,di as UE,ea as h,fr as DO,ha as lO,ii as SK,ir as Ax,ji as _O,ln as lre,mt as V4,oi as Sn,ri as SF,rr as Ag,sr as Bx,ut as U4,wi as Y,wt as Xoe,x as Ff,ya as mt,za as ue,zn as x4}from"./chunk-CtaZqRb_.js";import{n as P,t as M}from"./main-ZQ7GH27Y.js";var Pe=()=>({value:`disclaimer`});var De=o=>[o];var ce=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-disclaimer-group-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-disclaimers`]],template:function(a,n){a&1&&nu(0,`po-disclaimer-group`,0),a&2&&UE(`p-disclaimers`,DO(2,De,_O(1,Pe)))},dependencies:[D4],encapsulation:2,changeDetection:1})}return o})();var xe=o=>({"docs-sample-code-tabs":o});var ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-disclaimer-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Disclaimer Group Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-disclaimer-group [p-disclaimers]="[{ value: 'disclaimer' }]"></po-disclaimer-group>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-disclaimer-group-basic',
  templateUrl: './sample-po-disclaimer-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDisclaimerGroupBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-disclaimer-group-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,xe,n.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,ce],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{disclaimer;disclaimers;event;properties=[];title;propertiesOptions=[{value:`hideRemoveAll`,label:`Hide remove all`}];ngOnInit(){this.restore()}addDisclaimer(){this.disclaimers=[...this.disclaimers,this.disclaimer],this.disclaimer={value:void 0}}changeEvent(l){this.event=l}restore(){this.disclaimer={value:void 0},this.disclaimers=[],this.event=``}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-disclaimer-group-labs`]],standalone:!1,decls:23,vars:12,consts:[[`disclaimerForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-change`,`p-disclaimers`,`p-hide-remove-all`,`p-title`],[1,`po-row`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`disclaimerLabel`,`p-label`,`Disclaimer Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerValue`,`p-label`,`Disclaimer Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerProperty`,`p-label`,`Disclaimer Property`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerHideClose`,`p-label`,`Disclaimer Hide Close`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Disclaimer`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,n){if(a&1){let s=Ax();jc(0,`po-disclaimer-group`,2),mt(`p-change`,function(){return n.changeEvent(`p-change`)}),wg(),nu(1,`po-divider`),jc(2,`div`,3),nu(3,`po-info`,4),wg(),nu(4,`po-divider`),jc(5,`form`,null,0)(7,`div`,3)(8,`po-input`,5),r0(),ab(`ngModelChange`,function(d){return v_(s),uO(n.disclaimer.label,d)||(n.disclaimer.label=d),__(d)}),wg(),jc(9,`po-input`,6),r0(),ab(`ngModelChange`,function(d){return v_(s),uO(n.disclaimer.value,d)||(n.disclaimer.value=d),__(d)}),wg()(),jc(10,`div`,3)(11,`po-input`,7),r0(),ab(`ngModelChange`,function(d){return v_(s),uO(n.disclaimer.property,d)||(n.disclaimer.property=d),__(d)}),wg(),jc(12,`po-switch`,8),r0(),ab(`ngModelChange`,function(d){return v_(s),uO(n.disclaimer.hideClose,d)||(n.disclaimer.hideClose=d),__(d)}),wg()(),jc(13,`div`,3)(14,`po-button`,9),mt(`p-click`,function(){return n.addDisclaimer()}),wg()()(),nu(15,`po-divider`),jc(16,`form`,null,1)(18,`div`,3)(19,`po-input`,10),r0(),ab(`ngModelChange`,function(d){return v_(s),uO(n.title,d)||(n.title=d),__(d)}),wg(),jc(20,`po-checkbox-group`,11),r0(),ab(`ngModelChange`,function(d){return v_(s),uO(n.properties,d)||(n.properties=d),__(d)}),wg()(),jc(21,`div`,3)(22,`po-button`,12),mt(`p-click`,function(){v_(s);let d=Bx(6),ye=Bx(17);return d.reset(),ye.reset(),__(n.restore())}),wg()()()}if(a&2){let s=Bx(6);UE(`p-disclaimers`,n.disclaimers)(`p-hide-remove-all`,n.properties?.includes(`hideRemoveAll`))(`p-title`,n.title),rg(3),UE(`p-value`,n.event),rg(5),sb(`ngModel`,n.disclaimer.label),o0(),rg(),sb(`ngModel`,n.disclaimer.value),o0(),rg(2),sb(`ngModel`,n.disclaimer.property),o0(),rg(),sb(`ngModel`,n.disclaimer.hideClose),o0(),rg(2),UE(`p-disabled`,s.invalid),rg(5),sb(`ngModel`,n.title),o0(),rg(),sb(`ngModel`,n.properties),UE(`p-options`,n.propertiesOptions),o0()}},dependencies:[RK,SK,MK,xF,SF,ri,D4,Ff,P4,G4,V4,Xoe],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o});var be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-disclaimer-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Disclaimer Group Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-disclaimer-group
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-disclaimer-group-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Me,n.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,he],encapsulation:2,changeDetection:1})}return o})();var z=(()=>{class o{http=h(Ww);getClimates(){return[{value:`arid`,label:`Arid`},{value:`frozen`,label:`Frozen`},{value:`murky`,label:`Murky`},{value:`temperate`,label:`Temperate`},{value:`tropical`,label:`Tropical`}]}getColumns(){return[{property:`name`,label:`Planet Name`},{property:`climate`,label:`Climate`},{property:`terrain`,label:`Terrain`},{property:`surface_water`,label:`Surface Water`},{property:`gravity`,label:`Gravity`},{property:`population`,label:`Population`,type:`number`}]}getItems(){return this.http.get(`https://swapi.dev/api/planets/`).pipe(Y(l=>l.results))}getTerrains(){return[{value:`barren`,label:`Barren`},{value:`cityscape`,label:`Cityscape`},{value:`desert`,label:`Desert`},{value:`forests`,label:`Forests`},{value:`gas giant`,label:`Gas giant`},{value:`grasslands`,label:`Grasslands`},{value:`grassy hills`,label:`Grassy hills`},{value:`ice caves`,label:`Ice caves`},{value:`jungles`,label:`Jungles`},{value:`lakes`,label:`Lakes`},{value:`mountain ranges`,label:`Mountain ranges`},{value:`mountains`,label:`Mountains`},{value:`ocean`,label:`Ocean`},{value:`rainforests`,label:`Rainforests`},{value:`rock`,label:`Rock`},{value:`swamp`,label:`Swamp`},{value:`tundra`,label:`Tundra`}]}static ɵfac=function(a){return new(a||o)};static ɵprov=T({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var Se=(()=>{class o{disclaimerGroupSwPlanetsService=h(z);climate;columns;filteredItems=[];filters=[];items;name;terrain;climates;terrains;ngOnInit(){this.disclaimerGroupSwPlanetsService.getItems().subscribe(l=>{this.items=l,this.filteredItems=[...this.items]}),this.columns=this.disclaimerGroupSwPlanetsService.getColumns(),this.climates=this.disclaimerGroupSwPlanetsService.getClimates(),this.terrains=this.disclaimerGroupSwPlanetsService.getTerrains()}addFilter(l,a){let n=this.filters.find(s=>s.property===a);n?(this.filters.splice(this.filters.indexOf(n),1),n=Object.assign({},n)):n={property:a},n.value=l,n.label=`${a.charAt(0).toUpperCase()+a.slice(1)}: ${l}`,this.filters=[...this.filters,n]}changeFilters(l){l.length?this.filter(l):this.resetFilters(),this.clearFieldsIfNoFilter(`name`,`terrain`,`climate`)}clearFieldsIfNoFilter(...l){let a=s=>!this.filters.some(p=>p.property===s);l.filter(s=>this[s]&&a(s)).forEach(s=>this[s]=void 0)}filter(l){let a=(s,p)=>p[s.property].toLocaleLowerCase().includes(s.value.toLocaleLowerCase()),n=s=>l.every(p=>a(p,s));this.filteredItems=this.items.filter(n)}resetFilters(){this.filteredItems=[...this.items||[]]}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-disclaimer-group-sw-planets`]],standalone:!1,features:[we([z])],decls:8,vars:9,consts:[[1,`po-row`],[`name`,`name`,`p-help`,`Contains planet name`,`p-label`,`Planet Name`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`climate`,`p-help`,`Planet climate`,`p-label`,`Climate`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`terrain`,`p-help`,`Planet terrain`,`p-label`,`Terrain`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[3,`p-change`,`p-disclaimers`],[1,`po-md-12`,3,`p-columns`,`p-items`,`p-hide-table-search`]],template:function(a,n){a&1&&(jc(0,`div`,0)(1,`po-input`,1),r0(),ab(`ngModelChange`,function(p){return uO(n.name,p)||(n.name=p),p}),mt(`p-change`,function(){return n.addFilter(n.name,`name`)}),wg(),jc(2,`po-combo`,2),r0(),ab(`ngModelChange`,function(p){return uO(n.climate,p)||(n.climate=p),p}),mt(`p-change`,function(){return n.addFilter(n.climate,`climate`)}),wg(),jc(3,`po-combo`,3),r0(),ab(`ngModelChange`,function(p){return uO(n.terrain,p)||(n.terrain=p),p}),mt(`p-change`,function(){return n.addFilter(n.terrain,`terrain`)}),wg(),jc(4,`po-disclaimer-group`,4),mt(`p-change`,function(){return n.changeFilters(n.filters)}),wg()(),nu(5,`po-divider`),jc(6,`div`,0),nu(7,`po-table`,5),wg()),a&2&&(rg(),sb(`ngModel`,n.name),o0(),rg(),sb(`ngModel`,n.climate),UE(`p-options`,n.climates),o0(),rg(),sb(`ngModel`,n.terrain),UE(`p-options`,n.terrains),o0(),rg(),UE(`p-disclaimers`,n.filters),rg(3),UE(`p-columns`,n.columns)(`p-items`,n.filteredItems)(`p-hide-table-search`,!1))},dependencies:[SK,xF,D4,Ff,x4,G4,U4],encapsulation:2,changeDetection:1})}return o})();var Le=o=>({"docs-sample-code-tabs":o});var fe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-disclaimer-group-sw-planets-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Disclaimer Group - Star Wars Planets`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg(),jc(21,`label`,6),lO(22,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.service.ts`),wg(),jc(23,`pre`,9),lO(24,`import { Injectable, inject } from '@angular/core';
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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-disclaimer-group-sw-planets`),wg(),nu(27,`hr`)),a&2&&(rg(5),Xx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Le,n.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,Se],encapsulation:2,changeDetection:1})}return o})();var ve=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-disclaimer-group-doc`]],standalone:!1,decls:369,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-page-list`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimer[]`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDisclaimer>`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimer`]],template:function(a,n){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoDisclaimerGroupModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente po-disclaimer-group.`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoDisclaimerGroupComponent`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`O componente `),jc(15,`code`),lO(16,`po-disclaimer-group`),wg(),lO(17,` é recomendado para manipular palavras-chave de filtros aplicados em uma pesquisa.`),wg(),jc(18,`p`),lO(19,`À partir de dois `),jc(20,`em`),lO(21,`disclaimers`),wg(),lO(22,` com o botão `),jc(23,`strong`),lO(24,`fechar`),wg(),lO(25,` habilitado, o componente renderiza de forma autom\xE1tica um novo e destacado
`),jc(26,`em`),lO(27,`disclaimer`),wg(),lO(28,` que possibilita `),jc(29,`strong`),lO(30,`remover todos`),wg(),lO(31,`, mas que também pode ser desabilitado.`),wg(),jc(32,`p`),lO(33,`Também é possível navegar entre os `),jc(34,`em`),lO(35,`disclaimers`),wg(),lO(36,` através do teclado utilizando a tecla `),jc(37,`em`),lO(38,`tab`),wg(),lO(39,` e, para remoção do `),jc(40,`em`),lO(41,`disclaimer`),wg(),lO(42,` selecionado,
basta pressionar a tecla `),jc(43,`em`),lO(44,`enter`),wg(),lO(45,`. Esta funcionalidade não se aplica caso a propriedade `),jc(46,`code`),lO(47,`hideClose`),wg(),lO(48,` estiver habilitada.`),wg(),jc(49,`blockquote`)(50,`p`),lO(51,`Veja a integração destas funcionalidade no componente `),jc(52,`a`,6),lO(53,`po-page-list`),wg(),lO(54,`. `),wg()()(),jc(55,`div`,7)(56,`h4`,8),lO(57,`Seletor`),wg(),jc(58,`pre`,9),lO(59,`<po-disclaimer-group
    (p-change)="EventEmitter"
    p-disclaimers="PoDisclaimer[]"
    p-hide-remove-all="boolean"
    (p-remove)="EventEmitter"
    (p-remove-all)="EventEmitter"
    p-title="string" >
</po-disclaimer-group>
`),wg()(),jc(60,`h4`,10),lO(61,`Propriedades`),wg(),jc(62,`table`,11)(63,`tr`,12)(64,`th`,13),lO(65,`Nome`),wg(),jc(66,`th`,13),lO(67,`Tipo`),wg(),jc(68,`th`,13),lO(69,`Padrão`),wg(),jc(70,`th`,13),lO(71,`Descrição`),wg()(),jc(72,`tr`,14)(73,`td`,15)(74,`div`,16)(75,`span`,17),lO(76,` (p-change)`),nu(77,`br`),wg()()(),jc(78,`td`,18)(79,`code`,19),lO(80,`EventEmitter`),wg()(),jc(81,`td`,20),lO(82,`-`),wg(),jc(83,`td`,21)(84,`em`)(85,`strong`),lO(86,`(opcional)`),wg()(),jc(87,`p`),lO(88,`Função que será disparada quando a lista de `),jc(89,`em`),lO(90,`disclaimers`),wg(),lO(91,` for modificada.`),wg()()(),jc(92,`tr`,14)(93,`td`,15)(94,`div`,22)(95,`span`,23),lO(96,` p-disclaimers`),nu(97,`br`),wg()()(),jc(98,`td`,18)(99,`code`,24),lO(100,`PoDisclaimer[]`),wg()(),jc(101,`td`,20),lO(102,`-`),wg(),jc(103,`td`,21)(104,`p`),lO(105,`Lista de `),jc(106,`em`),lO(107,`disclaimers`),wg(),lO(108,`.`),wg(),jc(109,`p`),lO(110,`Para que a lista de `),jc(111,`em`),lO(112,`disclaimers`),wg(),lO(113,` seja atualizada dinamicamente deve-se passar uma nova referência do array de `),jc(114,`code`),lO(115,`PoDisclaimer`),wg(),lO(116,`.`),wg(),jc(117,`p`),lO(118,`Exemplo adicionando um `),jc(119,`em`),lO(120,`disclaimer`),wg(),lO(121,` no array:`),wg(),jc(122,`pre`)(123,`code`),lO(124,`this.disclaimers = [...this.disclaimers, disclaimer];
`),wg()(),jc(125,`p`),lO(126,`ou`),wg(),jc(127,`pre`)(128,`code`),lO(129,`this.disclaimers = this.disclaimers.concat(disclaimer);
`),wg()()()(),jc(130,`tr`,14)(131,`td`,15)(132,`div`,22)(133,`span`,23),lO(134,` p-hide-remove-all`),nu(135,`br`),wg()()(),jc(136,`td`,18)(137,`code`,25),lO(138,`boolean`),wg()(),jc(139,`td`,20)(140,`p`)(141,`code`),lO(142,`false`),wg()()(),jc(143,`td`,21)(144,`em`)(145,`strong`),lO(146,`(opcional)`),wg()(),jc(147,`p`),lO(148,`Oculta o botão para remover todos os `),jc(149,`em`),lO(150,`disclaimers`),wg(),lO(151,` do grupo.`),wg(),jc(152,`blockquote`)(153,`p`),lO(154,`Por padrão, o mesmo é exibido à partir de dois ou mais `),jc(155,`em`),lO(156,`disclaimers`),wg(),lO(157,` com a opção `),jc(158,`code`),lO(159,`hideClose`),wg(),lO(160,` habilitada.`),wg()()()(),jc(161,`tr`,14)(162,`td`,15)(163,`div`,16)(164,`span`,17),lO(165,` (p-remove)`),nu(166,`br`),wg()()(),jc(167,`td`,18)(168,`code`,19),lO(169,`EventEmitter`),wg()(),jc(170,`td`,20),lO(171,`-`),wg(),jc(172,`td`,21)(173,`em`)(174,`strong`),lO(175,`(opcional)`),wg()(),jc(176,`p`),lO(177,`Função que será disparada quando um `),jc(178,`em`),lO(179,`disclaimer`),wg(),lO(180,` for removido da lista de `),jc(181,`em`),lO(182,`disclaimers`),wg(),lO(183,` pelo usuário.`),wg(),jc(184,`p`),lO(185,`Recebe como parâmetro um objeto conforme a interface `),jc(186,`code`),lO(187,`PoDisclaimerGroupRemoveAction`),wg(),lO(188,`.`),wg()()(),jc(189,`tr`,14)(190,`td`,15)(191,`div`,16)(192,`span`,17),lO(193,` (p-remove-all)`),nu(194,`br`),wg()()(),jc(195,`td`,18)(196,`code`,19),lO(197,`EventEmitter`),wg()(),jc(198,`td`,20),lO(199,`-`),wg(),jc(200,`td`,21)(201,`em`)(202,`strong`),lO(203,`(opcional)`),wg()(),jc(204,`p`),lO(205,`Função que será disparada quando todos os `),jc(206,`em`),lO(207,`disclaimers`),wg(),lO(208,` forem removidos da lista de `),jc(209,`em`),lO(210,`disclaimers`),wg(),lO(211,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),wg(),jc(212,`p`),lO(213,`Recebe como parâmetro uma lista contendo todos os `),jc(214,`code`),lO(215,`disclaimers`),wg(),lO(216,` removidos.`),wg()()(),jc(217,`tr`,14)(218,`td`,15)(219,`div`,22)(220,`span`,23),lO(221,` p-title`),nu(222,`br`),wg()()(),jc(223,`td`,18)(224,`code`,26),lO(225,`string`),wg()(),jc(226,`td`,20),lO(227,`-`),wg(),jc(228,`td`,21)(229,`em`)(230,`strong`),lO(231,`(opcional)`),wg()(),jc(232,`p`),lO(233,`Título do grupo de `),jc(234,`em`),lO(235,`disclaimers`),wg(),lO(236,`.`),wg()()()(),jc(237,`h3`),lO(238,`Interfaces`),wg(),jc(239,`h4`,27)(240,`code`,5),lO(241,`PoDisclaimer`),wg()(),jc(242,`div`,2)(243,`p`),lO(244,`Interface que representa o objeto `),jc(245,`code`),lO(246,`po-disclaimer`),wg(),lO(247,`.`),wg()(),jc(248,`h4`,10),lO(249,`Propriedades`),wg(),jc(250,`table`,11)(251,`tr`,12)(252,`th`,13),lO(253,`Nome`),wg(),jc(254,`th`,13),lO(255,`Tipo`),wg(),jc(256,`th`,13),lO(257,`Descrição`),wg()(),jc(258,`tr`,14)(259,`td`,15)(260,`div`,22)(261,`span`,23),lO(262,` hideClose`),nu(263,`br`),wg()()(),jc(264,`td`,18)(265,`code`,25),lO(266,`boolean`),wg()(),jc(267,`td`,21)(268,`em`)(269,`strong`),lO(270,`(opcional)`),wg()(),jc(271,`p`),lO(272,`Se verdadeiro, oculta o botão para fechar o `),jc(273,`em`),lO(274,`disclaimer`),wg(),lO(275,`.`),wg()()(),jc(276,`tr`,14)(277,`td`,15)(278,`div`,22)(279,`span`,23),lO(280,` label`),nu(281,`br`),wg()()(),jc(282,`td`,18)(283,`code`,26),lO(284,`string`),wg()(),jc(285,`td`,21)(286,`em`)(287,`strong`),lO(288,`(opcional)`),wg()(),jc(289,`p`),lO(290,`Texto de exibição do objeto.`),wg()()(),jc(291,`tr`,14)(292,`td`,15)(293,`div`,22)(294,`span`,23),lO(295,` property`),nu(296,`br`),wg()()(),jc(297,`td`,18)(298,`code`,26),lO(299,`string`),wg()(),jc(300,`td`,21)(301,`em`)(302,`strong`),lO(303,`(opcional)`),wg()(),jc(304,`p`),lO(305,`Nome da propriedade vinculada ao objeto `),jc(306,`em`),lO(307,`disclaimer`),wg(),lO(308,`.`),wg()()(),jc(309,`tr`,14)(310,`td`,15)(311,`div`,22)(312,`span`,23),lO(313,` value`),nu(314,`br`),wg()()(),jc(315,`td`,18)(316,`code`,28),lO(317,`any`),wg()(),jc(318,`td`,21)(319,`p`),lO(320,`Valor do objeto.`),wg()()()(),jc(321,`h4`,27)(322,`code`,5),lO(323,`PoDisclaimerGroupRemoveAction`),wg()(),jc(324,`div`,2)(325,`p`),lO(326,`Estrutura do objeto representando o estado dos `),jc(327,`em`),lO(328,`disclaimers`),wg(),lO(329,` após a remoção.`),wg()(),jc(330,`h4`,10),lO(331,`Propriedades`),wg(),jc(332,`table`,11)(333,`tr`,12)(334,`th`,13),lO(335,`Nome`),wg(),jc(336,`th`,13),lO(337,`Tipo`),wg(),jc(338,`th`,13),lO(339,`Descrição`),wg()(),jc(340,`tr`,14)(341,`td`,15)(342,`div`,22)(343,`span`,23),lO(344,` currentDisclaimers`),nu(345,`br`),wg()()(),jc(346,`td`,18)(347,`code`,29),lO(348,`Array<PoDisclaimer>`),wg()(),jc(349,`td`,21)(350,`p`),lO(351,`Lista com os `),jc(352,`em`),lO(353,`disclaimers`),wg(),lO(354,` atuais (restantes).`),wg()()(),jc(355,`tr`,14)(356,`td`,15)(357,`div`,22)(358,`span`,23),lO(359,` removedDisclaimer`),nu(360,`br`),wg()()(),jc(361,`td`,18)(362,`code`,30),lO(363,`PoDisclaimer`),wg()(),jc(364,`td`,21)(365,`p`)(366,`em`),lO(367,`Disclaimer`),wg(),lO(368,` que foi removido.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Ve(o,We){if(o&1){let l=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(l);let n=Fx();return __(n.changeTab(`web`))}),nu(1,`sample-po-disclaimer-group-basic-view`)(2,`sample-po-disclaimer-group-labs-view`)(3,`sample-po-disclaimer-group-sw-planets-view`),wg()}if(o&2){let l=Fx();UE(`p-active`,l.activeTab===`web`)}}var Oe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Disclaimer Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,n){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Ve,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return n.changeTab(`doc`)}),nu(4,`sample-po-disclaimer-group-doc`),wg()()()),a&2&&(UE(`p-actions`,n.actions),rg(2),Dx(n.hidePoWebSample?-1:2),rg(),UE(`p-active`,n.activeTab===`doc`))},dependencies:[Vze,lre,ure,ge,be,fe,ve],encapsulation:2,changeDetection:1})}return o})()}];var Ee=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[I1.forChild(Oe),I1]})}return o})();var St=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[M,Ee]})}return o})();export{St as DocPoDisclaimerGroupModule};