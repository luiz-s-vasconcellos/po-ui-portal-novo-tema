import{m as P,p as M}from"./main-6GCKJMTQ.js";import{Ba as p,Br as Jn,Lr as I,W as Mze,Wr as Kg,Xr as Mk,Yi as _u,Zi as ar,ar as Ab,co as wg,da as ge,eo as tk,jr as GV,lt as Ss,oo as vt,or as An,qr as LO,ra as de,ya as jO,zr as Jc}from"./chunk-t_lpM8Oc.js";var k=(()=>{class i{router=p(An);openDoc(a){this.router.navigate([`/documentation`,a],{queryParams:{view:`doc`}})}static ɵfac=function(n){return new(n||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-combo-option-template-doc`]],standalone:!1,decls:73,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Combo`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-combo-option-template-directive`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(n,p){n&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Jc(7,`blockquote`)(8,`p`),Mk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Mk(11,`FormsModule`),Kg(),Mk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Mk(14,`ReactiveFormsModule`),Kg(),Mk(15,`, ambos nativos do Angular.`),Kg()()(),Jc(16,`blockquote`,3)(17,`strong`),Mk(18,`Faz parte de:`),Kg(),Jc(19,`po-tag`,4),vt(`p-click`,function(){return p.openDoc(`po-combo`)}),Kg()(),Jc(20,`h3`,5),Mk(21,`Componente`),Kg(),Jc(22,`h4`,6)(23,`code`,7),Mk(24,`PoComboOptionTemplateDirective`),Kg()(),Jc(25,`div`,2)(26,`p`),Mk(27,`Esta diretiva permite personalizar o conteúdo dos itens exibidos na lista de opções do componente.`),Kg(),Jc(28,`blockquote`)(29,`p`),Mk(30,`Quando utilizada em dispositivos `),Jc(31,`em`),Mk(32,`mobile`),Kg(),Mk(33,` será exibido o componente nativo.`),Kg()(),Jc(34,`p`),Mk(35,`Para personalizar o conteúdo de cada item da lista deve-se utilizar a diretiva `),Jc(36,`code`),Mk(37,`p-combo-option-template`),Kg(),Mk(38,` com `),Jc(39,`code`),Mk(40,`ng-template`),Kg(),Mk(41,`
dentro da `),Jc(42,`em`),Mk(43,`tag`),Kg(),Jc(44,`code`),Mk(45,`po-combo`),Kg(),Mk(46,`.`),Kg(),Jc(47,`p`),Mk(48,`Para obter a referência do item atual utilize `),Jc(49,`code`),Mk(50,`let-option`),Kg(),Mk(51,`, com isso você terá acesso aos valores e poderá personalizar sua exibição.`),Kg(),Jc(52,`p`),Mk(53,`Esta diretiva compõe-se de dois meios para uso, de forma explícita tal como em `),Jc(54,`em`),Mk(55,`syntax sugar`),Kg(),Mk(56,`. Veja a seguir ambos, respectivamente:`),Kg(),Jc(57,`pre`)(58,`code`),Mk(59,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <ng-template p-combo-option-template let-option>
      <option-template [option]="option"></option-template>
    </ng-template>
</po-combo>
...
`),Kg()(),Jc(60,`pre`)(61,`code`),Mk(62,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <div *p-combo-option-template="let option">
      <option-template [option]="option"></option-template>
    </div>
</po-combo>
...
`),Kg()(),Jc(63,`p`),Mk(64,`Para o caso de personaliza\xE7\xE3o de op\xE7\xF5es com agrupamentos, deve-se seguir a mesma orienta\xE7\xE3o acima. Por\xE9m, cabe ao desenvolvedor
a responsabilidade de estiliza\xE7\xE3o dos elementos da lista, tais como t\xEDtulo e links dos grupos. Abaixo h\xE1 um exemplo de aplica\xE7\xE3o:`),Kg(),Jc(65,`pre`)(66,`code`),Mk(67,`...
<ng-template p-combo-option-template let-option>
  <ng-container *ngIf="option.options; then optionsGroupTitle; else optionsGroupList"></ng-container>
  <ng-template #optionsGroupTitle>
    <p class="po-combo-item-title" [innerHtml]="option.label"></p>
  </ng-template>
  <ng-template #optionsGroupList>
    <div class="po-combo-item">
      <div class="po-row">
        <po-avatar class="po-md-1" p-size="sm"></po-avatar>
        <div class="po-md-11" [innerHtml]="option.label"></div>
      </div>
    </div>
  </ng-template>
</ng-template>
...
`),Kg()()(),Jc(68,`div`,8)(69,`h4`,9),Mk(70,`Seletor`),Kg(),Jc(71,`pre`,10),Mk(72,`<[p-combo-option-template] >
</[p-combo-option-template]>
`),Kg()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return i})();function z(i,_){if(i&1&&_u(0,`div`,1),i&2){let a=tk();Ab(`hidden`,a.activeTab!==`web`)}}var j=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;title=`Combo Option Template`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:n||`web`,this.title=`Combo Option Template · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(n,p){n&1&&(Jc(0,`po-page-default`,0),LO(1,z,1,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-combo-option-template-doc`),Kg()()),n&2&&(Ab(`p-title`,p.title)(`p-actions`,p.actions),wg(),jO(p.hidePoWebSample?-1:1),wg(),Ab(`hidden`,p.activeTab!==`doc`))},dependencies:[Mze,k],encapsulation:2,changeDetection:1})}return i})()}];var w=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=ge({type:i});static ɵinj=de({imports:[GV.forChild(j),GV]})}return i})();var Z=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=ge({type:i});static ɵinj=de({imports:[M,w]})}return i})();export{Z as DocPoComboOptionTemplateModule};