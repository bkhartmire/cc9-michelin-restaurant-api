exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cities")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cities").insert([
        { name: "Kruishoutem", country_name: "Belgium" },
        { name: "Shanghai", country_name: "China" },
        { name: "Copenhagen", country_name: "Denmark" },
        { name: "Chagny", country_name: "France" },
        { name: "Collonges-au-Mont-d'Or", country_name: "France" },
        { name: "Courchevel", country_name: "France" },
        { name: "Eugénie-les-Bains", country_name: "France" },
        { name: "Fontjoncouse", country_name: "France" },
        { name: "Illhaeusern", country_name: "France" },
        { name: "Le Castellet", country_name: "France" },
        { name: "Les Belleville", country_name: "France" },
        { name: "Manigod", country_name: "France" },
        { name: "Marseille", country_name: "France" },
        { name: "Megève", country_name: "France" },
        { name: "Monte Carlo", country_name: "Monaco" },
        { name: "Ouches", country_name: "France" },
        { name: "Paris", country_name: "France" },
        { name: "Saint-Bonnet-le-Froid", country_name: "France" },
        { name: "Saint-Tropez", country_name: "France" },
        { name: "Tinqueux", country_name: "France" },
        { name: "Valence", country_name: "France" },
        { name: "Vonnas", country_name: "France" },
        { name: "Baiersbronn", country_name: "Germany" },
        { name: "Bergisch Gladbach", country_name: "Germany" },
        { name: "Dreis", country_name: "Germany" },
        { name: "Hamburg", country_name: "Germany" },
        { name: "Munich", country_name: "Germany" },
        { name: "Perl", country_name: "Germany" },
        { name: "Rottach-Egern", country_name: "Germany" },
        { name: "Saarbrücken", country_name: "Germany" },
        { name: "Wolfsburg", country_name: "Germany" },
        { name: "Hong Kong", country_name: "Hong Kong" },
        { name: "Macao", country_name: "Macao" },
        { name: "Alba", country_name: "Italy" },
        { name: "Brusaporto", country_name: "Italy" },
        { name: "Canneto sull'Oglio", country_name: "Italy" },
        { name: "Castel di Sangro", country_name: "Italy" },
        { name: "FLorence", country_name: "Italy" },
        { name: "Modena", country_name: "Italy" },
        { name: "Rome", country_name: "Italy" },
        { name: "Rubano", country_name: "Italy" },
        { name: "San Cassiano", country_name: "Italy" },
        { name: "Senigallia", country_name: "Italy" },
        { name: "Fukuoka", country_name: "Japan" },
        { name: "Hiroshima", country_name: "Japan" },
        { name: "Hokkaido", country_name: "Japan" },
        { name: "Kobe", country_name: "Japan" },
        { name: "Kyoto", country_name: "Japan" },
        { name: "Nara", country_name: "Japan" },
        { name: "Osaka", country_name: "Japan" },
        { name: "Shōnan", country_name: "Japan" },
        { name: "Tokyo", country_name: "Japan" },
        { name: "Toyama", country_name: "Japan" },
        { name: "Vaassen", country_name: "Netherlands" },
        { name: "Zwolle", country_name: "Netherlands" },
        { name: "Oslo", country_name: "Norway" },
        { name: "Seoul", country_name: "South Korea" },
        { name: "Barcelona", country_name: "Spain" },
        { name: "El Puerto de Santa María", country_name: "Spain" },
        { name: "Girnoa", country_name: "Spain" },
        { name: "Lasarte-Oria", country_name: "Spain" },
        { name: "Larrabetzu", country_name: "Spain" },
        { name: "Madrid", country_name: "Spain" },
        { name: "Marbella", country_name: "Spain" },
        { name: "San Sebastián", country_name: "Spain" },
        { name: "Dénia", country_name: "Spain" },
        { name: "Stockholm", country_name: "Sweden" },
        { name: "Basel", country_name: "Switzerland" },
        { name: "Crissier", country_name: "Switzerland" },
        { name: "Fürstenau", country_name: "Switzerland" },
        { name: "Taipei", country_name: "Taiwan" },
        { name: "Bray", country_name: "United Kingdom" },
        { name: "London", country_name: "United Kingdom" },
        { name: "Chicago", country_name: "United States" },
        { name: "Healdsburg", country_name: "United States" },
        { name: "Los Gatos", country_name: "United States" },
        { name: "New York City", country_name: "United States" },
        { name: "San Francisco", country_name: "United States" },
        { name: "St. Helena", country_name: "United States" },
        { name: "Washington", country_name: "United States" },
        { name: "Yountville", country_name: "United States" }
      ]);
    });
};
