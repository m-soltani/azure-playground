import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, request: HttpRequest): Promise<void> {
    
    const title: string = atob(request.body.titel);

    var events = new Array<Event>();
    context.log(title);

};

export default httpTrigger;
