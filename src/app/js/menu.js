export default function menu ( id, menu ) {

    const $menu = document.querySelector( menu );

    document.addEventListener( "click", (e) => {

        if ( e.target.matches(id)) {

            $menu.classList.toggle('active');

        }

    } );

}
