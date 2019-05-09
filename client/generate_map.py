import folium

map_object = folium.Map(location=[65, -18.6], zoom_start=6, tiles="Stamen toner")
marker = folium.features.Marker([64.127573, -21.903975], popup="Icelandic Meteorology Office")
map_object.add_child(marker)
folium.Map.save(map_object, "test-map.html")