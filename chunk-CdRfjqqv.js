import{m as P,p as M}from"./main-DMA7KEAR.js";import{Ar as I,At as Zte,Ci as UO,G as Nf,Ir as Kb,Lr as Kg,Oi as VO,Or as HO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Sa as j_,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,ar as An,bn as oi,ci as QP,cr as B_,da as gk,dn as l4,do as xo,ft as Tee,gi as Rb,go as z0,io as vu,j as I4,ji as Vk,ki as V_,li as Qc,lt as Ss,na as de,oo as wg,ro as vt,sa as ek,si as QL,sn as j4,sr as BO,ua as ge$1,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO,yn as oae,yr as Du}from"./chunk-DtUf9FxZ.js";var se=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-basic`]],standalone:!1,decls:7,vars:0,consts:[[`p-label`,`PO Accordion 1`],[1,`po-text-color-neutral-dark-40`],[`p-label`,`PO Accordion 2`]],template:function(a,i){a&1&&(Qc(0,`po-accordion`)(1,`po-accordion-item`,0)(2,`p`,1),Sk(3,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`),Kg()(),Qc(4,`po-accordion-item`,2)(5,`p`,1),Sk(6,` In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque `),Kg()()())},dependencies:[Tee,l4],encapsulation:2,changeDetection:1})}return n})();var ye=n=>({"docs-sample-code-tabs":n});var he=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-accordion-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-accordion-basic/sample-po-accordion-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-accordion-basic/sample-po-accordion-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Accordion Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-accordion-basic/sample-po-accordion-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-accordion>
  <po-accordion-item p-label="PO Accordion 1">
    <p class="po-text-color-neutral-dark-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </po-accordion-item>
  <po-accordion-item p-label="PO Accordion 2">
    <p class="po-text-color-neutral-dark-40">
      In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque
    </p>
  </po-accordion-item>
</po-accordion>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-accordion-basic/sample-po-accordion-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-accordion-basic',
  templateUrl: './sample-po-accordion-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-accordion-basic`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ye,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,se],encapsulation:2,changeDetection:1})}return n})();function we(n,z){if(n&1&&(Qc(0,`po-accordion-item`,2),Sk(1),Kg()),n&2){let r=z.$implicit,a=z.$index;Rb(`p-label`,r.label)(`p-disabled`,r.disabledItem)(`p-label-tag`,r.labelTag)(`p-type-tag`,r.typeTag),wg(),tm(` Accordion Item Content `,a,` `)}}var be=(()=>{class n{accordionFieldsForm=[{property:`label`,required:!0,gridColumns:6},{property:`labelTag`,label:`Label Tag`,gridColumns:6}];propertiesAccordionOptions=[{value:`showManager`,label:`Show Accordion Manager`},{value:`expandItems`,label:`Allow Expand All Items`}];typeTagOptions=[{value:`success`,label:`Success`},{value:`warning`,label:`Warning`},{value:`danger`,label:`Danger`},{value:`info`,label:`Info`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];disabledOption=[{value:`disabled`,label:`Disabled`}];properties=[];propertiesAccordion=[];disabledItem=[];accordionItemIndex;customLiterals;literals;typeTag;accordionItems=[];size;ngOnInit(){this.restore()}addAccordionItem(r){r.disabledItem=this.disabledItem.includes(`disabled`),r.labelTag&&(r.typeTag=this.typeTag);let a=Object.assign({},r,{value:this.accordionItems.length});this.accordionItems=[...this.accordionItems,a],this.disabledItem=[],this.typeTag=void 0}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(r){this.customLiterals=void 0}}restore(){this.accordionItems=[],this.customLiterals=void 0,this.disabledItem=[],this.literals=``,this.properties=[],this.propertiesAccordion=[],this.typeTag=void 0,this.size=`medium`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-labs`]],standalone:!1,decls:18,vars:16,consts:[[`accordionForm`,``],[3,`p-literals`,`p-show-manager-accordion`,`p-allow-expand-all-items`,`p-size`],[3,`p-label`,`p-disabled`,`p-label-tag`,`p-type-tag`],[`p-label`,`ACCORDION`],[1,`po-row`,`po-mt-1`,`po-mb-1`],[`name`,`literals`,`p-help`,`Ex.: {"closeAllItems": "Fechar itens"}`,`p-label`,`Literals`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`propertiesAccordion`,`p-label`,`Properties Accordion`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`ACCORDION ITEM`],[3,`p-fields`,`p-value`],[1,`po-row`,`po-mt-2`,`po-mb-2`],[`p-label`,`Type Tag`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[`p-label`,`Properties Accordion Item`,`name`,`disabledItem`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[1,`po-row`,`po-mt-1`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Accordion`,1,`po-md-6`,3,`p-click`,`p-disabled`],[1,`po-row`,`po-mt-2`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let m=YO();Qc(0,`po-accordion`,1),UO(1,we,2,5,`po-accordion-item`,2,BO),Kg(),vu(3,`po-divider`,3),Qc(4,`div`,4)(5,`po-input`,5),z0(),Kb(`ngModelChange`,function(c){return B_(m),Tk(i.literals,c)||(i.literals=c),U_(c)}),vt(`p-change`,function(){return i.changeLiterals()}),Kg(),Qc(6,`po-checkbox-group`,6),z0(),Kb(`ngModelChange`,function(c){return B_(m),Tk(i.propertiesAccordion,c)||(i.propertiesAccordion=c),U_(c)}),Kg()(),vu(7,`po-divider`,7)(8,`po-dynamic-form`,8,0),Qc(10,`div`,9)(11,`po-radio-group`,10),z0(),Kb(`ngModelChange`,function(c){return B_(m),Tk(i.typeTag,c)||(i.typeTag=c),U_(c)}),Kg(),Qc(12,`po-checkbox-group`,11),z0(),Kb(`ngModelChange`,function(c){return B_(m),Tk(i.disabledItem,c)||(i.disabledItem=c),U_(c)}),Kg()(),Qc(13,`div`,12)(14,`po-radio-group`,13),z0(),Kb(`ngModelChange`,function(c){return B_(m),Tk(i.size,c)||(i.size=c),U_(c)}),Kg(),Qc(15,`po-button`,14),vt(`p-click`,function(){B_(m);let c=ik(9);return i.addAccordionItem(c.form.value),U_(c.form.reset())}),Kg()(),Qc(16,`div`,15)(17,`po-button`,16),vt(`p-click`,function(){return i.restore()}),Kg()()}if(a&2){let m=ik(9);Rb(`p-literals`,i.customLiterals)(`p-show-manager-accordion`,i.propertiesAccordion.includes(`showManager`))(`p-allow-expand-all-items`,i.propertiesAccordion.includes(`expandItems`))(`p-size`,i.size),wg(),HO(i.accordionItems),wg(4),Yb(`ngModel`,i.literals),W0(),wg(),Yb(`ngModel`,i.propertiesAccordion),Rb(`p-options`,i.propertiesAccordionOptions),W0(),wg(2),Rb(`p-fields`,i.accordionFieldsForm)(`p-value`,i.accordionItems),wg(3),Rb(`p-options`,i.typeTagOptions),Yb(`ngModel`,i.typeTag),W0(),wg(),Rb(`p-options`,i.disabledOption),Yb(`ngModel`,i.disabledItem),W0(),wg(2),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),W0(),wg(),Rb(`p-disabled`,m.form.invalid)}},dependencies:[MZ,QL,Tee,l4,oi,Nf,oae,I4,j4,Zte],encapsulation:2,changeDetection:1})}return n})();var Ie=n=>({"docs-sample-code-tabs":n});var ge=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-labs-view`]],standalone:!1,decls:32,vars:6,consts:[[`id`,`sample-po-accordion-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-accordion-labs/sample-po-accordion-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-accordion-labs/sample-po-accordion-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Accordion Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-accordion-labs/sample-po-accordion-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-accordion
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
      Accordion Item Content `),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` i `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`
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
`),Kg()()()(),Qc(22,`po-tab`,9)(23,`div`)(24,`label`,6),Sk(25,`sample-po-accordion-labs/sample-po-accordion-labs.component.ts`),Kg(),Qc(26,`div`,10)(27,`pre`,11),Sk(28,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),Qc(29,`div`,12),vu(30,`sample-po-accordion-labs`),Kg(),vu(31,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ie,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,be],encapsulation:2,changeDetection:1})}return n})();var fe=(()=>{class n{questionOne;ngAfterContentInit(){this.questionOne.expand()}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-faq`]],viewQuery:function(a,i){if(a&1&&Du(l4,7),a&2){let m;No(m=xo())&&(i.questionOne=m.first)}},standalone:!1,decls:22,vars:1,consts:[[`questionOne`,``],[`p-title`,`Blood donation FAQs`],[1,`po-pb-2`,`po-text-color-neutral-dark-40`],[3,`p-show-manager-accordion`],[`p-label`,`Who can donate?`],[1,`po-text-color-neutral-dark-40`],[`p-label`,`How long does it take for the blood to be processed?`,`p-label-tag`,`Important!`,`p-type-tag`,`danger`],[`p-label`,`How long does the body take to replenish donated blood?`],[`p-label`,`Is donating blood safe?`],[1,`po-pt-2`,`po-text-color-neutral-dark-40`],[`href`,`http://www.hemosc.org.br/perguntas-frequentes.html`]],template:function(a,i){a&1&&(Qc(0,`po-page-default`,1)(1,`p`,2),Sk(2,`You don't have to be afraid of being a blood donor!`),Kg(),Qc(3,`po-accordion`,3)(4,`po-accordion-item`,4,0)(6,`p`,5),Sk(7,` In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance with current legislation and a number of factors that take into account the risk that such a donation may pose to the health of the candidate himself and to the health of the individual receiving the donated blood. `),Kg()(),Qc(8,`po-accordion-item`,6)(9,`p`,5),Sk(10,` Blood is processed as soon as collected, preferably within 6 hours of donation. `),Kg()(),Qc(11,`po-accordion-item`,7)(12,`p`,5),Sk(13,` Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of childbearing age. `),Kg()(),Qc(14,`po-accordion-item`,8)(15,`p`,5),Sk(16,` Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there is a small risk that the donor may feel unwell during or shortly after the donation especially the first few times he or she donates, but the services are concerned about this, watching and making sure the donors feel nothing or feel feel so that they are well assisted until full recovery. `),Kg()()(),Qc(17,`p`,9),Sk(18,` For more information, see the `),Qc(19,`a`,10),Sk(20,`Hemosc FAQ`),Kg(),Sk(21,`. `),Kg()()),a&2&&(wg(3),Rb(`p-show-manager-accordion`,!0))},dependencies:[Tee,l4,Mze],encapsulation:2,changeDetection:1})}return n})();var _e=n=>({"docs-sample-code-tabs":n});var Se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-faq-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-accordion-faq`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-accordion-faq/sample-po-accordion-faq.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-accordion-faq/sample-po-accordion-faq.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Accordion - FAQs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-accordion-faq/sample-po-accordion-faq.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-default p-title="Blood donation FAQs">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-accordion-faq/sample-po-accordion-faq.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { AfterContentInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-accordion-faq`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,_e,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,fe],encapsulation:2,changeDetection:1})}return n})();var Ee=(()=>{class n{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-accordion-doc`]],standalone:!1,decls:536,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Accordion Item`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-accordion-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-accordion-item`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-allow-expand-all-items`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-collapse-all`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`event-p-expand-all`,1,`docs-api-properties-row`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoAccordionLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`prop-p-show-manager-accordion`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`method-collapseAllItems`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-expandAllItems`,1,`docs-api-method-table`],[`id`,`interface-po-accordion-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-accordion-literals-close-all-items`,1,`docs-api-properties-row`],[`id`,`interface-po-accordion-literals-expand-all-items`,1,`docs-api-properties-row`]],template:function(a,i){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoAccordionModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente `),Qc(7,`code`),Sk(8,`po-accordion`),Kg(),Sk(9,`.`),Kg()(),Qc(10,`blockquote`,3)(11,`strong`),Sk(12,`Subcomponentes:`),Kg(),Qc(13,`po-tag`,4),vt(`p-click`,function(){return i.openDoc(`po-accordion-item`)}),Kg()(),Qc(14,`h3`,5),Sk(15,`Componente`),Kg(),Qc(16,`h4`,6)(17,`code`,7),Sk(18,`PoAccordionComponent`),Kg()(),Qc(19,`div`,2)(20,`p`),Sk(21,`Componente utilizado para agrupar visualmente uma lista de conte\xFAdos, mostrando-os individualmente
ao clicar no t\xEDtulo de cada item.`),Kg(),Qc(22,`p`),Sk(23,`Para utilizá-lo, é necessário envolver cada item no componente `),Qc(24,`a`,8)(25,`code`),Sk(26,`po-accordion-item`),Kg()(),Sk(27,`,
como no exemplo abaixo:`),Kg(),Qc(28,`pre`)(29,`code`),Sk(30,`<po-accordion #accordion [p-show-manager-accordion]="true">
  <po-accordion-item p-label="PO Accordion 1">
     Accordion 1
  </po-accordion-item>

  <po-accordion-item p-label="PO Accordion 2">
     Accordion 2
  </po-accordion-item>
</po-accordion>
`),Kg()(),Qc(31,`p`),Sk(32,`e no typescript pode-se utilizar o `),Qc(33,`code`),Sk(34,`@ViewChild`),Kg(),Sk(35,`:`),Kg(),Qc(36,`pre`)(37,`code`),Sk(38,`@ViewChild(PoAccordionComponent, { static: true }) accordion: PoAccordionComponent;

ngAfterContentInit() {
  // ou utilizar o m\xE9todo collapseAllItems();
  this.accordion.expandAllItems();
}
`),Kg()(),Qc(39,`p`),Sk(40,`O componente já faz o controle de abertura e fechamento dos itens automaticamente.`),Kg(),Qc(41,`p`),Sk(42,`Caso houver a necessidade de abrir algum dos `),Qc(43,`code`),Sk(44,`po-accordion-item`),Kg(),Sk(45,` via Typescript
acesse a `),Qc(46,`a`,8),Sk(47,`documentação do PoAccordionItem`),Kg(),Sk(48,`.`),Kg(),Qc(49,`h4`),Sk(50,`Tokens customizáveis`),Kg(),Qc(51,`p`),Sk(52,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(53,`blockquote`)(54,`p`),Sk(55,`Para maiores informações, acesse o guia `),Qc(56,`a`,9),Sk(57,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(58,`.`),Kg()(),Qc(59,`table`)(60,`thead`)(61,`tr`)(62,`th`),Sk(63,`Propriedade`),Kg(),Qc(64,`th`),Sk(65,`Descrição`),Kg(),Qc(66,`th`),Sk(67,`Valor Padrão`),Kg()()(),Qc(68,`tbody`)(69,`tr`)(70,`td`)(71,`strong`),Sk(72,`Default Values`),Kg()(),vu(73,`td`)(74,`td`),Kg(),Qc(75,`tr`)(76,`td`)(77,`code`),Sk(78,`--font-family`),Kg()(),Qc(79,`td`),Sk(80,`Família tipográfica usada`),Kg(),Qc(81,`td`)(82,`code`),Sk(83,`var(--font-family-theme)`),Kg()()(),Qc(84,`tr`)(85,`td`)(86,`code`),Sk(87,`--font-size`),Kg()(),Qc(88,`td`),Sk(89,`Tamanho da fonte`),Kg(),Qc(90,`td`)(91,`code`),Sk(92,`var(--font-size-default)`),Kg()()(),Qc(93,`tr`)(94,`td`)(95,`code`),Sk(96,`--color`),Kg()(),Qc(97,`td`),Sk(98,`Cor principal do accordion`),Kg(),Qc(99,`td`)(100,`code`),Sk(101,`var(--color-action-default)`),Kg()()(),Qc(102,`tr`)(103,`td`)(104,`code`),Sk(105,`--background-color`),Kg()(),Qc(106,`td`),Sk(107,`Cor de background`),Kg(),Qc(108,`td`)(109,`code`),Sk(110,`var(--color-neutral-light-00)`),Kg()()(),Qc(111,`tr`)(112,`td`)(113,`code`),Sk(114,`--font-weight`),Kg()(),Qc(115,`td`),Sk(116,`Peso da fonte`),Kg(),Qc(117,`td`)(118,`code`),Sk(119,`var(--font-weight-bold)`),Kg()()(),Qc(120,`tr`)(121,`td`)(122,`strong`),Sk(123,`Hover`),Kg()(),vu(124,`td`)(125,`td`),Kg(),Qc(126,`tr`)(127,`td`)(128,`code`),Sk(129,`--color-hover`),Kg()(),Qc(130,`td`),Sk(131,`Cor principal no estado hover`),Kg(),Qc(132,`td`)(133,`code`),Sk(134,`var(--color-action-hover)`),Kg()()(),Qc(135,`tr`)(136,`td`)(137,`code`),Sk(138,`--background-hover`),Kg()(),Qc(139,`td`),Sk(140,`Cor de background no estado hover`),Kg(),Qc(141,`td`)(142,`code`),Sk(143,`var(--color-brand-01-lightest)`),Kg()()(),Qc(144,`tr`)(145,`td`)(146,`strong`),Sk(147,`Focused`),Kg()(),vu(148,`td`)(149,`td`),Kg(),Qc(150,`tr`)(151,`td`)(152,`code`),Sk(153,`--color-focused`),Kg()(),Qc(154,`td`),Sk(155,`Cor principal no estado de focus`),Kg(),Qc(156,`td`)(157,`code`),Sk(158,`var(--color-action-focus)`),Kg()()(),Qc(159,`tr`)(160,`td`)(161,`code`),Sk(162,`--outline-color-focused`),Kg(),Sk(163,` \xA0`),Kg(),Qc(164,`td`),Sk(165,`Cor do outline do estado de focus`),Kg(),Qc(166,`td`)(167,`code`),Sk(168,`var(--color-action-focus)`),Kg()()(),Qc(169,`tr`)(170,`td`)(171,`strong`),Sk(172,`Disabled`),Kg()(),vu(173,`td`)(174,`td`),Kg(),Qc(175,`tr`)(176,`td`)(177,`code`),Sk(178,`--color-disabled`),Kg()(),Qc(179,`td`),Sk(180,`Cor principal no estado disabled`),Kg(),Qc(181,`td`)(182,`code`),Sk(183,`var(--color-neutral-mid-60)`),Kg()()(),Qc(184,`tr`)(185,`td`)(186,`code`),Sk(187,`--background-disabled`),Kg(),Sk(188,` \xA0`),Kg(),Qc(189,`td`),Sk(190,`Cor de background no estado disabled`),Kg(),Qc(191,`td`)(192,`code`),Sk(193,`var(--color-neutral-light-10)`),Kg()()(),Qc(194,`tr`)(195,`td`)(196,`strong`),Sk(197,`po-accordion-manager`),Kg()(),vu(198,`td`)(199,`td`),Kg(),Qc(200,`tr`)(201,`td`)(202,`code`),Sk(203,`--background-color`),Kg()(),Qc(204,`td`),Sk(205,`Cor de background`),Kg(),Qc(206,`td`)(207,`code`),Sk(208,`var(--color-neutral-mid-60)`),Kg()()(),Qc(209,`tr`)(210,`td`)(211,`code`),Sk(212,`--color`),Kg()(),Qc(213,`td`),Sk(214,`Cor principal do accordion manager`),Kg(),Qc(215,`td`)(216,`code`),Sk(217,`var(--color-neutral-light-10)`),Kg()()(),Qc(218,`tr`)(219,`td`)(220,`code`),Sk(221,`--font-family`),Kg()(),Qc(222,`td`),Sk(223,`Família tipográfica usada`),Kg(),Qc(224,`td`)(225,`code`),Sk(226,`var(--color-neutral-light-10)`),Kg()()(),Qc(227,`tr`)(228,`td`)(229,`code`),Sk(230,`--font-size`),Kg()(),Qc(231,`td`),Sk(232,`Tamanho da fonte`),Kg(),Qc(233,`td`)(234,`code`),Sk(235,`var(--color-neutral-light-10)`),Kg()()(),Qc(236,`tr`)(237,`td`)(238,`code`),Sk(239,`--font-weight`),Kg()(),Qc(240,`td`),Sk(241,`Peso da fonte`),Kg(),Qc(242,`td`)(243,`code`),Sk(244,`var(--color-neutral-light-10)`),Kg()()(),Qc(245,`tr`)(246,`td`)(247,`strong`),Sk(248,`Pressed`),Kg()(),vu(249,`td`)(250,`td`),Kg(),Qc(251,`tr`)(252,`td`)(253,`code`),Sk(254,`--background-pressed`),Kg(),Sk(255,` \xA0`),Kg(),Qc(256,`td`),Sk(257,`Cor de background no estado de pressionado\xA0`),Kg(),Qc(258,`td`)(259,`code`),Sk(260,`var(--color-brand-01-lighter)`),Kg()()(),Qc(261,`tr`)(262,`td`)(263,`code`),Sk(264,`--color-pressed`),Kg()(),Qc(265,`td`),Sk(266,`Cor principal no estado de pressionado`),Kg(),Qc(267,`td`)(268,`code`),Sk(269,`var(--color-action-pressed)`),Kg()()()()()(),Qc(270,`div`,10)(271,`h4`,11),Sk(272,`Seletor`),Kg(),Qc(273,`pre`,12),Sk(274,`<po-accordion
    p-allow-expand-all-items="boolean"
    (p-collapse-all)="EventEmitter"
    (p-expand-all)="EventEmitter"
    p-literals="PoAccordionLiterals"
    p-show-manager-accordion="boolean"
    p-size="string" >
</po-accordion>
`),Kg()(),Qc(275,`h4`,13),Sk(276,`Propriedades`),Kg(),Qc(277,`table`,14)(278,`tr`,15)(279,`th`,16),Sk(280,`Nome`),Kg(),Qc(281,`th`,16),Sk(282,`Tipo`),Kg(),Qc(283,`th`,16),Sk(284,`Padrão`),Kg(),Qc(285,`th`,16),Sk(286,`Descrição`),Kg()(),Qc(287,`tr`,17)(288,`td`,18)(289,`div`,19)(290,`span`,20),Sk(291,` p-allow-expand-all-items`),vu(292,`br`),Kg()()(),Qc(293,`td`,21)(294,`code`,22),Sk(295,`boolean`),Kg()(),Qc(296,`td`,23)(297,`p`)(298,`code`),Sk(299,`false`),Kg()()(),Qc(300,`td`,24)(301,`em`)(302,`strong`),Sk(303,`(opcional)`),Kg()(),Qc(304,`p`),Sk(305,`Permite expandir mais de um `),Qc(306,`code`),Sk(307,`<po-accordion-item></po-accordion-item>`),Kg(),Sk(308,` ao mesmo tempo.
Sempre habilitada caso a propriedade `),Qc(309,`code`),Sk(310,`p-show-manager-accordion`),Kg(),Sk(311,` esteja como `),Qc(312,`code`),Sk(313,`true`),Kg(),Sk(314,`.`),Kg()()(),Qc(315,`tr`,25)(316,`td`,18)(317,`div`,26)(318,`span`,27),Sk(319,` (p-collapse-all)`),vu(320,`br`),Kg()()(),Qc(321,`td`,21)(322,`code`,28),Sk(323,`EventEmitter`),Kg()(),Qc(324,`td`,23),Sk(325,`-`),Kg(),Qc(326,`td`,24)(327,`em`)(328,`strong`),Sk(329,`(opcional)`),Kg()(),Qc(330,`p`),Sk(331,`Evento disparado ao retrair o gerenciador de accordion, seja manualmente ou programaticamente.`),Kg()()(),Qc(332,`tr`,29)(333,`td`,18)(334,`div`,26)(335,`span`,27),Sk(336,` (p-expand-all)`),vu(337,`br`),Kg()()(),Qc(338,`td`,21)(339,`code`,28),Sk(340,`EventEmitter`),Kg()(),Qc(341,`td`,23),Sk(342,`-`),Kg(),Qc(343,`td`,24)(344,`em`)(345,`strong`),Sk(346,`(opcional)`),Kg()(),Qc(347,`p`),Sk(348,`Evento disparado ao expandir o gerenciador de accordion, seja manualmente ou programaticamente.`),Kg()()(),Qc(349,`tr`,30)(350,`td`,18)(351,`div`,19)(352,`span`,20),Sk(353,` p-literals`),vu(354,`br`),Kg()()(),Qc(355,`td`,21)(356,`code`,31),Sk(357,`PoAccordionLiterals`),Kg()(),Qc(358,`td`,23),Sk(359,`-`),Kg(),Qc(360,`td`,24)(361,`em`)(362,`strong`),Sk(363,`(opcional)`),Kg()(),Qc(364,`p`),Sk(365,`Objeto com as literais usadas no `),Qc(366,`code`),Sk(367,`po-accordion`),Kg(),Sk(368,`.`),Kg(),Qc(369,`p`),Sk(370,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Kg(),Qc(371,`pre`)(372,`code`),Sk(373,`const customLiterals: PoAccordionLiterals = {
  closeAllItems: 'Fechar todos os itens',
  expandAllItems: 'Expandir todos os itens'
};
`),Kg()(),Qc(374,`p`),Sk(375,`Ou passando apenas as literais que deseja customizar:`),Kg(),Qc(376,`pre`)(377,`code`),Sk(378,`const customLiterals: PoAccordionLiterals = {
  expandAllItems: 'Expandir todos os itens'
};
`),Kg()(),Qc(379,`p`),Sk(380,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Kg(),Qc(381,`pre`)(382,`code`),Sk(383,`<po-accordion
  [p-literals]="customLiterals">
</po-accordion>
`),Kg()(),Qc(384,`blockquote`)(385,`p`),Sk(386,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Qc(387,`a`,32)(388,`code`),Sk(389,`PoI18nService`),Kg()(),Sk(390,` ou do browser.`),Kg()()()(),Qc(391,`tr`,33)(392,`td`,18)(393,`div`,19)(394,`span`,20),Sk(395,` p-show-manager-accordion`),vu(396,`br`),Kg()()(),Qc(397,`td`,21)(398,`code`,22),Sk(399,`boolean`),Kg()(),Qc(400,`td`,23)(401,`p`)(402,`code`),Sk(403,`false`),Kg()()(),Qc(404,`td`,24)(405,`em`)(406,`strong`),Sk(407,`(opcional)`),Kg()(),Qc(408,`p`),Sk(409,`Exibe o Gerenciador de Accordion.`),Kg()()(),Qc(410,`tr`,34)(411,`td`,18)(412,`div`,19)(413,`span`,20),Sk(414,` p-size`),vu(415,`br`),Kg()()(),Qc(416,`td`,21)(417,`code`,35),Sk(418,`string`),Kg()(),Qc(419,`td`,23)(420,`p`)(421,`code`),Sk(422,`medium`),Kg()()(),Qc(423,`td`,24)(424,`em`)(425,`strong`),Sk(426,`(opcional)`),Kg()(),Qc(427,`p`),Sk(428,`Define o tamanho do componente:`),Kg(),Qc(429,`ul`)(430,`li`)(431,`code`),Sk(432,`small`),Kg(),Sk(433,`: altura de 32px (disponível apenas para acessibilidade AA).`),Kg(),Qc(434,`li`)(435,`code`),Sk(436,`medium`),Kg(),Sk(437,`: altura de 44px.`),Kg()(),Qc(438,`blockquote`)(439,`p`),Sk(440,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(441,`code`),Sk(442,`medium`),Kg(),Sk(443,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(444,`a`,36),Sk(445,`po-theme`),Kg(),Sk(446,`.`),Kg()()()()(),Qc(447,`h3`,13),Sk(448,`Métodos`),Kg(),Qc(449,`table`,37)(450,`tr`,38)(451,`th`,39)(452,`div`,19)(453,`h4`)(454,`span`,20),Sk(455,` collapseAllItems `),Kg()()()()(),Qc(456,`tr`,24)(457,`td`,24)(458,`p`),Sk(459,`M\xE9todo para colapsar todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Qc(460,`code`),Sk(461,`p-show-manager-accordion`),Kg(),Sk(462,` estiver como `),Qc(463,`code`),Sk(464,`true`),Kg(),Sk(465,`.`),Kg()()()(),vu(466,`br`),Qc(467,`table`,40)(468,`tr`,38)(469,`th`,39)(470,`div`,19)(471,`h4`)(472,`span`,20),Sk(473,` expandAllItems `),Kg()()()()(),Qc(474,`tr`,24)(475,`td`,24)(476,`p`),Sk(477,`M\xE9todo para expandir todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Qc(478,`code`),Sk(479,`p-show-manager-accordion`),Kg(),Sk(480,` estiver como `),Qc(481,`code`),Sk(482,`true`),Kg(),Sk(483,`.`),Kg()()()(),vu(484,`br`),Qc(485,`h3`),Sk(486,`Interfaces`),Kg(),Qc(487,`h4`,41)(488,`code`,7),Sk(489,`PoAccordionLiterals`),Kg()(),Qc(490,`div`,2)(491,`p`),Sk(492,`Interface para definição das literais usadas no `),Qc(493,`code`),Sk(494,`po-accordion`),Kg(),Sk(495,`.`),Kg()(),Qc(496,`h4`,13),Sk(497,`Propriedades`),Kg(),Qc(498,`table`,14)(499,`tr`,15)(500,`th`,16),Sk(501,`Nome`),Kg(),Qc(502,`th`,16),Sk(503,`Tipo`),Kg(),Qc(504,`th`,16),Sk(505,`Descrição`),Kg()(),Qc(506,`tr`,42)(507,`td`,18)(508,`div`,19)(509,`span`,20),Sk(510,` closeAllItems`),vu(511,`br`),Kg()()(),Qc(512,`td`,21)(513,`code`,35),Sk(514,`string`),Kg()(),Qc(515,`td`,24)(516,`em`)(517,`strong`),Sk(518,`(opcional)`),Kg()(),Qc(519,`p`),Sk(520,`Label do gerenciador de Accordion para colapsar todos os itens`),Kg()()(),Qc(521,`tr`,43)(522,`td`,18)(523,`div`,19)(524,`span`,20),Sk(525,` expandAllItems`),vu(526,`br`),Kg()()(),Qc(527,`td`,21)(528,`code`,35),Sk(529,`string`),Kg()(),Qc(530,`td`,24)(531,`em`)(532,`strong`),Sk(533,`(opcional)`),Kg()(),Qc(534,`p`),Sk(535,`Label do gerenciador de Accordion para expandir todos os itens.`),Kg()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return n})();function Le(n,z){if(n&1){let r=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(r);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-accordion-basic-view`)(2,`sample-po-accordion-labs-view`)(3,`sample-po-accordion-faq-view`),Kg()}if(n&2){let r=ek();Rb(`p-active`,r.activeTab===`web`)}}var Fe=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Accordion`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Le,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-accordion-doc`),Kg()()()),a&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,he,ge,Se,Ee],encapsulation:2,changeDetection:1})}return n})()}];var Ce=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge$1({type:n});static ɵinj=de({imports:[GV.forChild(Fe),GV]})}return n})();var pt=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge$1({type:n});static ɵinj=de({imports:[M,Ce]})}return n})();export{pt as DocPoAccordionModule};