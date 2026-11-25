import{m as P,p as M$1}from"./main-VRFIZKV3.js";import{$i as ar,Hr as Jn,Kr as Kg,Qr as Mk,Sa as jO,U as Mze,Va as p,Vr as Jc,Xi as _t,Yr as LO,Zi as _u,aa as de,ar as Ab,co as wg,eo as tk,jr as GV,lt as Ss,or as An,pa as ge,zr as I$1}from"./chunk-DdK63a0t.js";var w=(()=>{class n{router=p(An);openDoc(i){this.router.navigate([`/documentation`,i],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-table-column-template-doc`]],standalone:!1,decls:98,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[`data-tour`,`api-related`,1,`docs-api-related`],[`p-value`,`Table`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-table-column-template-directive`,1,`docs-api-class-name`],[1,`doc-code`],[1,`language-html`],[1,`language-typescript`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-property`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`]],template:function(a,l){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoTableModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-table`),Kg()(),Jc(7,`blockquote`,3)(8,`strong`),Mk(9,`Faz parte de:`),Kg(),Jc(10,`po-tag`,4),_t(`p-click`,function(){return l.openDoc(`po-table`)}),Kg()(),Jc(11,`h3`,5),Mk(12,`Componente`),Kg(),Jc(13,`h4`,6)(14,`code`,7),Mk(15,`PoTableColumnTemplateDirective`),Kg()(),Jc(16,`div`,2)(17,`p`),Mk(18,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),Kg(),Jc(19,`p`),Mk(20,`Em seu uso, deve-se utilizar como par\xE2metro de entrada o input [p-property], o qual \xE9 respons\xE1vel por informar ao PO-TABLE qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),Kg(),Jc(21,`p`),Mk(22,`Retorno:`),Kg(),Jc(23,`ul`)(24,`li`),Mk(25,`value: valor referente ao conteúdo da linha corrente.`),Kg()(),Jc(26,`p`),Mk(27,`Modo de uso:`),Kg(),Jc(28,`pre`)(29,`code`,8),Mk(30,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template p-table-column-template [p-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),Kg()(),Jc(31,`blockquote`)(32,`p`),Mk(33,`No exemplo acima, todas as células correspondentes a coluna `),Jc(34,`code`),Mk(35,`status`),Kg(),Mk(36,` terão o conteúdo alterado para `),Jc(37,`code`),Mk(38,"<h1>${value}</h1>"),Kg(),Mk(39,`,
sendo que `),Jc(40,`code`),Mk(41,`value`),Kg(),Mk(42,` refere-se ao conteúdo da linha.`),Kg()(),Jc(43,`pre`)(44,`code`,8),Mk(45,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template  p-table-column-template [p-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),Kg()(),Jc(46,`blockquote`)(47,`p`),Mk(48,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),Kg()(),Jc(49,`p`),Mk(50,`Abaixo, a declaração dos dados de entrada do PO-TABLE para o uso da directiva.`),Kg(),Jc(51,`pre`)(52,`code`,9),Mk(53,`...
export class AppComponent {

   targetProperty= 'status';

   items = [{
     code: 1200,
     product: 'Rice',
     status: 'CANCELED'
     },{
     code: 1355,
     product: 'Bean',
     status: 'FINISHED'
   }];

   columns = [
     { property: 'code', label: 'ID' },
     { property: 'product', label: 'PRODUTO' },
     { property: 'status', label: 'STATUS', type: 'columnTemplate' }
   ];
}
...
`),Kg()(),Jc(54,`blockquote`)(55,`p`),Mk(56,`Observação: Sempre adicionar o `),Jc(57,`strong`),Mk(58,`type`),Kg(),Mk(59,` da coluna que deseja manipular com a directiva como `),Jc(60,`code`),Mk(61,`columnTemplate`),Kg()()()(),Jc(62,`div`,10)(63,`h4`,11),Mk(64,`Seletor`),Kg(),Jc(65,`pre`,12),Mk(66,`<[p-table-column-template]
    p-property="string" >
</[p-table-column-template]>
`),Kg()(),Jc(67,`h4`,13),Mk(68,`Propriedades`),Kg(),Jc(69,`table`,14)(70,`tr`,15)(71,`th`,16),Mk(72,`Nome`),Kg(),Jc(73,`th`,16),Mk(74,`Tipo`),Kg(),Jc(75,`th`,16),Mk(76,`Padrão`),Kg(),Jc(77,`th`,16),Mk(78,`Descrição`),Kg()(),Jc(79,`tr`,17)(80,`td`,18)(81,`div`,19)(82,`span`,20),Mk(83,` p-property`),_u(84,`br`),Kg()()(),Jc(85,`td`,21)(86,`code`,22),Mk(87,`string`),Kg()(),Jc(88,`td`,23),Mk(89,`-`),Kg(),Jc(90,`td`,24)(91,`em`)(92,`strong`),Mk(93,`(opcional)`),Kg()(),Jc(94,`p`),Mk(95,`Variável responsável por armazenar a property da coluna da tabela que será adicionado o template.`),Kg(),Jc(96,`p`),Mk(97,`Caso não seja informada esta propriedade, serão apresentados normalmente os dados da coluna.`),Kg()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return n})();function F(n,j){if(n&1&&_u(0,`div`,1),n&2){let i=tk();Ab(`hidden`,i.activeTab!==`web`)}}var I=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;title=`Table Column Template`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(i,a){this.route=i,this.router=a}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`,this.title=`Table Column Template · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(I$1(ar),I$1(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(a,l){a&1&&(Jc(0,`po-page-default`,0),LO(1,F,1,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-table-column-template-doc`),Kg()()),a&2&&(Ab(`p-title`,l.title)(`p-actions`,l.actions),wg(),jO(l.hidePoWebSample?-1:1),wg(),Ab(`hidden`,l.activeTab!==`doc`))},dependencies:[Mze,w],encapsulation:2,changeDetection:1})}return n})()}];var M=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[GV.forChild(I),GV]})}return n})();var Y=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M$1,M]})}return n})();export{Y as DocPoTableColumnTemplateModule};