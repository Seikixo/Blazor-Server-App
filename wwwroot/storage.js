var objectStorage = [];
var dotnetRef = null; // the dotnet referenec


export function initialize(dotnetReference) {
    dotnetRef = dotnetReference;
}

export function insertObject(obj) {
    objectStorage.push(obj);
    // update the c# component
    dotnetRef.invokeMethodAsync("InsertToCSharpList", obj);
}

export function removeObject(obj) {
    var existingObject = objectStorage.find(x => x.Id === obj.Id);

    if (existingObject) {
        var index = objectStorage.indexOf(existingObject);
        if (index !== -1) {
            objectStorage.splice(index, 1);
            dotnetRef.invokeMethodAsync("RemoveFromCSharpList", existingObject);
        }
    }
}

