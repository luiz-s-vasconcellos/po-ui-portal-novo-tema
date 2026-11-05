import{B as L4,Cn as oi,Ct as Yoe,Da as pe$1,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,La as uO,Lt as aae,Mr as I1,Na as r0,Pa as rb,Qr as RK,Ra as ue,Sa as o0,Si as Xx,Vi as bx,Xa as wx,Xt as ere,Ya as wg,Za as xF,ai as Sn,dr as DO,gr as Dx,ht as U4,i as Ac,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,ni as SF,nr as Ag,qr as Ok,ri as SK,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-7FOYFSS2.js";var ae=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-filter-chip-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Filter`]],template:function(o,l){o&1&&nu(0,`po-filter-chip`,0)},dependencies:[aae],encapsulation:2,changeDetection:1})}return n})();var be=n=>({"docs-sample-code-tabs":n});var pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-filter-chip-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,l){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Filter Chip Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return l.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-filter-chip p-label="Filter"></po-filter-chip>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-filter-chip-basic',
  templateUrl: './sample-po-filter-chip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipBasicComponent {}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-filter-chip-basic`),wg(),nu(23,`hr`)),o&2&&(rg(5),Xx(`po-icon `+l.sampleCodeButtonIcon),rg(),Ag(` `,l.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,be,l.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,ae],encapsulation:2,changeDetection:1})}return n})();var de=(()=>{class n{label;selected;disabled;event;model;ngOnInit(){this.restore()}onSelectedChange(a){this.selected=a.selected,this.model=JSON.stringify(a),this.event=`p-selected-change`}restore(){this.label=`Filter`,this.selected=!1,this.disabled=!1,this.event=``,this.model=``}static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-filter-chip-labs`]],standalone:!1,decls:16,vars:8,consts:[[`f`,`ngForm`],[1,`po-row`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-label`,`Label`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`selected`,`p-label`,`Selected`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,l){if(o&1){let u=Ax();jc(0,`div`,1)(1,`po-filter-chip`,2),mt(`p-selected-change`,function(c){return l.onSelectedChange(c)}),wg()(),nu(2,`po-divider`),jc(3,`div`,1),nu(4,`po-info`,3)(5,`po-info`,4),wg(),nu(6,`po-divider`),jc(7,`form`,null,0)(9,`div`,1)(10,`po-input`,5),r0(),ab(`ngModelChange`,function(c){return v_(u),uO(l.label,c)||(l.label=c),__(c)}),wg()(),jc(11,`div`,1)(12,`po-switch`,6),r0(),ab(`ngModelChange`,function(c){return v_(u),uO(l.selected,c)||(l.selected=c),__(c)}),wg(),jc(13,`po-switch`,7),r0(),ab(`ngModelChange`,function(c){return v_(u),uO(l.disabled,c)||(l.disabled=c),__(c)}),wg()(),jc(14,`div`,1)(15,`po-button`,8),mt(`p-click`,function(){return l.restore()}),wg()()()}o&2&&(rg(),UE(`p-label`,l.label)(`p-selected`,l.selected)(`p-disabled`,l.disabled),rg(3),UE(`p-value`,l.model),rg(),UE(`p-value`,l.event),rg(5),sb(`ngModel`,l.label),o0(),rg(2),sb(`ngModel`,l.selected),o0(),rg(),sb(`ngModel`,l.disabled),o0())},dependencies:[RK,SK,MK,xF,SF,oi,Lf,U4,L4,aae,Yoe],encapsulation:2,changeDetection:1})}return n})();var Ee=n=>({"docs-sample-code-tabs":n});var se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-filter-chip-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,l){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Filter Chip Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return l.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-filter-chip-labs`),wg(),nu(23,`hr`)),o&2&&(rg(5),Xx(`po-icon `+l.sampleCodeButtonIcon),rg(),Ag(` `,l.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ee,l.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,de],encapsulation:2,changeDetection:1})}return n})();var xe=(n,h)=>h.label;var Fe=(n,h)=>h.name;function ye(n,h){if(n&1){let a=Ax();jc(0,`po-filter-chip`,7),mt(`p-selected-change`,function(l){v_(a);let u=Fx();return __(u.onFilterChange(l))}),wg()}if(n&2){let a=h.$implicit;UE(`p-label`,a.label)(`p-selected`,a.selected)}}function Pe(n,h){if(n&1&&(jc(0,`div`,5)(1,`span`,8),lO(2),wg(),jc(3,`span`,9),lO(4),wg()()),n&2){let a=h.$implicit;rg(2),rb(a.name),rg(2),Ag(`(`,a.category,`)`)}}function we(n,h){n&1&&(jc(0,`div`,6)(1,`span`,10),lO(2,`No products found.`),wg()())}var me=(()=>{class n{filters=[{label:`Electronics`,selected:!1},{label:`Clothing`,selected:!1},{label:`Books`,selected:!1},{label:`Sports`,selected:!1}];products=[{name:`Laptop`,category:`Electronics`},{name:`Smartphone`,category:`Electronics`},{name:`T-Shirt`,category:`Clothing`},{name:`Sneakers`,category:`Clothing`},{name:`Novel`,category:`Books`},{name:`Cookbook`,category:`Books`},{name:`Basketball`,category:`Sports`},{name:`Tennis Racket`,category:`Sports`}];get filteredProducts(){let a=this.filters.filter(o=>o.selected).map(o=>o.label);return a.length===0?this.products:this.products.filter(o=>a.includes(o.category))}onFilterChange(a){let o=this.filters.find(l=>l.label===a.label);o&&(o.selected=a.selected)}static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-filter-chip-filter-list`]],standalone:!1,decls:16,vars:2,consts:[[1,`po-row`],[1,`po-md-12`],[1,`po-font-subtitle`],[1,`po-mt-1`],[1,`po-mr-1`,3,`p-label`,`p-selected`],[1,`po-row`,`po-p-1`],[1,`po-row`,`po-p-2`],[1,`po-mr-1`,3,`p-selected-change`,`p-label`,`p-selected`],[1,`po-font-text-bold`,`po-mr-1`],[1,`po-font-text-small`],[1,`po-font-text`]],template:function(o,l){o&1&&(jc(0,`div`,0)(1,`div`,1)(2,`p`,2),lO(3,`Filter by category:`),wg(),jc(4,`div`,3),bx(5,ye,1,2,`po-filter-chip`,4,xe),wg()()(),nu(7,`po-divider`),jc(8,`div`,0)(9,`div`,1)(10,`p`,2),lO(11),wg(),jc(12,`po-container`),bx(13,Pe,5,2,`div`,5,Fe,!1,we,3,0,`div`,6),wg()()()),o&2&&(rg(5),wx(l.filters),rg(6),Ag(`Products (`,l.filteredProducts.length,`):`),rg(2),wx(l.filteredProducts))},dependencies:[Ac,Lf,aae],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n});var ce=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-filter-chip-filter-list-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,l){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Filter Chip - Filter List`),wg(),jc(4,`a`,2),mt(`click`,function(){return l.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-filter-chip-filter-list`),wg(),nu(23,`hr`)),o&2&&(rg(5),Xx(`po-icon `+l.sampleCodeButtonIcon),rg(),Ag(` `,l.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Te,l.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,me],encapsulation:2,changeDetection:1})}return n})();var he=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-filter-chip-doc`]],standalone:!1,decls:390,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#listbox`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`undefined`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(o,l){o&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoFilterChipModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente `),jc(7,`code`),lO(8,`po-filter-chip`),wg(),lO(9,`.`),wg()(),jc(10,`h3`,3),lO(11,`Componente`),wg(),jc(12,`h4`,4)(13,`code`,5),lO(14,`PoFilterChipComponent`),wg()(),jc(15,`div`,2)(16,`p`),lO(17,`O `),jc(18,`code`),lO(19,`po-filter-chip`),wg(),lO(20,` \xE9 um componente interativo que representa uma op\xE7\xE3o de filtro selecion\xE1vel na forma de chip.
O componente exibe um r\xF3tulo de texto e suporta tr\xEAs estados visuais: padr\xE3o (repouso), hover e selecionado.
No estado selecionado, um \xEDcone de check \xE9 exibido \xE0 esquerda do r\xF3tulo.`),wg(),jc(21,`h4`),lO(22,`Boas práticas`),wg(),jc(23,`ul`)(24,`li`),lO(25,`Utilize `),jc(26,`code`),lO(27,`labels`),wg(),lO(28,` curtos e descritivos para os filtros.`),wg(),jc(29,`li`),lO(30,`Agrupe múltiplos `),jc(31,`code`),lO(32,`po-filter-chip`),wg(),lO(33,` para representar opções de filtragem relacionadas.`),wg(),jc(34,`li`),lO(35,`Utilize a propriedade `),jc(36,`code`),lO(37,`p-disabled`),wg(),lO(38,` para filtros temporariamente indisponíveis.`),wg()(),jc(39,`h4`),lO(40,`Acessibilidade tratada no componente`),wg(),jc(41,`p`),lO(42,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),wg(),jc(43,`ul`)(44,`li`),lO(45,`O componente possui `),jc(46,`code`),lO(47,`role="option"`),wg(),lO(48,` e `),jc(49,`code`),lO(50,`aria-selected`),wg(),lO(51,` refletindo o estado de seleção. `),jc(52,`a`,6),lO(53,`W3C WAI-ARIA 3.14 Listbox`),wg()(),jc(54,`li`),lO(55,`Quando em foco, o chip é ativado usando as teclas de Espaço e Enter do teclado. `),jc(56,`a`,7),lO(57,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),wg()()(),jc(58,`h4`),lO(59,`Tokens customizáveis`),wg(),jc(60,`p`),lO(61,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(62,`blockquote`)(63,`p`),lO(64,`Para maiores informações, acesse o guia `),jc(65,`a`,8),lO(66,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(67,`.`),wg()(),jc(68,`table`)(69,`thead`)(70,`tr`)(71,`th`),lO(72,`Propriedade`),wg(),jc(73,`th`),lO(74,`Descrição`),wg(),jc(75,`th`),lO(76,`Valor Padrão`),wg()()(),jc(77,`tbody`)(78,`tr`)(79,`td`)(80,`code`),lO(81,`--border-radius`),wg()(),jc(82,`td`),lO(83,`Raio dos cantos do elemento`),wg(),jc(84,`td`)(85,`code`),lO(86,`var(--border-radius-lg)`),wg()()(),jc(87,`tr`)(88,`td`)(89,`code`),lO(90,`--border-width`),wg()(),jc(91,`td`),lO(92,`Largura da borda`),wg(),jc(93,`td`)(94,`code`),lO(95,`var(--border-width-sm)`),wg()()(),jc(96,`tr`)(97,`td`)(98,`code`),lO(99,`--font-family`),wg()(),jc(100,`td`),lO(101,`Família tipográfica`),wg(),jc(102,`td`)(103,`code`),lO(104,`var(--font-family-theme)`),wg()()(),jc(105,`tr`)(106,`td`)(107,`code`),lO(108,`--font-size`),wg()(),jc(109,`td`),lO(110,`Tamanho da fonte`),wg(),jc(111,`td`)(112,`code`),lO(113,`var(--font-size-default)`),wg()()(),jc(114,`tr`)(115,`td`)(116,`code`),lO(117,`--font-weight`),wg()(),jc(118,`td`),lO(119,`Peso da fonte`),wg(),jc(120,`td`)(121,`code`),lO(122,`var(--font-weight-normal)`),wg()()(),jc(123,`tr`)(124,`td`)(125,`strong`),lO(126,`Default`),wg()(),nu(127,`td`)(128,`td`),wg(),jc(129,`tr`)(130,`td`)(131,`code`),lO(132,`--border-color`),wg()(),jc(133,`td`),lO(134,`Cor da borda no estado padrão`),wg(),jc(135,`td`)(136,`code`),lO(137,`var(--color-neutral-light-20)`),wg()()(),jc(138,`tr`)(139,`td`)(140,`code`),lO(141,`--text-color`),wg()(),jc(142,`td`),lO(143,`Cor do texto no estado padrão`),wg(),jc(144,`td`)(145,`code`),lO(146,`var(--color-neutral-dark-80)`),wg()()(),jc(147,`tr`)(148,`td`)(149,`code`),lO(150,`--background-color`),wg()(),jc(151,`td`),lO(152,`Cor de fundo no estado padrão`),wg(),jc(153,`td`)(154,`code`),lO(155,`transparent`),wg()()(),jc(156,`tr`)(157,`td`)(158,`strong`),lO(159,`Hover`),wg()(),nu(160,`td`)(161,`td`),wg(),jc(162,`tr`)(163,`td`)(164,`code`),lO(165,`--background-color-hover`),wg()(),jc(166,`td`),lO(167,`Cor de fundo no estado hover`),wg(),jc(168,`td`)(169,`code`),lO(170,`var(--color-brand-01-lightest)`),wg()()(),jc(171,`tr`)(172,`td`)(173,`code`),lO(174,`--text-color-hover`),wg()(),jc(175,`td`),lO(176,`Cor do texto no estado hover`),wg(),jc(177,`td`)(178,`code`),lO(179,`var(--color-action-default)`),wg()()(),jc(180,`tr`)(181,`td`)(182,`strong`),lO(183,`Selected`),wg()(),nu(184,`td`)(185,`td`),wg(),jc(186,`tr`)(187,`td`)(188,`code`),lO(189,`--background-color-selected`),wg()(),jc(190,`td`),lO(191,`Cor de fundo no estado selecionado`),wg(),jc(192,`td`)(193,`code`),lO(194,`var(--color-brand-01-lightest)`),wg()()(),jc(195,`tr`)(196,`td`)(197,`code`),lO(198,`--border-color-selected`),wg()(),jc(199,`td`),lO(200,`Cor da borda no estado selecionado`),wg(),jc(201,`td`)(202,`code`),lO(203,`var(--color-brand-01-lighter)`),wg()()(),jc(204,`tr`)(205,`td`)(206,`code`),lO(207,`--text-color-selected`),wg()(),jc(208,`td`),lO(209,`Cor do texto no estado selecionado`),wg(),jc(210,`td`)(211,`code`),lO(212,`var(--color-action-default)`),wg()()(),jc(213,`tr`)(214,`td`)(215,`code`),lO(216,`--icon-color-selected`),wg()(),jc(217,`td`),lO(218,`Cor do ícone no estado selecionado`),wg(),jc(219,`td`)(220,`code`),lO(221,`var(--color-action-default)`),wg()()(),jc(222,`tr`)(223,`td`)(224,`strong`),lO(225,`Disabled`),wg()(),nu(226,`td`)(227,`td`),wg(),jc(228,`tr`)(229,`td`)(230,`code`),lO(231,`--opacity-disabled`),wg()(),jc(232,`td`),lO(233,`Opacidade no estado desabilitado`),wg(),jc(234,`td`)(235,`code`),lO(236,`0.5`),wg()()()()()(),jc(237,`div`,9)(238,`h4`,10),lO(239,`Seletor`),wg(),jc(240,`pre`,11),lO(241,`<po-filter-chip
    p-disabled="boolean"
    p-label="string | undefined"
    p-selected="boolean"
    (p-selected-change)="EventEmitter" >
</po-filter-chip>
`),wg()(),jc(242,`h4`,12),lO(243,`Propriedades`),wg(),jc(244,`table`,13)(245,`tr`,14)(246,`th`,15),lO(247,`Nome`),wg(),jc(248,`th`,15),lO(249,`Tipo`),wg(),jc(250,`th`,15),lO(251,`Padrão`),wg(),jc(252,`th`,15),lO(253,`Descrição`),wg()(),jc(254,`tr`,16)(255,`td`,17)(256,`div`,18)(257,`span`,19),lO(258,` p-disabled`),nu(259,`br`),wg()()(),jc(260,`td`,20)(261,`code`,21),lO(262,`boolean`),wg()(),jc(263,`td`,22)(264,`p`)(265,`code`),lO(266,`false`),wg()()(),jc(267,`td`,23)(268,`em`)(269,`strong`),lO(270,`(opcional)`),wg()(),jc(271,`p`),lO(272,`Define se o chip está desabilitado, impedindo qualquer interação do usuário.`),wg(),jc(273,`p`),lO(274,`Quando habilitado, o chip não responde a cliques nem a eventos de teclado (Enter/Space).`),wg()()(),jc(275,`tr`,16)(276,`td`,17)(277,`div`,18)(278,`span`,19),lO(279,` p-label`),nu(280,`br`),wg()()(),jc(281,`td`,20)(282,`code`,24),lO(283,`string `),wg(),jc(284,`code`,25),lO(285,` undefined`),wg()(),jc(286,`td`,22),lO(287,`-`),wg(),jc(288,`td`,23)(289,`em`)(290,`strong`),lO(291,`(opcional)`),wg()(),jc(292,`p`),lO(293,`Define o rótulo de texto exibido no chip.`),wg()()(),jc(294,`tr`,16)(295,`td`,17)(296,`div`,18)(297,`span`,19),lO(298,` p-selected`),nu(299,`br`),wg()()(),jc(300,`td`,20)(301,`code`,21),lO(302,`boolean`),wg()(),jc(303,`td`,22)(304,`p`)(305,`code`),lO(306,`false`),wg()()(),jc(307,`td`,23)(308,`em`)(309,`strong`),lO(310,`(opcional)`),wg()(),jc(311,`p`),lO(312,`Define o estado de seleção do chip.`),wg()()(),jc(313,`tr`,16)(314,`td`,17)(315,`div`,26)(316,`span`,27),lO(317,` (p-selected-change)`),nu(318,`br`),wg()()(),jc(319,`td`,20)(320,`code`,28),lO(321,`EventEmitter`),wg()(),jc(322,`td`,22),lO(323,`-`),wg(),jc(324,`td`,23)(325,`em`)(326,`strong`),lO(327,`(opcional)`),wg()(),jc(328,`p`),lO(329,`Evento disparado após a alteração do estado de seleção do `),jc(330,`em`),lO(331,`chip`),wg(),lO(332,`. Retorna o objeto PoFilterChipSelectedChange
modificado.`),wg()()()(),jc(333,`h3`),lO(334,`Interfaces`),wg(),jc(335,`h4`,29)(336,`code`,5),lO(337,`PoFilterChipSelectedChange`),wg()(),jc(338,`div`,2)(339,`p`),lO(340,`Interface que define o objeto emitido pelo evento `),jc(341,`code`),lO(342,`p-selected-change`),wg(),lO(343,`.`),wg()(),jc(344,`h4`,12),lO(345,`Propriedades`),wg(),jc(346,`table`,13)(347,`tr`,14)(348,`th`,15),lO(349,`Nome`),wg(),jc(350,`th`,15),lO(351,`Tipo`),wg(),jc(352,`th`,15),lO(353,`Descrição`),wg()(),jc(354,`tr`,16)(355,`td`,17)(356,`div`,18)(357,`span`,19),lO(358,` label`),nu(359,`br`),wg()()(),jc(360,`td`,20)(361,`code`,24),lO(362,`string`),wg()(),jc(363,`td`,23)(364,`p`),lO(365,`Rótulo de texto do `),jc(366,`em`),lO(367,`chip`),wg(),lO(368,`.`),wg()()(),jc(369,`tr`,16)(370,`td`,17)(371,`div`,18)(372,`span`,19),lO(373,` selected`),nu(374,`br`),wg()()(),jc(375,`td`,20)(376,`code`,21),lO(377,`boolean`),wg()(),jc(378,`td`,23)(379,`p`),lO(380,`Estado de seleção do `),jc(381,`em`),lO(382,`chip`),wg(),lO(383,` (`),jc(384,`code`),lO(385,`true`),wg(),lO(386,` para selecionado, `),jc(387,`code`),lO(388,`false`),wg(),lO(389,` para desmarcado).`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function Le(n,h){if(n&1){let a=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(a);let l=Fx();return __(l.changeTab(`web`))}),nu(1,`sample-po-filter-chip-basic-view`)(2,`sample-po-filter-chip-labs-view`)(3,`sample-po-filter-chip-filter-list-view`),wg()}if(n&2){let a=Fx();UE(`p-active`,a.activeTab===`web`)}}var Me=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(b(ir),b(Sn))};static ɵcmp=Zn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Filter Chip`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,l){o&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Le,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return l.changeTab(`doc`)}),nu(4,`sample-po-filter-chip-doc`),wg()()()),o&2&&(UE(`p-actions`,l.actions),rg(2),Dx(l.hidePoWebSample?-1:2),rg(),UE(`p-active`,l.activeTab===`doc`))},dependencies:[Tze,Qae,ere,pe,se,ce,he],encapsulation:2,changeDetection:1})}return n})()}];var fe=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=pe$1({type:n});static ɵinj=ue({imports:[I1.forChild(Me),I1]})}return n})();var nt=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=pe$1({type:n});static ɵinj=ue({imports:[M,fe]})}return n})();export{nt as DocPoFilterChipModule};