import{Cn as oi,Da as pe,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,L as Joe,La as uO,Ln as w4,Mr as I1,Na as r0,Ra as ue$1,Sa as o0,Si as Xx,T as Gte,Vi as bx,Vt as bee,Wa as vo,Xa as wx,Xt as ere,Ya as wg,Za as xF,aa as iu,ai as Sn,dr as DO,gn as n4,gr as Dx,ht as U4,i as Ac,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,nr as Ag,or as Bx,qr as Ok,ri as SK,ro as yo,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu,yr as Ex}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-7FOYFSS2.js";var ce=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-accordion-basic`]],standalone:!1,decls:7,vars:0,consts:[[`p-label`,`PO Accordion 1`],[1,`po-text-color-neutral-dark-40`],[`p-label`,`PO Accordion 2`]],template:function(a,i){a&1&&(jc(0,`po-accordion`)(1,`po-accordion-item`,0)(2,`p`,1),lO(3,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`),wg()(),jc(4,`po-accordion-item`,2)(5,`p`,1),lO(6,` In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque `),wg()()())},dependencies:[bee,n4],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n});var me=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-accordion-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Accordion Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-accordion-basic/sample-po-accordion-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-accordion>
  <po-accordion-item p-label="PO Accordion 1">
    <p class="po-text-color-neutral-dark-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </po-accordion-item>
  <po-accordion-item p-label="PO Accordion 2">
    <p class="po-text-color-neutral-dark-40">
      In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque
    </p>
  </po-accordion-item>
</po-accordion>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-accordion-basic/sample-po-accordion-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-accordion-basic',
  templateUrl: './sample-po-accordion-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionBasicComponent {}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-accordion-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,xe,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,ce],encapsulation:2,changeDetection:1})}return n})();function ve(n,B){if(n&1&&(jc(0,`po-accordion-item`,2),lO(1),wg()),n&2){let r=B.$implicit,a=B.$index;UE(`p-label`,r.label)(`p-disabled`,r.disabledItem)(`p-label-tag`,r.labelTag)(`p-type-tag`,r.typeTag),rg(),Ag(` Accordion Item Content `,a,` `)}}var se=(()=>{class n{accordionFieldsForm=[{property:`label`,required:!0,gridColumns:6},{property:`labelTag`,label:`Label Tag`,gridColumns:6}];propertiesAccordionOptions=[{value:`showManager`,label:`Show Accordion Manager`},{value:`expandItems`,label:`Allow Expand All Items`}];typeTagOptions=[{value:`success`,label:`Success`},{value:`warning`,label:`Warning`},{value:`danger`,label:`Danger`},{value:`info`,label:`Info`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];disabledOption=[{value:`disabled`,label:`Disabled`}];properties=[];propertiesAccordion=[];disabledItem=[];accordionItemIndex;customLiterals;literals;typeTag;accordionItems=[];size;ngOnInit(){this.restore()}addAccordionItem(r){r.disabledItem=this.disabledItem.includes(`disabled`),r.labelTag&&(r.typeTag=this.typeTag);let a=Object.assign({},r,{value:this.accordionItems.length});this.accordionItems=[...this.accordionItems,a],this.disabledItem=[],this.typeTag=void 0}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(r){this.customLiterals=void 0}}restore(){this.accordionItems=[],this.customLiterals=void 0,this.disabledItem=[],this.literals=``,this.properties=[],this.propertiesAccordion=[],this.typeTag=void 0,this.size=`medium`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-accordion-labs`]],standalone:!1,decls:18,vars:16,consts:[[`accordionForm`,``],[3,`p-literals`,`p-show-manager-accordion`,`p-allow-expand-all-items`,`p-size`],[3,`p-label`,`p-disabled`,`p-label-tag`,`p-type-tag`],[`p-label`,`ACCORDION`],[1,`po-row`,`po-mt-1`,`po-mb-1`],[`name`,`literals`,`p-help`,`Ex.: {"closeAllItems": "Fechar itens"}`,`p-label`,`Literals`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`propertiesAccordion`,`p-label`,`Properties Accordion`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`ACCORDION ITEM`],[3,`p-fields`,`p-value`],[1,`po-row`,`po-mt-2`,`po-mb-2`],[`p-label`,`Type Tag`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[`p-label`,`Properties Accordion Item`,`name`,`disabledItem`,1,`po-md-6`,3,`ngModelChange`,`p-options`,`ngModel`],[1,`po-row`,`po-mt-1`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Accordion`,1,`po-md-6`,3,`p-click`,`p-disabled`],[1,`po-row`,`po-mt-2`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let s=Ax();jc(0,`po-accordion`,1),bx(1,ve,2,5,`po-accordion-item`,2,Ex),wg(),nu(3,`po-divider`,3),jc(4,`div`,4)(5,`po-input`,5),r0(),ab(`ngModelChange`,function(c){return v_(s),uO(i.literals,c)||(i.literals=c),__(c)}),mt(`p-change`,function(){return i.changeLiterals()}),wg(),jc(6,`po-checkbox-group`,6),r0(),ab(`ngModelChange`,function(c){return v_(s),uO(i.propertiesAccordion,c)||(i.propertiesAccordion=c),__(c)}),wg()(),nu(7,`po-divider`,7)(8,`po-dynamic-form`,8,0),jc(10,`div`,9)(11,`po-radio-group`,10),r0(),ab(`ngModelChange`,function(c){return v_(s),uO(i.typeTag,c)||(i.typeTag=c),__(c)}),wg(),jc(12,`po-checkbox-group`,11),r0(),ab(`ngModelChange`,function(c){return v_(s),uO(i.disabledItem,c)||(i.disabledItem=c),__(c)}),wg()(),jc(13,`div`,12)(14,`po-radio-group`,13),r0(),ab(`ngModelChange`,function(c){return v_(s),uO(i.size,c)||(i.size=c),__(c)}),wg(),jc(15,`po-button`,14),mt(`p-click`,function(){v_(s);let c=Bx(9);return i.addAccordionItem(c.form.value),__(c.form.reset())}),wg()(),jc(16,`div`,15)(17,`po-button`,16),mt(`p-click`,function(){return i.restore()}),wg()()}if(a&2){let s=Bx(9);UE(`p-literals`,i.customLiterals)(`p-show-manager-accordion`,i.propertiesAccordion.includes(`showManager`))(`p-allow-expand-all-items`,i.propertiesAccordion.includes(`expandItems`))(`p-size`,i.size),rg(),wx(i.accordionItems),rg(4),sb(`ngModel`,i.literals),o0(),rg(),sb(`ngModel`,i.propertiesAccordion),UE(`p-options`,i.propertiesAccordionOptions),o0(),rg(2),UE(`p-fields`,i.accordionFieldsForm)(`p-value`,i.accordionItems),rg(3),UE(`p-options`,i.typeTagOptions),sb(`ngModel`,i.typeTag),o0(),rg(),UE(`p-options`,i.disabledOption),sb(`ngModel`,i.disabledItem),o0(),rg(2),sb(`ngModel`,i.size),UE(`p-options`,i.sizeOptions),o0(),rg(),UE(`p-disabled`,s.form.invalid)}},dependencies:[SK,xF,bee,n4,oi,Lf,Joe,w4,U4,Gte],encapsulation:2,changeDetection:1})}return n})();var Ae=n=>({"docs-sample-code-tabs":n});var ue=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-accordion-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Accordion Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-accordion-labs/sample-po-accordion-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-accordion
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
      Accordion Item Content { { i }}
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-accordion-labs/sample-po-accordion-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-accordion-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ae,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,se],encapsulation:2,changeDetection:1})}return n})();var he=(()=>{class n{questionOne;ngAfterContentInit(){this.questionOne.expand()}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-accordion-faq`]],viewQuery:function(a,i){if(a&1&&iu(n4,7),a&2){let s;yo(s=vo())&&(i.questionOne=s.first)}},standalone:!1,decls:22,vars:1,consts:[[`questionOne`,``],[`p-title`,`Blood donation FAQs`],[1,`po-pb-2`,`po-text-color-neutral-dark-40`],[3,`p-show-manager-accordion`],[`p-label`,`Who can donate?`],[1,`po-text-color-neutral-dark-40`],[`p-label`,`How long does it take for the blood to be processed?`,`p-label-tag`,`Important!`,`p-type-tag`,`danger`],[`p-label`,`How long does the body take to replenish donated blood?`],[`p-label`,`Is donating blood safe?`],[1,`po-pt-2`,`po-text-color-neutral-dark-40`],[`href`,`http://www.hemosc.org.br/perguntas-frequentes.html`]],template:function(a,i){a&1&&(jc(0,`po-page-default`,1)(1,`p`,2),lO(2,`You don't have to be afraid of being a blood donor!`),wg(),jc(3,`po-accordion`,3)(4,`po-accordion-item`,4,0)(6,`p`,5),lO(7,` In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance with current legislation and a number of factors that take into account the risk that such a donation may pose to the health of the candidate himself and to the health of the individual receiving the donated blood. `),wg()(),jc(8,`po-accordion-item`,6)(9,`p`,5),lO(10,` Blood is processed as soon as collected, preferably within 6 hours of donation. `),wg()(),jc(11,`po-accordion-item`,7)(12,`p`,5),lO(13,` Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of childbearing age. `),wg()(),jc(14,`po-accordion-item`,8)(15,`p`,5),lO(16,` Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there is a small risk that the donor may feel unwell during or shortly after the donation especially the first few times he or she donates, but the services are concerned about this, watching and making sure the donors feel nothing or feel feel so that they are well assisted until full recovery. `),wg()()(),jc(17,`p`,9),lO(18,` For more information, see the `),jc(19,`a`,10),lO(20,`Hemosc FAQ`),wg(),lO(21,`. `),wg()()),a&2&&(rg(3),UE(`p-show-manager-accordion`,!0))},dependencies:[bee,n4,Tze],encapsulation:2,changeDetection:1})}return n})();var Ie=n=>({"docs-sample-code-tabs":n});var ge=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-accordion-faq-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Accordion - FAQs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-accordion-faq/sample-po-accordion-faq.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-page-default p-title="Blood donation FAQs">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-accordion-faq/sample-po-accordion-faq.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { AfterContentInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-accordion-faq`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ie,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,he],encapsulation:2,changeDetection:1})}return n})();var be=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-accordion-doc`]],standalone:!1,decls:532,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-accordion-item`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoAccordionLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(a,i){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoAccordionModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente `),jc(7,`code`),lO(8,`po-accordion`),wg(),lO(9,`.`),wg()(),jc(10,`h3`,3),lO(11,`Componente`),wg(),jc(12,`h4`,4)(13,`code`,5),lO(14,`PoAccordionComponent`),wg()(),jc(15,`div`,2)(16,`p`),lO(17,`Componente utilizado para agrupar visualmente uma lista de conte\xFAdos, mostrando-os individualmente
ao clicar no t\xEDtulo de cada item.`),wg(),jc(18,`p`),lO(19,`Para utilizá-lo, é necessário envolver cada item no componente `),jc(20,`a`,6)(21,`code`),lO(22,`po-accordion-item`),wg()(),lO(23,`,
como no exemplo abaixo:`),wg(),jc(24,`pre`)(25,`code`),lO(26,`<po-accordion #accordion [p-show-manager-accordion]="true">
  <po-accordion-item p-label="PO Accordion 1">
     Accordion 1
  </po-accordion-item>

  <po-accordion-item p-label="PO Accordion 2">
     Accordion 2
  </po-accordion-item>
</po-accordion>
`),wg()(),jc(27,`p`),lO(28,`e no typescript pode-se utilizar o `),jc(29,`code`),lO(30,`@ViewChild`),wg(),lO(31,`:`),wg(),jc(32,`pre`)(33,`code`),lO(34,`@ViewChild(PoAccordionComponent, { static: true }) accordion: PoAccordionComponent;

ngAfterContentInit() {
  // ou utilizar o m\xE9todo collapseAllItems();
  this.accordion.expandAllItems();
}
`),wg()(),jc(35,`p`),lO(36,`O componente já faz o controle de abertura e fechamento dos itens automaticamente.`),wg(),jc(37,`p`),lO(38,`Caso houver a necessidade de abrir algum dos `),jc(39,`code`),lO(40,`po-accordion-item`),wg(),lO(41,` via Typescript
acesse a `),jc(42,`a`,6),lO(43,`documentação do PoAccordionItem`),wg(),lO(44,`.`),wg(),jc(45,`h4`),lO(46,`Tokens customizáveis`),wg(),jc(47,`p`),lO(48,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(49,`blockquote`)(50,`p`),lO(51,`Para maiores informações, acesse o guia `),jc(52,`a`,7),lO(53,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(54,`.`),wg()(),jc(55,`table`)(56,`thead`)(57,`tr`)(58,`th`),lO(59,`Propriedade`),wg(),jc(60,`th`),lO(61,`Descrição`),wg(),jc(62,`th`),lO(63,`Valor Padrão`),wg()()(),jc(64,`tbody`)(65,`tr`)(66,`td`)(67,`strong`),lO(68,`Default Values`),wg()(),nu(69,`td`)(70,`td`),wg(),jc(71,`tr`)(72,`td`)(73,`code`),lO(74,`--font-family`),wg()(),jc(75,`td`),lO(76,`Família tipográfica usada`),wg(),jc(77,`td`)(78,`code`),lO(79,`var(--font-family-theme)`),wg()()(),jc(80,`tr`)(81,`td`)(82,`code`),lO(83,`--font-size`),wg()(),jc(84,`td`),lO(85,`Tamanho da fonte`),wg(),jc(86,`td`)(87,`code`),lO(88,`var(--font-size-default)`),wg()()(),jc(89,`tr`)(90,`td`)(91,`code`),lO(92,`--color`),wg()(),jc(93,`td`),lO(94,`Cor principal do accordion`),wg(),jc(95,`td`)(96,`code`),lO(97,`var(--color-action-default)`),wg()()(),jc(98,`tr`)(99,`td`)(100,`code`),lO(101,`--background-color`),wg()(),jc(102,`td`),lO(103,`Cor de background`),wg(),jc(104,`td`)(105,`code`),lO(106,`var(--color-neutral-light-00)`),wg()()(),jc(107,`tr`)(108,`td`)(109,`code`),lO(110,`--font-weight`),wg()(),jc(111,`td`),lO(112,`Peso da fonte`),wg(),jc(113,`td`)(114,`code`),lO(115,`var(--font-weight-bold)`),wg()()(),jc(116,`tr`)(117,`td`)(118,`strong`),lO(119,`Hover`),wg()(),nu(120,`td`)(121,`td`),wg(),jc(122,`tr`)(123,`td`)(124,`code`),lO(125,`--color-hover`),wg()(),jc(126,`td`),lO(127,`Cor principal no estado hover`),wg(),jc(128,`td`)(129,`code`),lO(130,`var(--color-action-hover)`),wg()()(),jc(131,`tr`)(132,`td`)(133,`code`),lO(134,`--background-hover`),wg()(),jc(135,`td`),lO(136,`Cor de background no estado hover`),wg(),jc(137,`td`)(138,`code`),lO(139,`var(--color-brand-01-lightest)`),wg()()(),jc(140,`tr`)(141,`td`)(142,`strong`),lO(143,`Focused`),wg()(),nu(144,`td`)(145,`td`),wg(),jc(146,`tr`)(147,`td`)(148,`code`),lO(149,`--color-focused`),wg()(),jc(150,`td`),lO(151,`Cor principal no estado de focus`),wg(),jc(152,`td`)(153,`code`),lO(154,`var(--color-action-focus)`),wg()()(),jc(155,`tr`)(156,`td`)(157,`code`),lO(158,`--outline-color-focused`),wg(),lO(159,` \xA0`),wg(),jc(160,`td`),lO(161,`Cor do outline do estado de focus`),wg(),jc(162,`td`)(163,`code`),lO(164,`var(--color-action-focus)`),wg()()(),jc(165,`tr`)(166,`td`)(167,`strong`),lO(168,`Disabled`),wg()(),nu(169,`td`)(170,`td`),wg(),jc(171,`tr`)(172,`td`)(173,`code`),lO(174,`--color-disabled`),wg()(),jc(175,`td`),lO(176,`Cor principal no estado disabled`),wg(),jc(177,`td`)(178,`code`),lO(179,`var(--color-neutral-mid-60)`),wg()()(),jc(180,`tr`)(181,`td`)(182,`code`),lO(183,`--background-disabled`),wg(),lO(184,` \xA0`),wg(),jc(185,`td`),lO(186,`Cor de background no estado disabled`),wg(),jc(187,`td`)(188,`code`),lO(189,`var(--color-neutral-light-10)`),wg()()(),jc(190,`tr`)(191,`td`)(192,`strong`),lO(193,`po-accordion-manager`),wg()(),nu(194,`td`)(195,`td`),wg(),jc(196,`tr`)(197,`td`)(198,`code`),lO(199,`--background-color`),wg()(),jc(200,`td`),lO(201,`Cor de background`),wg(),jc(202,`td`)(203,`code`),lO(204,`var(--color-neutral-mid-60)`),wg()()(),jc(205,`tr`)(206,`td`)(207,`code`),lO(208,`--color`),wg()(),jc(209,`td`),lO(210,`Cor principal do accordion manager`),wg(),jc(211,`td`)(212,`code`),lO(213,`var(--color-neutral-light-10)`),wg()()(),jc(214,`tr`)(215,`td`)(216,`code`),lO(217,`--font-family`),wg()(),jc(218,`td`),lO(219,`Família tipográfica usada`),wg(),jc(220,`td`)(221,`code`),lO(222,`var(--color-neutral-light-10)`),wg()()(),jc(223,`tr`)(224,`td`)(225,`code`),lO(226,`--font-size`),wg()(),jc(227,`td`),lO(228,`Tamanho da fonte`),wg(),jc(229,`td`)(230,`code`),lO(231,`var(--color-neutral-light-10)`),wg()()(),jc(232,`tr`)(233,`td`)(234,`code`),lO(235,`--font-weight`),wg()(),jc(236,`td`),lO(237,`Peso da fonte`),wg(),jc(238,`td`)(239,`code`),lO(240,`var(--color-neutral-light-10)`),wg()()(),jc(241,`tr`)(242,`td`)(243,`strong`),lO(244,`Pressed`),wg()(),nu(245,`td`)(246,`td`),wg(),jc(247,`tr`)(248,`td`)(249,`code`),lO(250,`--background-pressed`),wg(),lO(251,` \xA0`),wg(),jc(252,`td`),lO(253,`Cor de background no estado de pressionado\xA0`),wg(),jc(254,`td`)(255,`code`),lO(256,`var(--color-brand-01-lighter)`),wg()()(),jc(257,`tr`)(258,`td`)(259,`code`),lO(260,`--color-pressed`),wg()(),jc(261,`td`),lO(262,`Cor principal no estado de pressionado`),wg(),jc(263,`td`)(264,`code`),lO(265,`var(--color-action-pressed)`),wg()()()()()(),jc(266,`div`,8)(267,`h4`,9),lO(268,`Seletor`),wg(),jc(269,`pre`,10),lO(270,`<po-accordion
    p-allow-expand-all-items="boolean"
    (p-collapse-all)="EventEmitter"
    (p-expand-all)="EventEmitter"
    p-literals="PoAccordionLiterals"
    p-show-manager-accordion="boolean"
    p-size="string" >
</po-accordion>
`),wg()(),jc(271,`h4`,11),lO(272,`Propriedades`),wg(),jc(273,`table`,12)(274,`tr`,13)(275,`th`,14),lO(276,`Nome`),wg(),jc(277,`th`,14),lO(278,`Tipo`),wg(),jc(279,`th`,14),lO(280,`Padrão`),wg(),jc(281,`th`,14),lO(282,`Descrição`),wg()(),jc(283,`tr`,15)(284,`td`,16)(285,`div`,17)(286,`span`,18),lO(287,` p-allow-expand-all-items`),nu(288,`br`),wg()()(),jc(289,`td`,19)(290,`code`,20),lO(291,`boolean`),wg()(),jc(292,`td`,21)(293,`p`)(294,`code`),lO(295,`false`),wg()()(),jc(296,`td`,22)(297,`em`)(298,`strong`),lO(299,`(opcional)`),wg()(),jc(300,`p`),lO(301,`Permite expandir mais de um `),jc(302,`code`),lO(303,`<po-accordion-item></po-accordion-item>`),wg(),lO(304,` ao mesmo tempo.
Sempre habilitada caso a propriedade `),jc(305,`code`),lO(306,`p-show-manager-accordion`),wg(),lO(307,` esteja como `),jc(308,`code`),lO(309,`true`),wg(),lO(310,`.`),wg()()(),jc(311,`tr`,15)(312,`td`,16)(313,`div`,23)(314,`span`,24),lO(315,` (p-collapse-all)`),nu(316,`br`),wg()()(),jc(317,`td`,19)(318,`code`,25),lO(319,`EventEmitter`),wg()(),jc(320,`td`,21),lO(321,`-`),wg(),jc(322,`td`,22)(323,`em`)(324,`strong`),lO(325,`(opcional)`),wg()(),jc(326,`p`),lO(327,`Evento disparado ao retrair o gerenciador de accordion, seja manualmente ou programaticamente.`),wg()()(),jc(328,`tr`,15)(329,`td`,16)(330,`div`,23)(331,`span`,24),lO(332,` (p-expand-all)`),nu(333,`br`),wg()()(),jc(334,`td`,19)(335,`code`,25),lO(336,`EventEmitter`),wg()(),jc(337,`td`,21),lO(338,`-`),wg(),jc(339,`td`,22)(340,`em`)(341,`strong`),lO(342,`(opcional)`),wg()(),jc(343,`p`),lO(344,`Evento disparado ao expandir o gerenciador de accordion, seja manualmente ou programaticamente.`),wg()()(),jc(345,`tr`,15)(346,`td`,16)(347,`div`,17)(348,`span`,18),lO(349,` p-literals`),nu(350,`br`),wg()()(),jc(351,`td`,19)(352,`code`,26),lO(353,`PoAccordionLiterals`),wg()(),jc(354,`td`,21),lO(355,`-`),wg(),jc(356,`td`,22)(357,`em`)(358,`strong`),lO(359,`(opcional)`),wg()(),jc(360,`p`),lO(361,`Objeto com as literais usadas no `),jc(362,`code`),lO(363,`po-accordion`),wg(),lO(364,`.`),wg(),jc(365,`p`),lO(366,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),wg(),jc(367,`pre`)(368,`code`),lO(369,`const customLiterals: PoAccordionLiterals = {
  closeAllItems: 'Fechar todos os itens',
  expandAllItems: 'Expandir todos os itens'
};
`),wg()(),jc(370,`p`),lO(371,`Ou passando apenas as literais que deseja customizar:`),wg(),jc(372,`pre`)(373,`code`),lO(374,`const customLiterals: PoAccordionLiterals = {
  expandAllItems: 'Expandir todos os itens'
};
`),wg()(),jc(375,`p`),lO(376,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),wg(),jc(377,`pre`)(378,`code`),lO(379,`<po-accordion
  [p-literals]="customLiterals">
</po-accordion>
`),wg()(),jc(380,`blockquote`)(381,`p`),lO(382,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),jc(383,`a`,27)(384,`code`),lO(385,`PoI18nService`),wg()(),lO(386,` ou do browser.`),wg()()()(),jc(387,`tr`,15)(388,`td`,16)(389,`div`,17)(390,`span`,18),lO(391,` p-show-manager-accordion`),nu(392,`br`),wg()()(),jc(393,`td`,19)(394,`code`,20),lO(395,`boolean`),wg()(),jc(396,`td`,21)(397,`p`)(398,`code`),lO(399,`false`),wg()()(),jc(400,`td`,22)(401,`em`)(402,`strong`),lO(403,`(opcional)`),wg()(),jc(404,`p`),lO(405,`Exibe o Gerenciador de Accordion.`),wg()()(),jc(406,`tr`,15)(407,`td`,16)(408,`div`,17)(409,`span`,18),lO(410,` p-size`),nu(411,`br`),wg()()(),jc(412,`td`,19)(413,`code`,28),lO(414,`string`),wg()(),jc(415,`td`,21)(416,`p`)(417,`code`),lO(418,`medium`),wg()()(),jc(419,`td`,22)(420,`em`)(421,`strong`),lO(422,`(opcional)`),wg()(),jc(423,`p`),lO(424,`Define o tamanho do componente:`),wg(),jc(425,`ul`)(426,`li`)(427,`code`),lO(428,`small`),wg(),lO(429,`: altura de 32px (disponível apenas para acessibilidade AA).`),wg(),jc(430,`li`)(431,`code`),lO(432,`medium`),wg(),lO(433,`: altura de 44px.`),wg()(),jc(434,`blockquote`)(435,`p`),lO(436,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(437,`code`),lO(438,`medium`),wg(),lO(439,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(440,`a`,29),lO(441,`po-theme`),wg(),lO(442,`.`),wg()()()()(),jc(443,`h3`,11),lO(444,`Métodos`),wg(),jc(445,`table`,30)(446,`tr`,15)(447,`th`,31)(448,`div`,17)(449,`h4`)(450,`span`,18),lO(451,` collapseAllItems `),wg()()()()(),jc(452,`tr`,22)(453,`td`,22)(454,`p`),lO(455,`M\xE9todo para colapsar todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),jc(456,`code`),lO(457,`p-show-manager-accordion`),wg(),lO(458,` estiver como `),jc(459,`code`),lO(460,`true`),wg(),lO(461,`.`),wg()()()(),nu(462,`br`),jc(463,`table`,30)(464,`tr`,15)(465,`th`,31)(466,`div`,17)(467,`h4`)(468,`span`,18),lO(469,` expandAllItems `),wg()()()()(),jc(470,`tr`,22)(471,`td`,22)(472,`p`),lO(473,`M\xE9todo para expandir todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),jc(474,`code`),lO(475,`p-show-manager-accordion`),wg(),lO(476,` estiver como `),jc(477,`code`),lO(478,`true`),wg(),lO(479,`.`),wg()()()(),nu(480,`br`),jc(481,`h3`),lO(482,`Interfaces`),wg(),jc(483,`h4`,32)(484,`code`,5),lO(485,`PoAccordionLiterals`),wg()(),jc(486,`div`,2)(487,`p`),lO(488,`Interface para definição das literais usadas no `),jc(489,`code`),lO(490,`po-accordion`),wg(),lO(491,`.`),wg()(),jc(492,`h4`,11),lO(493,`Propriedades`),wg(),jc(494,`table`,12)(495,`tr`,13)(496,`th`,14),lO(497,`Nome`),wg(),jc(498,`th`,14),lO(499,`Tipo`),wg(),jc(500,`th`,14),lO(501,`Descrição`),wg()(),jc(502,`tr`,15)(503,`td`,16)(504,`div`,17)(505,`span`,18),lO(506,` closeAllItems`),nu(507,`br`),wg()()(),jc(508,`td`,19)(509,`code`,28),lO(510,`string`),wg()(),jc(511,`td`,22)(512,`em`)(513,`strong`),lO(514,`(opcional)`),wg()(),jc(515,`p`),lO(516,`Label do gerenciador de Accordion para colapsar todos os itens`),wg()()(),jc(517,`tr`,15)(518,`td`,16)(519,`div`,17)(520,`span`,18),lO(521,` expandAllItems`),nu(522,`br`),wg()()(),jc(523,`td`,19)(524,`code`,28),lO(525,`string`),wg()(),jc(526,`td`,22)(527,`em`)(528,`strong`),lO(529,`(opcional)`),wg()(),jc(530,`p`),lO(531,`Label do gerenciador de Accordion para expandir todos os itens.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function ke(n,B){if(n&1){let r=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(r);let i=Fx();return __(i.changeTab(`web`))}),nu(1,`sample-po-accordion-basic-view`)(2,`sample-po-accordion-labs-view`)(3,`sample-po-accordion-faq-view`),wg()}if(n&2){let r=Fx();UE(`p-active`,r.activeTab===`web`)}}var De=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(b(ir),b(Sn))};static ɵcmp=Zn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Accordion`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,ke,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(4,`sample-po-accordion-doc`),wg()()()),a&2&&(UE(`p-actions`,i.actions),rg(2),Dx(i.hidePoWebSample?-1:2),rg(),UE(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,me,ue,ge,be],encapsulation:2,changeDetection:1})}return n})()}];var Se=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=pe({type:n});static ɵinj=ue$1({imports:[I1.forChild(De),I1]})}return n})();var nt=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=pe({type:n});static ɵinj=ue$1({imports:[M,Se]})}return n})();export{nt as DocPoAccordionModule};