
<?php
// program wyszukiwarki - search.php
// wyświetlenie nagłówka
echo'<h2>Wyniki wyszukiwania</h2>';
// usunięcie niepotrzebnych białych znaków
$_POST['phrase']=trim($_POST['phrase']);
// sprawdzenie, czy użytkownik wpisał dane
if(empty($_POST['phrase']))
// jeśli nie, to wyświetl komunikat i zakończ działanie skryptu
die('Formularz wypełniony niepoprawnie! Nie można wyświetlić wyników wyszukiwania!');
// jeśli jednak dane są wpisane poprawnie
else
{
// połączenie z bazą danych,
$base=mysqli_connect("localhost", "root", "","test") or die("nie udało się połączyć");

$query="Select * From wojewodztwa Where nazwa Like '%{$_POST['phrase']}%' Or opis Like '%{$_POST['phrase']}%'";
// wysłanie zapytania do bazy danych
$result=mysqli_query($base,$query);
// ustalenie ilości wyszukanych obiektów
$obAmount=mysqli_num_rows($result);
// wyswietlenie ilości wyszukanych obiektów 
echo'Znaleziono: '.$obAmount.'<br /><br />';
// wyświetlenie wyników w pętli
for($x=0;$x<$obAmount;$x++)
{
// przekształcenie danych na tablicę
$row=mysqli_fetch_assoc($result);
// wyświetlenie numeru identyfikacyjnego
echo $x+1;
echo '. ';
// wyświetlenie nazwy produktu
echo $row['pr_name'];
echo'<br />';
}
}
// zamknięcie połączenia
mysqli_close($base);
// koniec aplikacji
?>