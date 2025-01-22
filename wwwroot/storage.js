var objectStorage = []; // The storage for the objects
var dotnetRef = null; // The dotnet reference to call C# methods


export function initialize(dotnetReference) { //Saves the dotnetRef to enable future calls to C# methods.
    dotnetRef = dotnetReference;
}

export function insertObject(obj) {
    objectStorage.push(obj); //Adds the person object (obj) to the objectStorage array.
    
    dotnetRef.invokeMethodAsync("InsertToCSharpList", obj); //Invoke the C# InsertToCSharpList method to update the Blazor list.
}

export function removeObject(obj) {
    var existingObject = objectStorage.find(x => x.Id === obj.Id); //Finds objects in objectStorage matching the id of the provided obj.

    if (existingObject) {
        var index = objectStorage.indexOf(existingObject);
        if (index !== -1) {
            objectStorage.splice(index, 1);
            dotnetRef.invokeMethodAsync("RemoveFromCSharpList", existingObject); //Invoke the C# RemoveFromCSharpList method to update the Blazor list.
        }
    }
}

