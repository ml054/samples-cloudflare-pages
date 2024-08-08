import DocumentStore from "ravendb";

export async function onRequest(context: any) {
    console.log("Create document store");
    try {

        const store = new DocumentStore("http://live-test.ravendb.net", "db1");
        store.initialize();

        const session = store.openSession();
        await session.store({name: "TEST"}, "TEST1");
        await session.saveChanges();
    } catch (e: any) {
        console.log(e);
        throw e;
    }

    return new Response(JSON.stringify("data "))
}