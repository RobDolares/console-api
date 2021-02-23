var provider = {
	phone_formats: ['0#### / #######', '+49 #### #######'],

	prefix: ['Herr', 'Frau', 'Dr.', 'Prof. Dr.', 'Dipl. Ing.'],

	suffix: ['Jr.', 'Sr.', 'I', 'II', 'III', 'IV', 'V'],

	company_suffixes: ['AG', 'GmbH', 'GmbH & co. KG', 'KG', 'GbR', 'und Partner'],

	// taken from http://www.beliebte-vornamen.de/760-alle_jahre.htm
	first_names: ['Ursula', 'Carin', 'Karin', 'Helga', 'Sabine', 'Ingrid', 'Renate', 'Monica', 'Monika', 'Susanne', 'Gisela', 'Petra', 'Birgit', 'Andrea', 'Anna', 'Brigitte', 'Claudia', 'Klaudia', 'Erica', 'Erika', 'Christa', 'Krista', 'Elke', 'Stefanie', 'Stephanie', 'Gertrud', 'Elisabeth', 'Elizabeth', 'Maria', 'Angelika', 'Heike', 'Gabriele', 'Cathrin', 'Catrin', 'Kathrin', 'Katrin', 'Ilse', 'Nicole', 'Anja', 'Barbara', 'Hildegard', 'Martina', 'Ingeborg', 'Gerda', 'Marion', 'Jutta', 'Ute', 'Hannelore', 'Irmgard', 'Irmgart', 'Christine', 'Kristine', 'Inge', 'Christina', 'Kristina', 'Silvia', 'Sylvia', 'Margarete', 'Margarethe', 'Kerstin', 'Marianne', 'Edith', 'Marta', 'Martha', 'Waltraud', 'Catharina', 'Katarina', 'Katharina', 'Anke', 'Christel', 'Bärbel', 'Julia', 'Erna', 'Tanja', 'Silke', 'Elfriede', 'Ruth', 'Lieselotte', 'Angela', 'Regina', 'Frida', 'Frieda', 'Melanie', 'Christiane', 'Bettina', 'Ulrike', 'Britta', 'Käte', 'Käthe', 'Sonja', 'Anneliese', 'Rita', 'Cornelia', 'Eva', 'Sigrid', 'Herta', 'Hertha', 'Johanna', 'Manuela', 'Doris', 'Kirsten', 'Maike', 'Meike', 'Astrid', 'Rosemarie', 'Beate', 'Margot', 'Dagmar', 'Katja', 'Daniela', 'Charlotte', 'Heidi', 'Marlies', 'Marlis', 'Antje', 'Gudrun', 'Nadin', 'Nadine', 'Helene', 'Ivonne', 'Yvonne', 'Anette', 'Annette', 'Maren', 'Marie', 'Peter', 'Michael', 'Thomas', 'Andreas', 'Wolfgang', 'Claus', 'Klaus', 'Jürgen', 'Günter', 'Günther', 'Stefan', 'Stephan', 'Christian', 'Kristian', 'Uwe', 'Werner', 'Horst', 'Frank', 'Dieter', 'Manfred', 'Gerhard', 'Gerhardt', 'Hans', 'Bernd', 'Berndt', 'Bernt', 'Thorsten', 'Torsten', 'Mathias', 'Matthias', 'Helmut', 'Helmuth', 'Walter', 'Walther', 'Heinz', 'Martin', 'Jörg', 'Joerg', 'Rolf', 'Jens', 'Sven', 'Swen', 'Alexander', 'Jan', 'Rainer', 'Reiner', 'Holger', 'Carl', 'Karl', 'Dirk', 'Joachim', 'Ralf', 'Ralph', 'Carsten', 'Karsten', 'Herbert', 'Oliver', 'Wilhelm', 'Curt', 'Kurt', 'Marcus', 'Markus', 'Heinrich', 'Hermann', 'Harald', 'Gerd', 'Gert', 'Paul', 'Andre', 'André', 'Norbert', 'Daniel', 'Olaf', 'Rudolf', 'Rudolph', 'Otto', 'Marco', 'Marko', 'Volker', 'Ulrich', 'Ernst', 'Robert', 'Willi', 'Willy', 'Christoph', 'Johannes', 'Dennis', 'Sebastian', 'Alfred', 'Friedrich', 'Florian', 'Georg', 'Patrick', 'Detlef', 'Detlev', 'Tobias', 'Lars', 'Reinhardt', 'Erich', 'Marc', 'Mark', 'Ingo', 'Nils', 'Niels', 'Bernhard', 'Axel', 'Heiko', 'Philipp', 'Philip', 'Phillip', 'Phillipp', 'Maik', 'Meik', 'Mike', 'Siegfried', 'Kai', 'Björn', 'Fritz', 'Rüdiger', 'Richard', 'Tim', 'Timm', 'Franz', 'René', 'Marcel', 'Lothar', 'Benjamin', 'Hartmut', 'Johann', 'Jörn', 'Erwin', 'Wilfried', 'Mario'],

	// 150 most common last names from https://de.wiktionary.org/wiki/Verzeichnis:Deutsch/Liste_der_h%C3%A4ufigsten_Nachnamen_Deutschlands
	last_names: ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann', 'Schäfer', 'Bauer', 'Koch', 'Richter', 'Klein', 'Wolf', 'Schröder', 'Neumann', 'Schwarz', 'Braun', 'Hofmann', 'Zimmermann', 'Schmitt', 'Hartmann', 'Krüger', 'Schmid', 'Werner', 'Lange', 'Schmitz', 'Meier', 'Krause', 'Maier', 'Lehmann', 'Huber', 'Mayer', 'Herrmann', 'Köhler', 'Walter', 'König', 'Schulze', 'Fuchs', 'Kaiser', 'Lang', 'Weiß', 'Peters', 'Scholz', 'Jung', 'Möller', 'Hahn', 'Keller', 'Vogel', 'Schubert', 'Roth', 'Frank', 'Friedrich', 'Beck', 'Günther', 'Berger', 'Winkler', 'Lorenz', 'Baumann', 'Schuster', 'Kraus', 'Böhm', 'Simon', 'Franke', 'Albrecht', 'Winter', 'Ludwig', 'Martin', 'Krämer', 'Schumacher', 'Vogt', 'Jäger', 'Stein', 'Otto', 'Groß', 'Sommer', 'Haas', 'Graf', 'Heinrich', 'Seidel', 'Schreiber', 'Ziegler', 'Brandt', 'Kuhn', 'Schulte', 'Dietrich', 'Kühn', 'Engel', 'Pohl', 'Horn', 'Sauer', 'Arnold', 'Thomas', 'Bergmann', 'Busch', 'Pfeiffer', 'Voigt', 'Götz', 'Seifert', 'Lindner', 'Ernst', 'Hübner', 'Kramer', 'Franz', 'Beyer', 'Wolff', 'Peter', 'Jansen', 'Kern', 'Barth', 'Wenzel', 'Hermann', 'Ott', 'Paul', 'Riedel', 'Wilhelm', 'Hansen', 'Nagel', 'Grimm', 'Lenz', 'Ritter', 'Bock', 'Langer', 'Kaufmann', 'Mohr', 'Förster', 'Zimmer', 'Haase', 'Lutz', 'Kruse', 'Jahn', 'Schumann', 'Fiedler', 'Thiel', 'Hoppe', 'Kraft', 'Michel', 'Marx', 'Fritz', 'Arndt', 'Eckert', 'Schütz', 'Walther', 'Petersen', 'Berg', 'Schindler', 'Kunz', 'Reuter'],
};

module.exports = provider;