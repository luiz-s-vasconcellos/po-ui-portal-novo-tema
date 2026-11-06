import{$n as Ak,Ar as Ig,B as L4,Bn as x4,Cn as oi,Ct as Yoe,Dt as _4,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Hr as Me$1,Ia as sk,Ja as vt,Li as ZO,Ln as w4,Mi as Y,Mr as Jc,Ni as Y0,Ri as Zg,Rr as Kb,Ti as W0,Vi as _u,Xt as ere,Yi as eF,at as R4,ca as jk,da as kI,di as RZ,ea as ge$1,er as An,fi as Rb,gi as Tk,hi as TZ,ht as U4,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,rt as Qae,ui as R,va as nk,wa as p,xi as VO,ya as nm,yi as U_}from"./chunk-DvS_Nb_w.js";import{n as P,t as M}from"./main-HXZZSDJT.js";var Pe=()=>({value:`disclaimer`});var De=o=>[o];var ce=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-disclaimer-group-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-disclaimers`]],template:function(a,n){a&1&&_u(0,`po-disclaimer-group`,0),a&2&&Rb(`p-disclaimers`,Bk(2,De,jk(1,Pe)))},dependencies:[x4],encapsulation:2,changeDetection:1})}return o})();var xe=o=>({"docs-sample-code-tabs":o});var ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-disclaimer-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Disclaimer Group Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-disclaimer-group [p-disclaimers]="[{ value: 'disclaimer' }]"></po-disclaimer-group>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-disclaimer-group-basic',
  templateUrl: './sample-po-disclaimer-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDisclaimerGroupBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-disclaimer-group-basic`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,xe,n.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ce],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{disclaimer;disclaimers;event;properties=[];title;propertiesOptions=[{value:`hideRemoveAll`,label:`Hide remove all`}];ngOnInit(){this.restore()}addDisclaimer(){this.disclaimers=[...this.disclaimers,this.disclaimer],this.disclaimer={value:void 0}}changeEvent(l){this.event=l}restore(){this.disclaimer={value:void 0},this.disclaimers=[],this.event=``}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-disclaimer-group-labs`]],standalone:!1,decls:23,vars:12,consts:[[`disclaimerForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-change`,`p-disclaimers`,`p-hide-remove-all`,`p-title`],[1,`po-row`],[`p-label`,`Events`,1,`po-md-6`,3,`p-value`],[`name`,`disclaimerLabel`,`p-label`,`Disclaimer Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerValue`,`p-label`,`Disclaimer Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerProperty`,`p-label`,`Disclaimer Property`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disclaimerHideClose`,`p-label`,`Disclaimer Hide Close`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Disclaimer`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,n){if(a&1){let s=ZO();Jc(0,`po-disclaimer-group`,2),vt(`p-change`,function(){return n.changeEvent(`p-change`)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,3),_u(3,`po-info`,4),Zg(),_u(4,`po-divider`),Jc(5,`form`,null,0)(7,`div`,3)(8,`po-input`,5),W0(),Kb(`ngModelChange`,function(d){return U_(s),Ak(n.disclaimer.label,d)||(n.disclaimer.label=d),H_(d)}),Zg(),Jc(9,`po-input`,6),W0(),Kb(`ngModelChange`,function(d){return U_(s),Ak(n.disclaimer.value,d)||(n.disclaimer.value=d),H_(d)}),Zg()(),Jc(10,`div`,3)(11,`po-input`,7),W0(),Kb(`ngModelChange`,function(d){return U_(s),Ak(n.disclaimer.property,d)||(n.disclaimer.property=d),H_(d)}),Zg(),Jc(12,`po-switch`,8),W0(),Kb(`ngModelChange`,function(d){return U_(s),Ak(n.disclaimer.hideClose,d)||(n.disclaimer.hideClose=d),H_(d)}),Zg()(),Jc(13,`div`,3)(14,`po-button`,9),vt(`p-click`,function(){return n.addDisclaimer()}),Zg()()(),_u(15,`po-divider`),Jc(16,`form`,null,1)(18,`div`,3)(19,`po-input`,10),W0(),Kb(`ngModelChange`,function(d){return U_(s),Ak(n.title,d)||(n.title=d),H_(d)}),Zg(),Jc(20,`po-checkbox-group`,11),W0(),Kb(`ngModelChange`,function(d){return U_(s),Ak(n.properties,d)||(n.properties=d),H_(d)}),Zg()(),Jc(21,`div`,3)(22,`po-button`,12),vt(`p-click`,function(){U_(s);let d=sk(6),ye=sk(17);return d.reset(),ye.reset(),H_(n.restore())}),Zg()()()}if(a&2){let s=sk(6);Rb(`p-disclaimers`,n.disclaimers)(`p-hide-remove-all`,n.properties?.includes(`hideRemoveAll`))(`p-title`,n.title),Ig(3),Rb(`p-value`,n.event),Ig(5),Yb(`ngModel`,n.disclaimer.label),Y0(),Ig(),Yb(`ngModel`,n.disclaimer.value),Y0(),Ig(2),Yb(`ngModel`,n.disclaimer.property),Y0(),Ig(),Yb(`ngModel`,n.disclaimer.hideClose),Y0(),Ig(2),Rb(`p-disabled`,s.invalid),Ig(5),Yb(`ngModel`,n.title),Y0(),Ig(),Yb(`ngModel`,n.properties),Rb(`p-options`,n.propertiesOptions),Y0()}},dependencies:[NZ,TZ,RZ,JL,qL,oi,x4,Lf,w4,U4,L4,Yoe],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o});var be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-disclaimer-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Disclaimer Group Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-disclaimer-group
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-disclaimer-group-labs`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Me,n.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,he],encapsulation:2,changeDetection:1})}return o})();var z=(()=>{class o{http=p(kI);getClimates(){return[{value:`arid`,label:`Arid`},{value:`frozen`,label:`Frozen`},{value:`murky`,label:`Murky`},{value:`temperate`,label:`Temperate`},{value:`tropical`,label:`Tropical`}]}getColumns(){return[{property:`name`,label:`Planet Name`},{property:`climate`,label:`Climate`},{property:`terrain`,label:`Terrain`},{property:`surface_water`,label:`Surface Water`},{property:`gravity`,label:`Gravity`},{property:`population`,label:`Population`,type:`number`}]}getItems(){return this.http.get(`https://swapi.dev/api/planets/`).pipe(Y(l=>l.results))}getTerrains(){return[{value:`barren`,label:`Barren`},{value:`cityscape`,label:`Cityscape`},{value:`desert`,label:`Desert`},{value:`forests`,label:`Forests`},{value:`gas giant`,label:`Gas giant`},{value:`grasslands`,label:`Grasslands`},{value:`grassy hills`,label:`Grassy hills`},{value:`ice caves`,label:`Ice caves`},{value:`jungles`,label:`Jungles`},{value:`lakes`,label:`Lakes`},{value:`mountain ranges`,label:`Mountain ranges`},{value:`mountains`,label:`Mountains`},{value:`ocean`,label:`Ocean`},{value:`rainforests`,label:`Rainforests`},{value:`rock`,label:`Rock`},{value:`swamp`,label:`Swamp`},{value:`tundra`,label:`Tundra`}]}static ɵfac=function(a){return new(a||o)};static ɵprov=R({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var Se=(()=>{class o{disclaimerGroupSwPlanetsService=p(z);climate;columns;filteredItems=[];filters=[];items;name;terrain;climates;terrains;ngOnInit(){this.disclaimerGroupSwPlanetsService.getItems().subscribe(l=>{this.items=l,this.filteredItems=[...this.items]}),this.columns=this.disclaimerGroupSwPlanetsService.getColumns(),this.climates=this.disclaimerGroupSwPlanetsService.getClimates(),this.terrains=this.disclaimerGroupSwPlanetsService.getTerrains()}addFilter(l,a){let n=this.filters.find(s=>s.property===a);n?(this.filters.splice(this.filters.indexOf(n),1),n=Object.assign({},n)):n={property:a},n.value=l,n.label=`${a.charAt(0).toUpperCase()+a.slice(1)}: ${l}`,this.filters=[...this.filters,n]}changeFilters(l){l.length?this.filter(l):this.resetFilters(),this.clearFieldsIfNoFilter(`name`,`terrain`,`climate`)}clearFieldsIfNoFilter(...l){let a=s=>!this.filters.some(p=>p.property===s);l.filter(s=>this[s]&&a(s)).forEach(s=>this[s]=void 0)}filter(l){let a=(s,p)=>p[s.property].toLocaleLowerCase().includes(s.value.toLocaleLowerCase()),n=s=>l.every(p=>a(p,s));this.filteredItems=this.items.filter(n)}resetFilters(){this.filteredItems=[...this.items||[]]}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-disclaimer-group-sw-planets`]],standalone:!1,features:[Me$1([z])],decls:8,vars:9,consts:[[1,`po-row`],[`name`,`name`,`p-help`,`Contains planet name`,`p-label`,`Planet Name`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`climate`,`p-help`,`Planet climate`,`p-label`,`Climate`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`terrain`,`p-help`,`Planet terrain`,`p-label`,`Terrain`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[3,`p-change`,`p-disclaimers`],[1,`po-md-12`,3,`p-columns`,`p-items`,`p-hide-table-search`]],template:function(a,n){a&1&&(Jc(0,`div`,0)(1,`po-input`,1),W0(),Kb(`ngModelChange`,function(p){return Ak(n.name,p)||(n.name=p),p}),vt(`p-change`,function(){return n.addFilter(n.name,`name`)}),Zg(),Jc(2,`po-combo`,2),W0(),Kb(`ngModelChange`,function(p){return Ak(n.climate,p)||(n.climate=p),p}),vt(`p-change`,function(){return n.addFilter(n.climate,`climate`)}),Zg(),Jc(3,`po-combo`,3),W0(),Kb(`ngModelChange`,function(p){return Ak(n.terrain,p)||(n.terrain=p),p}),vt(`p-change`,function(){return n.addFilter(n.terrain,`terrain`)}),Zg(),Jc(4,`po-disclaimer-group`,4),vt(`p-change`,function(){return n.changeFilters(n.filters)}),Zg()(),_u(5,`po-divider`),Jc(6,`div`,0),_u(7,`po-table`,5),Zg()),a&2&&(Ig(),Yb(`ngModel`,n.name),Y0(),Ig(),Yb(`ngModel`,n.climate),Rb(`p-options`,n.climates),Y0(),Ig(),Yb(`ngModel`,n.terrain),Rb(`p-options`,n.terrains),Y0(),Ig(),Rb(`p-disclaimers`,n.filters),Ig(3),Rb(`p-columns`,n.columns)(`p-items`,n.filteredItems)(`p-hide-table-search`,!1))},dependencies:[TZ,JL,x4,Lf,_4,U4,R4],encapsulation:2,changeDetection:1})}return o})();var Le=o=>({"docs-sample-code-tabs":o});var fe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-disclaimer-group-sw-planets-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Disclaimer Group - Star Wars Planets`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { Injectable, inject } from '@angular/core';
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
`),Zg()()()()(),Jc(25,`div`,10),_u(26,`sample-po-disclaimer-group-sw-planets`),Zg(),_u(27,`hr`)),a&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Le,n.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Se],encapsulation:2,changeDetection:1})}return o})();var ve=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-disclaimer-group-doc`]],standalone:!1,decls:369,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-page-list`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimer[]`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDisclaimer>`],[`pan`,``,1,`docs-api-property-type`,`PoDisclaimer`]],template:function(a,n){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoDisclaimerGroupModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-disclaimer-group.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoDisclaimerGroupComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O componente `),Jc(15,`code`),Tk(16,`po-disclaimer-group`),Zg(),Tk(17,` é recomendado para manipular palavras-chave de filtros aplicados em uma pesquisa.`),Zg(),Jc(18,`p`),Tk(19,`À partir de dois `),Jc(20,`em`),Tk(21,`disclaimers`),Zg(),Tk(22,` com o botão `),Jc(23,`strong`),Tk(24,`fechar`),Zg(),Tk(25,` habilitado, o componente renderiza de forma autom\xE1tica um novo e destacado
`),Jc(26,`em`),Tk(27,`disclaimer`),Zg(),Tk(28,` que possibilita `),Jc(29,`strong`),Tk(30,`remover todos`),Zg(),Tk(31,`, mas que também pode ser desabilitado.`),Zg(),Jc(32,`p`),Tk(33,`Também é possível navegar entre os `),Jc(34,`em`),Tk(35,`disclaimers`),Zg(),Tk(36,` através do teclado utilizando a tecla `),Jc(37,`em`),Tk(38,`tab`),Zg(),Tk(39,` e, para remoção do `),Jc(40,`em`),Tk(41,`disclaimer`),Zg(),Tk(42,` selecionado,
basta pressionar a tecla `),Jc(43,`em`),Tk(44,`enter`),Zg(),Tk(45,`. Esta funcionalidade não se aplica caso a propriedade `),Jc(46,`code`),Tk(47,`hideClose`),Zg(),Tk(48,` estiver habilitada.`),Zg(),Jc(49,`blockquote`)(50,`p`),Tk(51,`Veja a integração destas funcionalidade no componente `),Jc(52,`a`,6),Tk(53,`po-page-list`),Zg(),Tk(54,`. `),Zg()()(),Jc(55,`div`,7)(56,`h4`,8),Tk(57,`Seletor`),Zg(),Jc(58,`pre`,9),Tk(59,`<po-disclaimer-group
    (p-change)="EventEmitter"
    p-disclaimers="PoDisclaimer[]"
    p-hide-remove-all="boolean"
    (p-remove)="EventEmitter"
    (p-remove-all)="EventEmitter"
    p-title="string" >
</po-disclaimer-group>
`),Zg()(),Jc(60,`h4`,10),Tk(61,`Propriedades`),Zg(),Jc(62,`table`,11)(63,`tr`,12)(64,`th`,13),Tk(65,`Nome`),Zg(),Jc(66,`th`,13),Tk(67,`Tipo`),Zg(),Jc(68,`th`,13),Tk(69,`Padrão`),Zg(),Jc(70,`th`,13),Tk(71,`Descrição`),Zg()(),Jc(72,`tr`,14)(73,`td`,15)(74,`div`,16)(75,`span`,17),Tk(76,` (p-change)`),_u(77,`br`),Zg()()(),Jc(78,`td`,18)(79,`code`,19),Tk(80,`EventEmitter`),Zg()(),Jc(81,`td`,20),Tk(82,`-`),Zg(),Jc(83,`td`,21)(84,`em`)(85,`strong`),Tk(86,`(opcional)`),Zg()(),Jc(87,`p`),Tk(88,`Função que será disparada quando a lista de `),Jc(89,`em`),Tk(90,`disclaimers`),Zg(),Tk(91,` for modificada.`),Zg()()(),Jc(92,`tr`,14)(93,`td`,15)(94,`div`,22)(95,`span`,23),Tk(96,` p-disclaimers`),_u(97,`br`),Zg()()(),Jc(98,`td`,18)(99,`code`,24),Tk(100,`PoDisclaimer[]`),Zg()(),Jc(101,`td`,20),Tk(102,`-`),Zg(),Jc(103,`td`,21)(104,`p`),Tk(105,`Lista de `),Jc(106,`em`),Tk(107,`disclaimers`),Zg(),Tk(108,`.`),Zg(),Jc(109,`p`),Tk(110,`Para que a lista de `),Jc(111,`em`),Tk(112,`disclaimers`),Zg(),Tk(113,` seja atualizada dinamicamente deve-se passar uma nova referência do array de `),Jc(114,`code`),Tk(115,`PoDisclaimer`),Zg(),Tk(116,`.`),Zg(),Jc(117,`p`),Tk(118,`Exemplo adicionando um `),Jc(119,`em`),Tk(120,`disclaimer`),Zg(),Tk(121,` no array:`),Zg(),Jc(122,`pre`)(123,`code`),Tk(124,`this.disclaimers = [...this.disclaimers, disclaimer];
`),Zg()(),Jc(125,`p`),Tk(126,`ou`),Zg(),Jc(127,`pre`)(128,`code`),Tk(129,`this.disclaimers = this.disclaimers.concat(disclaimer);
`),Zg()()()(),Jc(130,`tr`,14)(131,`td`,15)(132,`div`,22)(133,`span`,23),Tk(134,` p-hide-remove-all`),_u(135,`br`),Zg()()(),Jc(136,`td`,18)(137,`code`,25),Tk(138,`boolean`),Zg()(),Jc(139,`td`,20)(140,`p`)(141,`code`),Tk(142,`false`),Zg()()(),Jc(143,`td`,21)(144,`em`)(145,`strong`),Tk(146,`(opcional)`),Zg()(),Jc(147,`p`),Tk(148,`Oculta o botão para remover todos os `),Jc(149,`em`),Tk(150,`disclaimers`),Zg(),Tk(151,` do grupo.`),Zg(),Jc(152,`blockquote`)(153,`p`),Tk(154,`Por padrão, o mesmo é exibido à partir de dois ou mais `),Jc(155,`em`),Tk(156,`disclaimers`),Zg(),Tk(157,` com a opção `),Jc(158,`code`),Tk(159,`hideClose`),Zg(),Tk(160,` habilitada.`),Zg()()()(),Jc(161,`tr`,14)(162,`td`,15)(163,`div`,16)(164,`span`,17),Tk(165,` (p-remove)`),_u(166,`br`),Zg()()(),Jc(167,`td`,18)(168,`code`,19),Tk(169,`EventEmitter`),Zg()(),Jc(170,`td`,20),Tk(171,`-`),Zg(),Jc(172,`td`,21)(173,`em`)(174,`strong`),Tk(175,`(opcional)`),Zg()(),Jc(176,`p`),Tk(177,`Função que será disparada quando um `),Jc(178,`em`),Tk(179,`disclaimer`),Zg(),Tk(180,` for removido da lista de `),Jc(181,`em`),Tk(182,`disclaimers`),Zg(),Tk(183,` pelo usuário.`),Zg(),Jc(184,`p`),Tk(185,`Recebe como parâmetro um objeto conforme a interface `),Jc(186,`code`),Tk(187,`PoDisclaimerGroupRemoveAction`),Zg(),Tk(188,`.`),Zg()()(),Jc(189,`tr`,14)(190,`td`,15)(191,`div`,16)(192,`span`,17),Tk(193,` (p-remove-all)`),_u(194,`br`),Zg()()(),Jc(195,`td`,18)(196,`code`,19),Tk(197,`EventEmitter`),Zg()(),Jc(198,`td`,20),Tk(199,`-`),Zg(),Jc(200,`td`,21)(201,`em`)(202,`strong`),Tk(203,`(opcional)`),Zg()(),Jc(204,`p`),Tk(205,`Função que será disparada quando todos os `),Jc(206,`em`),Tk(207,`disclaimers`),Zg(),Tk(208,` forem removidos da lista de `),Jc(209,`em`),Tk(210,`disclaimers`),Zg(),Tk(211,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),Zg(),Jc(212,`p`),Tk(213,`Recebe como parâmetro uma lista contendo todos os `),Jc(214,`code`),Tk(215,`disclaimers`),Zg(),Tk(216,` removidos.`),Zg()()(),Jc(217,`tr`,14)(218,`td`,15)(219,`div`,22)(220,`span`,23),Tk(221,` p-title`),_u(222,`br`),Zg()()(),Jc(223,`td`,18)(224,`code`,26),Tk(225,`string`),Zg()(),Jc(226,`td`,20),Tk(227,`-`),Zg(),Jc(228,`td`,21)(229,`em`)(230,`strong`),Tk(231,`(opcional)`),Zg()(),Jc(232,`p`),Tk(233,`Título do grupo de `),Jc(234,`em`),Tk(235,`disclaimers`),Zg(),Tk(236,`.`),Zg()()()(),Jc(237,`h3`),Tk(238,`Interfaces`),Zg(),Jc(239,`h4`,27)(240,`code`,5),Tk(241,`PoDisclaimer`),Zg()(),Jc(242,`div`,2)(243,`p`),Tk(244,`Interface que representa o objeto `),Jc(245,`code`),Tk(246,`po-disclaimer`),Zg(),Tk(247,`.`),Zg()(),Jc(248,`h4`,10),Tk(249,`Propriedades`),Zg(),Jc(250,`table`,11)(251,`tr`,12)(252,`th`,13),Tk(253,`Nome`),Zg(),Jc(254,`th`,13),Tk(255,`Tipo`),Zg(),Jc(256,`th`,13),Tk(257,`Descrição`),Zg()(),Jc(258,`tr`,14)(259,`td`,15)(260,`div`,22)(261,`span`,23),Tk(262,` hideClose`),_u(263,`br`),Zg()()(),Jc(264,`td`,18)(265,`code`,25),Tk(266,`boolean`),Zg()(),Jc(267,`td`,21)(268,`em`)(269,`strong`),Tk(270,`(opcional)`),Zg()(),Jc(271,`p`),Tk(272,`Se verdadeiro, oculta o botão para fechar o `),Jc(273,`em`),Tk(274,`disclaimer`),Zg(),Tk(275,`.`),Zg()()(),Jc(276,`tr`,14)(277,`td`,15)(278,`div`,22)(279,`span`,23),Tk(280,` label`),_u(281,`br`),Zg()()(),Jc(282,`td`,18)(283,`code`,26),Tk(284,`string`),Zg()(),Jc(285,`td`,21)(286,`em`)(287,`strong`),Tk(288,`(opcional)`),Zg()(),Jc(289,`p`),Tk(290,`Texto de exibição do objeto.`),Zg()()(),Jc(291,`tr`,14)(292,`td`,15)(293,`div`,22)(294,`span`,23),Tk(295,` property`),_u(296,`br`),Zg()()(),Jc(297,`td`,18)(298,`code`,26),Tk(299,`string`),Zg()(),Jc(300,`td`,21)(301,`em`)(302,`strong`),Tk(303,`(opcional)`),Zg()(),Jc(304,`p`),Tk(305,`Nome da propriedade vinculada ao objeto `),Jc(306,`em`),Tk(307,`disclaimer`),Zg(),Tk(308,`.`),Zg()()(),Jc(309,`tr`,14)(310,`td`,15)(311,`div`,22)(312,`span`,23),Tk(313,` value`),_u(314,`br`),Zg()()(),Jc(315,`td`,18)(316,`code`,28),Tk(317,`any`),Zg()(),Jc(318,`td`,21)(319,`p`),Tk(320,`Valor do objeto.`),Zg()()()(),Jc(321,`h4`,27)(322,`code`,5),Tk(323,`PoDisclaimerGroupRemoveAction`),Zg()(),Jc(324,`div`,2)(325,`p`),Tk(326,`Estrutura do objeto representando o estado dos `),Jc(327,`em`),Tk(328,`disclaimers`),Zg(),Tk(329,` após a remoção.`),Zg()(),Jc(330,`h4`,10),Tk(331,`Propriedades`),Zg(),Jc(332,`table`,11)(333,`tr`,12)(334,`th`,13),Tk(335,`Nome`),Zg(),Jc(336,`th`,13),Tk(337,`Tipo`),Zg(),Jc(338,`th`,13),Tk(339,`Descrição`),Zg()(),Jc(340,`tr`,14)(341,`td`,15)(342,`div`,22)(343,`span`,23),Tk(344,` currentDisclaimers`),_u(345,`br`),Zg()()(),Jc(346,`td`,18)(347,`code`,29),Tk(348,`Array<PoDisclaimer>`),Zg()(),Jc(349,`td`,21)(350,`p`),Tk(351,`Lista com os `),Jc(352,`em`),Tk(353,`disclaimers`),Zg(),Tk(354,` atuais (restantes).`),Zg()()(),Jc(355,`tr`,14)(356,`td`,15)(357,`div`,22)(358,`span`,23),Tk(359,` removedDisclaimer`),_u(360,`br`),Zg()()(),Jc(361,`td`,18)(362,`code`,30),Tk(363,`PoDisclaimer`),Zg()(),Jc(364,`td`,21)(365,`p`)(366,`em`),Tk(367,`Disclaimer`),Zg(),Tk(368,` que foi removido.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Ve(o,We){if(o&1){let l=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(l);let n=nk();return H_(n.changeTab(`web`))}),_u(1,`sample-po-disclaimer-group-basic-view`)(2,`sample-po-disclaimer-group-labs-view`)(3,`sample-po-disclaimer-group-sw-planets-view`),Zg()}if(o&2){let l=nk();Rb(`p-active`,l.activeTab===`web`)}}var Oe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Disclaimer Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,n){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Ve,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),_u(4,`sample-po-disclaimer-group-doc`),Zg()()()),a&2&&(Rb(`p-actions`,n.actions),Ig(2),BO(n.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Tze,Qae,ere,ge,be,fe,ve],encapsulation:2,changeDetection:1})}return o})()}];var Ee=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[WV.forChild(Oe),WV]})}return o})();var St=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[M,Ee]})}return o})();export{St as DocPoDisclaimerGroupModule};