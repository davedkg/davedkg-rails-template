class CollectionSelectInput < SimpleForm::Inputs::CollectionSelectInput

   def input_html_options
     options          = super
     options[:data] ||= {}

     if options[:data][:controller]
       unless options[:data][:controller].include?(" select")
         options[:data][:controller] = "#{options[:data][:controller]} select"
       end
     else
       options[:data][:controller] = "select"
     end

     options
   end

 end