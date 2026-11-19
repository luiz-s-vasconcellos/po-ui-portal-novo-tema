import{m as P,p as M}from"./main-DMA7KEAR.js";import{Ar as I$1,Lr as Kg,Oi as VO,Pn as tre,Pr as Jn,Pt as are,Ti as U_,Ui as YO,Va as p,W as Mze,Zi as ar,ar as An,cr as B_,gi as Rb,io as vu,li as Qc,lt as Ss,na as de,oo as wg,ro as vt,sa as ek,ua as ge,vi as Sk,wr as GV,xr as FO}from"./chunk-DtUf9FxZ.js";var A=(()=>{class n{router=p(An);openDoc(a){this.router.navigate([`/documentation`,a],{queryParams:{view:`doc`}})}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-table-column-template-doc`]],standalone:!1,decls:98,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Table`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-table-column-template-directive`,1,`docs-api-class-name`],[1,`doc-code`],[1,`language-html`],[1,`language-typescript`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-property`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`]],template:function(i,l){i&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoTableModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-table`),Kg()(),Qc(7,`blockquote`,3)(8,`strong`),Sk(9,`Faz parte de:`),Kg(),Qc(10,`po-tag`,4),vt(`p-click`,function(){return l.openDoc(`po-table`)}),Kg()(),Qc(11,`h3`,5),Sk(12,`Componente`),Kg(),Qc(13,`h4`,6)(14,`code`,7),Sk(15,`PoTableColumnTemplateDirective`),Kg()(),Qc(16,`div`,2)(17,`p`),Sk(18,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),Kg(),Qc(19,`p`),Sk(20,`Em seu uso, deve-se utilizar como par\xE2metro de entrada o input [p-property], o qual \xE9 respons\xE1vel por informar ao PO-TABLE qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),Kg(),Qc(21,`p`),Sk(22,`Retorno:`),Kg(),Qc(23,`ul`)(24,`li`),Sk(25,`value: valor referente ao conteúdo da linha corrente.`),Kg()(),Qc(26,`p`),Sk(27,`Modo de uso:`),Kg(),Qc(28,`pre`)(29,`code`,8),Sk(30,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template p-table-column-template [p-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),Kg()(),Qc(31,`blockquote`)(32,`p`),Sk(33,`No exemplo acima, todas as células correspondentes a coluna `),Qc(34,`code`),Sk(35,`status`),Kg(),Sk(36,` terão o conteúdo alterado para `),Qc(37,`code`),Sk(38,"<h1>${value}</h1>"),Kg(),Sk(39,`,
sendo que `),Qc(40,`code`),Sk(41,`value`),Kg(),Sk(42,` refere-se ao conteúdo da linha.`),Kg()(),Qc(43,`pre`)(44,`code`,8),Sk(45,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template  p-table-column-template [p-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),Kg()(),Qc(46,`blockquote`)(47,`p`),Sk(48,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),Kg()(),Qc(49,`p`),Sk(50,`Abaixo, a declaração dos dados de entrada do PO-TABLE para o uso da directiva.`),Kg(),Qc(51,`pre`)(52,`code`,9),Sk(53,`...
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
`),Kg()(),Qc(54,`blockquote`)(55,`p`),Sk(56,`Observação: Sempre adicionar o `),Qc(57,`strong`),Sk(58,`type`),Kg(),Sk(59,` da coluna que deseja manipular com a directiva como `),Qc(60,`code`),Sk(61,`columnTemplate`),Kg()()()(),Qc(62,`div`,10)(63,`h4`,11),Sk(64,`Seletor`),Kg(),Qc(65,`pre`,12),Sk(66,`<[p-table-column-template]
    p-property="string" >
</[p-table-column-template]>
`),Kg()(),Qc(67,`h4`,13),Sk(68,`Propriedades`),Kg(),Qc(69,`table`,14)(70,`tr`,15)(71,`th`,16),Sk(72,`Nome`),Kg(),Qc(73,`th`,16),Sk(74,`Tipo`),Kg(),Qc(75,`th`,16),Sk(76,`Padrão`),Kg(),Qc(77,`th`,16),Sk(78,`Descrição`),Kg()(),Qc(79,`tr`,17)(80,`td`,18)(81,`div`,19)(82,`span`,20),Sk(83,` p-property`),vu(84,`br`),Kg()()(),Qc(85,`td`,21)(86,`code`,22),Sk(87,`string`),Kg()(),Qc(88,`td`,23),Sk(89,`-`),Kg(),Qc(90,`td`,24)(91,`em`)(92,`strong`),Sk(93,`(opcional)`),Kg()(),Qc(94,`p`),Sk(95,`Variável responsável por armazenar a property da coluna da tabela que será adicionado o template.`),Kg(),Qc(96,`p`),Sk(97,`Caso não seja informada esta propriedade, serão apresentados normalmente os dados da coluna.`),Kg()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return n})();function O(n,H){if(n&1){let a=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(a);let l=ek();return U_(l.changeTab(`web`))}),Kg()}if(n&2){let a=ek();Rb(`p-active`,a.activeTab===`web`)}}var B=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,i){this.route=a,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(I$1(ar),I$1(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Table Column Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(i,l){i&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,O,1,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return l.changeTab(`doc`)}),vu(4,`sample-po-table-column-template-doc`),Kg()()()),i&2&&(Rb(`p-actions`,l.actions),wg(2),VO(l.hidePoWebSample?-1:2),wg(),Rb(`p-active`,l.activeTab===`doc`))},dependencies:[Mze,tre,are,A],encapsulation:2,changeDetection:1})}return n})()}];var I=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[GV.forChild(B),GV]})}return n})();var ne=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,I]})}return n})();export{ne as DocPoTableColumnTemplateModule};