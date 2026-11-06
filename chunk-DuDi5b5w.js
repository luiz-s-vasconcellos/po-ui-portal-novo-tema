import{$n as Ak,Ar as Ig,B as L4,Cn as oi,Ct as Yoe,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Ja as vt,Li as ZO,Lt as aae,Mr as Jc,Ni as Y0,Ri as Zg,Rr as Kb,Ti as W0,Vi as _u,Xn as $O,Xt as ere,Yi as eF,di as RZ,ea as ge,er as An,fi as Rb,gi as Tk,hi as TZ,ht as U4,i as Ac,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,oo as zO,or as Bk,qi as de$1,qr as NZ,rt as Qae,va as nk,xi as VO,xr as Gb,ya as nm,yi as U_}from"./chunk-BQaN6dko.js";import{n as P,t as M}from"./main-SRPMFWZC.js";var ae=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-filter-chip-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Filter`]],template:function(o,l){o&1&&_u(0,`po-filter-chip`,0)},dependencies:[aae],encapsulation:2,changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n});var pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-filter-chip-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Filter Chip Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return l.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-filter-chip p-label="Filter"></po-filter-chip>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-filter-chip-basic',
  templateUrl: './sample-po-filter-chip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-filter-chip-basic`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+l.sampleCodeButtonIcon),Ig(),nm(` `,l.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ce,l.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ae],encapsulation:2,changeDetection:1})}return n})();var de=(()=>{class n{label;selected;disabled;event;model;ngOnInit(){this.restore()}onSelectedChange(a){this.selected=a.selected,this.model=JSON.stringify(a),this.event=`p-selected-change`}restore(){this.label=`Filter`,this.selected=!1,this.disabled=!1,this.event=``,this.model=``}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-filter-chip-labs`]],standalone:!1,decls:16,vars:8,consts:[[`f`,`ngForm`],[1,`po-row`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-label`,`Label`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`selected`,`p-label`,`Selected`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,l){if(o&1){let u=ZO();Jc(0,`div`,1)(1,`po-filter-chip`,2),vt(`p-selected-change`,function(c){return l.onSelectedChange(c)}),Zg()(),_u(2,`po-divider`),Jc(3,`div`,1),_u(4,`po-info`,3)(5,`po-info`,4),Zg(),_u(6,`po-divider`),Jc(7,`form`,null,0)(9,`div`,1)(10,`po-input`,5),W0(),Kb(`ngModelChange`,function(c){return U_(u),Ak(l.label,c)||(l.label=c),H_(c)}),Zg()(),Jc(11,`div`,1)(12,`po-switch`,6),W0(),Kb(`ngModelChange`,function(c){return U_(u),Ak(l.selected,c)||(l.selected=c),H_(c)}),Zg(),Jc(13,`po-switch`,7),W0(),Kb(`ngModelChange`,function(c){return U_(u),Ak(l.disabled,c)||(l.disabled=c),H_(c)}),Zg()(),Jc(14,`div`,1)(15,`po-button`,8),vt(`p-click`,function(){return l.restore()}),Zg()()()}o&2&&(Ig(),Rb(`p-label`,l.label)(`p-selected`,l.selected)(`p-disabled`,l.disabled),Ig(3),Rb(`p-value`,l.model),Ig(),Rb(`p-value`,l.event),Ig(5),Yb(`ngModel`,l.label),Y0(),Ig(2),Yb(`ngModel`,l.selected),Y0(),Ig(),Yb(`ngModel`,l.disabled),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,U4,L4,aae,Yoe],encapsulation:2,changeDetection:1})}return n})();var Ee=n=>({"docs-sample-code-tabs":n});var se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-filter-chip-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Filter Chip Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return l.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
  <po-filter-chip
    [p-label]="label"
    [p-selected]="selected"
    [p-disabled]="disabled"
    (p-selected-change)="onSelectedChange($event)"
  >
  </po-filter-chip>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="model"></po-info>
  <po-info class="po-md-6" p-label="Event" [p-value]="event"></po-info>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-4" name="label" [(ngModel)]="label" p-label="Label"></po-input>
  </div>

  <div class="po-row">
    <po-switch class="po-md-4" name="selected" [(ngModel)]="selected" p-label="Selected"></po-switch>
    <po-switch class="po-md-4" name="disabled" [(ngModel)]="disabled" p-label="Disabled"></po-switch>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"></po-button>
  </div>
</form>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PoFilterChipSelectedChange } from '@po-ui/ng-components/lib';

@Component({
  selector: 'sample-po-filter-chip-labs',
  templateUrl: './sample-po-filter-chip-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipLabsComponent implements OnInit {
  label: string;
  selected: boolean;
  disabled: boolean;
  event: string;
  model: string;

  ngOnInit() {
    this.restore();
  }

  onSelectedChange(event: PoFilterChipSelectedChange): void {
    this.selected = event.selected;
    this.model = JSON.stringify(event);
    this.event = 'p-selected-change';
  }

  restore() {
    this.label = 'Filter';
    this.selected = false;
    this.disabled = false;
    this.event = '';
    this.model = '';
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-filter-chip-labs`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+l.sampleCodeButtonIcon),Ig(),nm(` `,l.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ee,l.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,de],encapsulation:2,changeDetection:1})}return n})();var xe=(n,h)=>h.label;var Fe=(n,h)=>h.name;function ye(n,h){if(n&1){let a=ZO();Jc(0,`po-filter-chip`,7),vt(`p-selected-change`,function(l){U_(a);let u=nk();return H_(u.onFilterChange(l))}),Zg()}if(n&2){let a=h.$implicit;Rb(`p-label`,a.label)(`p-selected`,a.selected)}}function Pe(n,h){if(n&1&&(Jc(0,`div`,5)(1,`span`,8),Tk(2),Zg(),Jc(3,`span`,9),Tk(4),Zg()()),n&2){let a=h.$implicit;Ig(2),Gb(a.name),Ig(2),nm(`(`,a.category,`)`)}}function we(n,h){n&1&&(Jc(0,`div`,6)(1,`span`,10),Tk(2,`No products found.`),Zg()())}var me=(()=>{class n{filters=[{label:`Electronics`,selected:!1},{label:`Clothing`,selected:!1},{label:`Books`,selected:!1},{label:`Sports`,selected:!1}];products=[{name:`Laptop`,category:`Electronics`},{name:`Smartphone`,category:`Electronics`},{name:`T-Shirt`,category:`Clothing`},{name:`Sneakers`,category:`Clothing`},{name:`Novel`,category:`Books`},{name:`Cookbook`,category:`Books`},{name:`Basketball`,category:`Sports`},{name:`Tennis Racket`,category:`Sports`}];get filteredProducts(){let a=this.filters.filter(o=>o.selected).map(o=>o.label);return a.length===0?this.products:this.products.filter(o=>a.includes(o.category))}onFilterChange(a){let o=this.filters.find(l=>l.label===a.label);o&&(o.selected=a.selected)}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-filter-chip-filter-list`]],standalone:!1,decls:16,vars:2,consts:[[1,`po-row`],[1,`po-md-12`],[1,`po-font-subtitle`],[1,`po-mt-1`],[1,`po-mr-1`,3,`p-label`,`p-selected`],[1,`po-row`,`po-p-1`],[1,`po-row`,`po-p-2`],[1,`po-mr-1`,3,`p-selected-change`,`p-label`,`p-selected`],[1,`po-font-text-bold`,`po-mr-1`],[1,`po-font-text-small`],[1,`po-font-text`]],template:function(o,l){o&1&&(Jc(0,`div`,0)(1,`div`,1)(2,`p`,2),Tk(3,`Filter by category:`),Zg(),Jc(4,`div`,3),$O(5,ye,1,2,`po-filter-chip`,4,xe),Zg()()(),_u(7,`po-divider`),Jc(8,`div`,0)(9,`div`,1)(10,`p`,2),Tk(11),Zg(),Jc(12,`po-container`),$O(13,Pe,5,2,`div`,5,Fe,!1,we,3,0,`div`,6),Zg()()()),o&2&&(Ig(5),zO(l.filters),Ig(6),nm(`Products (`,l.filteredProducts.length,`):`),Ig(2),zO(l.filteredProducts))},dependencies:[Ac,Lf,aae],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n});var ce=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-filter-chip-filter-list-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Filter Chip - Filter List`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return l.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
  <div class="po-md-12">
    <p class="po-font-subtitle">Filter by category:</p>
    <div class="po-mt-1">
      @for (filter of filters; track filter.label) {
        <po-filter-chip
          class="po-mr-1"
          [p-label]="filter.label"
          [p-selected]="filter.selected"
          (p-selected-change)="onFilterChange($event)"
        >
        </po-filter-chip>
      }
    </div>
  </div>
</div>

<po-divider />

<div class="po-row">
  <div class="po-md-12">
    <p class="po-font-subtitle">Products ({ { filteredProducts.length }}):</p>
    <po-container>
      @for (product of filteredProducts; track product.name) {
        <div class="po-row po-p-1">
          <span class="po-font-text-bold po-mr-1">{ { product.name }}</span>
          <span class="po-font-text-small">({ { product.category }})</span>
        </div>
      } @empty {
        <div class="po-row po-p-2">
          <span class="po-font-text">No products found.</span>
        </div>
      }
    </po-container>
  </div>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoFilterChipSelectedChange } from '@po-ui/ng-components/lib';

interface FilterOption {
  label: string;
  selected: boolean;
}

interface Product {
  name: string;
  category: string;
}

@Component({
  selector: 'sample-po-filter-chip-filter-list',
  templateUrl: './sample-po-filter-chip-filter-list.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipFilterListComponent {
  filters: Array<FilterOption> = [
    { label: 'Electronics', selected: false },
    { label: 'Clothing', selected: false },
    { label: 'Books', selected: false },
    { label: 'Sports', selected: false }
  ];

  products: Array<Product> = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Smartphone', category: 'Electronics' },
    { name: 'T-Shirt', category: 'Clothing' },
    { name: 'Sneakers', category: 'Clothing' },
    { name: 'Novel', category: 'Books' },
    { name: 'Cookbook', category: 'Books' },
    { name: 'Basketball', category: 'Sports' },
    { name: 'Tennis Racket', category: 'Sports' }
  ];

  get filteredProducts(): Array<Product> {
    const activeFilters = this.filters.filter(f => f.selected).map(f => f.label);

    if (activeFilters.length === 0) {
      return this.products;
    }

    return this.products.filter(p => activeFilters.includes(p.category));
  }

  onFilterChange(event: PoFilterChipSelectedChange): void {
    const filter = this.filters.find(f => f.label === event.label);
    if (filter) {
      filter.selected = event.selected;
    }
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-filter-chip-filter-list`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+l.sampleCodeButtonIcon),Ig(),nm(` `,l.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Te,l.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,me],encapsulation:2,changeDetection:1})}return n})();var he=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-filter-chip-doc`]],standalone:!1,decls:390,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#listbox`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`undefined`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(o,l){o&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoFilterChipModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente `),Jc(7,`code`),Tk(8,`po-filter-chip`),Zg(),Tk(9,`.`),Zg()(),Jc(10,`h3`,3),Tk(11,`Componente`),Zg(),Jc(12,`h4`,4)(13,`code`,5),Tk(14,`PoFilterChipComponent`),Zg()(),Jc(15,`div`,2)(16,`p`),Tk(17,`O `),Jc(18,`code`),Tk(19,`po-filter-chip`),Zg(),Tk(20,` \xE9 um componente interativo que representa uma op\xE7\xE3o de filtro selecion\xE1vel na forma de chip.
O componente exibe um r\xF3tulo de texto e suporta tr\xEAs estados visuais: padr\xE3o (repouso), hover e selecionado.
No estado selecionado, um \xEDcone de check \xE9 exibido \xE0 esquerda do r\xF3tulo.`),Zg(),Jc(21,`h4`),Tk(22,`Boas práticas`),Zg(),Jc(23,`ul`)(24,`li`),Tk(25,`Utilize `),Jc(26,`code`),Tk(27,`labels`),Zg(),Tk(28,` curtos e descritivos para os filtros.`),Zg(),Jc(29,`li`),Tk(30,`Agrupe múltiplos `),Jc(31,`code`),Tk(32,`po-filter-chip`),Zg(),Tk(33,` para representar opções de filtragem relacionadas.`),Zg(),Jc(34,`li`),Tk(35,`Utilize a propriedade `),Jc(36,`code`),Tk(37,`p-disabled`),Zg(),Tk(38,` para filtros temporariamente indisponíveis.`),Zg()(),Jc(39,`h4`),Tk(40,`Acessibilidade tratada no componente`),Zg(),Jc(41,`p`),Tk(42,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),Zg(),Jc(43,`ul`)(44,`li`),Tk(45,`O componente possui `),Jc(46,`code`),Tk(47,`role="option"`),Zg(),Tk(48,` e `),Jc(49,`code`),Tk(50,`aria-selected`),Zg(),Tk(51,` refletindo o estado de seleção. `),Jc(52,`a`,6),Tk(53,`W3C WAI-ARIA 3.14 Listbox`),Zg()(),Jc(54,`li`),Tk(55,`Quando em foco, o chip é ativado usando as teclas de Espaço e Enter do teclado. `),Jc(56,`a`,7),Tk(57,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),Zg()()(),Jc(58,`h4`),Tk(59,`Tokens customizáveis`),Zg(),Jc(60,`p`),Tk(61,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(62,`blockquote`)(63,`p`),Tk(64,`Para maiores informações, acesse o guia `),Jc(65,`a`,8),Tk(66,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(67,`.`),Zg()(),Jc(68,`table`)(69,`thead`)(70,`tr`)(71,`th`),Tk(72,`Propriedade`),Zg(),Jc(73,`th`),Tk(74,`Descrição`),Zg(),Jc(75,`th`),Tk(76,`Valor Padrão`),Zg()()(),Jc(77,`tbody`)(78,`tr`)(79,`td`)(80,`code`),Tk(81,`--border-radius`),Zg()(),Jc(82,`td`),Tk(83,`Raio dos cantos do elemento`),Zg(),Jc(84,`td`)(85,`code`),Tk(86,`var(--border-radius-lg)`),Zg()()(),Jc(87,`tr`)(88,`td`)(89,`code`),Tk(90,`--border-width`),Zg()(),Jc(91,`td`),Tk(92,`Largura da borda`),Zg(),Jc(93,`td`)(94,`code`),Tk(95,`var(--border-width-sm)`),Zg()()(),Jc(96,`tr`)(97,`td`)(98,`code`),Tk(99,`--font-family`),Zg()(),Jc(100,`td`),Tk(101,`Família tipográfica`),Zg(),Jc(102,`td`)(103,`code`),Tk(104,`var(--font-family-theme)`),Zg()()(),Jc(105,`tr`)(106,`td`)(107,`code`),Tk(108,`--font-size`),Zg()(),Jc(109,`td`),Tk(110,`Tamanho da fonte`),Zg(),Jc(111,`td`)(112,`code`),Tk(113,`var(--font-size-default)`),Zg()()(),Jc(114,`tr`)(115,`td`)(116,`code`),Tk(117,`--font-weight`),Zg()(),Jc(118,`td`),Tk(119,`Peso da fonte`),Zg(),Jc(120,`td`)(121,`code`),Tk(122,`var(--font-weight-normal)`),Zg()()(),Jc(123,`tr`)(124,`td`)(125,`strong`),Tk(126,`Default`),Zg()(),_u(127,`td`)(128,`td`),Zg(),Jc(129,`tr`)(130,`td`)(131,`code`),Tk(132,`--border-color`),Zg()(),Jc(133,`td`),Tk(134,`Cor da borda no estado padrão`),Zg(),Jc(135,`td`)(136,`code`),Tk(137,`var(--color-neutral-light-20)`),Zg()()(),Jc(138,`tr`)(139,`td`)(140,`code`),Tk(141,`--text-color`),Zg()(),Jc(142,`td`),Tk(143,`Cor do texto no estado padrão`),Zg(),Jc(144,`td`)(145,`code`),Tk(146,`var(--color-neutral-dark-80)`),Zg()()(),Jc(147,`tr`)(148,`td`)(149,`code`),Tk(150,`--background-color`),Zg()(),Jc(151,`td`),Tk(152,`Cor de fundo no estado padrão`),Zg(),Jc(153,`td`)(154,`code`),Tk(155,`transparent`),Zg()()(),Jc(156,`tr`)(157,`td`)(158,`strong`),Tk(159,`Hover`),Zg()(),_u(160,`td`)(161,`td`),Zg(),Jc(162,`tr`)(163,`td`)(164,`code`),Tk(165,`--background-color-hover`),Zg()(),Jc(166,`td`),Tk(167,`Cor de fundo no estado hover`),Zg(),Jc(168,`td`)(169,`code`),Tk(170,`var(--color-brand-01-lightest)`),Zg()()(),Jc(171,`tr`)(172,`td`)(173,`code`),Tk(174,`--text-color-hover`),Zg()(),Jc(175,`td`),Tk(176,`Cor do texto no estado hover`),Zg(),Jc(177,`td`)(178,`code`),Tk(179,`var(--color-action-default)`),Zg()()(),Jc(180,`tr`)(181,`td`)(182,`strong`),Tk(183,`Selected`),Zg()(),_u(184,`td`)(185,`td`),Zg(),Jc(186,`tr`)(187,`td`)(188,`code`),Tk(189,`--background-color-selected`),Zg()(),Jc(190,`td`),Tk(191,`Cor de fundo no estado selecionado`),Zg(),Jc(192,`td`)(193,`code`),Tk(194,`var(--color-brand-01-lightest)`),Zg()()(),Jc(195,`tr`)(196,`td`)(197,`code`),Tk(198,`--border-color-selected`),Zg()(),Jc(199,`td`),Tk(200,`Cor da borda no estado selecionado`),Zg(),Jc(201,`td`)(202,`code`),Tk(203,`var(--color-brand-01-lighter)`),Zg()()(),Jc(204,`tr`)(205,`td`)(206,`code`),Tk(207,`--text-color-selected`),Zg()(),Jc(208,`td`),Tk(209,`Cor do texto no estado selecionado`),Zg(),Jc(210,`td`)(211,`code`),Tk(212,`var(--color-action-default)`),Zg()()(),Jc(213,`tr`)(214,`td`)(215,`code`),Tk(216,`--icon-color-selected`),Zg()(),Jc(217,`td`),Tk(218,`Cor do ícone no estado selecionado`),Zg(),Jc(219,`td`)(220,`code`),Tk(221,`var(--color-action-default)`),Zg()()(),Jc(222,`tr`)(223,`td`)(224,`strong`),Tk(225,`Disabled`),Zg()(),_u(226,`td`)(227,`td`),Zg(),Jc(228,`tr`)(229,`td`)(230,`code`),Tk(231,`--opacity-disabled`),Zg()(),Jc(232,`td`),Tk(233,`Opacidade no estado desabilitado`),Zg(),Jc(234,`td`)(235,`code`),Tk(236,`0.5`),Zg()()()()()(),Jc(237,`div`,9)(238,`h4`,10),Tk(239,`Seletor`),Zg(),Jc(240,`pre`,11),Tk(241,`<po-filter-chip
    p-disabled="boolean"
    p-label="string | undefined"
    p-selected="boolean"
    (p-selected-change)="EventEmitter" >
</po-filter-chip>
`),Zg()(),Jc(242,`h4`,12),Tk(243,`Propriedades`),Zg(),Jc(244,`table`,13)(245,`tr`,14)(246,`th`,15),Tk(247,`Nome`),Zg(),Jc(248,`th`,15),Tk(249,`Tipo`),Zg(),Jc(250,`th`,15),Tk(251,`Padrão`),Zg(),Jc(252,`th`,15),Tk(253,`Descrição`),Zg()(),Jc(254,`tr`,16)(255,`td`,17)(256,`div`,18)(257,`span`,19),Tk(258,` p-disabled`),_u(259,`br`),Zg()()(),Jc(260,`td`,20)(261,`code`,21),Tk(262,`boolean`),Zg()(),Jc(263,`td`,22)(264,`p`)(265,`code`),Tk(266,`false`),Zg()()(),Jc(267,`td`,23)(268,`em`)(269,`strong`),Tk(270,`(opcional)`),Zg()(),Jc(271,`p`),Tk(272,`Define se o chip está desabilitado, impedindo qualquer interação do usuário.`),Zg(),Jc(273,`p`),Tk(274,`Quando habilitado, o chip não responde a cliques nem a eventos de teclado (Enter/Space).`),Zg()()(),Jc(275,`tr`,16)(276,`td`,17)(277,`div`,18)(278,`span`,19),Tk(279,` p-label`),_u(280,`br`),Zg()()(),Jc(281,`td`,20)(282,`code`,24),Tk(283,`string `),Zg(),Jc(284,`code`,25),Tk(285,` undefined`),Zg()(),Jc(286,`td`,22),Tk(287,`-`),Zg(),Jc(288,`td`,23)(289,`em`)(290,`strong`),Tk(291,`(opcional)`),Zg()(),Jc(292,`p`),Tk(293,`Define o rótulo de texto exibido no chip.`),Zg()()(),Jc(294,`tr`,16)(295,`td`,17)(296,`div`,18)(297,`span`,19),Tk(298,` p-selected`),_u(299,`br`),Zg()()(),Jc(300,`td`,20)(301,`code`,21),Tk(302,`boolean`),Zg()(),Jc(303,`td`,22)(304,`p`)(305,`code`),Tk(306,`false`),Zg()()(),Jc(307,`td`,23)(308,`em`)(309,`strong`),Tk(310,`(opcional)`),Zg()(),Jc(311,`p`),Tk(312,`Define o estado de seleção do chip.`),Zg()()(),Jc(313,`tr`,16)(314,`td`,17)(315,`div`,26)(316,`span`,27),Tk(317,` (p-selected-change)`),_u(318,`br`),Zg()()(),Jc(319,`td`,20)(320,`code`,28),Tk(321,`EventEmitter`),Zg()(),Jc(322,`td`,22),Tk(323,`-`),Zg(),Jc(324,`td`,23)(325,`em`)(326,`strong`),Tk(327,`(opcional)`),Zg()(),Jc(328,`p`),Tk(329,`Evento disparado após a alteração do estado de seleção do `),Jc(330,`em`),Tk(331,`chip`),Zg(),Tk(332,`. Retorna o objeto PoFilterChipSelectedChange
modificado.`),Zg()()()(),Jc(333,`h3`),Tk(334,`Interfaces`),Zg(),Jc(335,`h4`,29)(336,`code`,5),Tk(337,`PoFilterChipSelectedChange`),Zg()(),Jc(338,`div`,2)(339,`p`),Tk(340,`Interface que define o objeto emitido pelo evento `),Jc(341,`code`),Tk(342,`p-selected-change`),Zg(),Tk(343,`.`),Zg()(),Jc(344,`h4`,12),Tk(345,`Propriedades`),Zg(),Jc(346,`table`,13)(347,`tr`,14)(348,`th`,15),Tk(349,`Nome`),Zg(),Jc(350,`th`,15),Tk(351,`Tipo`),Zg(),Jc(352,`th`,15),Tk(353,`Descrição`),Zg()(),Jc(354,`tr`,16)(355,`td`,17)(356,`div`,18)(357,`span`,19),Tk(358,` label`),_u(359,`br`),Zg()()(),Jc(360,`td`,20)(361,`code`,24),Tk(362,`string`),Zg()(),Jc(363,`td`,23)(364,`p`),Tk(365,`Rótulo de texto do `),Jc(366,`em`),Tk(367,`chip`),Zg(),Tk(368,`.`),Zg()()(),Jc(369,`tr`,16)(370,`td`,17)(371,`div`,18)(372,`span`,19),Tk(373,` selected`),_u(374,`br`),Zg()()(),Jc(375,`td`,20)(376,`code`,21),Tk(377,`boolean`),Zg()(),Jc(378,`td`,23)(379,`p`),Tk(380,`Estado de seleção do `),Jc(381,`em`),Tk(382,`chip`),Zg(),Tk(383,` (`),Jc(384,`code`),Tk(385,`true`),Zg(),Tk(386,` para selecionado, `),Jc(387,`code`),Tk(388,`false`),Zg(),Tk(389,` para desmarcado).`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function Le(n,h){if(n&1){let a=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(a);let l=nk();return H_(l.changeTab(`web`))}),_u(1,`sample-po-filter-chip-basic-view`)(2,`sample-po-filter-chip-labs-view`)(3,`sample-po-filter-chip-filter-list-view`),Zg()}if(n&2){let a=nk();Rb(`p-active`,a.activeTab===`web`)}}var Me=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Filter Chip`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,l){o&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Le,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return l.changeTab(`doc`)}),_u(4,`sample-po-filter-chip-doc`),Zg()()()),o&2&&(Rb(`p-actions`,l.actions),Ig(2),BO(l.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,l.activeTab===`doc`))},dependencies:[Tze,Qae,ere,pe,se,ce,he],encapsulation:2,changeDetection:1})}return n})()}];var fe=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge({type:n});static ɵinj=de$1({imports:[WV.forChild(Me),WV]})}return n})();var nt=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge({type:n});static ɵinj=de$1({imports:[M,fe]})}return n})();export{nt as DocPoFilterChipModule};