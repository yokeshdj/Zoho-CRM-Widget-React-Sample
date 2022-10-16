function initializeWidget()
{
	ZOHO.embeddedApp.on("PageLoad",function(data)
	{
    console.log('Data in pageload:');
    console.log(data);

    if(data && data.Entity)
		{
			ZOHO.CRM.API.getRecord({ Entity:data.Entity, RecordID:data.EntityId })
			.then(function(response)
			{
				console.log(response);
			});
		}
	});

  ZOHO.embeddedApp.init()
}