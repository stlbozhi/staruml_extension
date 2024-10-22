function handle()
{
    window.alert("hehe")
}

function handleAddElement (options) {
    options = Object.assign(options, {
      'model-init': {
        // 'stereotype': options.stereotype
      },
      'view-init': {
        // 'stereotypeDisplay': 'icon',
        'suppressAttributes': false,
        'suppressOperations': false
      }
      
    })
    return app.factory.createModelAndView(options)
}

    function handleAddElement2 (options) {

        options = Object.assign(options, {
          'model-init': {
            'stereotype': options.stereotype
          },
          'view-init': {
            // "height":500,
            // 'stereotypeDisplay': 'icon',
            'suppressAttributes': false,
            'suppressOperations': false,
            "lineColor":"blue"
          }
        })
    return app.factory.createModelAndView(options)
    }

    function handleAddElement3 (options) {
        options = Object.assign(options, {
          'model-init': {
            'stereotype': options.stereotype
          },
          'view-init': {
            "fontColor":"blue",
            "lineColor":"blue",
            // 'stereotypeDisplay': 'icon',
            'suppressAttributes': false,
            'suppressOperations': false
    
          }
        })
        
        var view_=app.factory.createModelAndView(options)
 
    return view_
    }
  

function init()
{
    // app.commands.register("my-extension:show-message",handle)
    app.commands.register("my:add-element",handleAddElement)
    app.commands.register("my:add-element2",handleAddElement2)
    app.commands.register("my:add-element3",handleAddElement3)
    // app.commands.register("my:add-element11",h1)
}

exports.init=init