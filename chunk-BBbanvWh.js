import{m as P,p as M}from"./main-RWBWY5VM.js";import{$r as No,Ba as q0,Br as Kb,Ci as U_,Dn as tre,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,M as I4,Mt as Zte,Na as ok,Pr as I,Si as UO,Tr as G0,Vr as Kg,W as Mze,Wr as LO,Ya as tk,Yn as $O,_a as jO,_i as RZ,an as l4,ar as B_,ca as ge$1,dn as oae,do as xo,ea as de,er as Ab,fn as oi,fr as Cu,ja as nm,jr as H_,kr as HO,li as QL,lt as Ss,pt as Tee,qr as Mk,ro as wg,tn as j4,tr as An,va as j_,vi as Rk,zr as KO}from"./chunk-CTJH0VS3.js";var ce=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-basic`]],standalone:!1,decls:7,vars:0,consts:[[`p-label`,`PO Accordion 1`],[1,`po-text-color-neutral-dark-40`],[`p-label`,`PO Accordion 2`]],template:function(i,a){i&1&&(Jc(0,`po-accordion`)(1,`po-accordion-item`,0)(2,`p`,1),Mk(3,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`),Kg()(),Jc(4,`po-accordion-item`,2)(5,`p`,1),Mk(6,` In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque `),Kg()()())},dependencies:[Tee,l4],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-accordion-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-accordion-basic/sample-po-accordion-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-accordion-basic/sample-po-accordion-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Accordion Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-accordion-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-accordion-basic/sample-po-accordion-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-accordion>
  <po-accordion-item p-label="PO Accordion 1">
    <p class="po-text-color-neutral-dark-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </po-accordion-item>
  <po-accordion-item p-label="PO Accordion 2">
    <p class="po-text-color-neutral-dark-40">
      In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque
    </p>
  </po-accordion-item>
</po-accordion>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-accordion-basic/sample-po-accordion-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-accordion-basic',
  templateUrl: './sample-po-accordion-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ce],encapsulation:2,changeDetection:1})}return n})();function xe(n,L){if(n&1&&(Jc(0,`po-accordion-item`,2),Mk(1),Kg()),n&2){let r=L.$implicit,i=L.$index;Ab(`p-label`,r.label)(`p-disabled`,r.disabledItem)(`p-label-tag`,r.labelTag)(`p-type-tag`,r.typeTag),wg(),nm(` Accordion Item Content `,i,` `)}}var me=(()=>{class n{accordionFieldsForm=[{property:`label`,required:!0,gridColumns:6},{property:`labelTag`,label:`Label Tag`,gridColumns:6}];propertiesAccordionOptions=[{value:`showManager`,label:`Show Accordion Manager`},{value:`expandItems`,label:`Allow Expand All Items`}];typeTagOptions=[{value:`success`,label:`Success`},{value:`warning`,label:`Warning`},{value:`danger`,label:`Danger`},{value:`info`,label:`Info`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];disabledOption=[{value:`disabled`,label:`Disabled`}];properties=[];propertiesAccordion=[];disabledItem=[];accordionItemIndex;customLiterals;literals;typeTag;accordionItems=[];size;ngOnInit(){this.restore()}addAccordionItem(r){r.disabledItem=this.disabledItem.includes(`disabled`),r.labelTag&&(r.typeTag=this.typeTag);let i=Object.assign({},r,{value:this.accordionItems.length});this.accordionItems=[...this.accordionItems,i],this.disabledItem=[],this.typeTag=void 0}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(r){this.customLiterals=void 0}}restore(){this.accordionItems=[],this.customLiterals=void 0,this.disabledItem=[],this.literals=``,this.properties=[],this.propertiesAccordion=[],this.typeTag=void 0,this.size=`medium`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-labs`]],standalone:!1,decls:18,vars:16,consts:[[`accordionForm`,``],[3,`p-literals`,`p-show-manager-accordion`,`p-allow-expand-all-items`,`p-size`],[3,`p-label`,`p-disabled`,`p-label-tag`,`p-type-tag`],[`p-label`,`ACCORDION`],[1,`po-row`,`po-mt-1`,`po-mb-1`],[`name`,`literals`,`p-help`,`Ex.: {"closeAllItems": "Fechar itens"}`,`p-label`,`Literals`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`propertiesAccordion`,`p-label`,`Properties Accordion`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`ACCORDION ITEM`],[3,`p-fields`,`p-value`],[1,`po-row`,`po-mt-2`,`po-mb-2`],[`p-label`,`Type Tag`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[`p-label`,`Properties Accordion Item`,`name`,`disabledItem`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[1,`po-row`,`po-mt-1`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Accordion`,1,`po-md-6`,3,`p-click`,`p-disabled`],[1,`po-row`,`po-mt-2`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(i,a){if(i&1){let s=KO();Jc(0,`po-accordion`,1),HO(1,xe,2,5,`po-accordion-item`,2,UO),Kg(),_u(3,`po-divider`,3),Jc(4,`div`,4)(5,`po-input`,5),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(a.literals,d)||(a.literals=d),H_(d)}),_t(`p-change`,function(){return a.changeLiterals()}),Kg(),Jc(6,`po-checkbox-group`,6),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(a.propertiesAccordion,d)||(a.propertiesAccordion=d),H_(d)}),Kg()(),_u(7,`po-divider`,7)(8,`po-dynamic-form`,8,0),Jc(10,`div`,9)(11,`po-radio-group`,10),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(a.typeTag,d)||(a.typeTag=d),H_(d)}),Kg(),Jc(12,`po-checkbox-group`,11),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(a.disabledItem,d)||(a.disabledItem=d),H_(d)}),Kg()(),Jc(13,`div`,12)(14,`po-radio-group`,13),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(a.size,d)||(a.size=d),H_(d)}),Kg(),Jc(15,`po-button`,14),_t(`p-click`,function(){U_(s);let d=ok(9);return a.addAccordionItem(d.form.value),H_(d.form.reset())}),Kg()(),Jc(16,`div`,15)(17,`po-button`,16),_t(`p-click`,function(){return a.restore()}),Kg()()}if(i&2){let s=ok(9);Ab(`p-literals`,a.customLiterals)(`p-show-manager-accordion`,a.propertiesAccordion.includes(`showManager`))(`p-allow-expand-all-items`,a.propertiesAccordion.includes(`expandItems`))(`p-size`,a.size),wg(),$O(a.accordionItems),wg(4),Kb(`ngModel`,a.literals),q0(),wg(),Kb(`ngModel`,a.propertiesAccordion),Ab(`p-options`,a.propertiesAccordionOptions),q0(),wg(2),Ab(`p-fields`,a.accordionFieldsForm)(`p-value`,a.accordionItems),wg(3),Ab(`p-options`,a.typeTagOptions),Kb(`ngModel`,a.typeTag),q0(),wg(),Ab(`p-options`,a.disabledOption),Kb(`ngModel`,a.disabledItem),q0(),wg(2),Kb(`ngModel`,a.size),Ab(`p-options`,a.sizeOptions),q0(),wg(),Ab(`p-disabled`,s.form.invalid)}},dependencies:[RZ,QL,Tee,l4,oi,Nf,oae,I4,j4,Zte],encapsulation:2,changeDetection:1})}return n})();var se=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-labs-view`]],standalone:!1,decls:30,vars:0,consts:[[`id`,`sample-po-accordion-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-accordion-labs/sample-po-accordion-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-accordion-labs/sample-po-accordion-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Accordion Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-accordion-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-accordion-labs/sample-po-accordion-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-accordion
  [p-literals]="customLiterals"
  [p-show-manager-accordion]="propertiesAccordion.includes('showManager')"
  [p-allow-expand-all-items]="propertiesAccordion.includes('expandItems')"
  [p-size]="size"
>
  @for (accordionItem of accordionItems; track accordionItem; let i = $index) {
    <po-accordion-item
      [p-label]="accordionItem.label"
      [p-disabled]="accordionItem.disabledItem"
      [p-label-tag]="accordionItem.labelTag"
      [p-type-tag]="accordionItem.typeTag"
    >
      Accordion Item Content `),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` i `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`
    </po-accordion-item>
  }
</po-accordion>

<po-divider p-label="ACCORDION"></po-divider>
<div class="po-row po-mt-1 po-mb-1">
  <po-input
    class="po-md-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"closeAllItems": "Fechar itens"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>
  <po-checkbox-group
    class="po-md-6"
    name="propertiesAccordion"
    [(ngModel)]="propertiesAccordion"
    p-label="Properties Accordion"
    [p-options]="propertiesAccordionOptions"
  >
  </po-checkbox-group>
</div>

<po-divider p-label="ACCORDION ITEM"></po-divider>
<po-dynamic-form #accordionForm [p-fields]="accordionFieldsForm" [p-value]="accordionItems"> </po-dynamic-form>

<div class="po-row po-mt-2 po-mb-2">
  <po-radio-group class="po-md-6" p-label="Type Tag" [p-options]="typeTagOptions" [(ngModel)]="typeTag">
  </po-radio-group>
  <po-checkbox-group
    class="po-md-6"
    p-label="Properties Accordion Item"
    name="disabledItem"
    [p-options]="disabledOption"
    [(ngModel)]="disabledItem"
  >
  </po-checkbox-group>
</div>

<div class="po-row po-mt-1">
  <po-radio-group
    class="po-md-12 po-lg-6"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>
  <po-button
    class="po-md-6"
    p-label="Add Accordion"
    [p-disabled]="accordionForm.form.invalid"
    (p-click)="addAccordionItem(accordionForm.form.value); accordionForm.form.reset()"
  >
  </po-button>
</div>

<div class="po-row po-mt-2">
  <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),Kg()()()(),Jc(22,`po-tab`,10)(23,`div`)(24,`label`,7),Mk(25,`sample-po-accordion-labs/sample-po-accordion-labs.component.ts`),Kg(),Jc(26,`div`,11)(27,`pre`,12),Mk(28,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoAccordionItemComponent,
  PoAccordionLiterals,
  PoCheckboxGroupOption,
  PoDynamicFormField,
  PoRadioGroupOption,
  PoTagType
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-accordion-labs',
  templateUrl: './sample-po-accordion-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionLabsComponent implements OnInit {
  accordionFieldsForm: Array<PoDynamicFormField> = [
    { property: 'label', required: true, gridColumns: 6 },
    { property: 'labelTag', label: 'Label Tag', gridColumns: 6 }
  ];

  propertiesAccordionOptions: Array<PoCheckboxGroupOption> = [
    { value: 'showManager', label: 'Show Accordion Manager' },
    { value: 'expandItems', label: 'Allow Expand All Items' }
  ];

  typeTagOptions: Array<PoRadioGroupOption> = [
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'danger', label: 'Danger' },
    { value: 'info', label: 'Info' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  disabledOption: Array<PoRadioGroupOption> = [{ value: 'disabled', label: 'Disabled' }];

  properties: Array<string> = [];
  propertiesAccordion: Array<string> = [];
  disabledItem: Array<string> = [];
  accordionItemIndex: number;
  customLiterals: PoAccordionLiterals;
  literals: string;
  typeTag: PoTagType;
  accordionItems: Array<PoAccordionItemComponent> = [];
  size: string;

  ngOnInit() {
    this.restore();
  }

  addAccordionItem(accordionItem: PoAccordionItemComponent) {
    accordionItem.disabledItem = this.disabledItem.includes('disabled');
    if (accordionItem.labelTag) {
      accordionItem.typeTag = this.typeTag;
    }
    const newAccordionItem = Object.assign({}, accordionItem, { value: this.accordionItems.length });

    this.accordionItems = [...this.accordionItems, newAccordionItem];
    this.disabledItem = [];
    this.typeTag = undefined;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.accordionItems = [];
    this.customLiterals = undefined;
    this.disabledItem = [];
    this.literals = '';
    this.properties = [];
    this.propertiesAccordion = [];
    this.typeTag = undefined;
    this.size = 'medium';
  }
}
`),Kg()()()()()(),_u(29,`hr`))},dependencies:[P,tre,are,me],encapsulation:2,changeDetection:1})}return n})();var ue=(()=>{class n{questionOne;ngAfterContentInit(){this.questionOne.expand()}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-faq`]],viewQuery:function(i,a){if(i&1&&Cu(l4,7),i&2){let s;No(s=xo())&&(a.questionOne=s.first)}},standalone:!1,decls:22,vars:1,consts:[[`questionOne`,``],[`p-title`,`Blood donation FAQs`],[1,`po-pb-2`,`po-text-color-neutral-dark-40`],[3,`p-show-manager-accordion`],[`p-label`,`Who can donate?`],[1,`po-text-color-neutral-dark-40`],[`p-label`,`How long does it take for the blood to be processed?`,`p-label-tag`,`Important!`,`p-type-tag`,`danger`],[`p-label`,`How long does the body take to replenish donated blood?`],[`p-label`,`Is donating blood safe?`],[1,`po-pt-2`,`po-text-color-neutral-dark-40`],[`href`,`http://www.hemosc.org.br/perguntas-frequentes.html`]],template:function(i,a){i&1&&(Jc(0,`po-page-default`,1)(1,`p`,2),Mk(2,`You don't have to be afraid of being a blood donor!`),Kg(),Jc(3,`po-accordion`,3)(4,`po-accordion-item`,4,0)(6,`p`,5),Mk(7,` In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance with current legislation and a number of factors that take into account the risk that such a donation may pose to the health of the candidate himself and to the health of the individual receiving the donated blood. `),Kg()(),Jc(8,`po-accordion-item`,6)(9,`p`,5),Mk(10,` Blood is processed as soon as collected, preferably within 6 hours of donation. `),Kg()(),Jc(11,`po-accordion-item`,7)(12,`p`,5),Mk(13,` Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of childbearing age. `),Kg()(),Jc(14,`po-accordion-item`,8)(15,`p`,5),Mk(16,` Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there is a small risk that the donor may feel unwell during or shortly after the donation especially the first few times he or she donates, but the services are concerned about this, watching and making sure the donors feel nothing or feel feel so that they are well assisted until full recovery. `),Kg()()(),Jc(17,`p`,9),Mk(18,` For more information, see the `),Jc(19,`a`,10),Mk(20,`Hemosc FAQ`),Kg(),Mk(21,`. `),Kg()()),i&2&&(wg(3),Ab(`p-show-manager-accordion`,!0))},dependencies:[Tee,l4,Mze],encapsulation:2,changeDetection:1})}return n})();var be=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-faq-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-accordion-faq`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-accordion-faq/sample-po-accordion-faq.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-accordion-faq/sample-po-accordion-faq.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Accordion - FAQs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-accordion-faq`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-accordion-faq/sample-po-accordion-faq.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-page-default p-title="Blood donation FAQs">
  <p class="po-pb-2 po-text-color-neutral-dark-40">You don't have to be afraid of being a blood donor!</p>

  <po-accordion [p-show-manager-accordion]="true">
    <po-accordion-item p-label="Who can donate?" #questionOne>
      <p class="po-text-color-neutral-dark-40">
        In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance
        with current legislation and a number of factors that take into account the risk that such a donation may pose
        to the health of the candidate himself and to the health of the individual receiving the donated blood.
      </p>
    </po-accordion-item>

    <po-accordion-item
      p-label="How long does it take for the blood to be processed?"
      p-label-tag="Important!"
      p-type-tag="danger"
    >
      <p class="po-text-color-neutral-dark-40">
        Blood is processed as soon as collected, preferably within 6 hours of donation.
      </p>
    </po-accordion-item>

    <po-accordion-item p-label="How long does the body take to replenish donated blood?">
      <p class="po-text-color-neutral-dark-40">
        Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of
        childbearing age.
      </p>
    </po-accordion-item>

    <po-accordion-item p-label="Is donating blood safe?">
      <p class="po-text-color-neutral-dark-40">
        Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there
        is a small risk that the donor may feel unwell during or shortly after the donation especially the first few
        times he or she donates, but the services are concerned about this, watching and making sure the donors feel
        nothing or feel feel so that they are well assisted until full recovery.
      </p>
    </po-accordion-item>
  </po-accordion>

  <p class="po-pt-2 po-text-color-neutral-dark-40">
    For more information, see the <a href="http://www.hemosc.org.br/perguntas-frequentes.html">Hemosc FAQ</a>.
  </p>
</po-page-default>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-accordion-faq/sample-po-accordion-faq.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { AfterContentInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoAccordionItemComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-accordion-faq',
  templateUrl: './sample-po-accordion-faq.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionFaqComponent implements AfterContentInit {
  @ViewChild(PoAccordionItemComponent, { static: true }) questionOne: PoAccordionItemComponent;

  ngAfterContentInit() {
    this.questionOne.expand();
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ue],encapsulation:2,changeDetection:1})}return n})();var ge=(()=>{class n{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-doc`]],standalone:!1,decls:536,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[`data-tour`,`api-related`,1,`docs-api-related`],[`p-value`,`Accordion Item`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-accordion-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-accordion-item`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-allow-expand-all-items`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-collapse-all`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`event-p-expand-all`,1,`docs-api-properties-row`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoAccordionLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-show-manager-accordion`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`method-collapseAllItems`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-expandAllItems`,1,`docs-api-method-table`],[`id`,`interface-po-accordion-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-accordion-literals-close-all-items`,1,`docs-api-properties-row`],[`id`,`interface-po-accordion-literals-expand-all-items`,1,`docs-api-properties-row`]],template:function(i,a){i&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoAccordionModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente `),Jc(7,`code`),Mk(8,`po-accordion`),Kg(),Mk(9,`.`),Kg()(),Jc(10,`blockquote`,3)(11,`strong`),Mk(12,`Subcomponentes:`),Kg(),Jc(13,`po-tag`,4),_t(`p-click`,function(){return a.openDoc(`po-accordion-item`)}),Kg()(),Jc(14,`h3`,5),Mk(15,`Componente`),Kg(),Jc(16,`h4`,6)(17,`code`,7),Mk(18,`PoAccordionComponent`),Kg()(),Jc(19,`div`,2)(20,`p`),Mk(21,`Componente utilizado para agrupar visualmente uma lista de conte\xFAdos, mostrando-os individualmente
ao clicar no t\xEDtulo de cada item.`),Kg(),Jc(22,`p`),Mk(23,`Para utilizá-lo, é necessário envolver cada item no componente `),Jc(24,`a`,8)(25,`code`),Mk(26,`po-accordion-item`),Kg()(),Mk(27,`,
como no exemplo abaixo:`),Kg(),Jc(28,`pre`)(29,`code`),Mk(30,`<po-accordion #accordion [p-show-manager-accordion]="true">
  <po-accordion-item p-label="PO Accordion 1">
     Accordion 1
  </po-accordion-item>

  <po-accordion-item p-label="PO Accordion 2">
     Accordion 2
  </po-accordion-item>
</po-accordion>
`),Kg()(),Jc(31,`p`),Mk(32,`e no typescript pode-se utilizar o `),Jc(33,`code`),Mk(34,`@ViewChild`),Kg(),Mk(35,`:`),Kg(),Jc(36,`pre`)(37,`code`),Mk(38,`@ViewChild(PoAccordionComponent, { static: true }) accordion: PoAccordionComponent;

ngAfterContentInit() {
  // ou utilizar o m\xE9todo collapseAllItems();
  this.accordion.expandAllItems();
}
`),Kg()(),Jc(39,`p`),Mk(40,`O componente já faz o controle de abertura e fechamento dos itens automaticamente.`),Kg(),Jc(41,`p`),Mk(42,`Caso houver a necessidade de abrir algum dos `),Jc(43,`code`),Mk(44,`po-accordion-item`),Kg(),Mk(45,` via Typescript
acesse a `),Jc(46,`a`,8),Mk(47,`documentação do PoAccordionItem`),Kg(),Mk(48,`.`),Kg(),Jc(49,`h4`),Mk(50,`Tokens customizáveis`),Kg(),Jc(51,`p`),Mk(52,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(53,`blockquote`)(54,`p`),Mk(55,`Para maiores informações, acesse o guia `),Jc(56,`a`,9),Mk(57,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(58,`.`),Kg()(),Jc(59,`table`)(60,`thead`)(61,`tr`)(62,`th`),Mk(63,`Propriedade`),Kg(),Jc(64,`th`),Mk(65,`Descrição`),Kg(),Jc(66,`th`),Mk(67,`Valor Padrão`),Kg()()(),Jc(68,`tbody`)(69,`tr`)(70,`td`)(71,`strong`),Mk(72,`Default Values`),Kg()(),_u(73,`td`)(74,`td`),Kg(),Jc(75,`tr`)(76,`td`)(77,`code`),Mk(78,`--font-family`),Kg()(),Jc(79,`td`),Mk(80,`Família tipográfica usada`),Kg(),Jc(81,`td`)(82,`code`),Mk(83,`var(--font-family-theme)`),Kg()()(),Jc(84,`tr`)(85,`td`)(86,`code`),Mk(87,`--font-size`),Kg()(),Jc(88,`td`),Mk(89,`Tamanho da fonte`),Kg(),Jc(90,`td`)(91,`code`),Mk(92,`var(--font-size-default)`),Kg()()(),Jc(93,`tr`)(94,`td`)(95,`code`),Mk(96,`--color`),Kg()(),Jc(97,`td`),Mk(98,`Cor principal do accordion`),Kg(),Jc(99,`td`)(100,`code`),Mk(101,`var(--color-action-default)`),Kg()()(),Jc(102,`tr`)(103,`td`)(104,`code`),Mk(105,`--background-color`),Kg()(),Jc(106,`td`),Mk(107,`Cor de background`),Kg(),Jc(108,`td`)(109,`code`),Mk(110,`var(--color-neutral-light-00)`),Kg()()(),Jc(111,`tr`)(112,`td`)(113,`code`),Mk(114,`--font-weight`),Kg()(),Jc(115,`td`),Mk(116,`Peso da fonte`),Kg(),Jc(117,`td`)(118,`code`),Mk(119,`var(--font-weight-bold)`),Kg()()(),Jc(120,`tr`)(121,`td`)(122,`strong`),Mk(123,`Hover`),Kg()(),_u(124,`td`)(125,`td`),Kg(),Jc(126,`tr`)(127,`td`)(128,`code`),Mk(129,`--color-hover`),Kg()(),Jc(130,`td`),Mk(131,`Cor principal no estado hover`),Kg(),Jc(132,`td`)(133,`code`),Mk(134,`var(--color-action-hover)`),Kg()()(),Jc(135,`tr`)(136,`td`)(137,`code`),Mk(138,`--background-hover`),Kg()(),Jc(139,`td`),Mk(140,`Cor de background no estado hover`),Kg(),Jc(141,`td`)(142,`code`),Mk(143,`var(--color-brand-01-lightest)`),Kg()()(),Jc(144,`tr`)(145,`td`)(146,`strong`),Mk(147,`Focused`),Kg()(),_u(148,`td`)(149,`td`),Kg(),Jc(150,`tr`)(151,`td`)(152,`code`),Mk(153,`--color-focused`),Kg()(),Jc(154,`td`),Mk(155,`Cor principal no estado de focus`),Kg(),Jc(156,`td`)(157,`code`),Mk(158,`var(--color-action-focus)`),Kg()()(),Jc(159,`tr`)(160,`td`)(161,`code`),Mk(162,`--outline-color-focused`),Kg(),Mk(163,` \xA0`),Kg(),Jc(164,`td`),Mk(165,`Cor do outline do estado de focus`),Kg(),Jc(166,`td`)(167,`code`),Mk(168,`var(--color-action-focus)`),Kg()()(),Jc(169,`tr`)(170,`td`)(171,`strong`),Mk(172,`Disabled`),Kg()(),_u(173,`td`)(174,`td`),Kg(),Jc(175,`tr`)(176,`td`)(177,`code`),Mk(178,`--color-disabled`),Kg()(),Jc(179,`td`),Mk(180,`Cor principal no estado disabled`),Kg(),Jc(181,`td`)(182,`code`),Mk(183,`var(--color-neutral-mid-60)`),Kg()()(),Jc(184,`tr`)(185,`td`)(186,`code`),Mk(187,`--background-disabled`),Kg(),Mk(188,` \xA0`),Kg(),Jc(189,`td`),Mk(190,`Cor de background no estado disabled`),Kg(),Jc(191,`td`)(192,`code`),Mk(193,`var(--color-neutral-light-10)`),Kg()()(),Jc(194,`tr`)(195,`td`)(196,`strong`),Mk(197,`po-accordion-manager`),Kg()(),_u(198,`td`)(199,`td`),Kg(),Jc(200,`tr`)(201,`td`)(202,`code`),Mk(203,`--background-color`),Kg()(),Jc(204,`td`),Mk(205,`Cor de background`),Kg(),Jc(206,`td`)(207,`code`),Mk(208,`var(--color-neutral-mid-60)`),Kg()()(),Jc(209,`tr`)(210,`td`)(211,`code`),Mk(212,`--color`),Kg()(),Jc(213,`td`),Mk(214,`Cor principal do accordion manager`),Kg(),Jc(215,`td`)(216,`code`),Mk(217,`var(--color-neutral-light-10)`),Kg()()(),Jc(218,`tr`)(219,`td`)(220,`code`),Mk(221,`--font-family`),Kg()(),Jc(222,`td`),Mk(223,`Família tipográfica usada`),Kg(),Jc(224,`td`)(225,`code`),Mk(226,`var(--color-neutral-light-10)`),Kg()()(),Jc(227,`tr`)(228,`td`)(229,`code`),Mk(230,`--font-size`),Kg()(),Jc(231,`td`),Mk(232,`Tamanho da fonte`),Kg(),Jc(233,`td`)(234,`code`),Mk(235,`var(--color-neutral-light-10)`),Kg()()(),Jc(236,`tr`)(237,`td`)(238,`code`),Mk(239,`--font-weight`),Kg()(),Jc(240,`td`),Mk(241,`Peso da fonte`),Kg(),Jc(242,`td`)(243,`code`),Mk(244,`var(--color-neutral-light-10)`),Kg()()(),Jc(245,`tr`)(246,`td`)(247,`strong`),Mk(248,`Pressed`),Kg()(),_u(249,`td`)(250,`td`),Kg(),Jc(251,`tr`)(252,`td`)(253,`code`),Mk(254,`--background-pressed`),Kg(),Mk(255,` \xA0`),Kg(),Jc(256,`td`),Mk(257,`Cor de background no estado de pressionado\xA0`),Kg(),Jc(258,`td`)(259,`code`),Mk(260,`var(--color-brand-01-lighter)`),Kg()()(),Jc(261,`tr`)(262,`td`)(263,`code`),Mk(264,`--color-pressed`),Kg()(),Jc(265,`td`),Mk(266,`Cor principal no estado de pressionado`),Kg(),Jc(267,`td`)(268,`code`),Mk(269,`var(--color-action-pressed)`),Kg()()()()()(),Jc(270,`div`,10)(271,`h4`,11),Mk(272,`Seletor`),Kg(),Jc(273,`pre`,12),Mk(274,`<po-accordion
    p-allow-expand-all-items="boolean"
    (p-collapse-all)="EventEmitter"
    (p-expand-all)="EventEmitter"
    p-literals="PoAccordionLiterals"
    p-show-manager-accordion="boolean"
    p-size="string" >
</po-accordion>
`),Kg()(),Jc(275,`h4`,13),Mk(276,`Propriedades`),Kg(),Jc(277,`table`,14)(278,`tr`,15)(279,`th`,16),Mk(280,`Nome`),Kg(),Jc(281,`th`,16),Mk(282,`Tipo`),Kg(),Jc(283,`th`,16),Mk(284,`Padrão`),Kg(),Jc(285,`th`,16),Mk(286,`Descrição`),Kg()(),Jc(287,`tr`,17)(288,`td`,18)(289,`div`,19)(290,`span`,20),Mk(291,` p-allow-expand-all-items`),_u(292,`br`),Kg()()(),Jc(293,`td`,21)(294,`code`,22),Mk(295,`boolean`),Kg()(),Jc(296,`td`,23)(297,`p`)(298,`code`),Mk(299,`false`),Kg()()(),Jc(300,`td`,24)(301,`em`)(302,`strong`),Mk(303,`(opcional)`),Kg()(),Jc(304,`p`),Mk(305,`Permite expandir mais de um `),Jc(306,`code`),Mk(307,`<po-accordion-item></po-accordion-item>`),Kg(),Mk(308,` ao mesmo tempo.
Sempre habilitada caso a propriedade `),Jc(309,`code`),Mk(310,`p-show-manager-accordion`),Kg(),Mk(311,` esteja como `),Jc(312,`code`),Mk(313,`true`),Kg(),Mk(314,`.`),Kg()()(),Jc(315,`tr`,25)(316,`td`,18)(317,`div`,26)(318,`span`,27),Mk(319,` (p-collapse-all)`),_u(320,`br`),Kg()()(),Jc(321,`td`,21)(322,`code`,28),Mk(323,`EventEmitter`),Kg()(),Jc(324,`td`,23),Mk(325,`-`),Kg(),Jc(326,`td`,24)(327,`em`)(328,`strong`),Mk(329,`(opcional)`),Kg()(),Jc(330,`p`),Mk(331,`Evento disparado ao retrair o gerenciador de accordion, seja manualmente ou programaticamente.`),Kg()()(),Jc(332,`tr`,29)(333,`td`,18)(334,`div`,26)(335,`span`,27),Mk(336,` (p-expand-all)`),_u(337,`br`),Kg()()(),Jc(338,`td`,21)(339,`code`,28),Mk(340,`EventEmitter`),Kg()(),Jc(341,`td`,23),Mk(342,`-`),Kg(),Jc(343,`td`,24)(344,`em`)(345,`strong`),Mk(346,`(opcional)`),Kg()(),Jc(347,`p`),Mk(348,`Evento disparado ao expandir o gerenciador de accordion, seja manualmente ou programaticamente.`),Kg()()(),Jc(349,`tr`,30)(350,`td`,18)(351,`div`,19)(352,`span`,20),Mk(353,` p-literals`),_u(354,`br`),Kg()()(),Jc(355,`td`,21)(356,`code`,31),Mk(357,`PoAccordionLiterals`),Kg()(),Jc(358,`td`,23),Mk(359,`-`),Kg(),Jc(360,`td`,24)(361,`em`)(362,`strong`),Mk(363,`(opcional)`),Kg()(),Jc(364,`p`),Mk(365,`Objeto com as literais usadas no `),Jc(366,`code`),Mk(367,`po-accordion`),Kg(),Mk(368,`.`),Kg(),Jc(369,`p`),Mk(370,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Kg(),Jc(371,`pre`)(372,`code`),Mk(373,`const customLiterals: PoAccordionLiterals = {
  closeAllItems: 'Fechar todos os itens',
  expandAllItems: 'Expandir todos os itens'
};
`),Kg()(),Jc(374,`p`),Mk(375,`Ou passando apenas as literais que deseja customizar:`),Kg(),Jc(376,`pre`)(377,`code`),Mk(378,`const customLiterals: PoAccordionLiterals = {
  expandAllItems: 'Expandir todos os itens'
};
`),Kg()(),Jc(379,`p`),Mk(380,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Kg(),Jc(381,`pre`)(382,`code`),Mk(383,`<po-accordion
  [p-literals]="customLiterals">
</po-accordion>
`),Kg()(),Jc(384,`blockquote`)(385,`p`),Mk(386,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Jc(387,`a`,32)(388,`code`),Mk(389,`PoI18nService`),Kg()(),Mk(390,` ou do browser.`),Kg()()()(),Jc(391,`tr`,33)(392,`td`,18)(393,`div`,19)(394,`span`,20),Mk(395,` p-show-manager-accordion`),_u(396,`br`),Kg()()(),Jc(397,`td`,21)(398,`code`,22),Mk(399,`boolean`),Kg()(),Jc(400,`td`,23)(401,`p`)(402,`code`),Mk(403,`false`),Kg()()(),Jc(404,`td`,24)(405,`em`)(406,`strong`),Mk(407,`(opcional)`),Kg()(),Jc(408,`p`),Mk(409,`Exibe o Gerenciador de Accordion.`),Kg()()(),Jc(410,`tr`,34)(411,`td`,18)(412,`div`,19)(413,`span`,20),Mk(414,` p-size`),_u(415,`br`),Kg()()(),Jc(416,`td`,21)(417,`code`,35),Mk(418,`string`),Kg()(),Jc(419,`td`,23)(420,`p`)(421,`code`),Mk(422,`medium`),Kg()()(),Jc(423,`td`,24)(424,`em`)(425,`strong`),Mk(426,`(opcional)`),Kg()(),Jc(427,`p`),Mk(428,`Define o tamanho do componente:`),Kg(),Jc(429,`ul`)(430,`li`)(431,`code`),Mk(432,`small`),Kg(),Mk(433,`: altura de 32px (disponível apenas para acessibilidade AA).`),Kg(),Jc(434,`li`)(435,`code`),Mk(436,`medium`),Kg(),Mk(437,`: altura de 44px.`),Kg()(),Jc(438,`blockquote`)(439,`p`),Mk(440,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(441,`code`),Mk(442,`medium`),Kg(),Mk(443,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(444,`a`,36),Mk(445,`po-theme`),Kg(),Mk(446,`.`),Kg()()()()(),Jc(447,`h3`,13),Mk(448,`Métodos`),Kg(),Jc(449,`table`,37)(450,`tr`,38)(451,`th`,39)(452,`div`,19)(453,`h4`)(454,`span`,20),Mk(455,` collapseAllItems `),Kg()()()()(),Jc(456,`tr`,24)(457,`td`,24)(458,`p`),Mk(459,`M\xE9todo para colapsar todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Jc(460,`code`),Mk(461,`p-show-manager-accordion`),Kg(),Mk(462,` estiver como `),Jc(463,`code`),Mk(464,`true`),Kg(),Mk(465,`.`),Kg()()()(),_u(466,`br`),Jc(467,`table`,40)(468,`tr`,38)(469,`th`,39)(470,`div`,19)(471,`h4`)(472,`span`,20),Mk(473,` expandAllItems `),Kg()()()()(),Jc(474,`tr`,24)(475,`td`,24)(476,`p`),Mk(477,`M\xE9todo para expandir todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Jc(478,`code`),Mk(479,`p-show-manager-accordion`),Kg(),Mk(480,` estiver como `),Jc(481,`code`),Mk(482,`true`),Kg(),Mk(483,`.`),Kg()()()(),_u(484,`br`),Jc(485,`h3`),Mk(486,`Interfaces`),Kg(),Jc(487,`h4`,41)(488,`code`,7),Mk(489,`PoAccordionLiterals`),Kg()(),Jc(490,`div`,2)(491,`p`),Mk(492,`Interface para definição das literais usadas no `),Jc(493,`code`),Mk(494,`po-accordion`),Kg(),Mk(495,`.`),Kg()(),Jc(496,`h4`,13),Mk(497,`Propriedades`),Kg(),Jc(498,`table`,14)(499,`tr`,15)(500,`th`,16),Mk(501,`Nome`),Kg(),Jc(502,`th`,16),Mk(503,`Tipo`),Kg(),Jc(504,`th`,16),Mk(505,`Descrição`),Kg()(),Jc(506,`tr`,42)(507,`td`,18)(508,`div`,19)(509,`span`,20),Mk(510,` closeAllItems`),_u(511,`br`),Kg()()(),Jc(512,`td`,21)(513,`code`,35),Mk(514,`string`),Kg()(),Jc(515,`td`,24)(516,`em`)(517,`strong`),Mk(518,`(opcional)`),Kg()(),Jc(519,`p`),Mk(520,`Label do gerenciador de Accordion para colapsar todos os itens`),Kg()()(),Jc(521,`tr`,43)(522,`td`,18)(523,`div`,19)(524,`span`,20),Mk(525,` expandAllItems`),_u(526,`br`),Kg()()(),Jc(527,`td`,21)(528,`code`,35),Mk(529,`string`),Kg()(),Jc(530,`td`,24)(531,`em`)(532,`strong`),Mk(533,`(opcional)`),Kg()(),Jc(534,`p`),Mk(535,`Label do gerenciador de Accordion para expandir todos os itens.`),Kg()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return n})();function Pe(n,L){if(n&1&&(Jc(0,`div`,1),_u(1,`sample-po-accordion-basic-view`)(2,`sample-po-accordion-labs-view`)(3,`sample-po-accordion-faq-view`),Kg()),n&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var Ie=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Accordion`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`,this.title=`Accordion · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(i,a){i&1&&(Jc(0,`po-page-default`,0),LO(1,Pe,4,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-accordion-doc`),Kg()()),i&2&&(Ab(`p-title`,a.title)(`p-actions`,a.actions),wg(),jO(a.hidePoWebSample?-1:1),wg(),Ab(`hidden`,a.activeTab!==`doc`))},dependencies:[Mze,pe,se,be,ge],encapsulation:2,changeDetection:1})}return n})()}];var fe=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge$1({type:n});static ɵinj=de({imports:[GV.forChild(Ie),GV]})}return n})();var nt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge$1({type:n});static ɵinj=de({imports:[M,fe]})}return n})();export{nt as DocPoAccordionModule};