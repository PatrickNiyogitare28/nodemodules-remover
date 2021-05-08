import * as vscode from 'vscode';
// import fs from 'fs';
const fsPromises = require('fs').promises;

export async function activate(context: vscode.ExtensionContext) {
    const directory = './nodemodules';
	try{
		await fsPromises.rmdir(directory, {
			recursive: true
	  });
	 let successDesposable =  vscode.commands.registerCommand('nodemodules-rm', () => {
		vscode.window.showInformationMessage('Nodemodules removed');
	 });
       context.subscriptions.push(successDesposable);
	}
	catch(e){
      let failDesipasalbe = vscode.commands.registerCommand('nodemodules-rm', () => {
			vscode.window.showErrorMessage('Remove nodemodules failed');
		});
	   context.subscriptions.push(failDesipasalbe);
	}
}
export function deactivate() {}
